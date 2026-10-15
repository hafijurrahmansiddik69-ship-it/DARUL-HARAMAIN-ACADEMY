import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  ChevronDown, 
  ChevronRight, 
  Home as HomeIcon,
  Info,
  BookOpen,
  Users,
  Bell,
  Image as ImageIcon,
  PhoneCall,
  Sparkles,
  Award,
  Layers,
  Calendar,
  DollarSign,
  ShieldCheck,
  Target,
  UserCheck
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAdmission } from '../context/AdmissionContext';

interface SubMenuItem {
  label: string;
  sublabel?: string;
  target: string;
  isModalAction?: boolean;
  icon?: React.ElementType;
}

interface MenuItem {
  id: string;
  label: string;
  englishLabel: string;
  target?: string;
  icon: React.ElementType;
  hasDropdown: boolean;
  subItems?: SubMenuItem[];
}

export default function Header() {
  const { openAdmission } = useAdmission();
  const navigate = useNavigate();
  const location = useLocation();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Expanded state for mobile sidebar drawer accordion items
  const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({
    about: true, // open by default for visibility
    admission: false,
    academic: false,
    faculty: false,
  });

  // Desktop active dropdown menu
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when sidebar drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  const toggleSubMenu = (menuId: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const handleNavigate = (target: string, isModalAction = false) => {
    setIsDrawerOpen(false);
    setDesktopDropdown(null);

    if (isModalAction) {
      openAdmission();
      return;
    }

    if (target.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + target);
      } else {
        const element = document.getElementById(target.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(target);
    }
  };

  // Clean, premium, international English menu structure requested by user
  const menuList: MenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      englishLabel: 'Home',
      target: '/',
      icon: HomeIcon,
      hasDropdown: false,
    },
    {
      id: 'about',
      label: 'About Us',
      englishLabel: 'About Us',
      icon: Info,
      hasDropdown: true,
      subItems: [
        {
          label: 'About Academy',
          target: '#about-academy',
          icon: Award,
        },
        {
          label: "Founder & Chairman's Message",
          target: '#chairman-message',
          icon: Sparkles,
        },
        {
          label: "Principal's Message",
          target: '#principal-message',
          icon: UserCheck,
        },
        {
          label: 'Mission & Vision',
          target: '#mission-vision',
          icon: Target,
        },
      ],
    },
    {
      id: 'admission',
      label: 'Admission',
      englishLabel: 'Admission',
      icon: GraduationCap,
      hasDropdown: true,
      subItems: [
        {
          label: 'Online Admission',
          target: '#admission',
          isModalAction: true,
          icon: GraduationCap,
        },
        {
          label: 'Fee Structure',
          target: '#fee-structure',
          icon: DollarSign,
        },
        {
          label: 'Admission Rules',
          target: '#admission-rules',
          icon: ShieldCheck,
        },
      ],
    },
    {
      id: 'academic',
      label: 'Academic',
      englishLabel: 'Academic',
      icon: BookOpen,
      hasDropdown: true,
      subItems: [
        {
          label: 'Hifz & Quranic Division',
          target: '#academic-programs',
          icon: BookOpen,
        },
        {
          label: 'Integrated General & Islamic Education',
          target: '#academic-programs',
          icon: Layers,
        },
        {
          label: 'Class Routine & Syllabus',
          target: '#routine-syllabus',
          icon: Calendar,
        },
      ],
    },
    {
      id: 'faculty',
      label: 'Faculty',
      englishLabel: 'Faculty',
      icon: Users,
      hasDropdown: true,
      subItems: [
        {
          label: 'Male Faculty',
          target: '#faculty',
          icon: Users,
        },
        {
          label: 'Female Faculty',
          target: '#faculty',
          icon: Users,
        },
      ],
    },
    {
      id: 'notice',
      label: 'Notice',
      englishLabel: 'Notice',
      target: '#notice-board',
      icon: Bell,
      hasDropdown: false,
    },
    {
      id: 'gallery',
      label: 'Gallery',
      englishLabel: 'Gallery',
      target: '#gallery',
      icon: ImageIcon,
      hasDropdown: false,
    },
    {
      id: 'contact',
      label: 'Contact Us',
      englishLabel: 'Contact Us',
      target: '#contact',
      icon: PhoneCall,
      hasDropdown: false,
    },
  ];

  return (
    <>
      <header className={`bg-white shadow-md sticky top-0 z-40 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        
        {/* Minimal Deep Emerald Green Top Bar */}
        <div className="bg-emerald-900 text-white text-xs py-2 px-4 md:px-8 border-b border-emerald-950/30">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4">
            {/* Left Side: Location */}
            <div className="flex items-center gap-1.5 text-emerald-50 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#cfa852] flex-shrink-0" />
              <span>বগুড়া, বাংলাদেশ (DARUL HARAMAIN ACADEMY)</span>
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
                href="tel:01804500509" 
                className="flex items-center gap-1.5 hover:text-[#cfa852] transition-colors font-mono font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#cfa852] flex-shrink-0" />
                <span>018 04 500 509</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <div className="py-3 px-4 sm:px-6 md:px-8 flex justify-between items-center bg-white relative max-w-7xl mx-auto">
          
          {/* Logo & Academy Name */}
          <Link to="/" className="flex items-center gap-3 md:gap-3.5 group">
            <div className="w-11 h-11 sm:w-13 sm:h-13 flex-shrink-0 rounded-full overflow-hidden border-2 border-emerald-800/20 p-0.5 bg-white shadow-sm group-hover:border-[#cfa852] transition-all duration-300">
              <img 
                src="/src/assets/images/academy_logo_1791617941870.jpg" 
                alt="দারুল হারামাইন একাডেমি লোগো" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center select-none text-left">
              <span className="font-extrabold text-base sm:text-lg md:text-xl leading-tight text-[#064e3b] tracking-tight group-hover:text-emerald-800 transition-colors">
                দারুল হারামাইন একাডেমি
              </span>
              <div className="flex flex-col mt-0.5">
                <span className="font-black text-[10px] sm:text-xs tracking-wider text-emerald-900 uppercase leading-none">
                  DARUL HARAMAIN
                </span>
                <span className="text-[7px] sm:text-[8px] font-bold tracking-[0.35em] text-[#047857] uppercase leading-none mt-0.5 pl-[0.35em]">
                  ACADEMY
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Menu (8 Items) */}
          <nav className="hidden xl:flex items-center gap-1">
            {menuList.map((item) => {
              if (!item.hasDropdown) {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.target || '/')}
                    className="px-3 py-2 text-xs font-bold text-emerald-950 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-all cursor-pointer whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <div 
                  key={item.id} 
                  className="relative"
                  onMouseEnter={() => setDesktopDropdown(item.id)}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  <button
                    onClick={() => setDesktopDropdown(desktopDropdown === item.id ? null : item.id)}
                    className="flex items-center gap-1 px-3 py-2 text-xs font-bold text-emerald-950 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopDropdown === item.id ? 'rotate-180 text-emerald-700' : 'text-slate-400'}`} />
                  </button>

                  {/* Desktop Dropdown Sub-menu */}
                  {desktopDropdown === item.id && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-emerald-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      {item.subItems?.map((sub, sIdx) => {
                        const SubIcon = sub.icon || ChevronRight;
                        return (
                          <button
                            key={sIdx}
                            onClick={() => handleNavigate(sub.target, sub.isModalAction)}
                            className="w-full px-4 py-2.5 text-left text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/80 transition-colors flex items-center gap-2.5 cursor-pointer"
                          >
                            <SubIcon className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span>{sub.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Online Admission Button */}
            <button
              onClick={() => openAdmission()}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-[#cfa852] hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-xs shadow-sm transition-all cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 flex-shrink-0" />
              <span>অনলাইন ভর্তি</span>
            </button>

            {/* Mobile Hamburger Drawer Trigger Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="xl:hidden p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-200 transition-colors cursor-pointer"
              aria-label="Open Sidebar Navigation Drawer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* =========================================================================
          MOBILE SIDEBAR DRAWER NAVIGATION MENU
      ========================================================================== */}
      {/* 1. Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/65 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* 2. Slide-out Drawer Panel */}
      <div 
        className={`fixed top-0 bottom-0 left-0 w-[320px] sm:w-[360px] max-w-[85vw] bg-emerald-950 text-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-emerald-900/80 bg-gradient-to-b from-black/40 to-transparent flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-400 to-[#cfa852] overflow-hidden flex-shrink-0 shadow">
              <img 
                src="/src/assets/images/academy_logo_1791617941870.jpg" 
                alt="দারুল হারামাইন একাডেমি" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain rounded-full bg-white"
              />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-sm sm:text-base text-white leading-tight">
                দারুল হারামাইন একাডেমি
              </h3>
              <div className="mt-0.5">
                <span className="block font-black text-xs sm:text-sm text-amber-300 tracking-wider uppercase leading-tight">
                  DARUL HARAMAIN
                </span>
                <span className="block text-[8px] sm:text-[9px] text-amber-200/90 font-bold tracking-[0.35em] uppercase leading-none mt-0.5 pl-[0.35em]">
                  ACADEMY
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsDrawerOpen(false)}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-1.5 divide-y divide-white/5">
          {menuList.map((item) => {
            const ItemIcon = item.icon;
            const isExpanded = !!expandedMenus[item.id];

            // Single Item (Home, Notice, Gallery, Contact)
            if (!item.hasDropdown) {
              return (
                <div key={item.id} className="pt-1.5 first:pt-0">
                  <button
                    onClick={() => handleNavigate(item.target || '/')}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left font-bold text-sm text-slate-100 hover:text-amber-300 hover:bg-white/10 transition-all cursor-pointer group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-900/60 border border-emerald-700/40 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:bg-[#cfa852] group-hover:text-emerald-950 transition-colors">
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <span className="flex-1">{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              );
            }

            // Dropdown Menu Item with Dedicated Action Arrow Button
            return (
              <div key={item.id} className="pt-1.5">
                <div className="flex items-center justify-between rounded-xl hover:bg-white/5 transition-colors">
                  {/* Left: Main Label */}
                  <button
                    onClick={() => toggleSubMenu(item.id)}
                    className="flex-1 flex items-center gap-3 px-3.5 py-2.5 text-left font-bold text-sm text-white hover:text-amber-300 transition-colors cursor-pointer group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-900/60 border border-emerald-700/40 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:bg-[#cfa852] group-hover:text-emerald-950 transition-colors">
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <span className="flex-1 leading-snug">{item.label}</span>
                  </button>

                  {/* Right: ACTION ARROW BUTTON (Explicit action arrow button for dropdown toggle) */}
                  <button
                    onClick={() => toggleSubMenu(item.id)}
                    className="p-2.5 mr-1 rounded-lg text-amber-300/80 hover:text-amber-200 hover:bg-white/10 transition-all cursor-pointer"
                    aria-label={`Toggle ${item.label} sub-menu`}
                  >
                    <div className={`w-6 h-6 rounded-md bg-white/10 flex items-center justify-center transition-transform duration-200 ${isExpanded ? 'rotate-180 bg-[#cfa852] text-slate-950' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </div>

                {/* Sub-items list with animated expand */}
                {isExpanded && (
                  <div className="mt-1 ml-4 pl-3.5 border-l-2 border-[#cfa852]/40 space-y-1 py-1">
                    {item.subItems?.map((sub, sIdx) => {
                      const SubIcon = sub.icon || ChevronRight;
                      return (
                        <button
                          key={sIdx}
                          onClick={() => handleNavigate(sub.target, sub.isModalAction)}
                          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-white/10 transition-all cursor-pointer group"
                        >
                          <SubIcon className="w-3.5 h-3.5 text-[#cfa852] flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="flex-1 leading-snug">{sub.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Bottom Footer with Admission Action */}
        <div className="p-4 bg-black/40 border-t border-emerald-900/80 space-y-3">
          <button
            onClick={() => {
              setIsDrawerOpen(false);
              openAdmission();
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-[#cfa852] to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <GraduationCap className="w-5 h-5" />
            <span>অনলাইন ভর্তি আবেদন</span>
          </button>

          <div className="pt-2 flex items-center justify-between text-[11px] text-emerald-200/90 font-medium border-t border-white/10">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#cfa852]" />
              <span>বগুড়া ক্যাম্পাস</span>
            </span>
            <a href="tel:01804500509" className="flex items-center gap-1 font-mono text-amber-300 font-bold hover:underline">
              <Phone className="w-3 h-3 text-[#cfa852]" />
              <span>018 04 500 509</span>
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
