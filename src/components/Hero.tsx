import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative text-white min-h-[60vh] md:min-h-[75vh] px-6 flex flex-col items-center justify-start overflow-hidden">
      {/* Background Image with Referrer Policy */}
      <img 
        src="https://res.cloudinary.com/dlklqihg6/image/upload/v1783448987/dbdubbzo2k1wv3dwd5ow.jpg" 
        alt="Islamic Academy Background" 
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover select-none"
      />
      <div className="absolute inset-0 bg-black/15"></div>
      
      {/* Ticker */}
      <div className="relative z-10 w-full overflow-hidden py-4 bg-white/10 backdrop-blur-md border-y border-white/20 mt-6">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="whitespace-nowrap text-lg font-medium tracking-wide text-[#fdfaf2]"
        >
          স্বাগতম! • অনুপ্রাণিত হোন • অসাধারণ বক্তা • নতুন ইভেন্ট আসছে • যোগাযোগ করুন • ডিজিটাল সリューション • ক্যারিয়ার গাইডেন্স • মোটিভেশনাল স্পিচ
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
