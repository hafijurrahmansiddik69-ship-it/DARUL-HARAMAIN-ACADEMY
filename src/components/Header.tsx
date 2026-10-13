import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAdmission } from '../context/AdmissionContext';

const Header = () => {
  const { openAdmission } = useAdmission();
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Minimal Deep Emerald Green Top Bar */}
      <div className="bg-emerald-900 text-white text-xs py-2 px-4 md:px-8 border-b border-emerald-950/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4">
          {/* Left Side: Location Only */}
          <div className="flex items-center gap-1.5 text-emerald-50 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#cfa852] flex-shrink-0" />
            <span>বগুড়া, বাংলাদেশ</span>
          </div>

          {/* Right Side: Email & Phone */}
          <div className="flex items-center gap-4 sm:gap-6 text-emerald-100 font-medium">
            <a 
              href="mailto:info.darulharamain@gmail.com" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#cfa852] flex-shrink-0" />
              <span>info.darulharamain@gmail.com</span>
            </a>
            <span className="text-emerald-700/80 hidden sm:inline">|</span>
            <a 
              href="tel:01880800901" 
              className="flex items-center gap-1.5 hover:text-[#cfa852] transition-colors font-mono font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#cfa852] flex-shrink-0" />
              <span>018 80 800 901</span>
            </a>
          </div>
        </div>
      </div>
      <div className="py-4 px-6 flex justify-between items-center bg-white relative">
        <Link to="/" className="flex items-center gap-3 md:gap-3.5 group">
          <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full overflow-hidden border-2 border-emerald-800/15 p-0.5 bg-white shadow-sm group-hover:border-emerald-800/40 transition-all duration-300">
            <img 
              src="/src/assets/images/academy_logo_1791617941870.jpg" 
              alt="দারুল হারামাইন একাডেমি লোগো" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col justify-center select-none text-left">
            <span className="font-extrabold text-lg sm:text-xl md:text-2xl leading-tight text-[#064e3b] tracking-tight group-hover:text-emerald-800 transition-colors">
              দারুল হারামাইন একাডেমি
            </span>
            <span className="font-bold text-[10px] sm:text-xs md:text-xs uppercase tracking-wider text-[#047857] leading-none mt-1">
              DARUL HARAMAIN ACADEMY
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={() => openAdmission()}
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs shadow-sm transition-all cursor-pointer mr-2"
          >
            <GraduationCap className="w-4 h-4" />
            <span>অনলাইন ভর্তি</span>
          </button>
          <button className="md:hidden p-2 text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 gap-1 md:gap-0.5 text-gray-700 shadow-lg md:shadow-none z-20 items-center`}>
          {menuItems.map(item => (
            <Link key={item.path} to={item.path} className="text-sm font-bold text-emerald-950 hover:text-[#cfa852] hover:bg-emerald-50/70 px-3.5 py-2 rounded-xl transition-all w-full md:w-auto text-center" onClick={() => setIsOpen(false)}>{item.label}</Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              openAdmission();
            }}
            className="lg:hidden mt-2 md:mt-0 w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs shadow-sm transition-all cursor-pointer"
          >
            <GraduationCap className="w-4 h-4" />
            <span>অনলাইন ভর্তি</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
