import React from 'react';

export default function Services() {
  const departments = [
    { title: "📖 কায়দা বিভাগ", desc: "সহজ পদ্ধতিতে কুরআন শিক্ষার প্রথম ধাপ" },
    { title: "📗 আমপারা বিভাগ", desc: "বিশুদ্ধ উচ্চারণে ছোট ছোট সূরা মুখস্থকরণ" },
    { title: "📘 নাজেরা বিভাগ", desc: "দেখে দেখে সম্পূর্ণ আল-কুরআন তিলাওয়াত শিক্ষা" },
    { title: "☀️ নূরানী বিভাগ", desc: "ইসলামি মৌলিক শিক্ষা ও দ্বীনি তারবিয়াত" },
    { title: "🌍 আন্তর্জাতিক মানের হিফজ", desc: "তাজবিদসহ কুরআন হিফজ করার বিশ্বমানের পাঠ্যক্রম" },
    { title: "🎧 শুনানী বিভাগ", desc: "হিফজকৃত অংশ বারবার শুনিয়ে ইয়াদ বা স্মৃতি সুদৃঢ়করণ" },
  ];

  const classes = [
    { name: "প্লে ক্লাস (Play Class)", level: "pre-primary" },
    { name: "নার্সারী / শিশু শ্রেণী", level: "pre-primary" },
    { name: "১ম শ্রেণী", level: "primary" },
    { name: "২য় শ্রেণী", level: "primary" },
    { name: "৩য় শ্রেণী", level: "primary" },
    { name: "৪র্থ শ্রেণী", level: "primary" },
    { name: "৫ম শ্রেণী", level: "primary" },
    { name: "৬ষ্ঠ শ্রেণী", level: "secondary" },
    { name: "৭ম শ্রেণী", level: "secondary" },
    { name: "৮ম শ্রেণী", level: "secondary" },
    { name: "৯ম শ্রেণী", level: "high-school" },
    { name: "১০ম শ্রেণী", level: "high-school" },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#cfa852]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Card 1: Proposed Curriculum & Departments */}
        <div className="bg-white rounded-3xl shadow-xl border border-emerald-100/50 overflow-hidden transition-all duration-300 hover:shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 via-emerald-900 to-emerald-950 py-8 px-6 text-center relative border-b-4 border-[#cfa852]">
            <div className="absolute inset-0 bg-[radial-gradient(#cfa852_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
            <span className="text-3xl md:text-4xl block mb-2" id="academy-emoji">🕌</span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight" id="academy-curriculum-title">
              প্রস্তাবিত শিক্ষাক্রম ও বিভাগসমূহ
            </h2>
            <div className="w-16 h-1 bg-[#cfa852] mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Body */}
          <div className="p-6 md:p-10">
            <p className="text-slate-600 text-center text-base md:text-lg mb-8 max-w-xl mx-auto font-medium">
              মাদ্রাসার প্রাথমিক পরিকল্পনা অনুযায়ী নিম্নোক্ত বিভাগসমূহ চালু করা হবে:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {departments.map((dept, idx) => (
                <div 
                  key={idx} 
                  id={`dept-card-${idx}`}
                  className="group relative p-5 bg-slate-50/60 hover:bg-white rounded-2xl border-l-4 border-emerald-600 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-y-slate-100 border-r-slate-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-emerald-950 group-hover:text-emerald-700 transition-colors">
                        {dept.title}
                      </h4>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        {dept.desc}
                      </p>
                    </div>
                  </div>
                  {/* Accent on hover */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#cfa852]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: Academic Activities & Classes */}
        <div className="bg-white rounded-3xl shadow-xl border border-emerald-100/50 overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="p-6 md:p-10">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="text-2xl" id="school-emoji">🏫</span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-emerald-900" id="academic-activity-title">
                  একাডেমিক কার্যক্রম ও শ্রেণীসমূহ
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  আমাদের একাডেমিক কার্যক্রম নিম্নোক্ত শ্রেণীগুলো নিয়ে পরিচালিত হবে:
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {classes.map((cls, idx) => {
                let badgeStyle = "bg-slate-100 text-slate-700 border-slate-200/60 hover:bg-slate-200/70";
                
                if (cls.level === "primary") {
                  badgeStyle = "bg-emerald-50 text-emerald-800 border-emerald-100/80 hover:bg-emerald-100/80";
                } else if (cls.level === "secondary") {
                  badgeStyle = "bg-sky-50 text-sky-800 border-sky-100/80 hover:bg-sky-100/80";
                } else if (cls.level === "high-school") {
                  badgeStyle = "bg-rose-50 text-rose-800 border-rose-100/80 hover:bg-rose-100/80";
                }

                return (
                  <span
                    key={idx}
                    id={`class-badge-${idx}`}
                    className={`inline-flex items-center justify-center px-4 py-3 rounded-2xl border text-sm md:text-base font-semibold shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 cursor-default select-none ${badgeStyle}`}
                  >
                    {cls.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

