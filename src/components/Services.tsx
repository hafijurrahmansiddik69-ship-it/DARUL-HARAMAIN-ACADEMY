import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Sparkles, 
  GraduationCap, 
  Languages, 
  HeartHandshake, 
  Check, 
  ChevronRight, 
  Award,
  ArrowRight,
  Telescope,
  Laptop,
  Globe,
  Compass,
  MapPin,
  Phone,
  Play,
  Star,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { useAdmission } from '../context/AdmissionContext';

export default function Services() {
  const { openAdmission } = useAdmission();

  // Active branch filter for campuses
  const [selectedBranch, setSelectedBranch] = useState<string>('সকল শাখা');

  // Core Qualities Feature Cards (from previous design)
  const coreQualities = [
    {
      title: "বিশুদ্ধ কুরআন শিক্ষা",
      subtitle: "তাজবিদ ও আন্তর্জাতিক মান",
      desc: "বিশুদ্ধ মাখরাজ, তাজবিদ ও সুললিত উচ্চারণে কুরআন তিলাওয়াত ও হিফজ করানোর আন্তর্জাতিক পাঠ্যক্রম।",
      icon: BookOpen,
      accentColor: "emerald",
      highlights: ["আন্তর্জাতিক হিফজ কারিকুলাম", "নিয়মিত হুসনুত তিলাওয়াত চর্চা", "আমপারা ও নাজেরা নিবিড় যত্ন"],
    },
    {
      title: "অভিজ্ঞ শিক্ষক মণ্ডলী",
      subtitle: "যোগ্যতাসম্পন্ন ও নিবেদিতপ্রাণ",
      desc: "স্বনামধন্য শীর্ষ ক্বারী, আন্তর্জাতিক হাফেজ এবং দক্ষ ইসলামি শিক্ষাবিদগণের প্রত্যক্ষ তত্ত্বাবধান।",
      icon: Users,
      accentColor: "gold",
      highlights: ["সার্বক্ষণিক শিক্ষক সান্নিধ্য", "ব্যক্তিগত মেধার মূল্যায়ন", "নিয়মিত শিক্ষক প্রশিক্ষণ"],
    },
    {
      title: "মানসম্মত ও সুশৃঙ্খল পরিবেশ",
      subtitle: "দ্বীনি ও নিরাপদ ক্যাম্পাস",
      desc: "শিক্ষার্থীদের শারীরিক ও আত্মিক বিকাশে সম্পূর্ণ রাজনীতিমুক্ত, নিরিবিলি ও আধ্যাত্মিক একাডেমি পরিবেশ।",
      icon: Sparkles,
      accentColor: "emerald",
      highlights: ["স্বাস্থ্যসম্মত বাসস্থান ও খাবার", "পবিত্র ও সুসজ্জিত ক্লাসরুম", "নিরাপদ ও সুশৃঙ্খল পরিবেশ"],
    },
  ];

  // 2x3 Educational Dashboard Grid Cards (matching user request)
  const dashboardCards = [
    {
      id: "nursery",
      title: "শিশু নার্সারি",
      subtitle: "বর্ণমালা ও আনন্দের সাথে প্রাথমিক শিখন",
      ageGroup: "প্লে ও নার্সারি • বয়স ৩-৫ বছর",
      colorTheme: "orange",
      borderGlow: "border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.22)] hover:border-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]",
      badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      btnBg: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950",
      // Non-human/stylized Islamic learner iconography (Arabic alphabet block, learning tablet & graduation cap)
      iconContent: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-md"></div>
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/90 to-amber-600 flex flex-col items-center justify-center text-slate-950 shadow-lg border border-amber-300/40">
            <span className="font-arabic text-xl font-bold leading-none">أ ب ت</span>
            <span className="text-[10px] font-extrabold uppercase tracking-wider mt-0.5">PLAY</span>
          </div>
        </div>
      ),
      features: ["সহজ বর্ণমালা ও ছড়া", "দ্বীনি আদব ও শিষ্টাচার", "আনন্দময় খেলাধুলা"],
    },
    {
      id: "class-1-3",
      title: "ক্লাস ১, ২, ৩",
      subtitle: "মৌলিক বিষয়সমূহ, কুরআন ও নৈতিক ভিত্তি",
      ageGroup: "প্রাথমিক স্তর • ক্লাস ১-৩",
      colorTheme: "blue",
      borderGlow: "border-sky-500/50 shadow-[0_0_30px_rgba(14,165,233,0.22)] hover:border-sky-400 hover:shadow-[0_0_40px_rgba(14,165,233,0.4)]",
      badgeBg: "bg-sky-500/20 text-sky-300 border-sky-500/40",
      btnBg: "bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950",
      // Stylized non-human school kit (school bag, books stack, golden pencil)
      iconContent: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-sky-500/20 rounded-2xl blur-md"></div>
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400/90 to-sky-600 flex items-center justify-center text-slate-950 shadow-lg border border-sky-300/40">
            <GraduationCap className="w-8 h-8 text-white drop-shadow" />
          </div>
        </div>
      ),
      features: ["নাজেরা কুরআন শিক্ষা", "বাংলা, ইংরেজি ও গণিত", "দৈনন্দিন মাসনুন দোয়া"],
    },
    {
      id: "class-4-5",
      title: "ক্লাস ৪, ৫",
      subtitle: "প্রাথমিক সমাপনী ও ইংরেজি-গণিত দক্ষতা",
      ageGroup: "জুনিয়র প্রাইমারি • ক্লাস ৪-৫",
      colorTheme: "orange",
      borderGlow: "border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.22)] hover:border-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]",
      badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      btnBg: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950",
      // Stylized globe, books & geometry ruler
      iconContent: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-md"></div>
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/90 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg border border-amber-300/40">
            <Globe className="w-8 h-8 text-white drop-shadow" />
          </div>
        </div>
      ),
      features: ["বৃত্তিমূলক প্রস্তুতি", "বেসিক স্পোকেন ইংলিশ", "সুন্দর হস্তাক্ষর ও তাজবিদ"],
    },
    {
      id: "class-6-8",
      title: "ক্লাস ৬, ৭, ৮",
      subtitle: "গবেষণা, বিজ্ঞান ও উদ্ভাবনী পাঠ্যক্রম",
      ageGroup: "জুনিয়র মাধ্যমিক • ক্লাস ৬-৮",
      colorTheme: "blue",
      borderGlow: "border-sky-500/50 shadow-[0_0_30px_rgba(14,165,233,0.22)] hover:border-sky-400 hover:shadow-[0_0_40px_rgba(14,165,233,0.4)]",
      badgeBg: "bg-sky-500/20 text-sky-300 border-sky-500/40",
      btnBg: "bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950",
      // Books and Telescope (as explicitly requested)
      iconContent: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-sky-500/20 rounded-2xl blur-md"></div>
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg border border-sky-300/40">
            <Telescope className="w-8 h-8 text-sky-200 drop-shadow" />
          </div>
        </div>
      ),
      features: ["বিজ্ঞান ও আইসিটি প্র্যাকটিস", "আরবি ব্যাকরণ ও ভাষা", "সৃজনশীল মেধা বিকাশ"],
    },
    {
      id: "class-9-10",
      title: "ক্লাস ৯, ১০",
      subtitle: "বোর্ড প্রস্তুতি, আইসিটি ও সাধারণ জ্ঞান",
      ageGroup: "মাধ্যমিক স্তর • এসএসসি / দাখিল",
      colorTheme: "orange",
      borderGlow: "border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.22)] hover:border-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]",
      badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      btnBg: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950",
      // Laptop and Globe (as explicitly requested)
      iconContent: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-md"></div>
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-lg border border-amber-300/40">
            <Laptop className="w-8 h-8 text-amber-100 drop-shadow" />
          </div>
        </div>
      ),
      features: ["পূর্ণাঙ্গ বোর্ড সিলেবাস", "ডিজিটাল ল্যাব ও কোডিং", "উচ্চতর গণিত ও বিজ্ঞান"],
    },
    {
      id: "hifz",
      title: "হিফজুল কুরআন ভর্তি",
      subtitle: "আন্তর্জাতিক তাজবিদ, শুনানী ও ক্বিরাত পাঠ্যক্রম",
      ageGroup: "বিশেষ হিফজুল কুরআন শাখা",
      colorTheme: "green",
      borderGlow: "border-emerald-400/60 shadow-[0_0_35px_rgba(16,185,129,0.3)] hover:border-emerald-300 hover:shadow-[0_0_45px_rgba(16,185,129,0.5)]",
      badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      btnBg: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white",
      // Open Quran and Compass / Guidance beacon (as explicitly requested)
      iconContent: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-500/30 rounded-2xl blur-md"></div>
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-800 flex items-center justify-center text-white shadow-lg border border-emerald-300/50">
            <Compass className="w-8 h-8 text-[#cfa852] drop-shadow" />
          </div>
        </div>
      ),
      features: ["আন্তর্জাতিক তাজবিদ মান", "দৈনিক শুনানী ও দাওর", "সুললিত ক্বিরাত চর্চা"],
    },
  ];

  // Campus Branches Filter Options (as explicitly requested)
  const branches = [
    { name: "সকল শাখা", location: "সারাদেশব্যাপী", info: "দারুল হারামাইন একাডেমির সকল শাখা ও প্রোগ্রাম" },
    { name: "বগুড়া", location: "গুজিয়া, মোকামতলা ও শিবগঞ্জ, বগুড়া", info: "প্রধান একাডেমি ক্যাম্পাস ও আন্তর্জাতিক হিফজুল কুরআন শাখা" },
    { name: "উত্তরা", location: "সেক্টর ৪ ও ৭, উত্তরা, ঢাকা", info: "আরবি-ইংরেজি মিডিয়াম ও হিফজ সমন্বিত শাখা" },
    { name: "পান্থপথ", location: "পান্থপথ সিগন্যাল সংলগ্ন, ঢাকা", info: "ডে-কেয়ার, নূরানী ও আধুনিক প্রাথমিক শাখা" },
    { name: "মিরপুর", location: "মিরপুর ১০ ও ১২, ঢাকা", info: "বালক ও বালিকা স্বতন্ত্র হিফজ এবং জেনারেল শাখা" },
    { name: "মগবাজার", location: "মগবাজার ওয়্যারলেস গেট, ঢাকা", info: "কিডস ইংলিশ ও কিতাবুল কুরআন স্পেশাল ব্যাচ" },
    { name: "চট্টগ্রাম", location: "জিইসি মোড় ও চকবাজার, চট্টগ্রাম", info: "চট্টগ্রাম মহানগর শাখা ও আন্তর্জাতিক হিফজ প্রশিক্ষণ" },
  ];

  const currentBranchData = branches.find(b => b.name === selectedBranch) || branches[0];

  return (
    <section id="academic-programs" className="relative overflow-hidden bg-gradient-to-b from-[#021f18] via-[#052e22] to-[#01140e] text-white py-24 px-4 sm:px-6">
      
      {/* Background Star Clusters & Cosmic Nebula Glows (as requested) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Nebulae glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px]"></div>
        {/* Subtle star points pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-15"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* SECTION 1: Central Sparkling Headline & Subtitle (as explicitly requested) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-[#cfa852]/40 text-[#cfa852] text-xs sm:text-sm font-semibold mb-5 shadow-sm backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span>আমাদের বিভাগসমূহ • ACADEMIC PROGRAMS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 font-bengali">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent drop-shadow-md">
              শেখা হোক আনন্দের মাধ্যমে!
            </span>
          </h2>

          <p className="text-emerald-100/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            ইসলামি মূল্যবোধ ও আধুনিক শিক্ষার সমন্বয়ে শিশু থেকে দশম শ্রেণি ও আন্তর্জাতিক হিফজুল কুরআনের বিশেষ পাঠ্যক্রম
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* SECTION 2: The 2x3 Grid of Interactive, Rounded-Corner Cards with Glowing Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {dashboardCards.map((card) => (
            <div
              key={card.id}
              className={`relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group ${card.borderGlow}`}
            >
              {/* Card Header: Icon & Category Tag */}
              <div>
                <div className="flex items-start justify-between mb-5">
                  {card.iconContent}
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${card.badgeBg}`}>
                    {card.ageGroup}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {card.subtitle}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10 text-xs sm:text-sm text-emerald-100/90">
                  {card.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#cfa852] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Button */}
              <button
                onClick={() => openAdmission(card.title)}
                className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all duration-200 cursor-pointer ${card.btnBg}`}
              >
                <span>ভর্তি আবেদন করুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* SECTION 3: Bottom Center CTA Button ("ফ্রি ক্লাস (HSC)") */}
        <div className="text-center mb-20">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-emerald-400 to-amber-500 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <button
              onClick={() => openAdmission('ফ্রি ডেমো ক্লাস ও মূল্যায়ন')}
              className="relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-gradient-to-r from-emerald-800 to-emerald-950 hover:from-emerald-700 hover:to-emerald-900 text-white rounded-2xl font-extrabold text-base sm:text-lg border-2 border-amber-400/80 shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <Star className="w-5 h-5 text-amber-300 fill-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
              <span>ফ্রি ক্লাস (HSC / ডেমো মূল্যায়ন)</span>
              <Play className="w-4 h-4 fill-white text-white ml-1" />
            </button>
          </div>
          <p className="text-xs sm:text-sm text-emerald-200/80 mt-3">
            অভিভাবক ও শিক্ষার্থীদের জন্য ফ্রি ট্রায়াল ক্লাস ও মেধা মূল্যায়ন সেশন
          </p>
        </div>

        {/* SECTION 4: Bengali Branch Filters ('উত্তরা', 'পান্থপথ', 'মিরপুর', 'মগবাজার', 'চট্টগ্রাম') */}
        <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 mb-12 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-[#cfa852] flex items-center justify-center border border-emerald-500/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  ক্যাম্পাস শাখা ও ভর্তি তথ্য কেন্দ্র
                </h4>
                <p className="text-xs sm:text-sm text-emerald-200/80">
                  আপনার নিকটস্থ শাখা নির্বাচন করে বিস্তারিত জানুন
                </p>
              </div>
            </div>
            
            <a
              href="tel:01880800901"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-300 hover:text-amber-200 transition-colors self-start md:self-auto"
            >
              <Phone className="w-4 h-4 text-[#cfa852]" />
              <span>সরাসরি হটলাইন: 018 80 800 901</span>
            </a>
          </div>

          {/* Interactive Branch Filter Buttons (as requested) */}
          <div className="flex flex-wrap gap-2.5 mb-6">
            {branches.map((branch) => {
              const isActive = selectedBranch === branch.name;
              return (
                <button
                  key={branch.name}
                  onClick={() => setSelectedBranch(branch.name)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-[#cfa852] text-slate-950 shadow-lg font-extrabold scale-105'
                      : 'bg-white/5 hover:bg-white/10 text-emerald-100 border border-white/10 hover:border-white/20'
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-[#cfa852]'}`} />
                  <span>{branch.name}</span>
                </button>
              );
            })}
          </div>

          {/* Branch Details Display */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/60 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  শাখা: {currentBranchData.name}
                </span>
                <span className="text-xs text-white/50">•</span>
                <span className="text-xs text-emerald-200">
                  {currentBranchData.location}
                </span>
              </div>
              <p className="text-sm text-slate-200">
                {currentBranchData.info}
              </p>
            </div>
            <button
              onClick={() => openAdmission(`${currentBranchData.name} শাখা`)}
              className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow transition"
            >
              এই শাখায় ভর্তি হন
            </button>
          </div>
        </div>

        {/* SECTION 5: "Kids' English" and "Spoken English Course" Cards (as explicitly requested) */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-bengali">
              বিশেষ ভাষা ও স্কিল ডেভেলপমেন্ট কোর্স
            </h3>
            <p className="text-sm text-emerald-100/80 mt-1">
              কুরআন হিফজের পাশাপাশি আন্তর্জাতিক আরবি ও ইংরেজি ভাষায় ফ্লুয়েন্সি অর্জনের বিশেষ সুযোগ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Kids' English */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-7 sm:p-8 border border-sky-500/40 shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:border-sky-400 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center justify-center">
                    <Languages className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-200 border border-sky-400/30">
                    Kids' English Program
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  Kids' English Foundation
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  ছোট শিশুদের জন্য স্পোকেন ইংলিশ, নির্ভুল ফোনেটিক্স, ফনিক্স সাউন্ড এবং প্রাত্যহিক জীবনের আকর্ষণীয় ভোকাবুলারি শেখার বিশেষ কোর্স।
                </p>

                <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10 text-xs sm:text-sm text-sky-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>ব্রিটিশ ও আমেরিকান স্ট্যান্ডার্ড ফনিক্স</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>ভিজ্যুয়াল ফ্ল্যাশকার্ড ও অডিও অ্যাক্টিভিটি</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>ছোট বয়সেই জড়তামুক্ত ইংরেজি কথা বলার আত্মবিশ্বাস</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openAdmission("Kids' English")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-bold text-sm shadow-md transition"
              >
                Kids' English কোর্সে ভর্তি হন
              </button>
            </div>

            {/* Card 2: Spoken English Course */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-7 sm:p-8 border border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:border-amber-400 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center">
                    <Award className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-200 border border-amber-400/30">
                    Spoken English & Arabic
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  Spoken English Course
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  হিফজ ও সাধারণ শাখার শিক্ষার্থীদের আন্তর্জাতিক স্তরে কার্যকর যোগাযোগের জন্য প্র্যাকটিক্যাল স্পোকেন ইংলিশ এবং আধুনিক আরবি কথোপকথন।
                </p>

                <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10 text-xs sm:text-sm text-amber-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>দৈনন্দিন রিয়েল-লাইফ কনভারসেশন ল্যাব</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>পাবলিক স্পিকিং ও ইসলামিক প্রেজেন্টেশন</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>কোর্স শেষে সনদপত্র ও দক্ষতা মূল্যায়ন</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openAdmission('Spoken English Course')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-md transition"
              >
                Spoken English কোর্সে ভর্তি হন
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 6: Core Pillars & Features (Preserved from original design) */}
        <div className="pt-10 border-t border-white/15">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cfa852]">
              আমাদের মূল বৈশিষ্ট্যসমূহ
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              কেন দারুল হারামাইন একাডেমি অনন্য?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreQualities.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-[#cfa852] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{item.desc}</p>
                  <ul className="space-y-1.5 text-xs text-emerald-200">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cfa852]"></span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
