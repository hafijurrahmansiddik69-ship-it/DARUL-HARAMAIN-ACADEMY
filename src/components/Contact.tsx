import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, Clock, Globe, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50 relative overflow-hidden">
      {/* Subtle background flourishes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs md:text-sm font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>যোগাযোগ ও ক্যাম্পাস তথ্য</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-950 tracking-tight mb-4">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            যেকোনো তথ্য, ভর্তি সংক্রান্ত জিজ্ঞাসা বা পরামর্শের জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন
          </p>
        </div>

        {/* Clean 3-Card Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Address */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300 border border-emerald-100">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-emerald-950 mb-2">ক্যাম্পাস ঠিকানা</h3>
              <p className="text-xs font-semibold text-[#cfa852] uppercase tracking-wider mb-3">
                প্রধান কার্যালয় ও একাডেমি
              </p>
              <p className="text-slate-700 text-base font-medium leading-relaxed">
                গুজিয়া, মোকামতলা ও শিবগঞ্জ, বগুড়া, Bangladesh
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>সকাল ৮:০০ - বিকাল ৫:০০ (প্রতিদিন)</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="https://maps.google.com/?q=Mokamtola+Shibganj+Bogura"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 group-hover:translate-x-1 transition-all"
              >
                <span>গুগল ম্যাপে লোকেশন দেখুন</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 hover:border-amber-200 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 border border-amber-100">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-emerald-950 mb-2">ইমেইল যোগাযোগ</h3>
              <p className="text-xs font-semibold text-[#cfa852] uppercase tracking-wider mb-3">
                অফিসিয়াল পত্রালাপ ও অনুসন্ধান
              </p>
              <p className="text-slate-700 text-base font-medium break-all">
                darulharamainacademy@gmail.com
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
                <Globe className="w-4 h-4 text-amber-600" />
                <span>২৪ ঘণ্টার মধ্যে উত্তর প্রদান</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="mailto:darulharamainacademy@gmail.com"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-900 group-hover:translate-x-1 transition-all"
              >
                <span>সরাসরি ইমেইল পাঠান</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: WhatsApp Hotline */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 hover:border-emerald-300 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 border border-emerald-100">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-emerald-950 mb-2">হোয়াটসঅ্যাপ হটলাইন</h3>
              <p className="text-xs font-semibold text-[#cfa852] uppercase tracking-wider mb-3">
                ২৪/৭ ভর্তি ও পরামর্শ সেবা
              </p>
              <p className="text-emerald-900 text-2xl font-extrabold tracking-wide font-mono">
                018 80 800 901
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>সরাসরি কল অথবা হোয়াটসঅ্যাপ চ্যাট</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex gap-2">
              <a
                href="https://wa.me/8801880800901"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-center text-xs font-bold transition shadow-sm"
              >
                হোয়াটসঅ্যাপ
              </a>
              <a
                href="tel:01880800901"
                className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-center text-xs font-bold transition"
              >
                সরাসরি কল
              </a>
            </div>
          </div>

        </div>

        {/* Message Form & Academy Profile Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#cfa852]/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <span className="font-arabic text-2xl text-[#cfa852] font-bold block mb-2">
                أكاديمية دار الحرمين
              </span>
              <h3 className="text-2xl font-bold tracking-tight mb-2">
                দারুল হারামাইন একাডেমি
              </h3>
              <p className="text-xs text-emerald-200 font-medium mb-6">
                প্রতিষ্ঠাতা ও চেয়ারম্যান: হাফিজুর রহমান সিদ্দিক
              </p>

              <p className="text-emerald-100/90 text-sm leading-relaxed mb-6 font-light">
                আমরা বিশ্বাস করি প্রতিটি শিশুই এক অমূল্য আমানত। পবিত্র কুরআনের নূর এবং নৈতিক শিক্ষার আলোয় তাদের ভবিষ্যতের পথ সুগম করাই আমাদের প্রধান ব্রত।
              </p>

              <div className="space-y-3 text-xs text-emerald-200/90">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#cfa852]"></div>
                  <span>আন্তর্জাতিক মানের হিফজুল কুরআন প্রশিক্ষণ</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#cfa852]"></div>
                  <span>প্লে থেকে ১০ম শ্রেণি সমন্বিত কারিকুলাম</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#cfa852]"></div>
                  <span>অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষক মণ্ডলী</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-amber-200/80">
              <span>শাখা: বগুড়া, বাংলাদেশ</span>
              <span>ভর্তি হটলাইন: 018 80 800 901</span>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-emerald-950 mb-1">
              একটি বার্তা পাঠান
            </h3>
            <p className="text-slate-500 text-xs mb-6">
              আপনার মতামত, প্রশ্ন বা ভর্তি বিষয়ক জিজ্ঞাসা লিখে পাঠান:
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-100 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900 font-arabic">جَزَاكَ ٱللَّٰهُ خَيْرًا</h4>
                <p className="text-sm text-slate-700">
                  আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। আমরা দ্রুত আপনার দেওয়া মোবাইল বা ইমেইলে যোগাযোগ করব।
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-semibold hover:bg-emerald-800 transition"
                >
                  আরেকটি বার্তা পাঠান
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">আপনার নাম *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="উদা: মাহমুদ হাসান"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">মোবাইল নম্বর *</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">ইমেইল (ঐচ্ছিক)</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">বিষয় *</label>
                    <input
                      required
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="ভর্তি তথ্য / ফি সংক্রান্ত / অন্যান্য"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">বিস্তারিত বার্তা *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="আপনার বার্তা বা প্রশ্ন লিখুন..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      পাঠানো হচ্ছে...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      বার্তা পাঠিয়ে দিন
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
