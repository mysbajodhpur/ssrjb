"use client";

import React from 'react';
import { historyData } from '@/data/history';

const KhejreliMartyrs = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#091518] text-white relative overflow-hidden">
      {/* Background Textures */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-gold/10 rounded-full blur-[150px] -mr-64 -mt-64"></div>
      
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 text-accent-gold font-bold uppercase tracking-[0.3em] text-xs mb-4">
            <div className="w-8 h-px bg-accent-gold"></div>
            सर्वोच्च बलिदान
            <div className="w-8 h-px bg-accent-gold"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8">
            <span className="notranslate">खेजड़ली</span> का <span className="text-accent-gold italic serif font-normal notranslate">खडाणा</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed italic">
            "भादो सुदी दसवीं वि.स. 1787: अमृता देवी बिश्नोई के नेतृत्व में 363 बिश्नोई वीरों ने खेजड़ी वृक्षों की रक्षार्थ अपने प्राणों का बलिदान दिया। इसमें बाबल परिवार के 26 सदस्यों ने भी अपनी आहुति दी।"
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-[3rem] p-8 md:p-16 border border-white/10 relative overflow-hidden">
           {/* Memorial Header */}
           <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-b border-white/10 pb-12">
              <div className="flex items-center gap-6">
                 <div className="w-20 h-20 rounded-2xl bg-accent-gold/20 flex items-center justify-center text-accent-gold border border-accent-gold/30">
                    <span className="material-symbols-outlined text-4xl notranslate">shield_moon</span>
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold font-display">शहीदों की नामावली</h3>
                    <p className="text-accent-gold/80 font-medium">कुल 26 शहीद (23 पुरुष, 3 स्त्रियाँ)</p>
                 </div>
              </div>
              <div className="px-6 py-3 rounded-full bg-accent-gold text-black font-bold uppercase tracking-widest text-xs">
                 मंगलवार, वि.स. 1787
              </div>
           </div>

           {/* Martyr List Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-12">
              {historyData.khejarli.martyrs.map((martyr, index) => {
                // Determine if it's a woman (noted as 'धर्मपत्नी' or 'बाई' in data)
                const isWoman = martyr.includes('धर्मपत्नी') || martyr.includes('बाई');
                return (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className={`w-2 h-2 rounded-full ${isWoman ? 'bg-pink-400' : 'bg-accent-gold'} opacity-60 group-hover:scale-150 transition-transform`}></div>
                    <span className={`text-lg transition-colors notranslate ${isWoman ? 'text-pink-100/90 italic font-medium' : 'text-gray-100 font-medium'} group-hover:text-accent-gold`}>
                      {martyr}
                    </span>
                  </div>
                );
              })}
           </div>

           {/* Solemn Note */}
           <div className="mt-20 pt-10 border-t border-white/10 text-center opacity-70">
              <p className="text-sm tracking-widest uppercase font-bold text-accent-gold/60">अमर शहीद सदैव स्मरणीय</p>
              <div className="flex justify-center gap-4 mt-4">
                 <div className="w-1 h-1 bg-white rounded-full"></div>
                 <div className="w-1 h-1 bg-white rounded-full"></div>
                 <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default KhejreliMartyrs;
