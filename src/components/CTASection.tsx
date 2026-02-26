"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import DonationModal from './DonationModal';
import { useLanguage } from '@/context/LanguageContext';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  bgImage?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryBtnText,
  primaryBtnLink = "/contact",
  secondaryBtnText,
  secondaryBtnLink,
  bgImage = "/images/gallery-img-02.jpeg"
}) => {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const { t } = useLanguage();

  const displayTitle = title || t('ctaSection.title');
  const displayDescription = description || t('ctaSection.description');
  const displayPrimaryBtnText = primaryBtnText || t('ctaSection.primaryBtnText');

  // Check if the primary button should trigger the donation modal
  // We trigger it if the link is specifically for donation or if it's the default "/contact" 
  // but with donation-related text
  const isDonationTrigger = primaryBtnLink === '/contact' || primaryBtnLink === '/donate';

  return (
    <section className="py-20 px-6 relative">
      <DonationModal isOpen={showDonationModal} onClose={() => setShowDonationModal(false)} />
      
      <div className="max-w-[1280px] mx-auto bg-gradient-to-r from-[#c5a059] to-[#d4af66] rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-[0_20px_50px_rgba(197,160,89,0.3)] relative">
        
        <div className="w-full md:w-1/2 p-10 lg:p-20 text-[#0b2b30] relative z-10 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-6 font-display leading-tight">
            {displayTitle.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < displayTitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-base lg:text-lg text-[#0b2b30]/80 mb-10 leading-relaxed max-w-sm font-medium">
            {displayDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             {isDonationTrigger ? (
               <button 
                 onClick={() => setShowDonationModal(true)}
                 className="px-8 py-3.5 rounded-full bg-[#0b2b30] text-white font-bold text-center hover:bg-white hover:text-[#0b2b30] transition-all shadow-lg hover:-translate-y-1"
               >
                 {displayPrimaryBtnText}
               </button>
             ) : (
               <Link href={primaryBtnLink} className="px-8 py-3.5 rounded-full bg-[#0b2b30] text-white font-bold text-center hover:bg-white hover:text-[#0b2b30] transition-all shadow-lg hover:-translate-y-1">
                 {displayPrimaryBtnText}
               </Link>
             )}
             
             {secondaryBtnText && secondaryBtnLink && (
               <Link href={secondaryBtnLink} className="px-8 py-3.5 rounded-full border-2 border-[#0b2b30] text-[#0b2b30] font-bold text-center hover:bg-[#0b2b30] hover:text-white transition-all">
                  {secondaryBtnText}
               </Link>
             )}
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative min-h-[350px]">
           <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: `url("${bgImage}")`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#c5a059] to-transparent md:bg-gradient-to-t md:from-[#c5a059]/80 md:to-transparent mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
