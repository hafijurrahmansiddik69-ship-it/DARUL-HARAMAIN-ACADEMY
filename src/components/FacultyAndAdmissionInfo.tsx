import React, { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Download, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  DollarSign
} from 'lucide-react';
import { useAdmission } from '../context/AdmissionContext';

export default function FacultyAndAdmissionInfo() {
  const { openAdmission } = useAdmission();
  const [facultyTab, setFacultyTab] = useState<'male' | 'female'>('male');
  const [activeRoutineTab, setActiveRoutineTab] = useState<'hifz' | 'general'>('hifz');

  const maleTeachers = [
    {
      name: 'মাওলানা ক্বারী আব্দুল্লাহ আল-মামুন',
      role: 'প্রধান শিক্ষক ও বিভাগীয় প্রধান (হিফজুল কুরআন)',
      degree: 'আন্তর্জাতিক সনদপ্রাপ্ত হাফেজ ও ক্বারী, বেফাকুল মাদারিসিল আরাবিয়া',
      experience: '১২+ বছরের হিফজ ও তাজবীদ প্রশিক্ষণ অভিজ্ঞতা',
      specialty: 'মাখরাজ, হুসনুত তিলাওয়াত ও দ্রুত হিফজ পদ্ধতি',
    },
    {
      name: 'মুফতি মুহিব্বুল্লাহ সিদ্দিকী',
      role: 'সিনিয়র শিক্ষক (আরবি ভাষা ও কওমি নেসাব)',
      degree: 'দাওরায়ে হাদিস (তাকমিল), আরবি সাহিত্যে উচ্চতর ডিপ্লোমা',
      experience: '১০+ বছরের পাঠদান অভিজ্ঞতা',
      specialty: 'নাহু-সরফ, আরবি কথোপকথন ও আদবিয়্যাত',
    },
    {
      name: 'জনাব জহিরুল ইসলাম',
      role: 'প্রধান সমন্বয়ক (জেনারেল ও ইংরেজি মাধ্যম)',
      degree: 'এম.এসসি (গণিত), বি.এড (ঢাকা বিশ্ববিদ্যালয়)',
      experience: '৮+ বছরের ক্যাডেট ও প্রাইমারি একাডেমি শিক্ষকতা',
      specialty: 'ইংলিশ কারিকুলাম, বিজ্ঞান ও আইসিটি',
    },
    {
      name: 'হাফেজ ক্বারী মাহমুদুল হাসান',
      role: 'সহকারী শিক্ষক (নূরানী ও নাজেরা শাখা)',
      degree: 'নূরানী মুয়াল্লিম প্রশিক্ষণ সনদপ্রাপ্ত, হাফেজে কুরআন',
      experience: '৬+ বছরের শিশুতোষ পাঠদান অভিজ্ঞতা',
      specialty: 'শিশুদের বর্ণমালা ও বিশুদ্ধ কায়দা প্রশিক্ষণ',
    },
  ];

  const femaleTeachers = [
    {
      name: 'উস্তাযা ফাতেমা খাতুন',
      role: 'বিভাগীয় প্রধান (মহিলা ও শিশু নূরানী শাখা)',
      degree: 'দাওরায়ে হাদিস ও আন্তর্জাতিক ক্বারিয়া সনদপ্রাপ্ত',
      experience: '৮+ বছরের শিক্ষকতা অভিজ্ঞতা',
      specialty: 'শিশু শিক্ষা, নূরানী কায়দা ও নাজেরা কুরআন',
    },
    {
      name: 'উস্তাযা মারিয়ম আক্তার',
      role: 'সহকারী শিক্ষিকা (ইংরেজি ও সাধারণ শিক্ষা)',
      degree: 'বি.এ (সম্মান), এম.এ (ইংরেজি সাহিত্য)',
      experience: '৫+ বছরের পাঠদান অভিজ্ঞতা',
      specialty: 'কিডস ইংলিশ ফাউন্ডেশন ও স্পোকেন ইংলিশ',
    },
    {
      name: 'উস্তাযা আয়েশা সিদ্দিকা',
      role: 'শিক্ষিকা (নূরানী ও আদবিয়াত)',
      degree: 'ফাযিল ও নূরানী শিক্ষক প্রশিক্ষণপ্রাপ্ত',
      experience: '৪+ বছরের শিক্ষকতা অভিজ্ঞতা',
      specialty: 'শিশুদের মনস্তত্ত্ব, আমল-আখলাক ও দুআ শিক্ষা',
    },
  ];

  const feeItems = [
    {
      dept: 'শিশু ও নূরানী বিভাগ',
      admission: '৩,০০০ ৳',
      monthly: '১,২০০ ৳',
      boarding: '৩,৫০০ ৳ (ঐচ্ছিক)',
      features: ['নূরানী কায়দা-আমপারা', 'প্লে/নার্সারি পাঠ্যবই', 'শিশুবান্ধব খেলাধুলা ও যত্ন'],
    },
    {
      dept: 'আন্তর্জাতিক হিফজুল কুরআন বিভাগ',
      admission: '৪,০০০ ৳',
      monthly: '১,৫০০ ৳',
      boarding: '৪,২০০ ৳ (আবাসিক খাবার ও হোস্টেল)',
      features: ['দৈনিক ৩ বেলা দাওর ও ছবক', 'তাজবীদ নিরীক্ষণ', 'সার্বক্ষণিক শিক্ষক তত্ত্বাবধান'],
      isPopular: true,
    },
    {
      dept: 'প্রাথমিক ও মাধ্যমিক সমন্বিত স্তর (১ম - ১০ম)',
      admission: '৪,০০০ ৳',
      monthly: '১,৫০০ - ২,২০০ ৳',
      boarding: '৪,৫০০ ৳ (আবাসিক)',
      features: ['কওমি + আলিয়া + জেনারেল বোর্ড বই', 'বিজ্ঞান ও ডিজিটাল ল্যাব', 'ক্যাডেট প্রস্তুতি'],
    },
    {
      dept: 'ভাষা শিক্ষা কোর্স (ইংরেজি ও আরবি)',
      admission: '১,৫০০ ৳',
      monthly: '৮০০ ৳',
      boarding: 'প্রযোজ্য নয়',
      features: ['স্পোকেন ইংলিশ ও অ্যারাবিক', 'স্মার্ট অডিও-ভিডিও ল্যাব', 'সার্টিফিকেট ও মূল্যায়ন'],
    },
  ];

  return (
    <div className="bg-slate-50 border-t border-slate-200/80">
      
      {/* =========================================================================
          FACULTY SECTION (শিক্ষকমণ্ডলী: পুরুষ ও মহিলা শিক্ষক প্যানেল)
      ========================================================================== */}
      <section id="faculty" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs md:text-sm font-semibold mb-3">
            <Users className="w-4 h-4 text-emerald-700" />
            <span>অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষক প্যানেল</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-950 tracking-tight">
            আমাদের শিক্ষকমণ্ডলী (Faculty)
          </h2>
          <p className="text-slate-600 text-base mt-2">
            শীর্ষস্থানীয় ইসলামি স্কলার, অভিজ্ঞ হাফেজ ও প্রমিত জেনারেল শিক্ষাবিদগণের সমন্বিত টিম
          </p>

          {/* Interactive Male/Female Tab Switcher */}
          <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-sm border border-slate-200 mt-6">
            <button
              onClick={() => setFacultyTab('male')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                facultyTab === 'male'
                  ? 'bg-emerald-900 text-white shadow'
                  : 'text-slate-600 hover:text-emerald-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>পুরুষ শিক্ষক প্যানেল (Male Faculty)</span>
            </button>
            <button
              onClick={() => setFacultyTab('female')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                facultyTab === 'female'
                  ? 'bg-emerald-900 text-white shadow'
                  : 'text-slate-600 hover:text-emerald-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>মহিলা শিক্ষক প্যানেল (Female Faculty)</span>
            </button>
          </div>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(facultyTab === 'male' ? maleTeachers : femaleTeachers).map((teacher, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xl flex-shrink-0 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                    {teacher.name.charAt(teacher.name.indexOf(' ') + 1) || 'উ'}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {facultyTab === 'male' ? 'পুরুষ শিক্ষক' : 'মহিলা শিক্ষিকা'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-emerald-950 mb-1 group-hover:text-emerald-800 transition-colors">
                  {teacher.name}
                </h3>
                <p className="text-xs font-semibold text-[#cfa852] uppercase tracking-wider mb-3">
                  {teacher.role}
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-600 pt-3 border-t border-slate-100">
                  <p>
                    <strong className="text-slate-800">শিক্ষাগত যোগ্যতা:</strong> {teacher.degree}
                  </p>
                  <p>
                    <strong className="text-slate-800">অভিজ্ঞতা:</strong> {teacher.experience}
                  </p>
                  <p>
                    <strong className="text-slate-800">বিশেষত্ব:</strong> {teacher.specialty}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-800 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>সার্বক্ষণিক মেন্টরিং ও কাউন্সেলিং</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          FEE STRUCTURE SECTION (ফি স্ট্রাকচার)
      ========================================================================== */}
      <section id="fee-structure" className="py-20 px-6 bg-white border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs md:text-sm font-semibold mb-3">
              <DollarSign className="w-4 h-4 text-amber-600" />
              <span>স্বচ্ছ ও যৌক্তিক ফি তালিকা</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-950 tracking-tight">
              ফি স্ট্রাকচার (Fee Structure)
            </h2>
            <p className="text-slate-600 text-base mt-2">
              সকল বিভাগের ভর্তি ফি, মাসিক বেতন ও হোস্টেল খরচের সুস্পষ্ট বিবরণ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {feeItems.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 flex flex-col justify-between transition-all ${
                  item.isPopular
                    ? 'bg-gradient-to-b from-emerald-950 to-emerald-900 text-white shadow-xl border-2 border-[#cfa852] transform md:-translate-y-2'
                    : 'bg-slate-50 border border-slate-200 text-slate-800 hover:border-emerald-300'
                }`}
              >
                <div>
                  {item.isPopular && (
                    <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold bg-[#cfa852] text-slate-950 uppercase tracking-wider mb-3">
                      জনপ্রিয় চয়েস
                    </span>
                  )}
                  <h4 className={`text-base font-bold mb-4 ${item.isPopular ? 'text-white' : 'text-emerald-950'}`}>
                    {item.dept}
                  </h4>

                  <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                    <div>
                      <span className={`text-xs block ${item.isPopular ? 'text-emerald-200' : 'text-slate-500'}`}>ভর্তি ফি</span>
                      <span className={`text-xl font-extrabold ${item.isPopular ? 'text-amber-300' : 'text-emerald-900'}`}>{item.admission}</span>
                    </div>
                    <div>
                      <span className={`text-xs block ${item.isPopular ? 'text-emerald-200' : 'text-slate-500'}`}>মাসিক বেতন</span>
                      <span className={`text-lg font-bold ${item.isPopular ? 'text-white' : 'text-slate-800'}`}>{item.monthly}</span>
                    </div>
                    <div>
                      <span className={`text-xs block ${item.isPopular ? 'text-emerald-200' : 'text-slate-500'}`}>হোস্টেল ও খাবার</span>
                      <span className={`text-xs font-semibold ${item.isPopular ? 'text-emerald-200' : 'text-slate-700'}`}>{item.boarding}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs mb-6">
                    {item.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${item.isPopular ? 'text-amber-400' : 'text-emerald-600'}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => openAdmission(item.dept)}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1.5 ${
                    item.isPopular
                      ? 'bg-amber-500 hover:bg-amber-400 text-emerald-950 shadow'
                      : 'bg-emerald-800 hover:bg-emerald-900 text-white'
                  }`}
                >
                  <span>আবেদন করুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 rounded-2xl p-4 sm:p-6 border border-amber-200/80 text-center max-w-3xl mx-auto text-xs sm:text-sm text-amber-950">
            <p className="font-semibold">
              ★ এতিম, অসচ্ছল ও প্রতিভাবান শিক্ষার্থীদের জন্য একাডেমির পক্ষ থেকে বিশেষ স্কলারশিপ ও ছাড়ের ব্যবস্থা রয়েছে। বিস্তারিত জানতে সরাসরি যোগাযোগ করুন: <strong className="font-mono text-emerald-900">018 04 500 509</strong>
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ADMISSION RULES & GUIDELINES (নিয়মাবলী ও গাইডলাইন)
      ========================================================================== */}
      <section id="admission-rules" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs md:text-sm font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>ভর্তি প্রক্রিয়া ও নির্দেশনা</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-950 tracking-tight">
            ভর্তির নিয়মাবলী ও গাইডলাইন
          </h2>
          <p className="text-slate-600 text-base mt-2">
            দারুল হারামাইন একাডেমিতে সহজ ৪টি ধাপে ভর্তির সম্পূর্ণ প্রক্রিয়া
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 font-extrabold flex items-center justify-center mb-4">
                ০১
              </div>
              <h4 className="font-bold text-slate-900 mb-2">অনলাইন/অফলাইন ফরম পূরণ</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                ওয়েবসাইট থেকে অনলাইন আবেদন ফরম পূরণ করুন অথবা সরাসরি একাডেমি অফিস থেকে ফরম সংগ্রহ করুন।
              </p>
            </div>
            <span className="text-[11px] text-emerald-700 font-semibold mt-4 block">ধাপ ১ সম্পন্ন করুন →</span>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#cfa852]/20 text-[#cfa852] font-extrabold flex items-center justify-center mb-4">
                ০২
              </div>
              <h4 className="font-bold text-slate-900 mb-2">কাগজপত্র জমা</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                শিক্ষার্থীর ডিজিটাল জন্মনিবন্ধন সনদ, পাসপোর্ট সাইজ রঙিন ছবি (২ কপি) ও অভিভাবকের এনআইডি কপি জমা দিতে হবে।
              </p>
            </div>
            <span className="text-[11px] text-[#cfa852] font-semibold mt-4 block">প্রয়োজনীয় ডকুমেন্টস →</span>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 font-extrabold flex items-center justify-center mb-4">
                ০৩
              </div>
              <h4 className="font-bold text-slate-900 mb-2">মৌখিক সাক্ষাৎকার ও অডিশন</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                হিফজ ও নূরানী বিভাগের জন্য মাখরাজ নিরীক্ষণ এবং সাধারণ ক্লাসের জন্য মেধা যাচাই সাক্ষাৎকার গ্রহণ করা হয়।
              </p>
            </div>
            <span className="text-[11px] text-emerald-700 font-semibold mt-4 block">মেধা মূল্যায়ন →</span>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white font-extrabold flex items-center justify-center mb-4">
                ০৪
              </div>
              <h4 className="font-bold text-slate-900 mb-2">ভর্তি নিশ্চিতকরণ ও ক্লাস</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                নির্ধারিত ভর্তি ফি পরিশোধের মাধ্যমে আইডি কার্ড ও সিলেবাস সংগ্রহ এবং নির্ধারিত তারিখে ক্লাসে অংশগ্রহণ।
              </p>
            </div>
            <span className="text-[11px] text-emerald-800 font-semibold mt-4 block">অভিনন্দন ও ক্লাস শুরু ✓</span>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => openAdmission()}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 text-white font-bold text-sm shadow-md hover:shadow-xl transition-all"
          >
            <GraduationCap className="w-5 h-5" />
            <span>এখনই অনলাইন আবেদন করুন</span>
          </button>
        </div>
      </section>

      {/* =========================================================================
          CLASS ROUTINE & SYLLABUS SECTION (ক্লাস রুটিন ও সিলেবাস)
      ========================================================================== */}
      <section id="routine-syllabus" className="py-20 px-6 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs md:text-sm font-semibold mb-3">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>দৈনিক সময়সূচি ও পাঠ্যক্রম</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-950 tracking-tight">
              ক্লাস রুটিন ও সিলেবাস
            </h2>
            <p className="text-slate-600 text-base mt-2">
              হিফজ ও সাধারণ ক্লাসের ভারসাম্যপূর্ণ শৃঙ্খলা ও দৈনন্দিন রুটিন
            </p>

            <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl mt-6">
              <button
                onClick={() => setActiveRoutineTab('hifz')}
                className={`px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeRoutineTab === 'hifz'
                    ? 'bg-emerald-900 text-white shadow'
                    : 'text-slate-600 hover:text-emerald-950'
                }`}
              >
                হিফজ ও আবাসিক রুটিন
              </button>
              <button
                onClick={() => setActiveRoutineTab('general')}
                className={`px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeRoutineTab === 'general'
                    ? 'bg-emerald-900 text-white shadow'
                    : 'text-slate-600 hover:text-emerald-950'
                }`}
              >
                নূরানী ও স্কুল ক্লাস রুটিন
              </button>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            {activeRoutineTab === 'hifz' ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 text-xs sm:text-sm">
                  <span className="font-bold text-emerald-900">০৪:১৫ - ০৫:০০ ভোর</span>
                  <span className="font-medium text-slate-700">ঘুম থেকে জাগরণ, তাহাজ্জুদ ও জামাআতে ফজরের নামায</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold">আমল</span>
                </div>
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 text-xs sm:text-sm">
                  <span className="font-bold text-emerald-900">০৫:১৫ - ০৭:৩০ সকাল</span>
                  <span className="font-medium text-slate-700">হিফজ নতুন সবক প্রদান ও তাজবীদ সংশোধন পর্ব</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold">হিফজ সবক</span>
                </div>
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 text-xs sm:text-sm">
                  <span className="font-bold text-emerald-900">০৭:৩০ - ০৮:৩০ সকাল</span>
                  <span className="font-medium text-slate-700">পুষ্টিকর নাস্তা ও বিশ্রাম পর্ব</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">বিরতি</span>
                </div>
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 text-xs sm:text-sm">
                  <span className="font-bold text-emerald-900">০৮:৪৫ - ০১:০০ দুপুর</span>
                  <span className="font-medium text-slate-700">জেনারেল শিক্ষা (ইংরেজি, গণিত, বিজ্ঞান ও বাংলা)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sky-50 text-sky-800 font-semibold">জেনারেল</span>
                </div>
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 text-xs sm:text-sm">
                  <span className="font-bold text-emerald-900">০১:০০ - ০৩:৩০ দুপুর</span>
                  <span className="font-medium text-slate-700">যোহরের নামায, দুপুরের খাবার ও কায়লুলাহ (দুপুরের ঘুম)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold">বিশ্রাম</span>
                </div>
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 text-xs sm:text-sm">
                  <span className="font-bold text-emerald-900">০৪:১৫ - মাগরিব</span>
                  <span className="font-medium text-slate-700">আসর নামায, খোলা মাঠে খেলাধুলা ও তাজা বাতাস</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold">খেলাধুলা</span>
                </div>
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 text-xs sm:text-sm">
                  <span className="font-bold text-emerald-900">মাগরিব - এশা</span>
                  <span className="font-medium text-slate-700">হিফজ নিয়মিত দাওর ও সবকপাড়া পুনরাবৃত্তি</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold">দাওর</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 text-xs sm:text-sm">
                  <span className="font-bold text-emerald-900">০৮:০০ - ০৮:৩০ সকাল</span>
                  <span className="font-medium text-slate-700">ক্যাম্পাসে উপস্থিতি, অ্যাসেম্বলি ও সকালের দুআ</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold">শুরু</span>
                </div>
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 text-xs sm:text-sm">
                  <span className="font-bold text-emerald-900">০৮:৩০ - ১০:৩০ সকাল</span>
                  <span className="font-medium text-slate-700">নূরানী কায়দা, নাজেরা ও জরুরি মাসআলা পাঠ</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold">দ্বীনি</span>
                </div>
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 text-xs sm:text-sm">
                  <span className="font-bold text-emerald-900">১০:৩০ - ১১:০০ সকাল</span>
                  <span className="font-medium text-slate-700">টিফিন বিরতি ও খেলাধুলা</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">টিফিন</span>
                </div>
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 text-xs sm:text-sm">
                  <span className="font-bold text-emerald-900">১১:০০ - ০১:০০ দুপুর</span>
                  <span className="font-medium text-slate-700">ইংরেজি কথোপকথন, গণিত ও আইসিটি ক্লাস</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sky-50 text-sky-800 font-semibold">জেনারেল</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
