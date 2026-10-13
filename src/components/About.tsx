import React from 'react';
import { Award, Compass, Heart, Shield, ArrowRight } from 'lucide-react';
import { useAdmission } from '../context/AdmissionContext';

const About = () => {
  const { openAdmission } = useAdmission();

  return (
    <section id="about" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Decorative background flourishes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Academy Visual Card */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-700 rounded-3xl blur-md opacity-20 group-hover:opacity-30 transition duration-700"></div>
          <div className="relative bg-slate-50 p-4 md:p-6 rounded-3xl shadow-xl border border-emerald-100 flex flex-col items-center text-center">
            <div className="w-full max-h-[380px] flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100 mb-6">
              <img 
                src="/src/assets/images/academy_logo_1791617941870.jpg" 
                alt="DARUL HARAMAIN ACADEMY Crest" 
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[320px] object-contain rounded-xl select-none" 
              />
            </div>

            <div className="w-full bg-emerald-950 text-white rounded-2xl p-4 text-center border-t-2 border-[#cfa852]">
              <span className="font-arabic text-xl text-[#cfa852] block font-bold">أكاديمية دار الحرمين</span>
              <h4 className="font-bold text-base mt-0.5">দারুল হারামাইন একাডেমি</h4>
              <p className="text-xs text-emerald-200 mt-1">বগুড়া, বাংলাদেশ</p>
            </div>
          </div>
        </div>
        
        {/* Right: Academy Story & Vision */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs md:text-sm font-semibold mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>আমাদের পরিচিতি ও লক্ষ্য</span>
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
            দারুল হারামাইন একাডেমি কুরআন হিফজ করার পাশাপাশি আন্তর্জাতিক মানের সিলেবাসে আরবি ও ইংরেজি ভাষায় দক্ষতা অর্জনের জন্য এক নির্ভরযোগ্য দ্বীনি শিক্ষাপ্রতিষ্ঠান। এখানে শিক্ষার্থীদের শুধু কিতাবি বিদ্যায় নয়, বরং আমল, আখলাক ও নেতৃত্বগুণে যোগ্য করে গড়ে তোলা হয়।
          </p>

          {/* 4 Pillar Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">আন্তর্জাতিক তাজবিদ মান</h4>
                <p className="text-xs text-slate-500 mt-0.5">বিশুদ্ধ তিলাওয়াত ও ক্বিরাত চর্চা</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">দ্বিমুখী সমন্বিত শিক্ষা</h4>
                <p className="text-xs text-slate-500 mt-0.5">হিফজের সাথে আধুনিক জেনারেল কারিকুলাম</p>
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
                <h4 className="text-sm font-bold text-slate-900">আদর্শ তারবিয়াত</h4>
                <p className="text-xs text-slate-500 mt-0.5">সুন্নাহ ভিত্তিক চরিত্র গঠন ও আদব</p>
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
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all"
            >
              <span>ক্যাম্পাস যোগাযোগ</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
