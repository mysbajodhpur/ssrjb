"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import DonationModal from './DonationModal';

const HomeHero = () => {
  const [showDonationModal, setShowDonationModal] = useState(false);

  return (
    <>
      <DonationModal isOpen={showDonationModal} onClose={() => setShowDonationModal(false)} />
      
      <section className="relative pb-30 flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom" 
            style={{
              backgroundImage: 'url("/images/gallery-img-09.jpeg")'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-primary/95 z-10"></div>
        </div>

        <div className="relative z-20 max-w-5xl text-center flex flex-col items-center mt-10">
          <div className="inline-block p-1 px-4 mb-6 rounded-full border border-accent-gold/40 bg-black/40 backdrop-blur-md">
             <span className="text-accent-gold uppercase tracking-[0.25em] font-bold text-xs">स्थापना १५१३ ई. • बाबलसर</span>
          </div>
          
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 font-display drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            मानवता की सेवा, <br />
            <span className="italic font-serif font-medium text-accent-gold">प्रकृति का सम्मान</span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow text-shadow-sm">
            <span className="text-white font-medium border-b border-accent-gold/50 pb-0.5">संत श्री रणधीर जी बाबल</span> की दिव्य विरासत को आगे बढ़ाते हुए। शिक्षा, स्वास्थ्य, संस्कार और पर्यावरण संरक्षण के लिए समर्पित।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <button 
              onClick={() => setShowDonationModal(true)}
              className="px-8 py-3.5 rounded-full bg-accent-gold text-black font-bold text-base hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] hover:-translate-y-1"
            >
              हमारे मिशन से जुड़ें
            </button>
            <Link href="/about" className="px-8 py-3.5 rounded-full border border-white/30 bg-white/5 text-white backdrop-blur-sm font-bold text-base hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1">
              हमारा इतिहास
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
