import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Sparkles, ChevronRight, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useAdmission } from '../context/AdmissionContext';

const Hero: React.FC = () => {
  const { openAdmission } = useAdmission();

  const handleScrollToPrograms = () => {
    const el = document.getElementById('academic-programs') || document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 md:pt-16 pb-10 flex flex-col items-center text-center">
        
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

        {/* 2 Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          {/* CTA 1: অনলাইন ভর্তি */}
          <button
            onClick={() => openAdmission()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-[#cfa852] hover:from-amber-400 hover:to-amber-500 text-emerald-950 font-bold text-base md:text-lg shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <GraduationCap className="w-5 h-5" />
            <span>অনলাইন ভর্তি</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* CTA 2: আমাদের বিভাগসমূহ */}
          <button
            onClick={handleScrollToPrograms}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base md:text-lg border border-white/25 backdrop-blur-md hover:border-white/40 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <BookOpen className="w-5 h-5 text-amber-300" />
            <span>আমাদের বিভাগসমূহ</span>
          </button>
        </div>

        {/* 3 Value Highlight Micro-Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 w-full max-w-4xl text-left">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-[#cfa852]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">বিশুদ্ধ কুরআন তিলাওয়াত</h4>
              <p className="text-xs text-emerald-200/80">আন্তর্জাতিক তাজবিদ মান</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0 text-amber-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">দ্বিমুখী শিক্ষাক্রম</h4>
              <p className="text-xs text-emerald-200/80">হিফজ ও আধুনিক জেনারেল শিক্ষা</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-emerald-300">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">আদর্শ তারবিয়াত</h4>
              <p className="text-xs text-emerald-200/80">নৈতিক ও সুশৃঙ্খল পরিবেশ</p>
            </div>
          </div>
        </div>

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
