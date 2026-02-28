"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { servicesData } from "@/data/services";

export default function ServicesSections() {
  const { t } = useLanguage();

  return (
    <>
        {/* Hero Section */}
        <section className="relative py-24 flex items-center justify-center overflow-hidden">
           <div 
             className="absolute inset-0 bg-cover bg-[center_top]" 
             style={{
               backgroundImage: 'linear-gradient(rgba(11, 43, 48, 0.6), rgba(11, 43, 48, 0.8)), url("/images/463484571_8546353255443958_4588912091064799768_n.jpg")'
             }}
           ></div>
           <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
             <span className="inline-block text-accent-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 border border-accent-gold/30 px-4 py-1 rounded-full bg-black/20 backdrop-blur-sm">
                 {t('servicesPage.hero.badge')}
             </span>
             <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 font-display drop-shadow-xl">
               {t('servicesPage.hero.title1')} <span className="text-accent-gold italic font-serif font-normal">{t('servicesPage.hero.title2')}</span>
             </h1>
             <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                {t('servicesPage.hero.subtitle')}
             </p>
           </div>
        </section>

        {/* Services Grid (Home Page Style) */}
        <section className="py-24 px-6 lg:px-16 relative bg-[#fafafa] dark:bg-[#0b1214]">
             <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={service.id} className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-xl bg-gray-900">
                             {/* Background Image */}
                             <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                                style={{ backgroundImage: `url('${service.heroImage}')` }}
                             ></div>
                             
                             {/* Gradient Overlay */}
                             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                             
                             {/* Content Container (Bottom Aligned) */}
                             <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                
                                {/* Icon Bubble */}
                                <div className="w-12 h-12 bg-accent-gold/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 text-accent-gold">
                                    <span className="material-symbols-outlined notranslate text-2xl">
                                        {/* Fallback to 'volunteer_activism' if no feature icon exists */}
                                        {service.features[0]?.icon || 'volunteer_activism'}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-3 font-display text-white">
                                    {t(`services.${service.slug}.title`)}
                                </h3>
                                
                                {/* Reveal Text */}
                                <p className="text-gray-300 leading-relaxed mb-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-h-0 group-hover:max-h-32 overflow-hidden">
                                    {t(`services.${service.slug}.description`)}
                                </p>
                                
                                <Link href={`/services/${service.slug}`} className="text-accent-gold font-bold flex items-center gap-2 transition-all text-sm uppercase tracking-wider hover:gap-3">
                                    {t('servicesPage.learnMore')} <span className="material-symbols-outlined notranslate text-sm">arrow_forward</span>
                                </Link>
                             </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* CTA Section (Gold Theme) */}
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
