import { Youtube, Facebook, ArrowUpRight, Play, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/src/assets/images/academy_logo_1791617941870.jpg" 
              alt="DARUL HARAMAIN ACADEMY Logo" 
              referrerPolicy="no-referrer"
              className="h-12 w-12 object-contain rounded-full border border-[#cfa852]/30"
            />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold text-emerald-300/90 leading-tight">
                দারুল হারামাইন একাডেমি
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-wide bg-gradient-to-r from-[#cfa852] via-amber-400 to-amber-200 bg-clip-text text-transparent drop-shadow-sm select-none uppercase leading-tight mt-0.5">
                DARUL HARAMAIN
              </h2>
              <span className="text-[10px] font-bold tracking-[0.35em] text-emerald-200/90 uppercase mt-0.5 pl-[0.35em] leading-none">
                ACADEMY
              </span>
              <span className="text-xs font-bold font-arabic text-[#cfa852]/90 tracking-widest mt-1">
                أكاديمية دار الحرمين
              </span>
            </div>
          </div>
          <p className="text-gray-300 font-medium">প্রতিষ্ঠাতা ও চেয়ারম্যান: হাফিজুর রহমান সিদ্দিক</p>
          <p className="text-gray-400 text-sm mt-3">ইসলামি মূল্যবোধ এবং আধুনিক শিক্ষার এক অনন্য সমন্বয়।</p>
          <div className="mt-4 space-y-1.5 text-xs text-gray-300">
            <p><span className="text-amber-300">ঠিকানা:</span> গুজিয়া, মোকামতলা ও শিবগঞ্জ, বগুড়া, Bangladesh</p>
            <p><span className="text-amber-300">মেইল:</span> <a href="mailto:darulharamainacademy@gmail.com" className="hover:text-white transition-colors">darulharamainacademy@gmail.com</a></p>
            <p><span className="text-amber-300">হটলাইন:</span> <a href="tel:01804500509" className="hover:text-white transition-colors font-mono font-bold">018 04 500 509</a></p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-emerald-900 pb-2 text-[#cfa852]">Quick Link</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">About Us (আমাদের সম্পর্কে)</a></li>
            <li><a href="#academic-programs" className="hover:text-white transition-colors">Academic Programs (বিভাগসমূহ)</a></li>
            <li><a href="#notice-board" className="hover:text-white transition-colors">Notice Board (নোটিশ বোর্ড)</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us (যোগাযোগ)</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-emerald-900 pb-2 text-[#cfa852]">Connect With Us</h3>
          
          <div className="space-y-4">
            {/* YouTube Widget */}
            <a 
              href="https://www.youtube.com/@hafizursmedia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-gradient-to-br from-red-600/90 to-red-700 hover:from-red-600 hover:to-red-800 p-4 rounded-xl shadow-lg border border-red-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg text-white">
                    <Youtube className="w-6 h-6 fill-current text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Hafizur's Media</h4>
                    <p className="text-xs text-red-100 font-light">আমাদের ইউটিউব চ্যানেল সাবস্ক্রাইব করুন</p>
                  </div>
                </div>
                <div className="bg-white/15 p-1.5 rounded-full text-white group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 bg-black/15 py-1 px-2.5 rounded-lg w-fit text-[10px] text-red-50 font-semibold tracking-wider uppercase">
                <Play className="w-3 h-3 fill-current text-red-200" />
                <span>Watch Live & Recorded Videos</span>
              </div>
            </a>

            {/* Facebook Widget */}
            <a 
              href="https://www.facebook.com/search/top?q=darul%20haramain%20academy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-gradient-to-br from-blue-600/90 to-blue-700 hover:from-blue-600 hover:to-blue-800 p-4 rounded-xl shadow-lg border border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg text-white">
                    <Facebook className="w-6 h-6 fill-current text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Darul Haramain Academy</h4>
                    <p className="text-xs text-blue-100 font-light">আমাদের ফেসবুক পেজ লাইক ও ফলো করুন</p>
                  </div>
                </div>
                <div className="bg-white/15 p-1.5 rounded-full text-white group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 bg-black/15 py-1 px-2.5 rounded-lg w-fit text-[10px] text-blue-50 font-semibold tracking-wider uppercase">
                <Heart className="w-3 h-3 text-red-400 fill-current" />
                <span>Join Our Islamic Community</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-12 pt-6 border-t border-emerald-900/40 text-sm">
        &copy; Copyright 2026 | All Rights Reserved by <span className="text-[#cfa852] font-semibold">DARUL HARAMAIN ACADEMY</span>
      </div>
    </footer>
  );
}
