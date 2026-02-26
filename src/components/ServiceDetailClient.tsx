"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import ContributionSection from "@/components/ContributionSection";
import { useLanguage } from "@/context/LanguageContext";
import { WorkItem } from "@/data/works";

type Props = {
  slug: string;
  service: any; // Or proper type depending on your interface
  relatedCompleted: WorkItem[];
  relatedUpcoming: WorkItem[];
};

export default function ServiceDetailClient({ slug, service, relatedCompleted, relatedUpcoming }: Props) {
  const { t } = useLanguage();

  if (!service) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0b1214]">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center px-6">
             <h1 className="text-4xl font-display font-bold text-[#0b2b30] dark:text-white mb-4">{t('serviceDetail.notFound.title') || "Service Not Found"}</h1>
             <Link href="/services" className="px-6 py-2 bg-accent-gold text-[#0b2b30] rounded-full font-bold">{t('serviceDetail.notFound.btn') || "Return to Services"}</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Fetch specific translated service features
  const transService = t(`services.${slug}`, true) || {};
  // Find Translated works logic
  const transWorks = t(`works.completed.items`, true) || {};
  const transUpcoming = t(`works.upcoming.items`, true) || {};

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 dark:bg-[#0b1214]">
      <Navbar />

      <main className="flex-grow">
        {/* Parallax Hero Section */}
        <section className="relative flex items-center justify-center overflow-hidden pt-20 pb-30">
             {/* Background */}
             <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed" 
                style={{ backgroundImage: `url('${service.heroImage}')` }}
             ></div>
             {/* Overlay */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#0b2b30]/90 via-[#0b2b30]/70 to-[#0b2b30]/40"></div>
             
             <div className="relative z-10 container mx-auto px-6 text-center">
                 <span className="inline-block px-4 py-1 mb-6 border border-accent-gold/50 rounded-full text-accent-gold text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                    {transService.tagline || service.tagline}
                 </span>
                 <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl">
                    {transService.title || service.title}
                 </h1>
                 <p className="text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                    {transService.description || service.description}
                 </p>
             </div>
        </section>

        {/* Related Completed Works */}
        {relatedCompleted.length > 0 && (
            <section className="py-24 px-6 md:px-16 bg-white dark:bg-[#0b1214]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-2 block">{t('serviceDetail.relatedWorks.badge')}</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0d1b1c] dark:text-white mb-3">{t('serviceDetail.relatedWorks.title1')} <span className="text-primary dark:text-accent-gold italic font-serif font-medium">{t('serviceDetail.relatedWorks.title2')}</span></h2>
                        <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedCompleted.map((work) => {
                            const translatedWork = transWorks[work.id] || work;
                            return (
                              <div key={work.id} className="bg-gray-50 dark:bg-[#1a2024] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-accent-gold/30 transition-all group">
                                  <span className="material-symbols-outlined notranslate text-4xl text-accent-gold/40 mb-4 group-hover:scale-110 group-hover:text-accent-gold transition-all">
                                      {work.icon || 'star'}
                                  </span>
                                  <h3 className="text-xl font-bold text-[#0d1b1c] dark:text-white mb-2 font-display">{translatedWork.title || work.title}</h3>
                                  {translatedWork.description && <p className="text-gray-600 dark:text-gray-400 text-sm">{translatedWork.description}</p>}
                                  {translatedWork.location && <p className="text-accent-gold text-xs mt-4 uppercase tracking-widest font-bold">{t('serviceDetail.relatedWorks.location')}: {translatedWork.location}</p>}
                              </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        )}

        {/* Related Upcoming Projects */}
        {relatedUpcoming.length > 0 && (
            <section className="py-24 px-6 md:px-16 bg-gray-50 dark:bg-[#0e1618]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-2 block">{t('serviceDetail.relatedUpcoming.badge')}</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0d1b1c] dark:text-white mb-3">{t('serviceDetail.relatedUpcoming.title1')} <span className="text-primary dark:text-accent-gold italic font-serif font-medium">{t('serviceDetail.relatedUpcoming.title2')}</span></h2>
                        <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {relatedUpcoming.map((project) => {
                            const translatedProj = transUpcoming[project.id] || project;
                            return (
                                <div key={project.id} className="bg-white dark:bg-[#1a2024] p-8 rounded-3xl border-l-4 border-l-accent-gold shadow-sm hover:shadow-md transition-all">
                                    <h3 className="text-xl font-bold text-[#0d1b1c] dark:text-white mb-2 font-display">{translatedProj.title || project.title}</h3>
                                    {translatedProj.description && <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{translatedProj.description}</p>}
                                    {translatedProj.location && <p className="text-accent-gold text-xs mt-4 uppercase tracking-widest font-bold">{t('serviceDetail.relatedUpcoming.location')}: {translatedProj.location}</p>}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        )}

        {/* Ways to Contribute Section */}
        <ContributionSection />

        {/* Replaced CTA Section */}
        <CTASection 
            bgImage={service.ctaImage || "/images/gallery-img-14.jpeg"}
            title={t('serviceDetail.cta.title')}
            description={t('serviceDetail.cta.desc')}
            primaryBtnText={t('serviceDetail.cta.btn')}
            primaryBtnLink="/contact"
        />

      </main>
      <Footer />
    </div>
  );
}
