"use client";

import React from "react";
import { upcomingProjects } from "@/data/works";
import { useLanguage } from '@/context/LanguageContext';

const UpcomingProjects = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0b1214] overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-2 block">{t('works.upcoming.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-[#0d1b1c] dark:text-white leading-tight">
            {t('works.upcoming.title1')} <span className="text-primary dark:text-accent-gold italic font-serif font-medium">{t('works.upcoming.title2')}</span>
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 dark:bg-[#1a2024] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-accent-gold/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-accent-gold/10 rounded-xl flex items-center justify-center text-accent-gold mb-6 group-hover:bg-accent-gold group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined notranslate text-3xl">{project.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[#0d1b1c] dark:text-white mb-4 font-display">{t(`works.upcoming.items.${project.id}.title`)}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {t(`works.upcoming.items.${project.id}.description`)}
              </p>
              {project.location && (
                <div className="flex items-center gap-2 text-xs font-bold text-primary dark:text-accent-gold uppercase tracking-wider">
                  <span className="material-symbols-outlined notranslate text-sm">location_on</span>
                  {t(`works.upcoming.items.${project.id}.location`)}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary/5 dark:bg-white/5 rounded-3xl border border-primary/10 dark:border-white/10 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 italic">
            {t('works.upcoming.quote')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;
