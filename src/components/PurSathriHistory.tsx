"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const PurSathriHistory = () => {
  const { t, language } = useLanguage();

  return (
    <div className="w-full space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <span className="inline-block text-accent-gold font-bold tracking-widest text-xs uppercase px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20">
          {t('purSathri.badge')}
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#0d1b1c] dark:text-white leading-tight">
           {t('purSathri.title')}
        </h2>
        <p className="text-primary dark:text-accent-gold font-serif italic text-xl md:text-2xl opacity-90">
          {t('purSathri.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Foundation Story */}
        <div className="bg-white dark:bg-[#1a2024] rounded-[3rem] p-10 md:p-14 shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <span className="material-symbols-outlined notranslate text-primary dark:text-accent-gold text-4xl">temple_hindu</span>
                    <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-primary dark:first-letter:text-accent-gold first-letter:mr-3 first-letter:float-left">
                    {t('purSathri.content')}
                </p>
                <div className="mt-8 p-4 bg-gray-50 dark:bg-black/20 rounded-2xl border-l-4 border-primary dark:border-accent-gold">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 italic">
                        {t('purSathri.locationInfo')}
                    </p>
                </div>
            </div>
        </div>

        {/* The Miracle Highlight - Randheer Ji focus */}
        <div className="bg-gradient-to-br from-[#0d1b1c] to-[#1a2e30] dark:from-[#080d0e] dark:to-[#0d1b1c] rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
            {/* Visual focus on Randheer Ji focus */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-gold/10 rounded-full blur-3xl group-hover:bg-accent-gold/20 transition-all duration-700"></div>
            
            <div className="relative z-10 flex flex-col h-full">
                <div className="bg-accent-gold/20 self-start px-4 py-1 rounded-full mb-8">
                    <span className="text-accent-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                        <span className="material-symbols-outlined notranslate text-sm">auto_awesome</span>
                        {t('purSathri.miracleTitle')}
                    </span>
                </div>

                <div className="space-y-8 flex-grow">
                    <p className="text-white/90 text-lg md:text-xl leading-relaxed italic border-l-2 border-accent-gold/30 pl-6">
                        {t('purSathri.miracleContent')}
                    </p>

                    {/* Doha Box */}
                    <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 border border-white/5 relative mt-auto">
                        <span className="absolute -top-3 left-8 px-3 py-1 bg-accent-gold text-[#0d1b1c] text-[10px] font-bold rounded-lg uppercase tracking-tighter">
                            {t('purSathri.dohaBadge')}
                        </span>
                        <div className="text-center space-y-4 pt-2">
                            <p className="text-xl md:text-2xl font-serif font-bold text-accent-gold leading-snug">
                                {t('purSathri.dohaLine1')}
                            </p>
                            <p className="text-xl md:text-2xl font-serif font-bold text-accent-gold leading-snug">
                                {t('purSathri.dohaLine2')}
                            </p>
                            {language === 'en' && t('purSathri.dohaTranslation') && (
                                <p className="text-xs text-white/40 mt-6 pt-4 border-t border-white/5 font-light leading-relaxed">
                                    {t('purSathri.dohaTranslation')}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Author Info */}
                <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                    <div>
                        <p className="text-white font-bold">{t('purSathri.author')}</p>
                        <p className="text-accent-gold text-xs uppercase tracking-widest">{t('purSathri.authorTitle')}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-accent-gold/30 flex items-center justify-center">
                        <span className="material-symbols-outlined notranslate text-accent-gold">history_edu</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PurSathriHistory;
