import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div className="relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-600 to-[#cfa852] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-slate-100">
            <img 
              src="https://res.cloudinary.com/dlklqihg6/image/upload/v1783328475/xwuyenprfs912lc0cg72.jpg" 
              alt="DARUL HARAMAIN ACADEMY Logo" 
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[450px] object-contain rounded-xl select-none mx-auto" 
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold mb-6 w-fit mx-auto md:mx-0">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            আমাদের সম্পর্কে
          </div>
          
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-black text-emerald-900 tracking-tight">
              DARUL HARAMAIN ACADEMY
            </h2>
            <div className="w-20 h-1 bg-[#cfa852] rounded my-4 mx-auto md:mx-0"></div>
            <p className="text-lg md:text-xl text-emerald-800 font-bold leading-relaxed">
              An Arabic-English Medium Academy with Hifzul Quran
            </p>
          </div>
          
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light text-center md:text-left">
            ইসলামি মূল্যবোধ এবং আধুনিক শিক্ষার এক অনন্য সমন্বয়। কুরআন হিফজ করার পাশাপাশি আন্তর্জাতিক মানের সিলেবাসে আরবি ও ইংরেজি ভাষায় দক্ষতা অর্জনের জন্য এক নির্ভরযোগ্য দ্বীনি শিক্ষাপ্রতিষ্ঠান।
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
