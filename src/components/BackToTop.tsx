"use client";

import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 transform group cursor-pointer ${
        isVisible 
          ? 'bg-accent-gold text-[#0b2b30] translate-y-0 opacity-100' 
          : 'bg-transparent text-transparent translate-y-10 opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <span className="material-symbols-outlined text-2xl group-hover:-translate-y-1 transition-transform duration-300">
        keyboard_arrow_up
      </span>
      {/* Ripple effect or glow could be added here if needed, but keeping it clean for now */}
      <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
    </button>
  );
};

export default BackToTop;
