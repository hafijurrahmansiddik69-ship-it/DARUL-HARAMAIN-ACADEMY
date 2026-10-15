import React, { useState } from 'react';
import { Bell, Calendar, ArrowRight, FileText, CheckCircle2, X, Download, Share2 } from 'lucide-react';
import { useAdmission } from '../context/AdmissionContext';

interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: string;
  isUrgent?: boolean;
  summary: string;
  content: string;
}

const notices: NoticeItem[] = [
  {
    id: 'n-1',
    title: 'দারুল হারামাইন একাডেমিতে নতুন শিক্ষাবর্ষে হিফজ ও প্লে-১০ম শ্রেণিতে ভর্তি চলছে',
    date: '১০ অক্টোবর, ২০২৬',
    category: 'ভর্তি বিজ্ঞপ্তি',
    isUrgent: true,
    summary: 'আন্তর্জাতিক মানের হিফজুল কুরআন এবং আধুনিক জেনারেল শিক্ষা সমন্বিত পাঠ্যক্রমে সীমিত আসনে শিক্ষার্থী ভর্তি নেওয়া হচ্ছে।',
    content: 'আলহামদুলিল্লাহ, দারুল হারামাইন একাডেমি (বগুড়া শাখা)-তে নতুন শিক্ষাবর্ষের ভর্তি কার্যক্রম শুরু হয়েছে। আগ্রহী অভিভাবকগণ অনলাইন ফরম অথবা সরাসরি ক্যাম্পাসে এসে ভর্তি ফরম সংগ্রহ করতে পারবেন। ভর্তি পরীক্ষায় উত্তীর্ণদের জন্য বিশেষ বৃত্তির ব্যবস্থা রয়েছে। যোগাযোগ: ০১৮ ০৪ ৫০০ ৫০৯।',
  },
  {
    id: 'n-2',
    title: 'হিফজুল কুরআন শাখার প্রাথমিক মেধা যাচাই ও তিলাওয়াত অডিশন পরীক্ষা',
    date: '০৫ অক্টোবর, ২০২৬',
    category: 'হিফজ অডিশন',
    summary: 'হিফজ বিভাগে ভর্তিচ্ছু শিক্ষার্থীদের বিশুদ্ধ মাখরাজ, হরকত ও স্মৃতিশক্তি পরীক্ষার জন্য মৌখিক সাক্ষাৎকার অনুষ্ঠিত হবে।',
    content: 'হিফজুল কুরআন বিভাগে নতুন আবেদনকারী শিক্ষার্থীদের মাখরাজ ও তাজবিদ নিরীক্ষণ অনুষ্ঠিত হবে। নির্ধারিত সময়ে শিক্ষার্থীর জন্ম নিবন্ধন কপি ও অভিভাবকসহ ক্যাম্পাসে উপস্থিত থাকার অনুরোধ করা যাচ্ছে।',
  },
  {
    id: 'n-3',
    title: 'অভিভাবক সমাবেশ ও ত্রৈমাসিক প্রগ্রেস রিপোর্ট পর্যালোচনা সভা',
    date: '২৮ সেপ্টেম্বর, ২০২৬',
    category: 'অভিভাবক সভা',
    summary: 'শিক্ষার্থীদের চারিত্রিক উন্নতি, আমল-আখলাক ও পড়ালেখার অগ্রগতি সম্পর্কে মতবিনিময় করতে সম্মানিত অভিভাবকদের আমন্ত্রণ।',
    content: 'আসসালামু আলাইকুম। শিক্ষার্থীদের সার্বিক মেধা ও আধ্যাত্মিক উন্নতির পর্যালোচনায় আগামী শুক্রবার বাদ জুমা একাডেমি অডিটোরিয়ামে অভিভাবক সমাবেশ অনুষ্ঠিত হবে। সকল অভিভাবকের উপস্থিতি একান্তভাবে কাম্য।',
  },
  {
    id: 'n-4',
    title: 'নতুন সেমিস্টারের কিতাব ও পাঠ্যপুস্তক বিতরণ সংক্রান্ত নোটিশ',
    date: '১৫ সেপ্টেম্বর, ২০২৬',
    category: 'একাডেমিক',
    summary: 'সকল বিভাগের শিক্ষার্থীদের জন্য নতুন সিলেবাসের পাঠ্যবই ও নোটবুক অফিস কক্ষ থেকে সংগ্রহ করার নির্দেশনা।',
    content: 'দারুল হারামাইন একাডেমির নূরানী, নাজেরা ও সাধারণ শিক্ষার অনুমোদিত বোর্ড বই ও মাদ্রাসার বিশেষ পাঠ্যপুস্তক নির্ধারিত ফি পরিশোধ সাপেক্ষে একাডেমি কার্যালয় থেকে বিতরণ করা হচ্ছে।',
  },
];

export default function NoticeBoard() {
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const { openAdmission } = useAdmission();

  return (
    <section id="notice-board" className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-100 pb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 mb-2">
              <Bell className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
              <span>একাডেমি নোটিশ বোর্ড</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight">
              সাম্প্রতিক নোটিশ ও নোটিফিকেশন
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-1">
              দারুল হারামাইন একাডেমির সকল গুরুত্বপূর্ণ ঘোষণা ও ইভেন্ট আপডেট
            </p>
          </div>
          <button
            onClick={() => openAdmission()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-sm font-bold shadow-sm transition-all self-start md:self-auto cursor-pointer"
          >
            <span>ভর্তি আবেদন করুন</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Notices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              onClick={() => setSelectedNotice(notice)}
              className="bg-slate-50/80 hover:bg-white rounded-2xl p-6 border border-slate-200/70 hover:border-emerald-300 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-[#cfa852]" />
                    <span>{notice.date}</span>
                    <span>·</span>
                    <span className="font-semibold text-emerald-800">{notice.category}</span>
                  </div>
                  {notice.isUrgent && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-rose-100 text-rose-700 border border-rose-200">
                      জরুরি
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors mb-2 leading-snug">
                  {notice.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                  {notice.summary}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-amber-700">
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  সম্পূর্ণ বিবরণ পড়ুন
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Notice Detail Modal */}
        {selectedNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div 
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top */}
              <div className="bg-emerald-900 text-white p-6 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-200 text-xs mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedNotice.date}</span>
                    <span>•</span>
                    <span className="text-amber-300 font-bold">{selectedNotice.category}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight">
                    {selectedNotice.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center ml-4 flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 space-y-4">
                <p className="text-slate-700 text-base leading-relaxed">
                  {selectedNotice.content}
                </p>

                <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 flex items-center gap-3 text-sm text-emerald-900">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                  <span>যেকোনো তথ্যের জন্য কল করুন: <strong>০১৮ ০৪ ৫০০ ৫০৯</strong> অথবা সরাসরি একাডেমি অফিসে যোগাযোগ করুন।</span>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-end gap-3 border-t border-slate-100">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: selectedNotice.title,
                          text: selectedNotice.content,
                          url: window.location.href,
                        });
                      } else {
                        navigator.clipboard.writeText(selectedNotice.title + '\n' + selectedNotice.content);
                        alert('নোটিশের তথ্য কপি করা হয়েছে!');
                      }
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
                  >
                    <Share2 className="w-4 h-4" />
                    শেয়ার করুন
                  </button>
                  <button
                    onClick={() => {
                      setSelectedNotice(null);
                      openAdmission();
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition"
                  >
                    অনলাইন ভর্তি
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
