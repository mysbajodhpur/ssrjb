
"use client";

import React from 'react';
import { teamData } from '@/data/team';


import { useLanguage } from '@/context/LanguageContext';

const MentorshipBoard = () => {
    const { t } = useLanguage();
    return (
        <section className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-[#0b1214] rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-inner overflow-hidden relative">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{t('teamPage.mentorship.badge')}</span>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-[#0d1b1c] dark:text-white mb-6">
                        {t('teamPage.mentorship.title')}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base italic leading-relaxed">
                        {t('teamPage.mentorship.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamData.margdarshakMandal.map((mentor, index) => (
                        <div 
                            key={index} 
                            className="bg-white dark:bg-[#1a2024] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-accent-gold/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined notranslate text-accent-gold text-lg">school</span>
                                </div>
                                <div>
                                    <p className="font-bold text-[#0d1b1c] dark:text-white text-lg leading-tight">
                                        {t(`teamPage.mentorship.items.${index}.name`)}
                                    </p>
                                    {(mentor.location || mentor.details) && (
                                        <p className="text-accent-gold font-bold text-[10px] md:text-xs uppercase tracking-widest mt-1">
                                            {t(`teamPage.mentorship.items.${index}.location`) !== `teamPage.mentorship.items.${index}.location` 
                                                ? t(`teamPage.mentorship.items.${index}.location`) 
                                                : t(`teamPage.mentorship.items.${index}.details`)}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center opacity-60">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-gray-400">{t('teamPage.mentorship.footer')}</p>
                </div>
            </div>
        </section>
    );
};

export default MentorshipBoard;
