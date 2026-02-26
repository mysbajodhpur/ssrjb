"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function TermsOfService() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0b1214] font-sans text-gray-800 dark:text-gray-200">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#1a2024] p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-accent-gold">
          
          <h1 className="text-3xl md:text-5xl font-display font-bold text-[#0b2b30] dark:text-white mb-6">{t('termsOfService.title')}</h1>
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-widest font-bold">{t('termsOfService.lastUpdated')}</p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">{t('termsOfService.section1.title')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('termsOfService.section1.p1') }} />

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">{t('termsOfService.section2.title')}</h3>
            <p>{t('termsOfService.section2.p1')}</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>{t('termsOfService.section2.items.0')}</li>
              <li>{t('termsOfService.section2.items.1')}</li>
              <li>{t('termsOfService.section2.items.2')}</li>
              <li>{t('termsOfService.section2.items.3')}</li>
              <li>{t('termsOfService.section2.items.4')}</li>
            </ul>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">{t('termsOfService.section3.title')}</h3>
            <p>{t('termsOfService.section3.p1')}</p>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">{t('termsOfService.section4.title')}</h3>
            <p>{t('termsOfService.section4.p1')}</p>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">{t('termsOfService.section5.title')}</h3>
            <p>{t('termsOfService.section5.p1')}</p>
             <p className="font-bold mt-2">
              {t('termsOfService.section5.email')} <a href="mailto:info@randheerjibabal.org" className="text-accent-gold hover:underline">info@randheerjibabal.org</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
