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

  // 2x3 Educational Dashboard Grid Cards with 3-in-1 Integrated Curriculum (Qawmi + Alia + School)
  const dashboardCards = [
    {
      id: "nursery",
      title: "শিশু ও নূরানী বিভাগ",
      subtitle: "Qawmi Qaida-Ampara, Noorani Foundation & Play/Nursery",
      levelBadge: "প্লে ও নার্সারি • বয়স ৩-৫ বছর",
      borderGlow: "border-[#cfa852]/50 shadow-[0_0_25px_rgba(207,168,82,0.18)] hover:border-[#cfa852] hover:shadow-[0_0_35px_rgba(207,168,82,0.38)]",
      badgeBg: "bg-amber-500/15 text-amber-300 border-amber-500/40",
      btnBg: "bg-gradient-to-r from-amber-500 via-[#cfa852] to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold",
      // Non-human/stylized Islamic learner iconography (Arabic alphabet block & educational tablet)
      iconContent: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#cfa852]/20 rounded-2xl blur-md"></div>
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-[#cfa852] flex flex-col items-center justify-center text-slate-950 shadow-lg border border-amber-200/50">
            <span className="font-arabic text-xl font-bold leading-none">أ ب ت</span>
            <span className="text-[9px] font-extrabold uppercase tracking-wider mt-0.5 font-sans">NURSERY</span>
          </div>
        </div>
      ),
      features: [
        "কওমি কায়দা ও আমপারা হিফজ ভিত্তি",
        "নূরানী বিশুদ্ধ মাখরাজ ও তাজবিদ শিখন",
        "প্লে ও নার্সারি আধুনিক সাধারণ জ্ঞান ও আদব"
      ],
    },
    {
      id: "class-1-3",
      title: "প্রাথমিক স্তর (ক্লাস ১ - ৩)",
      subtitle: "Nazera Quran, Alia Ebtedayi & Primary School Curriculum",
      levelBadge: "প্রাথমিক স্তর • ক্লাস ১-৩",
      borderGlow: "border-[#cfa852]/50 shadow-[0_0_25px_rgba(207,168,82,0.18)] hover:border-[#cfa852] hover:shadow-[0_0_35px_rgba(207,168,82,0.38)]",
      badgeBg: "bg-sky-500/15 text-sky-300 border-sky-500/40",
      btnBg: "bg-gradient-to-r from-amber-500 via-[#cfa852] to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold",
      // Stylized non-human school kit (crest, books stack, golden pencil)
      iconContent: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-sky-500/20 rounded-2xl blur-md"></div>
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center text-white shadow-lg border border-sky-300/40">
            <GraduationCap className="w-8 h-8 text-white drop-shadow" />
          </div>
        </div>
      ),
      features: [
        "দেখে দেখে পূর্ণাঙ্গ নাজেরা কুরআন তিলাওয়াত",
        "আলিয়া ইবতেদায়ি সিলেবাসের পাঠ্যক্রম",
        "প্রমিত বাংলা, গণিত ও বেসিক ইংলিশ স্পোকেন"
      ],
    },
    {
      id: "class-4-5",
      title: "জুনিয়র প্রাথমিক (ক্লাস ৪ - ৫)",
      subtitle: "Arabic Fundamentals, English-Math & Cadet/Scholarship Prep",
      levelBadge: "জুনিয়র প্রাইমারি • ক্লাস ৪-৫",
      borderGlow: "border-[#cfa852]/50 shadow-[0_0_25px_rgba(207,168,82,0.18)] hover:border-[#cfa852] hover:shadow-[0_0_35px_rgba(207,168,82,0.38)]",
      badgeBg: "bg-amber-500/15 text-amber-300 border-amber-500/40",
      btnBg: "bg-gradient-to-r from-amber-500 via-[#cfa852] to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold",
      // Stylized globe, academic scholarship star & compass
      iconContent: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-md"></div>
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white shadow-lg border border-amber-300/40">
            <Globe className="w-8 h-8 text-white drop-shadow" />
          </div>
        </div>
      ),
      features: [
        "মৌলিক আরবি ভাষা ও ব্যাকরণ (নাহু-সরফ সূচনা)",
        "এডভান্সড ইংলিশ ও গণিত দক্ষতা",
        "ক্যাডেট কলেজ ও সরকারি বৃত্তি পরীক্ষা প্রস্তুতি"
      ],
    },
    {
      id: "class-6-8",
      title: "জুনিয়র মাধ্যমিক (ক্লাস ৬ - ৮)",
      subtitle: "Qawmi Nahv-Sarf, Alia Dakhil Foundation & Science/ICT",
      levelBadge: "জুনিয়র মাধ্যমিক • ক্লাস ৬-৮",
      borderGlow: "border-[#cfa852]/50 shadow-[0_0_25px_rgba(207,168,82,0.18)] hover:border-[#cfa852] hover:shadow-[0_0_35px_rgba(207,168,82,0.38)]",
      badgeBg: "bg-sky-500/15 text-sky-300 border-sky-500/40",
      btnBg: "bg-gradient-to-r from-amber-500 via-[#cfa852] to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold",
      // Books and Telescope (as requested)
      iconContent: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-sky-500/20 rounded-2xl blur-md"></div>
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-700 flex items-center justify-center text-white shadow-lg border border-sky-300/40">
            <Telescope className="w-8 h-8 text-sky-100 drop-shadow" />
          </div>
        </div>
      ),
      features: [
        "কওমি মিযান ও নাহবেমীর ব্যাকরণ চর্চা",
        "আলিয়া দাখিল ফাউন্ডেশন বিষয়াবলি",
        "আধুনিক সাধারণ বিজ্ঞান ও আইসিটি ল্যাব"
      ],
    },
    {
      id: "class-9-10",
      title: "মাধ্যমিক স্তর (ক্লাস ৯ - ১০)",
      subtitle: "Dakhil/SSC Combined Board Syllabus & Digital Lab",
      levelBadge: "মাধ্যমিক স্তর • এসএসসি / দাখিল",
      borderGlow: "border-[#cfa852]/50 shadow-[0_0_25px_rgba(207,168,82,0.18)] hover:border-[#cfa852] hover:shadow-[0_0_35px_rgba(207,168,82,0.38)]",
      badgeBg: "bg-amber-500/15 text-amber-300 border-amber-500/40",
      btnBg: "bg-gradient-to-r from-amber-500 via-[#cfa852] to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold",
      // Laptop and Globe (as requested)
      iconContent: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-md"></div>
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center text-white shadow-lg border border-amber-300/40">
            <Laptop className="w-8 h-8 text-amber-100 drop-shadow" />
          </div>
        </div>
      ),
      features: [
        "দাখিল ও এসএসসি সমন্বিত বোর্ড প্রস্তুতি",
        "ইসলামিয়াত, বিজ্ঞান ও ব্যবসায় শিক্ষা",
        "ডিজিটাল কম্পিউটার ল্যাব ও প্র্যাকটিক্যাল"
      ],
    },
    {
      id: "hifz",
      title: "আন্তর্জাতিক হিফজ ও শোনানী",
      subtitle: "Tajweed, Daily Dawr, Sanad & Academic Balance",
      levelBadge: "বিশেষ হিফজুল কুরআন শাখা",
      borderGlow: "border-[#cfa852]/60 shadow-[0_0_30px_rgba(207,168,82,0.25)] hover:border-[#cfa852] hover:shadow-[0_0_40px_rgba(207,168,82,0.45)]",
      badgeBg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
      btnBg: "bg-gradient-to-r from-emerald-500 via-[#cfa852] to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold",
      // Open Quran and Compass / Guidance beacon (as requested)
      iconContent: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#cfa852]/25 rounded-2xl blur-md"></div>
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 flex items-center justify-center text-white shadow-lg border border-[#cfa852]/50">
            <Compass className="w-8 h-8 text-amber-300 drop-shadow" />
          </div>
        </div>
      ),
      features: [
        "আন্তর্জাতিক বিশ্বমানের বিশুদ্ধ তাজবিদ",
        "দৈনিক শুনানী, নিয়মিত দাওর ও মুরাবাখা",
        "হিফজ সমাপন সনদ ও জেনারেল ক্লাসের ভারসাম্য"
      ],
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
        
        {/* SECTION 1: Central Sparkling Headline & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-[#cfa852]/40 text-[#cfa852] text-xs sm:text-sm font-semibold mb-4 shadow-sm backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span>৩-ইন-১ সমন্বিত কারিকুলাম • কওমি + আলিয়া + ক্যাডেট/স্কুল</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 font-bengali">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent drop-shadow-md">
              শেখা হোক আনন্দের মাধ্যমে!
            </span>
          </h2>

          <p className="text-emerald-100/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            কওমি মাদ্রাসার বিশুদ্ধ দ্বীনিয়াত, আলিয়া মাদ্রাসার বোর্ড সিলেবাস এবং আধুনিক ইংলিশ মিডিয়াম/ক্যাডেট স্কুলের যুগোপযোগী মান
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* SECTION 2: The 2x3 Grid of Interactive, Rounded-Corner Cards with Golden Glowing Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {dashboardCards.map((card) => (
            <div
              key={card.id}
              className={`relative bg-slate-900/85 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group ${card.borderGlow}`}
            >
              <div>
                {/* 3-in-1 Visual Curriculum Badge on Top of Each Card */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/15 via-[#cfa852]/20 to-emerald-500/15 border border-[#cfa852]/50 text-[#cfa852] text-[11px] sm:text-xs font-bold tracking-wide mb-4 w-fit shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                  <span>৩-ইন-১ সমন্বিত কারিকুলাম</span>
                  <span className="text-white/30">|</span>
                  <span className="text-emerald-200 text-[10px] sm:text-[11px] font-medium font-sans">Qawmi + Alia + School</span>
                </div>

                {/* Card Icon & Level Badge */}
                <div className="flex items-start justify-between mb-4">
                  {card.iconContent}
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${card.badgeBg}`}>
                    {card.levelBadge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {card.title}
                </h3>

                {/* Subtext container with English curriculum standard */}
                <div className="inline-block text-[11px] sm:text-xs font-semibold text-amber-200/90 font-mono tracking-wide bg-white/5 border border-amber-400/20 px-2.5 py-1 rounded-lg mb-4 leading-relaxed">
                  {card.subtitle}
                </div>

                {/* Feature Bullet Points */}
                <div className="space-y-2 mb-6 pt-3.5 border-t border-white/10 text-xs sm:text-sm text-emerald-100/90">
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

        {/* SECTION 5: "ভাষা শিক্ষা (Language Learning)" */}
        <div id="language-learning" className="mb-20 scroll-mt-24">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-[#cfa852]/40 text-[#cfa852] text-xs sm:text-sm font-semibold mb-3 shadow-sm backdrop-blur-md">
              <Languages className="w-4 h-4 text-amber-300" />
              <span>আন্তর্জাতিক ভাষা শিক্ষা প্রোগ্রাম</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-bengali">
              ভাষা শিক্ষা (Language Learning)
            </h3>
            <p className="text-sm sm:text-base text-emerald-100/80 mt-2 max-w-2xl mx-auto">
              কুরআন অনুধাবন ও আন্তর্জাতিক যোগাযোগের সুবিধার্থে ইংরেজি ও আরবি ভাষার বিশেষ সমন্বিত প্রোগ্রাম
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: ইংরেজি ভাষা শিক্ষা (English Language Program) */}
            <div 
              id="english-program"
              className="bg-slate-900/85 backdrop-blur-xl rounded-3xl p-7 sm:p-8 border border-sky-500/40 shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:border-sky-400 hover:shadow-[0_0_40px_rgba(14,165,233,0.35)] transition-all flex flex-col justify-between group scroll-mt-28"
            >
              <div>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center justify-center">
                    <Globe className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-200 border border-sky-400/30">
                    ইংরেজি ভাষা শিক্ষা (English Program)
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
                    English Language Program
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    Kids' English Foundation / Spoken English
                  </h4>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  ছোট শিশুদের ও সাধারণ শিক্ষার্থীদের জন্য স্পোকেন ইংলিশ, ব্রিটিশ ও আমেরিকান ফোনিক্স, ভিজ্যুয়াল ফ্ল্যাশটিউট এবং দৈনিক কথোপকথন শেখার বিশেষ কোর্স।
                </p>

                <div className="space-y-2.5 mb-8 pt-4 border-t border-white/10 text-xs sm:text-sm text-sky-100">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>ব্রিটিশ ও আমেরিকান স্ট্যান্ডার্ড ফোনিক্স</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>ভিজ্যুয়াল ফ্ল্যাশকার্ড ও অডিও অ্যাক্টিভিটি</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>দৈনিক কথোপকথন ও প্রেজেন্টেশন প্র্যাকটিস</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>ছোট বয়সেই জড়তামুক্ত ইংরেজি কথা বলার আত্মবিশ্বাস</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openAdmission("ইংরেজি ভাষা শিক্ষা (English Program)")}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-bold text-sm shadow-md hover:shadow-lg transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>ইংরেজি কোর্সে ভর্তি হন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: আরবি ভাষা শিক্ষা (Arabic Language Program) */}
            <div 
              id="arabic-program"
              className="bg-slate-900/85 backdrop-blur-xl rounded-3xl p-7 sm:p-8 border border-[#cfa852]/50 shadow-[0_0_30px_rgba(207,168,82,0.2)] hover:border-[#cfa852] hover:shadow-[0_0_40px_rgba(207,168,82,0.35)] transition-all flex flex-col justify-between group scroll-mt-28"
            >
              <div>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center">
                    <span className="font-arabic text-2xl font-bold text-[#cfa852]">ع</span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-200 border border-amber-400/30">
                    আরবি ভাষা শিক্ষা (Arabic Program)
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-xs font-bold text-[#cfa852] uppercase tracking-wider block mb-1 font-arabic">
                    المحادثة العربية وقواعد اللغة
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    আরবি কথোপকথন ও ব্যাকরণ (Spoken Arabic & Grammar)
                  </h4>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  কুরআন অনুধাবন ও আন্তর্জাতিক যোগাযোগের সুবিধার্থে আধুনিক আরবি ব্যাকরণ, স্পোকেন অ্যারাবিক (المحادثة العربية), সঠিক উচ্চারণ ও নিত্যদিনের প্রয়োজনীয় বাক্যাংশ শেখার বিশেষ কোর্স।
                </p>

                <div className="space-y-2.5 mb-8 pt-4 border-t border-white/10 text-xs sm:text-sm text-amber-100">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>শুদ্ধ আরবি উচ্চারণ ও প্র্যাকটিক্যাল কথোপকথন (Spoken Arabic)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>কুরআন ও হাদীসের ভাষা অনুধাবনের সহজ পদ্ধতি</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>আধুনিক ও আন্তর্জাতিক মানের আরবি শব্দভাণ্ডার (Vocabulary)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>নিত্যপ্রয়োজনীয় আরবি বাক্য ও সংলাপ চর্চা</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openAdmission("আরবি ভাষা শিক্ষা (Arabic Program)")}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-[#cfa852] to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-md hover:shadow-lg transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>আরবি কোর্সে ভর্তি হন</span>
                <ArrowRight className="w-4 h-4" />
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
