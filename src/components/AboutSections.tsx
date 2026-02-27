"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import HistoryFullReader from "@/components/HistoryFullReader";
import KhejreliMartyrs from "@/components/KhejreliMartyrs";
import FamilyTree from "@/components/FamilyTree";
import CompletedWorks from "@/components/CompletedWorks";
import UpcomingProjects from "@/components/UpcomingProjects";
import CTASection from "@/components/CTASection";

export default function AboutSections() {
  const { t } = useLanguage();

  return (
    <>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-fixed bg-cover bg-center transition-transform duration-1000 scale-105" 
            style={{
              backgroundImage: 'linear-gradient(rgba(11, 43, 48, 0.6), rgba(11, 43, 48, 0.8)), url("/images/463397791_8546346878777929_5238208331993450471_n.jpg")'
            }}
          ></div>
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <span className="inline-block text-accent-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 border border-accent-gold/30 px-4 py-1 rounded-full bg-black/20 backdrop-blur-sm">
                {t('aboutPage.hero.badge')}
            </span>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight font-display drop-shadow-2xl">
              {t('aboutPage.hero.title1')} <span className="text-accent-gold italic font-serif font-normal">{t('aboutPage.hero.title2')}</span><br/>
              <span className="opacity-90">{t('aboutPage.hero.title3')}</span>
            </h1>
            <p 
                className="text-white/90 text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-lg"
                dangerouslySetInnerHTML={{ __html: t('aboutPage.hero.quote') }}
            />
          </div>
        </section>

        {/* The Founder's Legacy - Tabbed History Reader */}
        <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-white dark:bg-[#0e1214] overflow-hidden">
             <div className="max-w-7xl mx-auto">
                <HistoryFullReader />
             </div>
        </section>

        {/* Khejreli Memorial Section */}
        <KhejreliMartyrs />

        {/* Family Tree Section (Vanshavali) */}
        <section className="py-24 bg-gray-50 dark:bg-[#0e1618] border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto">
            <FamilyTree />
          </div>
        </section>

        {/* Leadership Section */}
         <section className="py-24 px-6 bg-[#f4f7f7] dark:bg-[#0e1618]">
            <div className="max-w-[1280px] mx-auto">
                 <div className="text-center mb-16">
                    <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-2 block">{t('aboutPage.leadership.badge')}</span>
                    <h2 className="text-4xl font-display font-black text-[#0d1b1c] dark:text-white">{t('aboutPage.leadership.title')}</h2>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* President Card */}
                    <div className="bg-white dark:bg-[#1a2024] rounded-[2rem] p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group hover:-translate-y-1 transition-all">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-gold"></div>
                        <div className="w-40 h-40 flex-shrink-0 relative">
                            <div className="absolute inset-0 bg-accent-gold/10 rounded-full group-hover:scale-110 transition-transform"></div>
                            <img 
                                src="/images/ramesh-babal.png" 
                                alt={t('aboutPage.leadership.presName')} 
                                className="w-full h-full object-cover rounded-full shadow-lg relative z-10 border-4 border-white dark:border-[#0b1214]"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <blockquote className="text-base text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                                {t('aboutPage.leadership.presQuote')}
                            </blockquote>
                            <div>
                                <h3 className="text-xl font-bold text-[#0d1b1c] dark:text-white font-display">{t('aboutPage.leadership.presName')}</h3>
                                <p className="text-primary dark:text-accent-gold font-bold uppercase tracking-wider text-[10px] mt-1">{t('aboutPage.leadership.presRole')}</p>
                            </div>
                        </div>
                    </div>

                    {/* General Secretary Card */}
                    <div className="bg-white dark:bg-[#1a2024] rounded-[2rem] p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group hover:-translate-y-1 transition-all">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-gold"></div>
                        <div className="w-40 h-40 flex-shrink-0 relative">
                            <div className="absolute inset-0 bg-accent-gold/10 rounded-full group-hover:scale-110 transition-transform"></div>
                            {/* Using a placeholder icon/div since no image is provided yet */}
                            <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative z-10 border-4 border-white dark:border-[#0b1214] overflow-hidden">
                                 <img 
                                src="/images/team/jaikishanbishnoi.jpg" 
                                alt={t('aboutPage.leadership.secName')} 
                                className="w-full h-full object-cover rounded-full shadow-lg relative z-10 border-4 border-white dark:border-[#0b1214]"
                            />
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <blockquote className="text-base text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed text-balance">
                                {t('aboutPage.leadership.secQuote')}
                            </blockquote>
                            <div>
                                <h3 className="text-xl font-bold text-[#0d1b1c] dark:text-white font-display">{t('aboutPage.leadership.secName')}</h3>
                                <p className="text-primary dark:text-accent-gold font-bold uppercase tracking-wider text-[10px] mt-1">{t('aboutPage.leadership.secRole')}</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
         </section>

        {/* Official Objectives (Uddeshya) */}
        <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#0b1214]">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-2 block">{t('aboutPage.objectives.badge')}</span>
                    <h2 className="text-3xl lg:text-4xl font-display font-black text-[#0d1b1c] dark:text-white mb-4">{t('aboutPage.objectives.title')}</h2>
                    <div className="w-20 h-1 bg-accent-gold mx-auto mb-6 rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t('aboutPage.objectives.intro')}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {Array.from({ length: 13 }).map((_: any, index: number) => (
                        <div key={index} className="flex gap-4 p-7 rounded-2xl bg-gray-50 dark:bg-[#1a2024] border border-gray-100 dark:border-gray-800 hover:border-accent-gold/40 transition-all duration-300 hover:shadow-xl group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold font-bold font-display group-hover:bg-accent-gold group-hover:text-white transition-colors">
                                {index + 1}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed font-medium break-words">
                                {t(`aboutPage.objectives.list.${index}`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Organizational Structure & Membership */}
        <section className="py-24 px-6 md:px-12 bg-[#f4f7f7] dark:bg-[#0e1618] border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="bg-white dark:bg-[#1a2024] p-10 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800">
                        <h3 className="text-2xl font-bold font-display text-[#0d1b1c] dark:text-white mb-8 flex items-center gap-3">
                            <span className="material-symbols-outlined notranslate text-accent-gold text-3xl">groups</span>
                            {t('aboutPage.structure.title')}
                        </h3>
                        <p 
                            className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: t('aboutPage.structure.intro') }}
                        />
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-base text-gray-700 dark:text-gray-300">
                            {[
                                { label: t('aboutPage.structure.roles.pres'), count: "1" },
                                { label: t('aboutPage.structure.roles.vp'), count: "4" },
                                { label: t('aboutPage.structure.roles.secGen'), count: "1" },
                                { label: t('aboutPage.structure.roles.sec'), count: "4" },
                                { label: t('aboutPage.structure.roles.treasurer'), count: "1" },
                                { label: t('aboutPage.structure.roles.coTreasurer'), count: "1" },
                                { label: t('aboutPage.structure.roles.spokesperson'), count: "1" },
                                { label: t('aboutPage.structure.roles.orgSec'), count: "2" },
                                { label: t('aboutPage.structure.roles.execMember'), count: "16", full: true },
                            ].map((item: any, i: number) => (
                                <li key={i} className={`flex items-center justify-between gap-3 p-2 border-b border-gray-50 dark:border-gray-800/50 ${item.full ? 'sm:col-span-2' : ''}`}>
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="w-1.5 h-1.5 bg-accent-gold rounded-full shrink-0"></div>
                                        <span className="truncate">{item.label}</span>
                                    </div>
                                    <span className="font-bold text-accent-gold">({item.count})</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold font-display text-[#0d1b1c] dark:text-white mb-6 flex items-center gap-3">
                                <span className="material-symbols-outlined notranslate text-accent-gold text-3xl">verified_user</span>
                                {t('aboutPage.membership.title')}
                            </h3>
                            <div className="bg-white dark:bg-[#1a2024] p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm space-y-8">
                                <div className="space-y-4">
                                    <h4 className="text-accent-gold font-bold uppercase tracking-widest text-xs">{t('aboutPage.membership.eligibilityTitle')}</h4>
                                    <p 
                                        className="text-gray-600 dark:text-gray-300 text-base leading-relaxed break-words"
                                        dangerouslySetInnerHTML={{ __html: t('aboutPage.membership.eligibilityText') }}
                                    />
                                </div>
                                
                                <div className="space-y-4 pt-6 border-t border-gray-50 dark:border-gray-800">
                                    <h4 className="text-accent-gold font-bold uppercase tracking-widest text-xs">{t('aboutPage.membership.feeTitle')}</h4>
                                    <div className="space-y-3">
                                        {[
                                            { type: t('aboutPage.membership.lifetime'), fee: "₹11,000/-" },
                                            { type: t('aboutPage.membership.general'), fee: "₹1,100/-" }
                                        ].map((fee: any, i: number) => (
                                            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-black/20 rounded-xl">
                                                <span className="font-medium text-gray-700 dark:text-gray-300">{fee.type}</span>
                                                <span className="font-bold text-primary dark:text-accent-gold">{fee.fee}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="pt-4">
                                    <p className="text-xs text-gray-400 leading-relaxed italic">
                                        {t('aboutPage.membership.note')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

        {/* Upcoming Projects Section */}
        <UpcomingProjects />

        {/* CTA Section */}
        <CTASection 
            bgImage="/images/gallery-img-08.jpeg"
        />
    </>
  );
}
