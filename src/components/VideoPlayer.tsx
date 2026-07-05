import React from 'react';
import { Youtube, Play, Share2 } from 'lucide-react';

export default function VideoPlayer() {
  const fullYoutubeUrl = `https://youtu.be/4RSg4p6AYNE?si=iVFsSuffJWQ9d5jq`;
  const bannerImageUrl = "https://res.cloudinary.com/dlklqihg6/image/upload/v1783260034/vttkknwmxfaliqgixsx4.jpg";

  return (
    <div className="max-w-4xl mx-auto px-4" id="youtube-video-container">
      {/* Clickable Image Banner Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-emerald-100/50 overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 py-4 px-6 text-center border-b border-[#cfa852]/20 flex items-center justify-center gap-2">
          <Youtube className="w-5 h-5 text-red-500 fill-current animate-pulse" />
          <span className="text-xs md:text-sm font-bold text-[#cfa852] tracking-wider uppercase">ছবিতে ক্লিক করে ইউটিউবে ভিডিওটি দেখুন</span>
        </div>
        
        <a 
          href={fullYoutubeUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block relative group overflow-hidden bg-black"
        >
          {/* Main Image */}
          <img 
            src={bannerImageUrl} 
            alt="YouTube Video Banner" 
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.02] group-hover:opacity-90"
          />
          
          {/* Dark Overlay on Hover with Play Icon */}
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-red-600/90 text-white p-5 rounded-full shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-300 flex items-center justify-center">
              <Play className="w-10 h-10 fill-current text-white ml-1" />
            </div>
          </div>

          {/* Action Badge */}
          <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md text-white font-bold text-xs py-2 px-4 rounded-full flex items-center gap-2 shadow-lg border border-white/10 group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-300">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>ইউটিউবে সরাসরি দেখুন</span>
          </div>
        </a>
      </div>
    </div>
  );
}
