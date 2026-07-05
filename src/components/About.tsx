import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div className="relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-600 to-[#cfa852] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white p-2 rounded-2xl shadow-xl">
            <img 
              src="https://res.cloudinary.com/dlklqihg6/image/upload/v1783251741/qcqbayqn3zzxkpwi1lnb.jpg" 
              alt="DARUL HARAMAIN ACADEMY" 
              referrerPolicy="no-referrer"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-inner select-none" 
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            আমাদের সম্পর্কে
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-emerald-900 tracking-tight">
            DARUL HARAMAIN ACADEMY
          </h2>
          <div className="w-20 h-1 bg-[#cfa852] rounded mb-8"></div>
          <p className="text-xl md:text-2xl text-emerald-800 font-bold leading-relaxed mb-6">
            An Arabic-English Medium Academy with Hifzul Quran
          </p>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light mb-8">
            ইসলামি মূল্যবোধ এবং আধুনিক শিক্ষার এক অনন্য সমন্বয়। কুরআন হিফজ করার পাশাপাশি আন্তর্জাতিক মানের সিলেবাসে আরবি ও ইংরেজি ভাষায় দক্ষতা অর্জনের জন্য এক নির্ভরযোগ্য দ্বীনি শিক্ষাপ্রতিষ্ঠান।
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
