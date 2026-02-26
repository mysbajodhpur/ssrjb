"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";

const documentsBase = [
  { 
    id: 1, 
    fileName: "1.pdf", 
  },
  { 
    id: 2, 
    fileName: "2.pdf", 
  },
  { 
    id: 3, 
    fileName: "3.pdf", 
  },
  { 
    id: 4, 
    fileName: "4.pdf", 
  },
];

export default function DocumentsPage() {
  const { t } = useLanguage();
  const [selectedDoc, setSelectedDoc] = React.useState<string | null>(null);

  const docsTranslations = t('documentsPage.docs', true) || {};

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0b1214]">
      <Navbar />
      
      <main className="flex-grow">
        {/* Cinematic Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
             {/* Background Image */}
             <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed" 
                 style={{ backgroundImage: 'linear-gradient(rgba(11, 43, 48, 0.9), rgba(11, 43, 48, 0.95)), url("/images/gallery-img-02.jpeg")' }}
             ></div>

             <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                 <span className="inline-block px-4 py-1 mb-6 border border-accent-gold/50 rounded-full text-accent-gold text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                    {t('documentsPage.badge')}
                 </span>
                 <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
                    {t('documentsPage.title1')} <span className="text-accent-gold italic font-serif">{t('documentsPage.title2')}</span>
                 </h1>
             </div>
        </section>

        {/* Documents Grid */}
        <section className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-[#0e1214]">
             <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {documentsBase.map((doc) => (
                        <div key={doc.id} className="bg-white dark:bg-[#1a1f22] p-8 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-white/5 transition-all duration-300 group">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400">
                                    <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-accent-gold transition-colors">{(docsTranslations[doc.id] || {}).title || ""}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{(docsTranslations[doc.id] || {}).desc || ""}</p>
                                </div>
                            </div>
                            
                            <button 
                                onClick={() => setSelectedDoc(doc.fileName)}
                                className="inline-flex items-center justify-between w-full px-4 py-3 bg-gray-50 dark:bg-white/5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-accent-gold hover:text-[#0b2b30] transition-all group-hover:pl-6 cursor-pointer"
                            >
                                {t('documentsPage.viewNow')}
                                <span className="material-symbols-outlined text-lg">visibility</span>
                            </button>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* PDF Preview Modal */}
        {selectedDoc && (
            <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
                <div className="relative w-full h-full max-w-6xl bg-white rounded-xl overflow-hidden flex flex-col shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 bg-[#0b2b30] text-white border-b border-white/10">
                        <h3 className="font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-accent-gold">description</span>
                            दस्तावेज़ पूर्वावलोकन
                        </h3>
                        <div className="flex items-center gap-4">
                            <a 
                                href={`/docs/${selectedDoc}`} 
                                download 
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                title="Download"
                            >
                                <span className="material-symbols-outlined">download</span>
                            </a>
                            <button 
                                onClick={() => setSelectedDoc(null)}
                                className="p-2 hover:bg-red-500/80 rounded-full transition-colors cursor-pointer"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                    </div>
                    
                    {/* PDF Container */}
                    <div className="flex-grow bg-gray-100 relative">
                        <iframe 
                            src={`/docs/${selectedDoc}#toolbar=0`} 
                            className="w-full h-full"
                            title="PDF Preview"
                        ></iframe>
                    </div>
                </div>
            </div>
        )}

        <CTASection 
            bgImage="/images/gallery-img-15.jpeg"
            title={t('documentsPage.cta.title')}
            description={t('documentsPage.cta.desc')}
            primaryBtnText={t('documentsPage.cta.btn')}
            primaryBtnLink="/contact"
        />

      </main>
      <Footer />
    </div>
  );
}
