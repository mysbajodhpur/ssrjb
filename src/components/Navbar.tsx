"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { setCookie, parseCookies } from 'nookies';

import { servicesData } from '@/data/services';

import DonationModal from '@/components/DonationModal';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState('hi');
  const [showDonationModal, setShowDonationModal] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check current language
    const cookies = parseCookies();
    const lang = cookies.googtrans;
    if (lang && lang.includes('/en')) {
      setCurrentLang('en');
    } else {
      setCurrentLang('hi');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: string) => {
    // Determine the cookie value. For Hindi (original), we set it to /hi/hi or just /hi/
    // but /hi/hi is more explicit for many Google Translate setups.
    const cookieValue = `/hi/${lang}`;
    
    setCookie(null, 'googtrans', cookieValue, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
      sameSite: 'lax'
    });
    
    // Also update current state for immediate visual feedback before reload
    setCurrentLang(lang);
    
    // Force a reload to let Google Translate script pick up the new cookie
    window.location.reload();
  };

  const navLinks = [
    { name: 'मुख्य पृष्ठ', href: '/' },
    { name: 'हमारे बारे में', href: '/about' },
    { 
      name: 'सेवाएं', 
      href: '/services',
      children: servicesData.map(service => ({
        name: service.title,
        href: `/services/${service.slug}`,
        icon: service.icon
      }))
    },
    { name: 'नेतृत्व', href: '/team' },
    { name: 'गैलरी', href: '/gallery' },
    { name: 'दस्तावेज़', href: '/documents' },
    { name: 'संपर्क', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <DonationModal isOpen={showDonationModal} onClose={() => setShowDonationModal(false)} />
      
      {/* Top Bar - Contact & Socials */}
      <div className="bg-[#0b2b30] text-white py-2 px-6 hidden md:block border-b border-white/5">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center text-xs tracking-wider">
          <div className="flex items-center gap-6">
            <a href="tel:+919818757905" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
              <span className="material-symbols-outlined notranslate text-sm text-accent-gold">call</span>
              +91 98187 57905
            </a>
            <a href="mailto:info@randheerjibabal.org" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
              <span className="material-symbols-outlined notranslate text-sm text-accent-gold">mail</span>
              info@randheerjibabal.org
            </a>
            <span className="flex items-center gap-2 text-gray-400">
               <span className="material-symbols-outlined notranslate text-sm text-accent-gold">location_on</span>
               जोधपुर, राजस्थान
            </span>
          </div>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              भाषा :-
               <button 
                 onClick={() => handleLanguageChange('hi')} 
                 className={`flex items-center gap-1 transition-colors cursor-pointer ${currentLang !== 'en' ? 'text-accent-gold' : 'hover:text-accent-gold'}`} 
                 title="Hindi"
               >
                 हिंदी
               </button>
               <span className="w-px h-3 bg-gray-600"></span>
               <button 
                 onClick={() => handleLanguageChange('en')} 
                 className={`flex items-center gap-1 transition-colors cursor-pointer ${currentLang === 'en' ? 'text-accent-gold' : 'hover:text-accent-gold'}`} 
                 title="English"
               >
                 English
               </button>
             </div>
             <button 
               onClick={() => setShowDonationModal(true)}
               className="flex items-center justify-center rounded-full h-8 px-5 bg-accent-gold text-[#0b2b30] font-bold tracking-wide hover:bg-white transition-all duration-300 text-[10px] uppercase shadow-md active:scale-95 transform"
             >
               दान करें
             </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-[#0e3f45]/95 backdrop-blur-md shadow-md py-3' 
            : 'bg-white/80 dark:bg-[#0e3f45]/90 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="size-12 rounded-sm overflow-hidden border-2 border-accent-gold/20 group-hover:border-accent-gold transition-all duration-300 shadow-sm">
              <img src="/images/randheer-ji.jpg" alt="Sant Shree Randheer Ji" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
               <h3 className="text-xl font-display font-bold text-[#0d1b1c] dark:text-white leading-none">
                  संत श्री रणधीर जी <span className="text-accent-gold notranslate">बाबल</span>
               </h3>
               <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-300 font-bold mt-1">सेवा संस्थान</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  href={link.href} 
                  className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 relative py-2 font-sans flex items-center gap-1 ${
                    isActive(link.href) 
                      ? 'text-primary dark:text-accent-gold' 
                      : 'text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-accent-gold'
                  }`}
                >
                  {link.name}
                  {link.children && <span className="material-symbols-outlined notranslate text-[16px]">expand_more</span>}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold transform origin-left transition-transform duration-300 ${isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>

                {/* Desktop Dropdown */}
                {link.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[240px]">
                    <div className="bg-white dark:bg-[#1a2024] rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden p-2">
                       {link.children.map((child) => {
                         const isChildActive = pathname === child.href;
                         return (
                           <Link 
                             key={child.name} 
                             href={child.href}
                             className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group/item ${
                               isChildActive 
                                 ? 'bg-primary/10 dark:bg-white/10' 
                                 : 'hover:bg-primary/5 dark:hover:bg-white/5'
                             }`}
                           >
                             <span className={`material-symbols-outlined notranslate transition-colors ${
                               isChildActive 
                                 ? 'text-primary dark:text-accent-gold opacity-100' 
                                 : 'text-primary dark:text-accent-gold opacity-70 group-hover/item:opacity-100'
                             }`}>
                               {child.icon}
                             </span>
                             <span className={`text-sm font-bold transition-colors ${
                               isChildActive 
                                 ? 'text-primary dark:text-accent-gold' 
                                 : 'text-gray-700 dark:text-gray-200 group-hover/item:text-primary dark:group-hover/item:text-accent-gold'
                             }`}>
                               {child.name}
                             </span>
                           </Link>
                         );
                       })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined notranslate text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0e3f45] border-t border-gray-100 dark:border-gray-800 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col p-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <div className="flex items-center justify-between pr-4 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors">
                   <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`flex-1 px-4 py-3 text-lg font-bold font-display ${
                      isActive(link.href)
                        ? 'text-primary dark:text-accent-gold'
                        : 'text-gray-600 dark:text-gray-200'
                    }`}
                  >
                    {link.name}
                  </Link>
                  
                  {link.children && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setMobileSubmenu(mobileSubmenu === link.name ? null : link.name);
                      }}
                      className="p-2 text-primary dark:text-accent-gold hover:bg-black/5 rounded-full transition-colors"
                    >
                      <span className={`material-symbols-outlined notranslate transition-transform duration-300 ${mobileSubmenu === link.name ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown Items */}
                {link.children && (
                  <div className={`pl-8 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${mobileSubmenu === link.name ? 'max-h-[500px] opacity-100 py-2' : 'max-h-0 opacity-0'}`}>
                    {link.children.map((child) => (
                       <Link
                         key={child.name}
                         href={child.href}
                         onClick={() => setIsOpen(false)}
                         className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent-gold"
                       >
                         <span className="material-symbols-outlined notranslate text-base opacity-70">{child.icon}</span>
                         {child.name}
                       </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800 space-y-4">
               {/* Mobile Language Switcher */}
               <div className="flex justify-center gap-6 pb-2">
                  <button 
                    onClick={() => { setIsOpen(false); handleLanguageChange('hi'); }}
                    className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest cursor-pointer ${currentLang !== 'en' ? 'text-accent-gold' : 'text-gray-600 dark:text-gray-300 hover:text-accent-gold'}`}
                  >
                    Hindi
                  </button>
                  <span className="w-px h-5 bg-gray-200 dark:bg-gray-700"></span>
                  <button 
                    onClick={() => { setIsOpen(false); handleLanguageChange('en'); }}
                    className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest cursor-pointer ${currentLang === 'en' ? 'text-accent-gold' : 'text-gray-600 dark:text-gray-300 hover:text-accent-gold'}`}
                  >
                    English
                  </button>
               </div>

               <button 
                 onClick={() => { setIsOpen(false); setShowDonationModal(true); }}
                 className="flex items-center justify-center w-full rounded-full h-12 bg-primary text-white font-bold text-lg shadow-lg active:scale-95 transform"
               >
                 दान करें
               </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
