import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, User, Phone, BookOpen, MapPin, Send, MessageCircle, Printer, Sparkles } from 'lucide-react';
import { useAdmission } from '../context/AdmissionContext';

const departmentsList = [
  'শিশু ও নূরানী বিভাগ (কওমি কায়দা-আমপারা + নূরানী + প্লে/নার্সারি)',
  'প্রাথমিক স্তর (ক্লাস ১ - ৩) [নাজেরা কুরআন + আলিয়া ইবতেদায়ি + প্রাইমারি]',
  'জুনিয়র প্রাথমিক (ক্লাস ৪ - ৫) [আরবি বুনিয়াদ + ক্যাডেট ও বৃত্তি প্রস্তুতি]',
  'জুনিয়র মাধ্যমিক (ক্লাস ৬ - ৮) [কওমি নাহু-সরফ + দাখিল ফাউন্ডেশন + সায়েন্স/আইসিটি]',
  'মাধ্যমিক স্তর (ক্লাস ৯ - ১০) [দাখিল/এসএসসি সমন্বিত বোর্ড সিলেবাস]',
  'আন্তর্জাতিক হিফজ ও শোনানী [তাজবিদ + নিয়মিত দাওর + হিফজ সনদ]',
  'ইংরেজি ভাষা শিক্ষা (English Program)',
  'আরবি ভাষা শিক্ষা (Arabic Program)',
  "Kids' English Foundation / Spoken English",
  'আরবি কথোপকথন ও ব্যাকরণ (Spoken Arabic & Grammar)',
];

