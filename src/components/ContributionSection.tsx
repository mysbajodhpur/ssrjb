"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import DonationModal from '@/components/DonationModal';

const ContributionSection = () => {
  const [showDonationModal, setShowDonationModal] = useState(false);

  const contributionItems = [
    { 
        icon: "volunteer_activism", 
        title: "दान (Donation)", 
        desc: "आपका छोटा सा आर्थिक सहयोग किसी के जीवन में बड़ा बदलाव ला सकता है।",
        isDonate: true
    },
    { 
        icon: "groups", 
        title: "स्वयंसेवा (Volunteer)", 
        desc: "अपने समय और कौशल के माध्यम से हमारे सेवा कार्यों में अपना योगदान दें।",
        link: "/contact"
    },
    { 
        icon: "campaign", 
        title: "जन-जागृति (Awareness)", 
        desc: "संस्थान के मिशन और पर्यावरण संरक्षण के संदेश को अधिक से अधिक लोगों तक पहुँचाएँ।",
        link: "/contact"
    }
  ];

  return (
    <>
      <DonationModal isOpen={showDonationModal} onClose={() => setShowDonationModal(false)} />
      
      <section className="py-24 px-6 bg-white dark:bg-[#0b1214] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16">
                  <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-2 block">सहयोग</span>
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0d1b1c] dark:text-white mb-4">आप कैसे <span className="text-primary dark:text-accent-gold italic font-serif font-medium">जुड़ सकते हैं?</span></h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto italic">
                      "परोपकाराय पुण्याय पापाय परपीडनम्" - दूसरों की सेवा ही सबसे बड़ा पुण्य है।
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {contributionItems.map((item, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-[#1a2024] p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 hover:border-accent-gold/30 text-center group transition-all">
                          <div className="w-16 h-16 bg-accent-gold/10 rounded-2xl flex items-center justify-center text-accent-gold mx-auto mb-6 group-hover:bg-accent-gold group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                              <span className="material-symbols-outlined notranslate text-3xl">{item.icon}</span>
                          </div>
                          <h3 className="text-xl font-bold text-[#0d1b1c] dark:text-white mb-3 font-display">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                              {item.desc}
                          </p>
                          {item.isDonate ? (
                              <button 
                                onClick={() => setShowDonationModal(true)}
                                className="inline-flex items-center gap-2 text-primary dark:text-accent-gold font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all"
                              >
                                संपर्क करें <span className="material-symbols-outlined notranslate text-sm">arrow_forward</span>
                              </button>
                          ) : (
                              <Link href={item.link || '#'} className="inline-flex items-center gap-2 text-primary dark:text-accent-gold font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
                                संपर्क करें <span className="material-symbols-outlined notranslate text-sm">arrow_forward</span>
                              </Link>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </>
  );
};

export default ContributionSection;
