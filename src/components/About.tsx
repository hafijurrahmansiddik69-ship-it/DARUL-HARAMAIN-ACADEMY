import React from 'react';
import { 
  Award, 
  Compass, 
  Heart, 
  Shield, 
  ArrowRight, 
  Target, 
  Eye, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap,
  BookOpen,
  UserCheck
} from 'lucide-react';
import { useAdmission } from '../context/AdmissionContext';

export default function About() {
  const { openAdmission } = useAdmission();

  return (
    <div className="bg-white">
      {/* =========================================================================
          SECTION 1: ACADEMY OVERVIEW (পরিচিতি)
      ========================================================================== */}
      <section id="about" className="py-20 px-6 relative overflow-hidden">
        {/* Anchor for About Academy */}
        <div id="about-academy" className="scroll-mt-24"></div>

        {/* Decorative background flourishes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left: Academy Visual Card */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-700 rounded-3xl blur-md opacity-20 group-hover:opacity-30 transition duration-700"></div>
            <div className="relative bg-slate-50 p-4 md:p-6 rounded-3xl shadow-xl border border-emerald-100 flex flex-col items-center text-center">
              <div className="w-full max-h-[360px] flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100 mb-5">
                <img 
                  src="/src/assets/images/academy_logo_1791617941870.jpg" 
                  alt="DARUL HARAMAIN ACADEMY Crest" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[300px] object-contain rounded-xl select-none" 
                />
              </div>

              <div className="w-full bg-emerald-950 text-white rounded-2xl p-4 text-center border-t-2 border-[#cfa852]">
                <span className="font-arabic text-xl text-[#cfa852] block font-bold">أكاديمية دار الحرمين</span>
                <h4 className="font-bold text-base mt-0.5">দারুল হারামাইন একাডেমি</h4>
                <p className="text-xs text-emerald-200 mt-1">বগুড়া, বাংলাদেশ</p>
              </div>

              {/* Founder & Chairman Profile Mini Card */}
              <a 
                href="#chairman-message" 
                className="w-full mt-3 p-3 bg-white hover:bg-emerald-50/50 rounded-2xl border border-emerald-100 flex items-center gap-3 text-left shadow-sm transition-all group/link"
              >
                <div className="w-12 h-12 rounded-full p-[2px] ring-2 ring-amber-400/60 shadow flex-shrink-0 overflow-hidden bg-black/10">
                  <img
                    src="https://res.cloudinary.com/dlklqihg6/image/upload/v1791964007/mvfdbk4sh4sp1jl7zruu.jpg"
                    alt="হাফিজুর রহমান সিদ্দিক - প্রতিষ্ঠাতা ও চেয়ারম্যান"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-full group-hover/link:scale-105 transition-transform"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block">
                    প্রতিষ্ঠাতা ও চেয়ারম্যান
                  </span>
                  <h5 className="text-sm font-bold text-slate-900 truncate group-hover/link:text-emerald-700">
                    হাফিজুর রহমান সিদ্দিক
                  </h5>
                  <span className="text-[10px] text-amber-700 font-medium inline-flex items-center gap-0.5 mt-0.5">
                    বাণী পড়ুন <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right: Academy Story & Vision */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs md:text-sm font-semibold mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>একাডেমির পরিচিতি ও সার্বিক রূপরেখা</span>
            </div>
            
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-950 tracking-tight leading-tight">
                ইসলামি মূল্যবোধ ও আধুনিক শিক্ষার এক অনন্য সমন্বয়
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-700 to-[#cfa852] rounded-full my-4"></div>
              <p className="text-lg md:text-xl text-emerald-800 font-bold leading-relaxed font-sans">
                An Arabic-English Medium Academy with Hifzul Quran
              </p>
            </div>
            
            <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
              দারুল হারামাইন একাডেমি কুরআন হিফজ করার পাশাপাশি আন্তর্জাতিক মানের সিলেবাসে আরবি ও ইংরেজি ভাষায় দক্ষতা অর্জনের জন্য এক নির্ভরযোগ্য দ্বীনি শিক্ষাপ্রতিষ্ঠান। এখানে কওমি নেসাবের বুনিয়াদি দ্বীনি ইলম, আলিয়া মাদ্রাসার শিক্ষা এবং আন্তর্জাতিক ইংলিশ মিডিয়াম ও ক্যাডেট স্কুল স্ট্যান্ডার্ডের সমন্বয়ে শিক্ষার্থীদের নৈতিক, আত্মিক ও একাডেমিক নেতৃত্বে বলীয়ান করে গড়ে তোলা হয়।
            </p>

            {/* 4 Pillar Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">আন্তর্জাতিক তাজবিদ মান</h4>
                  <p className="text-xs text-slate-500 mt-0.5">বিশুদ্ধ তিলাওয়াত ও বিশ্বমানের ক্বিরাত চর্চা</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">3-in-1 সমন্বিত কারিকুলাম</h4>
                  <p className="text-xs text-slate-500 mt-0.5">কওমি + আলিয়া + ইংলিশ মিডিয়াম স্ট্যান্ডার্ড</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">নিরাপদ ও সুশৃঙ্খল পরিবেশ</h4>
                  <p className="text-xs text-slate-500 mt-0.5">শারীরিক ও মানসিক সুরক্ষামূলক ক্যাম্পাস</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">আদর্শ সুন্নাহভিত্তিক তারবিয়াত</h4>
                  <p className="text-xs text-slate-500 mt-0.5">সুন্নাহ মোতাবেক চরিত্র গঠন ও নিত্য আমল</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => openAdmission()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>অনলাইন ভর্তি আবেদন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#chairman-message"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#cfa852]/15 hover:bg-[#cfa852]/25 text-emerald-950 font-bold text-sm border border-[#cfa852]/40 transition-all"
              >
                <span>চেয়ারম্যানের বাণী</span>
              </a>
              <a
                href="#mission-vision"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all"
              >
                <span>লক্ষ্য ও উদ্দেশ্য</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FOUNDER & CHAIRMAN'S MESSAGE (প্রতিষ্ঠাতা ও চেয়ারম্যানের বাণী)
      ========================================================================== */}
      <section id="chairman-message" className="py-20 px-6 bg-gradient-to-b from-slate-50 via-emerald-950/5 to-slate-50 border-t border-slate-200/80 relative">
        <div className="max-w-5xl mx-auto">
          {/* Header Badge */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs sm:text-sm font-semibold mb-3">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>দিকনির্দেশনা ও অভিভাবকবার্তা</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-950 tracking-tight">
              প্রতিষ্ঠাতা ও চেয়ারম্যানের বাণী
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              দারুল হারামাইন একাডেমির সম্মানিত প্রতিষ্ঠাতা ও চেয়ারম্যান হাফিজুর রহমান সিদ্দিক-এর উদ্বোধনী বার্তা
            </p>
          </div>

          {/* Chairman Quote Card */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-emerald-100 overflow-hidden">
            {/* Background watermarks */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-400/10 via-emerald-600/5 to-transparent rounded-full blur-2xl pointer-events-none"></div>
            <Quote className="absolute right-6 top-8 w-28 h-28 text-emerald-900/5 pointer-events-none select-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
              
              {/* Chairman Photo & Title */}
              <div className="lg:col-span-4 flex flex-col items-center text-center lg:sticky lg:top-28">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-[#cfa852] to-emerald-700 shadow-xl mb-4">
                  <div className="w-full h-full rounded-full ring-4 ring-white overflow-hidden bg-emerald-950">
                    <img
                      src="https://res.cloudinary.com/dlklqihg6/image/upload/v1791964007/mvfdbk4sh4sp1jl7zruu.jpg"
                      alt="Hafizur Rahman Siddik - Founder & Chairman"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-950 leading-tight">
                  হাফিজুর রহমান সিদ্দিক
                </h3>
                <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mt-1 block font-sans">
                  Hafizur Rahman Siddik
                </span>
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-900 text-amber-300 text-xs font-semibold shadow-sm">
                  <span>প্রতিষ্ঠাতা ও চেয়ারম্যান</span>
                </div>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  দারুল হারামাইন একাডেমি, বগুড়া
                </p>

                {/* Direct quick action badge */}
                <div className="w-full mt-5 p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-100 hidden lg:block text-left">
                  <span className="text-[11px] font-bold text-emerald-900 block mb-1">
                    দ্বীনি ও আধুনিক শিক্ষার সোনালী মেলবন্ধন
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    কুরআন হিফজ, বিশ্বমানের বিশুদ্ধ তিলাওয়াত এবং আধুনিক বিজ্ঞান-প্রযুক্তির সমন্বিত আদর্শ বিদ্যাপীঠ।
                  </p>
                </div>
              </div>

              {/* Message Content (Exact Text Provided by User) */}
              <div className="lg:col-span-8 lg:border-l lg:border-emerald-100 lg:pl-10 text-left">
                
                {/* Bismillah Calligraphy */}
                <div className="text-center lg:text-left mb-6 pb-4 border-b border-emerald-100/80">
                  <span className="font-arabic text-2xl sm:text-3xl text-emerald-800 font-bold tracking-wide block">
                    بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                  </span>
                </div>

                {/* Salutation */}
                <div className="mb-5 pb-3 border-b border-slate-100">
                  <h4 className="text-lg sm:text-xl font-bold text-emerald-950">
                    প্রিয় অভিভাবক ও দ্বীনি ভাই-বোনেরা,
                  </h4>
                  <p className="text-emerald-800 font-semibold text-sm sm:text-base mt-1">
                    আসসালামু আলাইকুম ওয়ারাহমাতুল্লাহি ওয়াবারাকাতুহু।
                  </p>
                </div>

                {/* Message Body Paragraphs */}
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    একবিংশ শতাব্দীর এই চ্যালেঞ্জিং ও প্রযুক্তিনির্ভর যুগে আমাদের সবচেয়ে বড় দুশ্চিন্তার জায়গা—সন্তানের ভবিষ্যৎ এবং তার ইমান-আমল রক্ষা করা। চারপাশের আধুনিক শিক্ষার প্রসার আমাদের সন্তানকে হয়তো জাগতিক দিক থেকে দক্ষ করে তুলছে, কিন্তু অনেক ক্ষেত্রে তারা হারিয়ে ফেলছে আত্মিক শুভ্রতা, নৈতিক মূল্যবোধ ও ইসলামী পরিচয়।
                  </p>

                  <p>
                    হাজারো স্কুল ও মাদ্রাসার ভিড়ে <strong className="text-emerald-900 font-bold">দারুল হারামাইন একাডেমি (Darul Haramain Academy)</strong> কোনো সাধারণ শিক্ষাপ্রতিষ্ঠান নয়; বরং এটি আধুনিকতা ও দ্বীনের এক সোনালী মেলবন্ধন। আমাদের স্বপ্ন ও লক্ষ্য অত্যন্ত সুস্পষ্ট—আমরা এমন একটি প্রজন্ম গড়ে তুলতে চাই, যারা:
                  </p>

                  {/* Bulleted Points Grid */}
                  <div className="my-4 space-y-2.5 bg-gradient-to-r from-emerald-50/80 to-slate-50 p-4 sm:p-5 rounded-2xl border border-emerald-100/90 shadow-2xs">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                      </div>
                      <p className="text-sm sm:text-base text-slate-800 leading-snug">
                        পবিত্র কুরআনের জ্ঞানে আলোকিত হবে এবং আন্তর্জাতিক মানের বিশুদ্ধ তিলাওয়াত ও হিফজ সম্পন্ন করবে।
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                      </div>
                      <p className="text-sm sm:text-base text-slate-800 leading-snug">
                        সাধারণ শিক্ষা ও আধুনিক বিজ্ঞান-প্রযুক্তিতে সমকালীন যে কোনো শিক্ষার্থীর চেয়ে এক ধাপ এগিয়ে থাকবে।
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                      </div>
                      <p className="text-sm sm:text-base text-slate-800 leading-snug">
                        আরবি ও ইংরেজি উভয় ভাষায় সাবলীল যোগাযোগে পারদর্শী হয়ে বিশ্বমঞ্চে ইসলামের সঠিক প্রতিনিধিত্ব করবে।
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                      </div>
                      <p className="text-sm sm:text-base text-slate-800 leading-snug">
                        সর্বোপরি, সুন্নাহর রঙে রঙিন হয়ে মা-বাবা ও সমাজের প্রতি দায়বদ্ধ, বিনয়ী ও খোদাভীরু মানুষ হিসেবে গড়ে উঠবে।
                      </p>
                    </div>
                  </div>

                  <p>
                    আমরা বিশ্বাস করি, প্রতিটি শিশুই এক একটি অমূল্য আমানত। আর এই আমানতের সঠিক পরিচর্যা ও সুরক্ষাই আমাদের মূল ব্রত। অভিজ্ঞ শিক্ষকমণ্ডলী, আন্তর্জাতিক কারিকুলাম এবং সুন্নাহভিত্তিক কঠোর তারবিয়াতের সমন্বয়ে আমরা আপনার সন্তানকে দুনিয়া ও আখিরাত—উভয় জাহানের সফলতার পথে এগিয়ে নিতে অঙ্গীকারাবদ্ধ।
                  </p>

                  <div className="bg-amber-50/70 p-4 sm:p-5 rounded-2xl border border-amber-200/70 text-emerald-950 font-medium leading-relaxed">
                    আসুন, আপনার কলিজার টুকরো সন্তানের একটি আলোকিত ও নিরাপদ ভবিষ্যৎ বিনির্মাণে আমরা কাঁধে কাঁধ মিলিয়ে কাজ করি। আল্লাহ তায়ালা দারুল হারামাইন একাডেমিকে দ্বীনের এক সুদৃঢ় দুর্গ হিসেবে কবুল করুন এবং আমাদের সকল নিষ্ঠাবান প্রচেষ্টাকে বরকতময় করুন। আমিন।
                  </div>
                </div>

                {/* Signature details */}
                <div className="mt-8 pt-6 border-t border-emerald-100 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
                  <div className="text-slate-800">
                    <p className="text-sm text-slate-600 font-medium">ওয়াসসালাম,</p>
                    <p className="text-xs text-emerald-700 font-semibold mt-0.5">আপনাদের দোয়াপ্রার্থী,</p>
                    <h5 className="text-lg sm:text-xl font-bold text-emerald-950 mt-1">
                      হাফিজুর রহমান সিদ্দিক
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                      প্রতিষ্ঠাতা ও চেয়ারম্যান, দারুল হারামাইন একাডেমি
                    </p>
                  </div>

                  <button
                    onClick={() => openAdmission()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-900 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer w-fit"
                  >
                    <GraduationCap className="w-4 h-4 text-amber-300" />
                    <span>অনলাইন ভর্তি আবেদন</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: MISSION & VISION (লক্ষ্য ও উদ্দেশ্য)
      ========================================================================== */}
      <section id="mission-vision" className="py-20 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs md:text-sm font-semibold mb-3">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>লক্ষ্য ও রূপকল্প (Mission & Vision)</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-950 tracking-tight">
              আমাদের লক্ষ্য ও উদ্দেশ্য
            </h2>
            <div className="w-20 h-1 bg-[#cfa852] rounded-full mx-auto my-3"></div>
            <p className="text-slate-600 text-base">
              দারুল হারামাইন একাডেমির সুদূরপ্রসারী আদর্শ, শিক্ষাদর্শন ও ভবিষ্যৎ গন্তব্য
            </p>
          </div>

          {/* 2-Card Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: Mission (আমাদের লক্ষ্য) */}
            <div className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-emerald-700/40 flex flex-col justify-between group hover:border-[#cfa852]/60 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#cfa852]/10 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md text-[#cfa852] border border-white/15 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-amber-400" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#cfa852]/20 text-[#cfa852] border border-[#cfa852]/40 uppercase tracking-wider">
                    Our Mission • মিশন
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 flex items-center gap-2">
                  <span>আমাদের লক্ষ্য (Mission)</span>
                </h3>

                {/* EXACT MISSION TEXT */}
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                  "আমাদের লক্ষ্য হলো কোরআন ও সুন্নাহর শাশ্বত জ্ঞানার্জনের পাশাপাশি আধুনিক বিজ্ঞান, প্রযুক্তি এবং প্রমিত শিক্ষার সুসমন্বয়ে একটি মেধাবী, নৈতিক ও নেতৃত্বগুণসম্পন্ন প্রজন্ম তৈরি করা। আমরা চাই শিক্ষার্থীরা যুগোপযোগী শিক্ষায় উৎকর্ষ অর্জনের মাধ্যমে আত্মবিশ্বাসী, প্রজ্ঞাবান ও সৎ মুসলিম হিসেবে গড়ে উঠুক এবং দেশ ও উম্মাহর সার্বিক কল্যাণে কার্যকর ভূমিকা রাখুক।"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-amber-200/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#cfa852] flex-shrink-0" />
                <span>নৈতিক নেতৃত্ব • প্রমিত শিক্ষা • যুগোপযোগী উৎকর্ষ</span>
              </div>
            </div>

            {/* Card 2: Vision (আমাদের ভিশন) */}
            <div className="relative bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-amber-500/30 flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md text-[#cfa852] border border-white/15 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    <Eye className="w-7 h-7 text-emerald-400" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 uppercase tracking-wider">
                    Our Vision • ভিশন
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 flex items-center gap-2">
                  <span>আমাদের ভিশন (Vision)</span>
                </h3>

                {/* EXACT VISION TEXT */}
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                  "দারুল হারামাইন একাডেমিকে এমন একটি আদর্শ শিক্ষাপ্রতিষ্ঠান হিসেবে প্রতিষ্ঠিত করা, যেখানে বিশ্বমানের আধুনিক শিক্ষাব্যবস্থার সাথে ইসলামী মূল্যবোধের সুদৃঢ় মেলবন্ধন রচিত হয়। আমাদের লক্ষ্য হলো বিশ্বমঞ্চে প্রতিযোগিতায় টিকে থাকার মতো দক্ষ, নৈতিকতা সম্পন্ন এবং আলোকিত মানবসম্পদ উপহার দেওয়া।"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-emerald-200/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>বিশ্বমানের শিক্ষা • ইসলামী মূল্যবোধ • আলোকিত মানবসম্পদ</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PRINCIPAL'S MESSAGE (প্রিন্সিপালের বাণী)
      ========================================================================== */}
      <section id="principal-message" className="py-16 px-6 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-md border border-emerald-100 flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-emerald-800 to-amber-600 p-1 flex-shrink-0 shadow-lg text-white flex flex-col items-center justify-center text-center">
            <UserCheck className="w-10 h-10 text-amber-300 mb-1" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Principal</span>
          </div>
          <div className="text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100/70 text-emerald-900 text-xs font-semibold mb-2">
              <span>প্রিন্সিপালের বাণী</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-emerald-950 mb-2">
              নিয়মানুবর্তিতা, নৈতিকতা ও আধুনিক পাঠদান
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              "দারুল হারামাইন একাডেমিতে প্রতিটি শিক্ষার্থীর মানসিক বিকাশ ও হিফজ অগ্রগতির জন্য আমরা সার্বক্ষণিক নজরদারি ও নিবিড় পরিচর্যা নিশ্চিত করি। আধুনিক প্রযুক্তিনির্ভর ক্লাসরুম, আরবি ও ইংরেজি স্পোকেন চর্চা এবং অভিজ্ঞ শিক্ষকদের আন্তরিক সান্নিধ্যে আমাদের শিক্ষার্থীরা ভবিষ্যতে সফল ব্যক্তিত্ব হয়ে গড়ে উঠছে।"
            </p>
            <div className="mt-3 text-xs text-slate-500 font-medium">
              — অধ্যক্ষ / প্রিন্সিপাল, দারুল হারামাইন একাডেমি
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