export default function AdmissionModal() {
  const { isOpen, closeAdmission, selectedDepartment } = useAdmission();

  const [formData, setFormData] = useState({
    studentName: '',
    guardianName: '',
    phone: '',
    whatsapp: '',
    department: '',
    age: '',
    address: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (selectedDepartment) {
      setFormData(prev => ({ ...prev, department: selectedDepartment }));
    }
  }, [selectedDepartment]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeAdmission();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeAdmission]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.studentName.trim()) newErrors.studentName = 'শিক্ষার্থীর নাম আবশ্যক';
    if (!formData.guardianName.trim()) newErrors.guardianName = 'অভিভাবকের নাম আবশ্যক';
    if (!formData.phone.trim()) {
      newErrors.phone = 'মোবাইল নম্বর আবশ্যক';
    } else if (formData.phone.replace(/[\s-]/g, '').length < 11) {
      newErrors.phone = 'সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন';
    }
    if (!formData.department) newErrors.department = 'কাঙ্ক্ষিত বিভাগ / শ্রেণী নির্বাচন করুন';
    if (!formData.address.trim()) newErrors.address = 'ঠিকানা ও জেলা উল্লেখ করুন';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `DHA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setApplicationId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      guardianName: '',
      phone: '',
      whatsapp: '',
      department: '',
      age: '',
      address: '',
      notes: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setApplicationId('');
    closeAdmission();
  };

  const whatsappMessage = encodeURIComponent(
    `আসসালামু আলাইকুম। আমি দারুল হারামাইন একাডেমিতে অনলাইন ভর্তি আবেদন করেছি।\n\nআবেদন আইডি: ${applicationId}\nশিক্ষার্থীর নাম: ${formData.studentName}\nঅভিভাবক: ${formData.guardianName}\nমোবাইল: ${formData.phone}\nবিভাগ: ${formData.department}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 px-6 py-5 text-white flex items-center justify-between relative border-b-2 border-[#cfa852]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <BookOpen className="w-5 h-5 text-[#cfa852]" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">অনলাইন ভর্তি আবেদন</h3>
              <p className="text-xs text-emerald-200">দারুল হারামাইন একাডেমি • শিক্ষাবর্ষ {new Date().getFullYear()}</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
            <div className="p-3.5 bg-emerald-50/70 border border-emerald-100 rounded-xl text-emerald-900 text-sm flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#cfa852] flex-shrink-0" />
              <span>
                পবিত্র কুরআন হিফজ ও দ্বীনি-আধুনিক শিক্ষার সমন্বয়ে শিক্ষার্থী ভর্তির ফরমটি সঠিকভাবে পূরণ করুন।
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Student Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  শিক্ষার্থীর পূর্ণ নাম <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="উদা: আব্দুল্লাহ আল মারুফ"
                    className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition ${
                      errors.studentName ? 'border-rose-300 ring-1 ring-rose-200' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.studentName && <p className="text-xs text-rose-500 mt-1">{errors.studentName}</p>}
              </div>

              {/* Age / Date of Birth */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  বয়স / জন্ম সাল
                </label>
                <input
                  type="text"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder="উদা: ৮ বছর / ২০১০"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
                />
              </div>

              {/* Guardian Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  পিতা / অভিভাবকের নাম <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    value={formData.guardianName}
                    onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                    placeholder="অভিভাবকের পূর্ণ নাম"
                    className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition ${
                      errors.guardianName ? 'border-rose-300 ring-1 ring-rose-200' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.guardianName && <p className="text-xs text-rose-500 mt-1">{errors.guardianName}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  মোবাইল নম্বর <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="01XXXXXXXXX"
                    className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition ${
                      errors.phone ? 'border-rose-300 ring-1 ring-rose-200' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Department */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  কাঙ্ক্ষিত বিভাগ / শ্রেণি <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className={`w-full px-3 py-2.5 bg-slate-50 border rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition ${
                    errors.department ? 'border-rose-300 ring-1 ring-rose-200' : 'border-slate-200'
                  }`}
                >
                  <option value="">-- বিভাগ অথবা শ্রেণি নির্বাচন করুন --</option>
                  {departmentsList.map((dept, index) => (
                    <option key={index} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                {errors.department && <p className="text-xs text-rose-500 mt-1">{errors.department}</p>}
              </div>

              {/* Address / District */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  স্থায়ী / বর্তমান ঠিকানা ও জেলা <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="গ্রাম/রোড, থানা, জেলা (উদা: শিবগঞ্জ, বগুড়া)"
                    className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition ${
                      errors.address ? 'border-rose-300 ring-1 ring-rose-200' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.address && <p className="text-xs text-rose-500 mt-1">{errors.address}</p>}
              </div>

              {/* Additional Notes */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  পূর্ববর্তী পড়াশোনা বা কোনো বিশেষ তথ্য (যদি থাকে)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="পূর্বে কোন মাদ্রাসায় বা স্কুলে পড়েছেন ইত্যাদি..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800 transition"
              >
                বাতিল করুন
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    জমা নেওয়া হচ্ছে...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    আবেদন জমা দিন
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation State with Arabic typography */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            {/* Arabic blessing in Amiri font */}
            <div className="space-y-2">
              <h2 className="font-arabic text-3xl md:text-4xl text-emerald-900 tracking-wide font-bold">
                جَزَاكَ ٱللَّٰهُ خَيْرًا
              </h2>
              <p className="text-sm text-[#cfa852] font-semibold tracking-wider uppercase">
                Jazakallahu Khairan • ধন্যবাদ
              </p>
            </div>

            <p className="text-slate-700 text-base max-w-md mx-auto leading-relaxed">
              দারুল হারামাইন একাডেমিতে আপনার ভর্তি আবেদন সফলভাবে জমা নেওয়া হয়েছে। আমাদের ভর্তি কমিটি দ্রুত আপনার সাথে যোগাযোগ করবে, ইনশাআল্লাহ।
            </p>

            {/* Application Summary Card */}
            <div className="bg-slate-50 border border-emerald-100 rounded-2xl p-5 text-left max-w-md mx-auto space-y-2 text-sm shadow-sm">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">আবেদন ট্র্যাকিং নং:</span>
                <span className="font-mono font-bold text-emerald-900 bg-emerald-100/70 px-2.5 py-0.5 rounded text-xs">
                  {applicationId}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">শিক্ষার্থীর নাম:</span>
                <span className="font-semibold text-slate-800">{formData.studentName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">কাঙ্ক্ষিত বিভাগ:</span>
                <span className="font-semibold text-slate-800">{formData.department}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">যোগাযোগ নম্বর:</span>
                <span className="font-semibold text-slate-800">{formData.phone}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={`https://wa.me/8801880800901?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition"
              >
                <MessageCircle className="w-4 h-4" />
                হোয়াটসঅ্যাপে তথ্য পাঠান
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition"
              >
                <Printer className="w-4 h-4" />
                রশিদ প্রিন্ট / সেভ করুন
              </button>
            </div>

            <div>
              <button
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-slate-600 underline transition"
              >
                উইন্ডো বন্ধ করুন
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
