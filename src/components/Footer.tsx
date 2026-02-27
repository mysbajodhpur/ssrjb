"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

import { servicesData } from '@/data/services';


// Reusable Footer Component
const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="relative bg-[#0b2b30] text-gray-300 overflow-hidden font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto pt-16 pb-8 px-6 lg:px-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="size-12 rounded-sm overflow-hidden border-2 border-accent-gold/50 shadow-lg">
                <img src="/images/randheer-ji.jpg" alt="Sant Shree Randheer Ji" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div>
                 <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {t('footer.titlePart1')} <span className="text-accent-gold">{t('footer.titlePart2')}</span>
                 </h3>
                 <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block mt-1">{t('footer.titlePart3')}</span>
                 <span className="text-[10px] text-gray-500 font-medium block mt-1 tracking-wider">Reg. No. COOP/2023/JODHPUR/203989</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-accent-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>{t('footer.home')}</Link></li>
              <li><Link href="/about" className="hover:text-accent-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-gold/50"></span>{t('footer.about')}</Link></li>
              <li><Link href="/team" className="hover:text-accent-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-gold/50"></span>{t('navbar.leadership')}</Link></li>
              <li><Link href="/gallery" className="hover:text-accent-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-gold/50"></span>{t('footer.gallery')}</Link></li>
              <li><Link href="/video" className="hover:text-accent-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-gold/50"></span>{t('footer.videos')}</Link></li>
              <li><Link href="/contact" className="hover:text-accent-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-gold/50"></span>{t('footer.contact')}</Link></li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.slug}`} className="hover:text-accent-gold transition-colors block">
                    {t(`services.${service.id}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">{t('footer.contactUs')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined notranslate text-accent-gold mt-1">location_on</span>
                <span className="text-gray-400" dangerouslySetInnerHTML={{ __html: t('footer.addressInfo') }} />
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined notranslate text-accent-gold">call</span>
                <a href={`tel:${t('contact.phone').replace(/\s/g, '')}`} className="text-gray-400 hover:text-white transition-colors">{t('contact.phone')}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined notranslate text-accent-gold">mail</span>
                <a href={`mailto:${t('contact.email')}`} className="text-gray-400 hover:text-white transition-colors">{t('contact.email')}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined notranslate text-accent-gold">schedule</span>
                <span className="text-gray-400">{t('footer.timingInfo')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} {t('footer.title')} {t('footer.copyright')}</p>
            <p className="mt-2 text-[10px] opacity-70">
              {t('footer.developerPrefix')} <a href="https://binary29.com/" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:text-white transition-colors">Binary29</a>
            </p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
