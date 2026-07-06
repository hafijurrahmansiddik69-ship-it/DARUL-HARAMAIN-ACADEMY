import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Youtube, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

import Clock from './Clock';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<{label: string, path: string}[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show header at the very top of the page
      if (currentScrollY < 50) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY) {
        // Scrolling down -> hide
        setIsVisible(false);
      } else {
        // Scrolling up -> show
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { label: 'হোম', path: '/' },
    { label: 'ভিডিও', path: '/video' },
    { label: 'কিতাব', path: '/kitab' },
    { label: 'ইসলাম', path: '/islam' },
    { label: 'আমল সমুহ', path: '/amol' },
    { label: 'সিরাত', path: '/sirat' },
    { label: 'ব্লগ', path: '/blog' },
    { label: 'Live', path: '/live' },
    { label: 'প্রশ্ন/উত্তর', path: '/qa' },
    { label: 'যোগাযোগ', path: '/contact' },
  ];

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const filtered = menuItems.filter(item => 
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
      setSearchTerm('');
    } else {
      setSearchResults([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-gray-50 py-1.5 px-6">
        <Clock />
      </div>
      <div className="py-3 px-6 border-b border-gray-100 flex justify-between items-center bg-white">
        <div className="flex gap-3">
          <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-50 rounded-full hover:bg-gray-100 transition shadow-sm border border-gray-100"><Youtube size={19} className="text-red-600" /></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-50 rounded-full hover:bg-gray-100 transition shadow-sm border border-gray-100"><Facebook size={19} className="text-blue-600" /></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-50 rounded-full hover:bg-gray-100 transition shadow-sm border border-gray-100"><MessageCircle size={19} className="text-green-600" /></a>
        </div>
        <div className="flex flex-col items-end relative">
          <div className="flex items-center border border-gray-200 rounded-full overflow-hidden shadow-inner bg-gray-50">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="p-1.5 px-4 text-sm w-48 bg-transparent focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="p-1.5 px-3 bg-gray-200 hover:bg-gray-300 transition text-gray-600"
            >
              <Search size={16} />
            </button>
          </div>
          {searchResults.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg w-48 mt-2 p-1 absolute top-full right-0 z-50">
              {searchResults.map(item => (
                <Link key={item.path} to={item.path} className="block p-2 text-sm hover:bg-gray-100 rounded" onClick={() => setSearchResults([])}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="py-4 px-6 flex justify-between items-center bg-white relative">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="https://res.cloudinary.com/dlklqihg6/image/upload/v1783328221/waznt8bkgdajaku1w2pc.jpg" 
            alt="DARUL HARAMAIN ACADEMY Logo" 
            referrerPolicy="no-referrer"
            className="h-14 w-auto object-contain rounded-full shadow-sm border border-emerald-100 group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col justify-center">
            <span className="font-black text-xl md:text-2xl tracking-tight text-emerald-900 group-hover:text-[#cfa852] transition-colors duration-300">
              DARUL HARAMAIN ACADEMY
            </span>
            <span className="font-bold text-base md:text-lg text-[#cfa852] group-hover:text-emerald-800 tracking-wide leading-none mt-1 transition-colors duration-300">
              أكاديمية دار الحرمين
            </span>
          </div>
        </Link>
        <button className="md:hidden p-2 text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 gap-1 md:gap-0.5 text-gray-700 shadow-lg md:shadow-none z-20 items-center`}>
          {menuItems.map(item => (
            <Link key={item.path} to={item.path} className="text-sm font-bold text-emerald-950 hover:text-[#cfa852] hover:bg-emerald-50/70 px-4 py-2.5 rounded-full transition-all w-full md:w-auto text-center" onClick={() => setIsOpen(false)}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
