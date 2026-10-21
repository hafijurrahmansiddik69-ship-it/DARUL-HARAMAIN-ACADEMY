import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Layers, 
  Heart,
  Languages,
  X,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useAdmission } from '../context/AdmissionContext';

interface ModalContent {
  subtitle: string;
  description: string;
  bulletPoints: string[];
  primaryActionLabel: string;
  onPrimaryAction: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
}

interface FeatureCardItem {
  id: string;
  tag: string;
  title: string;
  icon: React.ElementType;
  accentName: string;
  innerGradient: string;
  borderColor: string;
  glowShadow: string;
  glowHover: string;
  ambientGlow: string;
  modal: ModalContent;
}

const Hero: React.FC = () => {
  const { openAdmission } = useAdmission();
  const [selectedCard, setSelectedCard] = useState<FeatureCardItem | null>(null);

  const handleScrollToSection = (targetId: string) => {
    setSelectedCard(null);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // =========================================================================
  // 6 FEATURE CARDS (Exact Zikrullah Foundation Card Design & Proportions)
  // Column 1 (Left Side): Card 1 -> Card 2 -> Card 3
  // Column 2 (Right Side): Card 4 -> Card 5 -> Card 6
  // =========================================================================

  const column1Cards: FeatureCardItem[] = [
    // Card 1 (Yellow / Amber Gradient)
    {
      id: 'online-admission',
      tag: 'ভর্তি চলছে',
      title: 'অনলাইন ভর্তি',
      icon: GraduationCap,
      accentName: 'Yellow / Amber',
      innerGradient: 'from-[#d97706] via-[#f59e0b] to-[#fbbf24]',
      borderColor: 'border-[#f59e0b]',
      glowShadow: 'shadow-[0_0_18px_rgba(245,158,11,0.28)]',
      glowHover: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.55)]',
      ambientGlow: 'from-amber-500/30',
      modal: {
        subtitle: 'দারুল হারামাইন একাডেমি - সেশন ২০২৫-২০২৬',
        description: 'প্লে-গ্রুপ থেকে দাখিল ও হিফজ বিভাগে নতুন শিক্ষাবর্ষে শিক্ষার্থী ভর্তি চলছে। মেধা ও নৈতিকতার অনন্য মেলবন্ধনে আপনার সন্তানের আলোকিত দ্বীনি ও আধুনিক ভবিষ্যৎ নিশ্চিত করুন।',
        bulletPoints: [
          'প্লে, কেজি, ১ম-১০ম শ্রেণি ও নূরানী-হিফজ বিভাগে সীমিত আসনে সরাসরি ভর্তি।',
          'সহজ অনলাইন ফরম পূরণ এবং তাৎক্ষণিক রেজিস্ট্রেশন কনফার্মেশন সুবিধা।',
          'মেধাবী, হাফেজ ও অসচ্ছল পরিবারের সন্তানদের জন্য বিশেষ স্কলারশিপের ব্যবস্থা।',
          'ভর্তি বিষয়ক যেকোনো তথ্যের জন্য সার্বক্ষণিক হেল্পলাইন: 018 04 500 509'
        ],
        primaryActionLabel: 'ভর্তি ফরম পূরণ করুন',
        onPrimaryAction: () => {
          setSelectedCard(null);
          openAdmission();
        },
        secondaryActionLabel: 'কল করুন: 018 04 500 509',
        onSecondaryAction: () => {
          window.open('tel:01804500509');
        }
      }
    },
    // Card 2 (Orange Accent - Placed directly under 'অনলাইন ভর্তি')
    {
      id: 'language-courses',
      tag: 'ইংরেজি ও আরবি',
      title: 'ভাষা শিক্ষা কোর্স',
      icon: Languages,
      accentName: 'Orange Accent',
      innerGradient: 'from-[#ea580c] via-[#f97316] to-[#fb923c]',
      borderColor: 'border-[#f97316]',
      glowShadow: 'shadow-[0_0_18px_rgba(249,115,22,0.28)]',
      glowHover: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.55)]',
      ambientGlow: 'from-orange-500/30',
      modal: {
        subtitle: 'আন্তর্জাতিক মানের দ্বিভাষিক কমিউনিকেশন স্কিল',
        description: 'ইংরেজি ও আরবি—বিশ্বের সবচেয়ে গুরুত্বপূর্ণ দুটি ভাষায় সাবলীল দক্ষতা অর্জনের জন্য দারুল হারামাইন একাডেমির বিশেষ পাঠ্যক্রম ও ল্যাঙ্গুয়েজ ল্যাব।',
        bulletPoints: [
          'স্পোকেন ইংলিশ (Spoken English): ব্রিটিশ ও আমেরিকান ফোনেটিক্স, কারেক্ট প্রোনাউন্সিয়েশন ও প্রেজেন্টেশন।',
          'মুহাদাসা ও আরবি ভাষা (Spoken Arabic): আসমানি ওহী ও কুরআন বোঝার জন্য বিশুদ্ধ আরবি কথোপকথন।',
          'মাল্টিমিডিয়া ল্যাব ও অডিও ভিজ্যুয়াল প্র্যাকটিসের মাধ্যমে শিশুকাল থেকেই জড়তাহীন উচ্চারণ।',
          'দেশসেরা ও আন্তর্জাতিক অভিজ্ঞতা সম্পন্ন শিক্ষকমণ্ডলী দ্বারা নিবিড় পাঠদান।'
        ],
        primaryActionLabel: 'একাডেমিক বিভাগে বিস্তারিত দেখুন',
        onPrimaryAction: () => handleScrollToSection('academic-programs'),
        secondaryActionLabel: 'কোর্সে ভর্তি আবেদন',
        onSecondaryAction: () => {
          setSelectedCard(null);
          openAdmission();
        }
      }
    },
    // Card 3 (Deep Dark Forest / Emerald Green Gradient)
    {
      id: '3-in-1-curriculum',
      tag: 'কওমি • আলিয়া • জেনারেল',
      title: '3-in-1 সমন্বিত শিক্ষাক্রম',
      icon: Layers,
      accentName: 'Deep Dark Forest / Emerald Green',
      innerGradient: 'from-[#044D35] via-[#076344] to-[#0B7A55]',
      borderColor: 'border-[#0B7A55]',
      glowShadow: 'shadow-[0_0_18px_rgba(11,122,85,0.35)]',
      glowHover: 'hover:shadow-[0_0_30px_rgba(11,122,85,0.65)]',
      ambientGlow: 'from-[#0B7A55]/35',
      modal: {
        subtitle: 'ঐতিহ্য ও আধুনিকতার অনন্য ত্রিবেণী সংগম',
        description: 'কওমির গভীর দ্বীনি বুনিয়াদ, আলিয়ার সরকারি কারিকুলাম এবং আধুনিক বিজ্ঞান ও সাধারণ শিক্ষার যুগোপযোগী সমন্বয়। আমাদের লক্ষ্য একাধারে বিজ্ঞ আলেম ও যোগ্য আধুনিক নাগরিক গড়ে তোলা।',
        bulletPoints: [
          'কওমি নেসাব: সহীহ তাজবীদ, কায়েদা, ফিকহ ও মৌলিক ইসলামি জীবনবিধানের পূর্ণাঙ্গ শিক্ষা।',
          'আলিয়া সিলেবাস: সরকারি মাদরাসা শিক্ষা বোর্ডের অনুমোদিত পাঠ্যক্রম ও সার্টিফিকেট।',
          'জেনারেল এডুকেশন: জাতীয় শিক্ষাক্রম অনুসারে গণিত, বিজ্ঞান, ইংরেজি, সমাজ ও আইসিটি।',
          'একই সাথে বহুমুখী ক্ষেত্রে নেতৃত্ব দেওয়ার মতো সুষম ও শক্তিশালী ভিত্তি গঠন।'
        ],
        primaryActionLabel: 'সিলেবাস ও পাঠ্যক্রম দেখুন',
        onPrimaryAction: () => handleScrollToSection('academic-programs'),
        secondaryActionLabel: 'অনলাইন ভর্তি',
        onSecondaryAction: () => {
          setSelectedCard(null);
          openAdmission();
        }
      }
    }
  ];

  const column2Cards: FeatureCardItem[] = [
    // Card 4 (Cyan / Ocean Blue Gradient)
    {
      id: 'departments',
      tag: 'প্লে থেকে দাখিল',
      title: 'আমাদের বিভাগসমূহ',
      icon: BookOpen,
      accentName: 'Cyan / Ocean Blue',
      innerGradient: 'from-[#0284c7] via-[#0ea5e9] to-[#38bdf8]',
      borderColor: 'border-[#0ea5e9]',
      glowShadow: 'shadow-[0_0_18px_rgba(14,165,233,0.28)]',
      glowHover: 'hover:shadow-[0_0_30px_rgba(14,165,233,0.55)]',
      ambientGlow: 'from-cyan-500/30',
      modal: {
        subtitle: 'বয়সভিত্তিক সুবিন্যস্ত ও যুগোপযোগী বিভাগসমূহ',
        description: 'দারুল হারামাইন একাডেমিতে প্রতিটি শ্রেণির শিক্ষার্থীর বয়স ও মানসিক বিকাশ বিবেচনা করে আলাদা বিভাগীয় অবকাঠামো ও শিক্ষাপদ্ধতি পরিচালনা করা হয়।',
        bulletPoints: [
          'প্লে-গ্রুপ ও কিন্ডারগার্টেন: খেলনা, চার্ট ও আনন্দময় পরিবেশে বর্ণমালা ও নূরানী অক্ষরের হাতেখড়ি।',
          'প্রাথমিক বিভাগ (১ম-৫ম শ্রেণি): জাতীয় পাঠ্যক্রমের সাথে আরবি ভাষা ও হিফজের প্রাথমিক প্রস্তুতি।',
          'জুনিয়র ও দাখিল বিভাগ (৬ষ্ঠ-১০ম শ্রেণি): বোর্ড পরীক্ষা প্রস্তুতি ও উচ্চতর ইসলামি স্টাডিজ।',
          'সম্পূর্ণ পর্দা ও সুন্নাহসম্মত নিরাপদ পরিবেশে ছাত্র ও ছাত্রীদের সম্পূর্ণ পৃথক ক্যাম্পাস।'
        ],
        primaryActionLabel: 'সকল বিভাগ পর্যালোচনা করুন',
        onPrimaryAction: () => handleScrollToSection('academic-programs'),
        secondaryActionLabel: 'ভর্তি প্রক্রিয়া জানুন',
        onSecondaryAction: () => {
          setSelectedCard(null);
          openAdmission();
        }
      }
    },
    // Card 5 (Warm Golden / Yellow Gradient Accent)
    {
      id: 'noorani-hifz',
      tag: 'আন্তর্জাতিক মান',
      title: 'নূরানী হিফজ ও তাজবীদ',
      icon: Award,
      accentName: 'Warm Golden / Yellow',
      innerGradient: 'from-[#ca8a04] via-[#eab308] to-[#fde047]',
      borderColor: 'border-[#eab308]',
      glowShadow: 'shadow-[0_0_18px_rgba(234,179,8,0.28)]',
      glowHover: 'hover:shadow-[0_0_30px_rgba(234,179,8,0.55)]',
      ambientGlow: 'from-yellow-500/30',
      modal: {
        subtitle: 'বিশুদ্ধ মাখরাজ, মিষ্টি সুর ও আন্তর্জাতিক মানের হিফজ প্রোগ্রাম',
        description: 'দেশ-বিদেশের অভিজ্ঞ ও আন্তর্জাতিক সনদপ্রাপ্ত হুফফাজে কেরামের প্রত্যক্ষ তত্ত্বাবধানে তাজবীদ ও তারতীলের সাথে পবিত্র কুরআনুল কারীম হিফজ করার বিশেষ ব্যবস্থা।',
        bulletPoints: [
          'আন্তর্জাতিক মানসম্মত হুফফাজ দ্বারা প্রতি চরণের বিশুদ্ধ মাখরাজ ও সুর প্রশিক্ষণ।',
          '১ থেকে ৩ বছরের বিশেষ নিবিড় হিফজ প্রোগ্রাম ও শক্তিশালী রিভিশন (দৌর) পদ্ধতি।',
          'হিফজ চলাকালীন সাধারণ শিক্ষার ধারাবাহিকতা রক্ষা—যাতে পরবর্তী ক্লাসে কোনো পিছিয়ে না পড়ে।',
          'শীতাতপ নিয়ন্ত্রিত, শব্দমুক্ত হিফজখানা ও সার্বক্ষণিক স্বাস্থ্য পর্যবেক্ষণ।'
        ],
        primaryActionLabel: 'হিফজ বিভাগে আবেদন করুন',
        onPrimaryAction: () => {
          setSelectedCard(null);
          openAdmission();
        },
        secondaryActionLabel: 'হটলাইনে কথা বলুন',
        onSecondaryAction: () => {
          window.open('tel:01804500509');
        }
      }
    },
    // Card 6 (Rich Deep Purple / Royal Indigo Gradient Accent)
    {
      id: 'sunnah-tarbiyah',
      tag: 'আখলাক ও চরিত্র গঠন',
      title: 'সুন্নাহভিত্তিক তারবিয়াত',
      icon: Heart,
      accentName: 'Rich Deep Purple / Royal Indigo',
      innerGradient: 'from-[#3B1E54] via-[#4A2686] to-[#5C2FC2]',
      borderColor: 'border-[#5C2FC2]',
      glowShadow: 'shadow-[0_0_18px_rgba(92,47,194,0.35)]',
      glowHover: 'hover:shadow-[0_0_30px_rgba(92,47,194,0.65)]',
      ambientGlow: 'from-[#5C2FC2]/35',
      modal: {
        subtitle: 'আদর্শ চরিত্র ও আত্মিক পরিশুদ্ধির জীবন্ত পাঠশালা',
        description: 'শুধু পুঁথিগত শিক্ষাই যথেষ্ট নয়; রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লামের অনুপম চরিত্র ও আদবের বাস্তব প্রতিফলনে গড়ে তোলা হয় প্রতিটি শিক্ষার্থীর নৈতিক সত্ত্বা।',
        bulletPoints: [
          'প্রাত্যহিক জীবনের ২৪ ঘণ্টার সুন্নাহ, আদাব ও মাসনুন দোয়ার বাস্তব অনুশীলন।',
          'পাঁচ ওয়াক্ত সালাত জামাতে আদায় ও তাকওয়াভিত্তিক মানসিকতা গঠন।',
          'মোবাইল আসক্তি ও অনৈতিক অপসংস্কৃতি মুক্ত পবিত্র ক্যাম্পাস পরিবেশ।',
          'নিয়মিত অভিভাবক-শিক্ষক মতবিনিময় ও পরিবারভিত্তিক তারবিয়াত কাউন্সেলিং।'
        ],
        primaryActionLabel: 'আমাদের লক্ষ্য ও দর্শন জানুন',
        onPrimaryAction: () => handleScrollToSection('about'),
        secondaryActionLabel: 'ভর্তি ফরম পূরণ করুন',
        onSecondaryAction: () => {
          setSelectedCard(null);
          openAdmission();
        }
      }
    }
  ];

  // Render a Single Feature Card matching Zikrullah Foundation visual style exactly
  const renderCard = (card: FeatureCardItem) => {
    const IconComp = card.icon;
    return (
      <div
        key={card.id}
        onClick={() => setSelectedCard(card)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setSelectedCard(card);
          }
        }}
        className={`group relative flex flex-col justify-between overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] bg-[#071712] border-2 ${card.borderColor} ${card.glowShadow} ${card.glowHover} transition-all duration-300 ease-out transform hover:-translate-y-1 sm:hover:-translate-y-1.5 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center p-2 sm:p-2.5 md:p-3 select-none`}
      >
        {/* Top Inner Gradient Box */}
        <div 
          className={`w-full rounded-[14px] sm:rounded-[18px] md:rounded-[20px] bg-gradient-to-b ${card.innerGradient} py-3 sm:py-4.5 md:py-6 px-1.5 sm:px-3 flex flex-col items-center justify-center shadow-md group-hover:brightness-105 transition-all duration-300`}
        >
          {/* Tag at Top of Inner Box */}
          <span className="text-white font-bold text-[11px] sm:text-xs md:text-sm font-bengali tracking-wide drop-shadow-sm mb-1.5 sm:mb-2 text-center line-clamp-1">
            {card.tag}
          </span>

          {/* Center Icon */}
          <div className="text-white drop-shadow-md group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
            <IconComp className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" strokeWidth={2.2} />
          </div>
        </div>

        {/* Bottom Dark Area: Main Title */}
        <div className="w-full pt-2 sm:pt-2.5 md:pt-3.5 pb-1 sm:pb-1.5 px-1 flex items-center justify-center">
          <h3 className="text-white font-extrabold text-[12px] sm:text-sm md:text-base lg:text-lg font-bengali group-hover:text-amber-200 transition-colors tracking-tight text-center line-clamp-1 sm:line-clamp-2">
            {card.title}
          </h3>
        </div>
      </div>
    );
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

        {/* =========================================================================
            2-COLUMN FEATURE CARD SECTION (Zikrullah Foundation Exact Style)
            - 2 columns on ALL devices (Mobile, Tablet, Desktop) just like the screenshot!
            - Column 1: অনলাইন ভর্তি -> ভাষা শিক্ষা কোর্স -> 3-in-1 সমন্বিত শিক্ষাক্রম
            - Column 2: আমাদের বিভাগসমূহ -> নূরানী হিফজ ও তাজবীদ -> সুন্নাহভিত্তিক তারবিয়াত
            - Clicking any card opens a detailed popup/modal with full information
            ========================================================================= */}
        <div className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-6 px-1">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-5">
            {/* Column 1 (Left Side Stack) */}
            <div className="flex flex-col gap-2.5 sm:gap-4 md:gap-5">
              {column1Cards.map((card) => renderCard(card))}
            </div>

            {/* Column 2 (Right Side Stack) */}
            <div className="flex flex-col gap-2.5 sm:gap-4 md:gap-5">
              {column2Cards.map((card) => renderCard(card))}
            </div>
          </div>
        </div>

        {/* =========================================================================
            DETAILED POPUP / MODAL (Opens for any clicked card with full info)
            - Clean X button
            - Blurred backdrop
            - Matching vibrant gradient header banner & glowing theme
            - Bullet point details, highlights, and direct action triggers
            ========================================================================= */}
        <AnimatePresence>
          {selectedCard && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedCard(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
                className={`relative w-full max-w-lg bg-[#071712] border-2 ${selectedCard.borderColor} rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] text-left backdrop-blur-2xl max-h-[90vh] flex flex-col`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Colorful Gradient Top Banner */}
                <div className={`h-3 w-full bg-gradient-to-r ${selectedCard.innerGradient} flex-shrink-0`} />

                {/* Ambient Radial Glow in Modal */}
                <div className={`absolute top-0 right-0 w-60 h-60 bg-gradient-to-br ${selectedCard.ambientGlow} to-transparent rounded-full blur-3xl opacity-30 pointer-events-none`} />

                {/* Modal Header */}
                <div className="relative z-10 p-5 sm:p-6 pb-4 border-b border-white/10 flex items-start justify-between gap-4 flex-shrink-0">
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${selectedCard.innerGradient} flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/40 text-white`}>
                      {React.createElement(selectedCard.icon, {
                        className: "w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-sm",
                        strokeWidth: 2.2
                      })}
                    </div>
                    <div className="min-w-0">
                      <span className="inline-flex items-center text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-white mb-1 font-bengali shadow-sm">
                        {selectedCard.tag}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-bengali text-white tracking-tight">
                        {selectedCard.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-200/80 font-medium truncate">
                        {selectedCard.modal.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Close (X) Button */}
                  <button
                    onClick={() => setSelectedCard(null)}
                    aria-label="Close modal"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer flex-shrink-0 border border-white/15 hover:rotate-90 duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Scrollable Body */}
                <div className="relative z-10 p-5 sm:p-6 overflow-y-auto space-y-4 text-slate-200 text-sm">
                  {/* Brief Department Description */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 leading-relaxed text-emerald-50">
                    {selectedCard.modal.description}
                  </div>

                  {/* Feature & Curriculum Highlights */}
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-amber-300 mb-2.5 flex items-center gap-1.5 font-bengali">
                      <Sparkles className="w-3.5 h-3.5" />
                      বিভাগীয় মূল বৈশিষ্ট্য ও সুবিধা
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedCard.modal.bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="relative z-10 p-4 sm:p-5 pt-3 border-t border-white/10 bg-black/40 flex flex-col sm:flex-row items-center justify-end gap-2.5 flex-shrink-0">
                  {selectedCard.modal.secondaryActionLabel && selectedCard.modal.onSecondaryAction && (
                    <button
                      onClick={selectedCard.modal.onSecondaryAction}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center justify-center gap-2"
                    >
                      {selectedCard.modal.secondaryActionLabel.includes('018') ? (
                        <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                      ) : null}
                      {selectedCard.modal.secondaryActionLabel}
                    </button>
                  )}
                  <button
                    onClick={selectedCard.modal.onPrimaryAction}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-[#cfa852] hover:from-amber-300 hover:to-amber-500 text-slate-950 text-xs sm:text-sm font-bold shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{selectedCard.modal.primaryActionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Scrolling Ticker at Hero Bottom */}
      <div className="relative z-10 w-full overflow-hidden py-3 bg-black/40 backdrop-blur-md border-y border-white/15">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
          className="whitespace-nowrap text-base md:text-lg font-bold tracking-wide text-amber-400 drop-shadow flex gap-8 items-center"
        >
          <span>Welcome to <span className="text-yellow-300 font-extrabold">Darul Haramain Academy.</span> Founded by Hafizur Rahman Siddik (Founder & Chairman).</span>
          <span className="text-white/80 font-bold text-xl">•</span>
          <span>Welcome to <span className="text-yellow-300 font-extrabold">Darul Haramain Academy.</span> Founded by Hafizur Rahman Siddik (Founder & Chairman).</span>
          <span className="text-white/80 font-bold text-xl">•</span>
          <span>Welcome to <span className="text-yellow-300 font-extrabold">Darul Haramain Academy.</span> Founded by Hafizur Rahman Siddik (Founder & Chairman).</span>
          <span className="text-white/80 font-bold text-xl">•</span>
          <span>Welcome to <span className="text-yellow-300 font-extrabold">Darul Haramain Academy.</span> Founded by Hafizur Rahman Siddik (Founder & Chairman).</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
