"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import HierarchyTree from '@/components/HierarchyTree';
import MentorshipBoard from '@/components/MentorshipBoard';
import ExecutiveCommittee from '@/components/ExecutiveCommittee';
import CTASection from '@/components/CTASection';

export default function TeamSections() {
    const { t } = useLanguage();

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-fixed bg-cover bg-center transition-transform duration-1000 scale-105" 
                    style={{
                        backgroundImage: 'linear-gradient(rgba(11, 43, 48, 0.7), rgba(11, 43, 48, 0.9)), url("/images/gallery-img-11.jpeg")'
                    }}
                ></div>
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <span className="inline-block text-accent-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 border border-accent-gold/30 px-4 py-1 rounded-full bg-black/20 backdrop-blur-sm">
                        {t('teamPage.hero.badge')}
                    </span>
                    <h1 className="text-white text-5xl md:text-7xl font-black mb-8 leading-tight font-display drop-shadow-2xl">
                        {t('teamPage.hero.title1')} <br/>
                        <span className="text-accent-gold italic font-serif font-normal">{t('teamPage.hero.title2')}</span>
                    </h1>
                    <p className="text-white/90 text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-lg" dangerouslySetInnerHTML={{ __html: t('teamPage.hero.subtitle') }} />
                </div>
            </section>

            {/* 1. Leadership hierarchy (Jambhoji -> Randheer -> Ramesh) */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-accent-gold font-bold uppercase tracking-[0.4em] text-xs mb-2">
                           {t('teamPage.hierarchy.badge')}
                        </h2>
                        <div className="text-3xl md:text-4xl font-display font-black dark:text-white">
                           {t('teamPage.hierarchy.title')}
                        </div>
                    </div>
                    <HierarchyTree />
                </div>
            </section>

            {/* 2. Margdarshak Mandal (Mentorship Board) */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <MentorshipBoard />
                </div>
            </section>

            {/* 3. Executive Committee */}
            <section className="py-20 bg-[#f8fafb] dark:bg-black/20">
                <div className="max-w-7xl mx-auto px-6">
                    <ExecutiveCommittee />
                </div>
            </section>

            {/* Joint CTA */}
            <CTASection 
              bgImage="/images/gallery-img-12.jpeg"
              title={t('servicesPage.cta.title')}
              description={t('servicesPage.cta.desc')}
              primaryBtnText={t('servicesPage.cta.btn')}
              primaryBtnLink="/contact"
            />
        </>
    );
}
