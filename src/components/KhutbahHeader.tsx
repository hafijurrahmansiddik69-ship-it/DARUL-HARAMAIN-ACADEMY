import React from 'react';
import { Search } from 'lucide-react';

const KhutbahHeader = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="flex justify-between items-center py-2 px-6 bg-gray-50 text-xs text-gray-500">
        <div>বুধবার, ১০ই আষাঢ়, ১৪৩৩ বঙ্গাব্দ, ৯ই মহরম, ১৪৪৮ হিজরি</div>
        <div className="flex gap-4">
           {/* Replace with social icons */}
           <span>Social Icons</span>
        </div>
      </div>
      <div className="flex justify-between items-center py-6 px-6">
        <div className="font-bold text-3xl text-gray-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            KHUTBAH TV
        </div>
        <div className="flex items-center border border-gray-300 rounded">
            <input type="text" placeholder="Site Search..." className="p-2 w-64" />
            <button className="p-2 bg-gray-100"><Search size={20} /></button>
            <select className="p-2 border-l border-gray-300">
                <option>All</option>
            </select>
        </div>
      </div>
      <nav className="bg-gray-800 text-white p-4 px-6 flex gap-6">
        {['হোম', 'ভিডিও', 'কিতাব', 'ইসলাম', 'আমল সমূহ', 'সিরাত', 'রুগ', 'Live', 'প্রশ্ন/উত্তর', 'যোগাযোগ'].map(item => (
            <a key={item} href="#">{item}</a>
        ))}
      </nav>
      <div className="bg-gray-900 text-white py-2 px-6 text-sm">
      </div>
    </header>
  );
};

export default KhutbahHeader;
