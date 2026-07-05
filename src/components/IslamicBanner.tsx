import React from 'react';

const IslamicBanner = () => {
  return (
    <div className="relative w-full max-w-4xl h-72 mx-auto mb-10 bg-gradient-to-br from-[#0e4e45] to-[#05211c] border-4 border-[#cfa852] rounded-2xl shadow-2xl overflow-hidden flex justify-center items-center p-5">
      {/* Arch Left */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black/90 to-[#0e4e45]/30 border-r-2 border-[#cfa852]/40 rounded-r-full"></div>
      {/* Arch Right */}
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black/90 to-[#0e4e45]/30 border-l-2 border-[#cfa852]/40 rounded-l-full"></div>

      {/* Main Title Box */}
      <div className="flex items-stretch justify-center w-full max-w-md z-10">
        <div className="flex flex-col border-t-4 border-b-4 border-[#cfa852] flex-grow bg-[#fdfaf2]">
          <div className="bg-[#0e5a60] text-[#f7e7c4] text-xl font-bold text-center py-2 px-4 tracking-widest">১০টি ফজিলতপূর্ণ</div>
          <div className="text-[#0e5a60] text-3xl font-extrabold text-center py-3 px-4 tracking-wider border-t-2 border-[#cfa852]">ইসলামিক আমল</div>
        </div>
      </div>
    </div>
  );
};

export default IslamicBanner;
