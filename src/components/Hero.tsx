import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  ChevronRight, 
  Award, 
  ShieldCheck, 
  Languages,
  X,
  Globe,
  Layers,
  ArrowRight,
  CheckCircle2,
  Star
} from 'lucide-react';
import { useAdmission } from '../context/AdmissionContext';

interface FeatureCardItem {
  id: string;
  badge: string;
  badgeClass: string;
  borderGlow: string;
  iconBg: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  tags: string[];
  modalDetails: {
    badge: string;
    title: string;
    description: string;
    highlights: string[];
    targetId: string;
    admissionParam: string;
  };
}

const Hero: React.FC = () => {
  const { openAdmission } = useAdmission();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedFeatureCard, setSelectedFeatureCard] = useState<FeatureCardItem | null>(null);

  const handleScrollToPrograms = () => {
    const el = document.getElementById('academic-programs') || document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToLanguage = (targetId: string) => {
    setShowLanguageModal(false);
    const el = document.getElementById(targetId) || document.getElementById('language-learning');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCardTargetNavigate = (targetId: string) => {
    setSelectedFeatureCard(null);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 3 International-Standard Modern Feature Cards (as requested by user)
  const featureCards: FeatureCardItem[] = [
    {
      id: "hifz-tajweed",
      badge: "আন্তর্জাতিক মান",
      badgeClass: "bg-amber-500/20 text-amber-300 border-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]",
      borderGlow: "border-amber-500/40 hover:border-amber-400 shadow-[0_0_30px_rgba(207,168,82,0.18)] hover:shadow-[0_0_40px_rgba(207,168,82,0.38)]",
      iconBg: "bg-gradient-to-br from-amber-400 via-[#cfa852] to-amber-600 text-slate-950",
      icon: Award,
      title: "নূরানী হিফজ ও বিশ্বমানের তাজবীদ",
      subtitle: "আন্তর্জাতিক মানের তাজবীদ অনুশীলনে প্রতিটি হরফের নিখুঁত ও বিশুদ্ধ উচ্চারণ।",
      tags: ["সহীহ মাখরাজ", "হুসনুত তিলাওয়াত", "দৈনিক শোনানী"],
      modalDetails: {
        badge: "আন্তর্জাতিক হিফজুল কুরআন মান",
        title: "নূরানী হিফজ ও বিশ্বমানের তাজবীদ বিভাগ",
        description: "আন্তর্জাতিক খ্যাতিসম্পন্ন ক্বারী ও অভিজ্ঞ হাফেজগণের প্রত্যক্ষ তত্ত্বাবধানে শিক্ষার্থীদের সহীহ মাখরাজ, আন্তর্জাতিক তাজবীদের কায়দা এবং সুললিত সুরে কুরআন হিফজ সম্পন্ন করানো হয়।",
        highlights: [
          "আন্তর্জাতিক তাজবীদ কারিকুলাম ও প্রতিটি হরফের নিখুঁত উচ্চারণ",
          "দৈনিক শোনানী, নিয়মিত দাওর ও সার্বক্ষণিক মুরাবাখা মনিটরিং",
          "আন্তর্জাতিক হিফজ সমাপন সনদ ও জাতীয়-আন্তর্জাতিক প্রতিযোগিতায় প্রস্তুতি",
          "হিফজের পাশাপাশি নিয়মিত জেনারেল শিক্ষার সুষম ভারসাম্য রক্ষা"
        ],
        targetId: "academic-programs",
        admissionParam: "হিফজুল কুরআন ও তাজবীদ বিভাগ"
      }
    },
    {
      id: "3-in-1-curriculum",
      badge: "3-in-1 কারিকুলাম",
      badgeClass: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]",
      borderGlow: "border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.18)] hover:shadow-[0_0_40px_rgba(6,182,212,0.38)]",
      iconBg: "bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 text-white",
      icon: Layers,
      title: "ত্রিমুখী সমন্বিত শিক্ষাক্রম",
      subtitle: "সহীহ হিফজুল কুরআন, আধুনিক জেনারেল শিক্ষা এবং আন্তর্জাতিক ভাষা শিক্ষার (আরবি ও ইংরেজি) অনন্য সমন্বয়।",
      tags: ["কওমি কায়দা", "আলিয়া সিলেবাস", "ক্যাডেট ও স্কুল"],
      modalDetails: {
        badge: "3-in-1 ত্রিমুখী সমন্বিত কারিকুলাম",
        title: "কওমি + আলিয়া + ক্যাডেট/স্কুল সমন্বিত শিক্ষা",
        description: "আমাদের শিক্ষার্থীরা একই সাথে কওমি ধারার দ্বীনি ভিত্তি, আলিয়া মাদ্রাসা শিক্ষা বোর্ডের স্বীকৃত সিলেবাস এবং ক্যাডেট স্কুলের আধুনিক বিজ্ঞান, আইসিটি ও ইংরেজি শিক্ষা লাভ করে।",
        highlights: [
          "কওমি ধারার বিশুদ্ধ দ্বীনিয়াত, নাহব-সরফ ও আমল-আখলাক",
          "আলিয়া মাদ্রাসা ও ইবতেদায়ি-দাখিল বোর্ড কারিকুলাম অনুসরণ",
          "ক্যাডেট স্কুল স্ট্যান্ডার্ড গণিত, বিজ্ঞান ও তথ্যপ্রযুক্তি ল্যাব",
          "একই ক্যাম্পাসে বহুমুখী মেধা বিকাশের আধুনিক একাডেমি পরিবেশ"
        ],
        targetId: "academic-programs",
        admissionParam: "৩-ইন-১ সমন্বিত কারিকুলাম"
      }
    },
    {
      id: "language-tarbiyah",
      badge: "দ্বিভাষিক ও তারবিয়াত",
      badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40 shadow-[0_0_12px_rgba(16,185,129,0.2)]",
      borderGlow: "border-emerald-500/40 hover:border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.18)] hover:shadow-[0_0_40px_rgba(16,185,129,0.38)]",
      iconBg: "bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-700 text-white",
      icon: Languages,
      title: "আন্তর্জাতিক ভাষা ও আদর্শ তারবিয়াত",
      subtitle: "আরবি ও Spoken English-এ বাস্তব ফ্লুয়েন্সি, সুন্নাতি অনুশাসন এবং নিরাপদ আধুনিক একাডেমি পরিবেশ।",
      tags: ["স্পোকেন ইংলিশ", "মুহাদাসা আরাবিয়া", "আখলাক ও তারবিয়াহ"],
      modalDetails: {
        badge: "আন্তর্জাতিক দ্বিভাষিক ও চরিত্র গঠন",
        title: "আন্তর্জাতিক ভাষা শিক্ষা ও আদর্শ তারবিয়াত বিভাগ",
        description: "বিশ্বমানের নাগরিক হিসেবে গড়ে তুলতে ছোটবেলা থেকেই আরবি ও ইংরেজি ভাষায় সাবলীল কথোপকথন প্রশিক্ষণ এবং সার্বক্ষণিক সুন্নাতি আদব ও নীতিশিক্ষা প্রদান করা হয়।",
        highlights: [
          "ব্রিটিশ ও আমেরিকান ফোনিক্স ভিত্তিক Kids' English Foundation",
          "কুরআন অনুধাবন ও প্রাতিষ্ঠানিক আরবি কথোপকথন (المحادثة العربية)",
          "দৈনন্দিন জীবনের সুন্নাতি আমল ও চারিত্রিক তারবিয়াহ পর্যবেক্ষণ",
          "সম্পূর্ণ রাজনীতিমুক্ত, নিরাপদ ও সুশৃঙ্খল পরিবেশ"
        ],
        targetId: "language-learning",
        admissionParam: "ভাষা শিক্ষা ও তারবিয়াত প্রোগ্রাম"
      }
    }
  ];

  return (
    <section className="relative text-white overflow-hidden bg-emerald-950">
      {/* Background Image with Rich Dark Emerald Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dlklqihg6/image/upload/v1783448987/dbdubbzo2k1wv3dwd5ow.jpg"
          alt="Darul Haramain Academy Campus & Islamic Atmosphere"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse transition duration-1000 opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/95 via-emerald-950/80 to-emerald-950"></div>
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#cfa852_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-12 flex flex-col items-center text-center">
        
        {/* Academy Logo */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 via-[#cfa852] to-emerald-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-white p-1.5 shadow-2xl border-2 border-[#cfa852]">
            <img
              src="/src/assets/images/academy_logo_1791617941870.jpg"
              alt="Darul Haramain Academy Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>

        {/* Arabic Calligraphic Header (Amiri Font) */}
        <div className="mb-2">
          <span className="font-arabic text-2xl md:text-4xl text-[#cfa852] font-bold tracking-wider drop-shadow-md">
            أكاديمية دار الحرمين
          </span>
        </div>

        {/* Academy English & Bengali Titles */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 font-bengali">
          দারুল হারামাইন একাডেমি
        </h1>
        <p className="text-sm md:text-lg font-bold tracking-widest text-emerald-200/90 uppercase mb-4">
          DARUL HARAMAIN ACADEMY
        </p>

        {/* Academic Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-amber-200/95 font-medium max-w-2xl mx-auto mb-3">
          An Arabic-English Medium Academy with Hifzul Quran
        </p>

        {/* Founder & Chairman Title Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-[#cfa852]/40 text-amber-300 text-xs md:text-sm font-semibold mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#cfa852]" />
          <span>প্রতিষ্ঠাতা ও চেয়ারম্যান: হাফিজুর রহমান সিদ্দিক</span>
        </div>

        {/* 3 Primary CTA Buttons (Online Admission, Programs, Language Courses) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-12">
          {/* CTA 1: অনলাইন ভর্তি */}
          <button
            onClick={() => openAdmission()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-[#cfa852] hover:from-amber-400 hover:to-amber-500 text-emerald-950 font-bold text-base md:text-lg shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <GraduationCap className="w-5 h-5" />
            <span>অনলাইন ভর্তি</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* CTA 2: আমাদের বিভাগসমূহ */}
          <button
            onClick={handleScrollToPrograms}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base md:text-lg border border-white/25 backdrop-blur-md hover:border-white/40 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <BookOpen className="w-5 h-5 text-amber-300" />
            <span>আমাদের বিভাগসমূহ</span>
          </button>

          {/* CTA 3: ভাষা শিক্ষা কোর্স (Language Courses) */}
          <button
            onClick={() => setShowLanguageModal(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-800/80 to-teal-900/80 hover:from-emerald-700 hover:to-teal-800 text-white font-semibold text-base md:text-lg border border-[#cfa852]/50 shadow-[0_0_20px_rgba(207,168,82,0.2)] hover:shadow-[0_0_25px_rgba(207,168,82,0.4)] backdrop-blur-md transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
          >
            <Languages className="w-5 h-5 text-[#cfa852] group-hover:rotate-12 transition-transform duration-300" />
            <span>ভাষা শিক্ষা কোর্স</span>
            <ChevronRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Glassmorphism Dark Pop-up Modal for Language Courses Selection */}
        {showLanguageModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
            onClick={() => setShowLanguageModal(false)}
          >
            <div 
              className="relative w-full max-w-lg bg-slate-950/95 border border-[#cfa852]/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(6,78,59,0.6)] text-left backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-[#cfa852] border border-[#cfa852]/40 flex items-center justify-center">
                    <Languages className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      ভাষা শিক্ষা কোর্স (Language Programs)
                    </h3>
                    <p className="text-xs text-emerald-200 mt-0.5">
                      আপনার কাঙ্ক্ষিত ভাষা প্রোগ্রামটি নির্বাচন করুন:
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowLanguageModal(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* 2 Sub-Options Cards */}
              <div className="space-y-4">
                {/* Option 1: ইংরেজি ভাষা শিক্ষা */}
                <div
                  onClick={() => handleScrollToLanguage('english-program')}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-sky-500/40 hover:border-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.15)] hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-200 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">English Program</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">ফাউন্ডেশন & স্পোকেন</span>
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors mt-0.5">
                        ১. ইংরেজি ভাষা শিক্ষা (English Program)
                      </h4>
                      <p className="text-xs text-slate-300 mt-1">
                        Kids' English Foundation, ফোনেটিক্স ও প্র্যাকটিক্যাল Spoken English
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-sky-400 group-hover:translate-x-1.5 transition-transform flex-shrink-0 ml-2" />
                </div>

                {/* Option 2: আরবি ভাষা শিক্ষা */}
                <div
                  onClick={() => handleScrollToLanguage('arabic-program')}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-[#cfa852]/40 hover:border-[#cfa852] shadow-[0_0_20px_rgba(207,168,82,0.15)] hover:shadow-[0_0_30px_rgba(207,168,82,0.3)] transition-all duration-200 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="font-arabic text-xl font-bold text-[#cfa852]">ع</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#cfa852] uppercase tracking-wider">Arabic Program</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">المحادثة العربية</span>
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mt-0.5">
                        ২. আরবি ভাষা শিক্ষা (Arabic Program)
                      </h4>
                      <p className="text-xs text-slate-300 mt-1">
                        আরবি কথোপকথন, ব্যাকরণ ও কুরআন অনুধাবনের আধুনিক পাঠ্যক্রম
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#cfa852] group-hover:translate-x-1.5 transition-transform flex-shrink-0 ml-2" />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <span className="text-xs text-slate-400">
                  সরাসরি সেকশনে যেতে যেকোনো একটি অপশনে ক্লিক করুন
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 3 Modern International-Standard Feature Cards (Under Hero Section) */}
        <div className="w-full max-w-6xl mx-auto mt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
            {featureCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedFeatureCard(card)}
                  className={`relative bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-emerald-950/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group cursor-pointer ${card.borderGlow}`}
                >
                  {/* Subtle Top Glow Accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#cfa852]/60 to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>

                  <div>
                    {/* Header Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-13 h-13 rounded-2xl ${card.iconBg} flex items-center justify-center p-3 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 drop-shadow-md" />
                      </div>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${card.badgeClass}`}>
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>{card.badge}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2.5 group-hover:text-amber-300 transition-colors font-bengali leading-snug">
                      {card.title}
                    </h3>

                    {/* Subtitle / Description */}
                    <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed font-normal mb-5">
                      {card.subtitle}
                    </p>

                    {/* Micro Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {card.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-emerald-200/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button: বিস্তারিত দেখুন → */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-bold text-amber-300 group-hover:text-amber-200 transition-colors">
                    <span className="flex items-center gap-1.5">
                      <span>বিস্তারিত দেখুন</span>
                      <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </span>
                    <span className="text-[11px] text-white/40 font-normal">ক্লিক করুন</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Card Detailed Modal (When "বিস্তারিত দেখুন" is clicked) */}
        {selectedFeatureCard && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedFeatureCard(null)}
          >
            <div 
              className="relative w-full max-w-xl bg-slate-950/95 border border-[#cfa852]/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(207,168,82,0.3)] text-left backdrop-blur-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedFeatureCard(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 mb-6 pr-8">
                <div className={`w-14 h-14 rounded-2xl ${selectedFeatureCard.iconBg} flex items-center justify-center p-3 shadow-lg flex-shrink-0`}>
                  {React.createElement(selectedFeatureCard.icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold border mb-2 bg-amber-500/15 text-amber-300 border-amber-500/40">
                    <Star className="w-3 h-3 text-amber-300" />
                    <span>{selectedFeatureCard.modalDetails.badge}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-bengali leading-snug">
                    {selectedFeatureCard.modalDetails.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 bg-slate-900/60 p-4 rounded-2xl border border-white/10">
                {selectedFeatureCard.modalDetails.description}
              </p>

              {/* Key Highlights */}
              <div className="mb-8">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#cfa852] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>মূল বৈশিষ্ট্য ও পাঠ্যক্রম মান:</span>
                </h4>
                <div className="space-y-2.5">
                  {selectedFeatureCard.modalDetails.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-[#cfa852] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-5 border-t border-white/10">
                <button
                  onClick={() => {
                    const param = selectedFeatureCard.modalDetails.admissionParam;
                    setSelectedFeatureCard(null);
                    openAdmission(param);
                  }}
                  className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-[#cfa852] hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg cursor-pointer transition"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>এখনই ভর্তি আবেদন করুন</span>
                </button>
                <button
                  onClick={() => handleCardTargetNavigate(selectedFeatureCard.modalDetails.targetId)}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm flex items-center justify-center gap-2 border border-white/20 cursor-pointer transition"
                >
                  <span>কোর্সের পূর্ণ বিভাগ দেখুন</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Scrolling Ticker at Hero Bottom */}
      <div className="relative z-10 w-full overflow-hidden py-3 bg-black/40 backdrop-blur-md border-y border-white/15">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
          className="whitespace-nowrap text-base md:text-lg font-bold tracking-wide text-amber-400 drop-shadow flex gap-8 items-center"
        >
          <span>Welcome to <span className="text-yellow-300 font-extrabold">Darul Haramain Academy.</span> Founded by Hafizur Rahman (Founder & Chairman).</span>
          <span className="text-white/80 font-bold text-xl">•</span>
          <span>Welcome to <span className="text-yellow-300 font-extrabold">Darul Haramain Academy.</span> Founded by Hafizur Rahman (Founder & Chairman).</span>
          <span className="text-white/80 font-bold text-xl">•</span>
          <span>Welcome to <span className="text-yellow-300 font-extrabold">Darul Haramain Academy.</span> Founded by Hafizur Rahman (Founder & Chairman).</span>
          <span className="text-white/80 font-bold text-xl">•</span>
          <span>Welcome to <span className="text-yellow-300 font-extrabold">Darul Haramain Academy.</span> Founded by Hafizur Rahman (Founder & Chairman).</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
