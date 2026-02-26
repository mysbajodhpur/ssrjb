"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { servicesData } from '@/data/services';
import CompletedWorks from '@/components/CompletedWorks';
import UpcomingProjects from '@/components/UpcomingProjects';

export default function HomeSections() {
  const { t, language } = useLanguage();

  return (
    <>
      {/* Stats Section - Floating */}
      <section className="relative z-30 -mt-20 px-4 sm:px-6 mb-20 pointer-events-none">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 pointer-events-auto">
          {[
            { count: "500+", label: t('home.stats.years'), icon: "history_edu" },
            { count: "9+", label: t('home.stats.construction'), icon: "temple_hindu" },
            { count: "1000+", label: t('home.stats.planting'), icon: "forest" },
            { count: "100%", label: t('home.stats.service'), icon: "volunteer_activism" }
          ].map((item, index) => (
            <div key={index} className="bg-white/95 dark:bg-[#0e3f45]/95 backdrop-blur p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-all duration-300 border-b-2 border-accent-gold ring-1 ring-black/5">
              <span className="material-symbols-outlined notranslate text-3xl text-primary dark:text-accent-gold mb-2 opacity-80 group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="text-2xl lg:text-3xl font-bold font-display text-primary dark:text-white mb-1">{item.count}</span>
              <p className="text-gray-500 dark:text-gray-300 text-[10px] md:text-xs uppercase tracking-widest font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 px-6 lg:px-20 max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="relative order-2 lg:order-1 group">
          <div className="absolute inset-0 bg-accent-gold/10 rounded-[2rem] transform rotate-2 group-hover:rotate-1 transition-transform duration-500 z-0"></div>
          <div 
            className="aspect-[4/5] bg-cover bg-top rounded-[2rem] shadow-2xl relative z-10 overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02]" 
            style={{
              backgroundImage: 'url("/images/randheer-ji.jpg")'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-8 text-white z-20">
              <p className="text-xs uppercase tracking-widest font-bold text-accent-gold mb-2">{t('home.legacy.founderLabel')}</p>
              <p className="font-display text-xl font-bold">{t('home.legacy.founderName')}</p>
              <p className="text-xs text-gray-300 mt-1">{t('home.legacy.founderSub')}</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-primary dark:text-accent-gold uppercase tracking-widest font-bold text-xs mb-3">{t('home.legacy.headingAccent')}</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b1c] dark:text-white mb-6 leading-tight font-display">
            {t('home.legacy.heading1')} <br/>
            <span className="text-primary dark:text-gray-300">{t('home.legacy.heading2')}</span>
          </h2>
          
          <div className="pl-6 border-l-2 border-accent-gold mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-200 font-display italic">
              {t('home.legacy.quote')}
            </p>
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t('home.legacy.para1') }} />
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: t('home.legacy.para2') }} />

          <Link href="/about" className="inline-flex items-center gap-2 text-[#0b2b30] dark:text-accent-gold font-bold uppercase tracking-wider text-sm hover:gap-4 transition-all">
            {t('home.legacy.readHistory')} <span className="material-symbols-outlined notranslate text-lg">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Completed Works Section */}
      <CompletedWorks />

      {/* Initiatives (Services) */}
      <section className="bg-gray-50 dark:bg-[#121619] py-20 px-6 lg:px-20 relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/5 dark:bg-white/5 opacity-50 transform skew-x-12 translate-x-1/2"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-accent-gold font-bold tracking-widest uppercase text-xs mb-2 block">{t('home.initiatives.headingAccent')}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b1c] dark:text-white font-display leading-tight">
                {t('home.initiatives.heading1')} <br/> {t('home.initiatives.heading2')}
              </h2>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-primary dark:text-accent-gold font-bold hover:gap-3 transition-all text-sm uppercase tracking-wide">
              {t('home.initiatives.viewAll')} <span className="material-symbols-outlined notranslate text-lg">arrow_right_alt</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 min-h-[400px]">
            {servicesData.slice(0, 3).map((service) => (
              <div key={service.id} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl h-[400px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url("${service.heroImage}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-accent-gold/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 text-accent-gold">
                    <span className="material-symbols-outlined notranslate text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-display text-white">{t(`services.${service.id}.title`)}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-h-0 group-hover:max-h-24 overflow-hidden line-clamp-3">
                    {t(`services.${service.id}.description`)}
                  </p>
                  <Link href={`/services/${service.slug}`} className="text-accent-gold font-bold flex items-center gap-2 transition-all text-sm uppercase tracking-wider">
                    {t('home.initiatives.learnMore')} <span className="material-symbols-outlined notranslate text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/services" className="inline-flex items-center gap-2 text-primary dark:text-accent-gold font-bold">
              {t('home.initiatives.viewAll')} <span className="material-symbols-outlined notranslate">arrow_right_alt</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <UpcomingProjects />
    </>
  );
}
