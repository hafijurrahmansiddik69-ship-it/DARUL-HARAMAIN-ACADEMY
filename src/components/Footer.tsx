export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="https://res.cloudinary.com/dlklqihg6/image/upload/v1783252603/ni4fothm1jmbxcr4eqnd.jpg" 
              alt="DARUL HARAMAIN ACADEMY Logo" 
              referrerPolicy="no-referrer"
              className="h-12 w-12 object-contain rounded-full border border-[#cfa852]/30"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-black tracking-tight text-[#cfa852]">DARUL HARAMAIN ACADEMY</h2>
              <span className="text-xs font-bold text-gray-300 tracking-wider">أكاديمية دار الحرمين</span>
            </div>
          </div>
          <p className="text-gray-300 font-light">প্রতিষ্ঠাতা ও চেয়ারম্যান: হাফিজুর রহমান সিদ্দিক</p>
          <p className="text-gray-400 text-sm mt-4">ইসলামি মূল্যবোধ এবং আধুনিক শিক্ষার এক অনন্য সমন্বয়।</p>
          <p className="text-gray-400">উপদেষ্টা: ...</p>
          <p className="text-gray-400 mt-2">মেইল: ...</p>
          <p className="text-gray-400">ফোন: ...</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">Quick Link</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy And Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">Connect With Us</h3>
          {/* Placeholder for social widgets */}
          <div className="h-32 bg-gray-800 rounded flex items-center justify-center text-gray-500">Facebook/YouTube Widgets</div>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-12 pt-6 border-t border-gray-800">
        &copy; Copyright 2026 | All Right Reserved
      </div>
    </footer>
  );
}
