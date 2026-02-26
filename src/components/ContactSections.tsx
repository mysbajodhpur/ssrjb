"use client";

import React from 'react';
import ContactForm from "@/components/ContactForm";
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSections() {
  const { t } = useLanguage();

  return (
    <>
        {/* Cinematic Hero Section */}
        <section className="relative flex items-center justify-center overflow-hidden pt-20 pb-30">
             {/* Background Image */}
             <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000" 
                 style={{ backgroundImage: 'url("/images/gallery-img-19.jpeg")' }} 
             ></div>
             {/* Dark Overlay with Gradient */}
             <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0b1214]"></div>

             <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                 <span className="inline-block px-4 py-1 mb-6 border border-accent-gold/50 rounded-full text-accent-gold text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                    {t('contactPage.hero.badge')}
                 </span>
                 <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                    {t('contactPage.hero.title1')} <span className="text-accent-gold italic font-serif">{t('contactPage.hero.title2')}</span>
                 </h1>
                 <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl mx-auto">
                    {t('contactPage.hero.subtitle')}
                 </p>
             </div>
        </section>

        {/* Contact Cards (Royal Glass) */}
        <section className="px-6 -mt-20 relative z-20 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "mail", title: t('contactPage.cards.email.title'), desc: t('contactPage.cards.email.desc'), link: "mailto:info@randheerjibabal.org", linkText: "info@randheerjibabal.org" },
              { icon: "call", title: t('contactPage.cards.call.title'), desc: t('contactPage.cards.call.desc'), link: "tel:+919818757905", linkText: "+91 98187 57905" },
              { icon: "location_on", title: t('contactPage.cards.visit.title'), desc: t('contactPage.cards.visit.desc'), text: t('contactPage.cards.visit.text') }
            ].map((item, index) => (
              <div key={index} className="bg-white/95 dark:bg-[#1a2024]/95 backdrop-blur-md border-t-4 border-accent-gold p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-14 h-14 bg-accent-gold/10 rounded-full flex items-center justify-center text-accent-gold mb-6 group-hover:bg-accent-gold group-hover:text-[#0b2b30] transition-colors">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-[#0d1b1c] dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">{item.desc}</p>
                {item.link ? (
                  <a className="text-[#0b2b30] dark:text-accent-gold font-bold uppercase tracking-wider text-xs hover:underline decoration-2 underline-offset-4" href={item.link}>{item.linkText}</a>
                ) : (
                  <span className="text-[#0b2b30] dark:text-accent-gold font-bold uppercase tracking-wider text-xs">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Form and Map Split Section */}
        <section className="py-20 px-6 lg:px-16 bg-white dark:bg-[#0b1214]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            {/* Form Area using Client Component */}
            <ContactForm />
            
            {/* Map and Details Area */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-[#fafafa] dark:bg-[#1a2024] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <h4 className="text-[#0d1b1c] dark:text-white font-display text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent-gold">schedule</span> {t('contactPage.details.timingTitle')}
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                    <span className="text-gray-500 dark:text-gray-400">{t('contactPage.details.monFri')}</span>
                    <span className="font-bold text-[#0d1b1c] dark:text-white">09:00 AM - 06:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                    <span className="text-gray-500 dark:text-gray-400">{t('contactPage.details.sat')}</span>
                    <span className="font-bold text-[#0d1b1c] dark:text-white">10:00 AM - 04:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-gray-500 dark:text-gray-400">{t('contactPage.details.sun')}</span>
                    <span className="font-bold italic text-accent-gold">{t('contactPage.details.sunTime')}</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs italic text-gray-400 leading-relaxed">{t('contactPage.details.note')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
