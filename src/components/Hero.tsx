import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  ChevronRight, 
  Award, 
  Layers, 
  HeartHandshake,
  Languages,
  X
} from 'lucide-react';
import { useAdmission } from '../context/AdmissionContext';

interface ActionButton {
  id: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  onClick: () => void;
  isPrimaryAccent?: boolean;
  gradientBg: string;
  iconBg: string;
  borderClass: string;
  hoverGlow: string;
  textColor: string;
  badgeStyle: string;
  arrowStyle: string;
}

const Hero: React.FC = () => {
  const { openAdmission } = useAdmission();
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const handleScrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToLanguage = (targetId: string) => {
    setShowLanguageModal(false);
    const el = document.getElementById(targetId) || document.getElementById('academic-programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 10 MINUTE SCHOOL STYLE: 6 ACTION BUTTONS GRID (2 Rows of 3 Buttons)
  const actionButtons: ActionButton[] = [
    // Top Row: 3 Core Academy CTAs
    {
      id: 'online-admission',
      title: 'অনলাইন ভর্তি',
      badge: 'ভর্তি চলছে',
      icon: GraduationCap,
      onClick: () => openAdmission(),
      isPrimaryAccent: true,
      gradientBg: 'bg-gradient-to-r from-amber-400 via-amber-500 to-[#cfa852] hover:from-amber-300 hover:via-amber-400 hover:to-amber-500',
      iconBg: 'bg-slate-950 text-amber-400 shadow-md',
      borderClass: 'border-amber-300 shadow-xl shadow-amber-500/25 hover:border-amber-200',
      hoverGlow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]',
      textColor: 'text-slate-950 font-extrabold',
      badgeStyle: 'bg-slate-950/20 text-slate-950 font-bold',
      arrowStyle: 'bg-slate-950/20 group-hover:bg-slate-950/30 text-slate-950'
    },
    {
      id: 'departments',
      title: 'আমাদের বিভাগসমূহ',
      badge: 'প্লে থেকে দাখিল',
      icon: BookOpen,
      onClick: () => handleScrollToSection('academic-programs'),
      gradientBg: 'bg-gradient-to-r from-emerald-900/60 via-slate-900/70 to-emerald-950/80 hover:from-emerald-800/70 hover:via-slate-800/80 hover:to-emerald-900/90',
      iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-md',
      borderClass: 'border-emerald-500/35 hover:border-[#cfa852]/70',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]',
      textColor: 'text-white group-hover:text-amber-200',
      badgeStyle: 'bg-white/10 text-emerald-200/90 font-semibold',
      arrowStyle: 'bg-white/10 group-hover:bg-white/20 text-white/80 group-hover:text-white'
    },
    {
      id: 'language-courses',
      title: 'ভাষা শিক্ষা কোর্স',
      badge: 'ইংরেজি ও আরবি',
      icon: Languages,
      onClick: () => setShowLanguageModal(true),
      gradientBg: 'bg-gradient-to-r from-teal-900/60 via-slate-900/70 to-emerald-950/80 hover:from-teal-800/70 hover:via-slate-800/80 hover:to-teal-900/90',
      iconBg: 'bg-gradient-to-br from-[#cfa852] to-amber-600 text-slate-950 shadow-md',
      borderClass: 'border-[#cfa852]/40 hover:border-amber-300',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(207,168,82,0.35)]',
      textColor: 'text-white group-hover:text-[#cfa852]',
      badgeStyle: 'bg-amber-400/15 text-amber-300 font-semibold',
      arrowStyle: 'bg-white/10 group-hover:bg-white/20 text-white/80 group-hover:text-white'
    },

    // Bottom Row: 3 Quick Action / Feature Style Buttons
    {
      id: 'noorani-hifz',
      title: 'নূরানী হিফজ ও তাজবীদ',
      badge: 'আন্তর্জাতিক মান',
      icon: Award,
      onClick: () => handleScrollToSection('academic-programs'),
      gradientBg: 'bg-gradient-to-r from-amber-500/20 via-yellow-600/15 to-slate-950/70 hover:from-amber-500/30 hover:via-yellow-600/25 hover:to-slate-900/80',
      iconBg: 'bg-gradient-to-br from-amber-400 via-[#cfa852] to-amber-600 text-slate-950 shadow-md',
      borderClass: 'border-amber-400/40 hover:border-amber-300',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]',
      textColor: 'text-white group-hover:text-amber-200',
      badgeStyle: 'bg-amber-400/15 text-amber-300 font-semibold',
      arrowStyle: 'bg-white/10 group-hover:bg-white/20 text-white/80 group-hover:text-white'
    },
    {
      id: '3-in-1-curriculum',
      title: '3-in-1 সমন্বিত শিক্ষাক্রম',
      badge: 'কওমি • আলিয়া • জেনারেল',
      icon: Layers,
      onClick: () => handleScrollToSection('academic-programs'),
      gradientBg: 'bg-gradient-to-r from-cyan-500/20 via-sky-600/15 to-slate-950/70 hover:from-cyan-500/30 hover:via-sky-600/25 hover:to-slate-900/80',
      iconBg: 'bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 text-white shadow-md',
      borderClass: 'border-cyan-400/40 hover:border-cyan-300',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]',
      textColor: 'text-white group-hover:text-cyan-200',
      badgeStyle: 'bg-cyan-400/15 text-cyan-300 font-semibold',
      arrowStyle: 'bg-white/10 group-hover:bg-white/20 text-white/80 group-hover:text-white'
    },
    {
      id: 'sunnah-tarbiyah',
      title: 'সুন্নাহভিত্তিক তারবিয়াত',
      badge: 'আখলাক ও চরিত্র গঠন',
      icon: HeartHandshake,
      onClick: () => handleScrollToSection('about'),
      gradientBg: 'bg-gradient-to-r from-emerald-500/20 via-teal-600/15 to-slate-950/70 hover:from-emerald-500/30 hover:via-teal-600/25 hover:to-slate-900/80',
      iconBg: 'bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-700 text-white shadow-md',
      borderClass: 'border-emerald-400/40 hover:border-emerald-300',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]',
      textColor: 'text-white group-hover:text-emerald-200',
      badgeStyle: 'bg-emerald-400/15 text-emerald-300 font-semibold',
      arrowStyle: 'bg-white/10 group-hover:bg-white/20 text-white/80 group-hover:text-white'
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
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-10 md:pt-14 pb-12 flex flex-col items-center text-center">
        
        {/* Academy Logo */}
        <div className="relative mb-5 group">
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

        {/* Academy Bengali & English Typography */}
        <div className="flex flex-col items-center justify-center mb-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 font-bengali drop-shadow-md">
            দারুল হারামাইন একাডেমি
          </h1>
          
          <div className="flex flex-col items-center">
            {/* DARUL HARAMAIN - Large and prominent matching the Bengali title width & weight */}
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wider bg-gradient-to-r from-amber-200 via-amber-400 to-[#cfa852] bg-clip-text text-transparent uppercase drop-shadow-sm font-sans">
              DARUL HARAMAIN
            </span>
            {/* ACADEMY - Smaller & spaced out (ফাঁকা ফাঁকা) underneath */}
            <span className="text-xs sm:text-sm md:text-base font-bold tracking-[0.35em] sm:tracking-[0.45em] text-emerald-200/90 uppercase mt-1 pl-[0.35em] sm:pl-[0.45em]">
              ACADEMY
            </span>
          </div>
        </div>

        {/* Academic Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-amber-200/95 font-medium max-w-2xl mx-auto mb-3">
          An Arabic-English Medium Academy with Hifzul Quran
        </p>

        {/* Founder & Chairman Title Tag with Portrait - 2-Line English Layout */}
        <div className="inline-flex items-center gap-3 pl-2 pr-5 py-1.5 sm:py-2 rounded-full bg-emerald-950/75 backdrop-blur-md border border-amber-400/40 text-left mb-8 shadow-xl shadow-black/30 hover:border-amber-400/80 transition-all duration-300 group max-w-full">
          {/* Avatar Photo with golden ring border & soft shadow */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full ring-2 ring-amber-400/60 shadow-md flex-shrink-0 overflow-hidden bg-black/40">
            <img
              src="https://res.cloudinary.com/dlklqihg6/image/upload/v1791964007/mvfdbk4sh4sp1jl7zruu.jpg"
              alt="Hafizur Rahman Siddik - Founder & Chairman"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top rounded-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* 2-Line English Text */}
          <div className="flex flex-col text-left justify-center min-w-0">
            <span className="text-white font-bold text-sm sm:text-base tracking-wide leading-tight group-hover:text-amber-200 transition-colors">
              Hafizur Rahman Siddik
            </span>
            <span className="text-[11px] sm:text-xs text-amber-300/90 font-medium tracking-wider uppercase mt-0.5">
              Founder &amp; Chairman
            </span>
          </div>
        </div>

        {/* 10 MINUTE SCHOOL STYLE: COMPLETE GRID OF 6 ACTION BUTTONS (2 Rows of 3) */}
        <div className="w-full max-w-5xl mx-auto mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-4.5">
            {actionButtons.map((btn) => {
              const IconComp = btn.icon;
              return (
                <button
                  key={btn.id}
                  onClick={btn.onClick}
                  className={`group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl ${btn.gradientBg} ${btn.borderClass} ${btn.hoverGlow} border backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-1 text-left cursor-pointer shadow-lg w-full`}
                >
                  {/* Subtle top indicator glow highlight */}
                  <div className={`absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent ${btn.isPrimaryAccent ? 'via-white/70' : 'via-white/40'} to-transparent opacity-40 group-hover:opacity-100 transition-opacity`}></div>

                  {/* Left: Compact Glowing Icon Box + Text Details */}
                  <div className="flex items-center gap-3 min-w-0 pr-1">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${btn.iconBg} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300`}>
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow" />
                    </div>

                    <div className="min-w-0">
                      {/* Top Tiny Badge / Tag */}
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className={`text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded-md ${btn.badgeStyle} uppercase tracking-wider`}>
                          {btn.badge}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h4 className={`text-sm sm:text-base font-bold tracking-tight truncate font-bengali ${btn.textColor} transition-colors`}>
                        {btn.title}
                      </h4>
                    </div>
                  </div>

                  {/* Right: Subtle Action Arrow */}
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${btn.arrowStyle} flex items-center justify-center flex-shrink-0 transition-all duration-200`}>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
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
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* 2 Quick Language Cards */}
              <div className="space-y-4">
                {/* Option 1: Spoken English Program */}
                <div 
                  onClick={() => handleScrollToLanguage('academic-programs')}
                  className="group p-4 rounded-2xl bg-gradient-to-r from-emerald-900/60 to-slate-900/80 border border-emerald-500/30 hover:border-[#cfa852] transition-all duration-300 flex items-center justify-between cursor-pointer shadow-lg hover:shadow-emerald-500/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-[#cfa852] text-slate-950 font-bold flex items-center justify-center text-sm shadow">
                      ENG
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors">
                          Spoken English (স্পোকেন ইংলিশ)
                        </h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                          কিডস ও জুনিয়র
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1">
                        ব্রিটিশ ও আমেরিকান ফোনেটিক্স ও ফ্লুয়েন্ট স্পোকেন দক্ষতা
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#cfa852] group-hover:translate-x-1.5 transition-transform flex-shrink-0 ml-2" />
                </div>

                {/* Option 2: Spoken Arabic & Muhadasah Program */}
                <div 
                  onClick={() => handleScrollToLanguage('academic-programs')}
                  className="group p-4 rounded-2xl bg-gradient-to-r from-teal-900/60 to-slate-900/80 border border-teal-500/30 hover:border-[#cfa852] transition-all duration-300 flex items-center justify-between cursor-pointer shadow-lg hover:shadow-teal-500/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white font-arabic font-bold flex items-center justify-center text-lg shadow">
                      عربي
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors">
                          মুহাদাসা ও আরবি ভাষা (Spoken Arabic)
                        </h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                          কুরআনিক আরবি
                        </span>
                      </div>
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
