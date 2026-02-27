"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const galleryItems = [
  { id: 1, category: "community", src: "/images/gallery-img-01.jpeg" },
  { id: 2, category: "eyeCamp", src: "/images/gallery-img-02.jpeg" },
  { id: 3, category: "cowService", src: "/images/gallery-img-03.jpeg" },
  { id: 4, category: "education", src: "/images/gallery-img-04.jpeg" },
  { id: 5, category: "awareness", src: "/images/gallery-img-05.jpeg" },
  { id: 6, category: "birdService", src: "/images/gallery-img-06.jpeg" },
  { id: 7, category: "satsang", src: "/images/gallery-img-07.jpeg" },
  { id: 8, category: "environment", src: "/images/gallery-img-08.jpeg" },
  { id: 9, category: "medical", src: "/images/gallery-img-09.jpeg" },
  { id: 13, category: "educationalTour", src: "/images/gallery-img-13.jpeg" },
  { id: 15, category: "culture", src: "/images/gallery-img-15.jpeg" },
  { id: 16, category: "yoga", src: "/images/gallery-img-16.jpeg" },
  { id: 17, category: "womenEmpowerment", src: "/images/gallery-img-17.jpeg" },
  { id: 18, category: "cleanIndia", src: "/images/gallery-img-18.jpeg" },
  { id: 19, category: "oldAgeHome", src: "/images/gallery-img-19.jpeg" },
  { id: 20, category: "water", src: "/images/gallery-img-20.jpeg" },
  { id: 21, category: "blood", src: "/images/gallery-img-21.jpeg" },
  { id: 22, category: "activities", src: "/images/462932131_8542641049148512_8317135543856134588_n.jpg" },
  { id: 23, category: "activities", src: "/images/463027609_8542643645814919_7318388570883548955_n.jpg" },
  { id: 24, category: "activities", src: "/images/463048900_8542728922473058_6210871153496202481_n.jpg" },
  { id: 25, category: "activities", src: "/images/463064164_8542622392483711_7718564485858990910_n.jpg" },
  { id: 26, category: "activities", src: "/images/463092946_8542732785806005_8375478647258694855_n.jpg" },
  { id: 27, category: "activities", src: "/images/463276140_8546392905439993_1182624142319444697_n.jpg" },
  { id: 28, category: "activities", src: "/images/463391613_8546356628776954_8319574942323464304_n.jpg" },
  { id: 29, category: "activities", src: "/images/463397791_8546346878777929_5238208331993450471_n.jpg" },
  { id: 30, category: "activities", src: "/images/463410777_8546484568764160_6667669441218449495_n.jpg" },
  { id: 31, category: "activities", src: "/images/463412989_8546362405443043_1515461287813013578_n.jpg" },
  { id: 32, category: "activities", src: "/images/463442215_8546361165443167_2313800889594254076_n.jpg" },
  { id: 33, category: "activities", src: "/images/463484571_8546353255443958_4588912091064799768_n.jpg" },
  { id: 34, category: "activities", src: "/images/463493112_8546491132096837_463643072640904795_n.jpg" },
  { id: 35, category: "activities", src: "/images/463577517_8542621459150471_3108064391315691603_n.jpg" },
  { id: 36, category: "activities", src: "/images/463596245_8546360395443244_8594296879795619060_n.jpg" },
  { id: 37, category: "activities", src: "/images/463596264_8542633555815928_3205912789587716898_n.jpg" },
  { id: 38, category: "activities", src: "/images/463596266_8546363158776301_1472852075293520065_n.jpg" },
  { id: 39, category: "activities", src: "/images/463602426_8546349802110970_4452215757240928695_n.jpg" },
  { id: 40, category: "activities", src: "/images/463632836_8564986200247330_6261429639932591007_n.jpg" },
  { id: 41, category: "activities", src: "/images/463652693_8546352532110697_3759708680629827892_n.jpg" },
  { id: 42, category: "activities", src: "/images/463659321_8564947190251231_7353743774962087467_n.jpg" },
  { id: 43, category: "activities", src: "/images/463681293_8546392402106710_7662669088026067968_n.jpg" },
  { id: 44, category: "activities", src: "/images/463683007_8542646019148015_1293076384235279203_n.jpg" },
  { id: 45, category: "activities", src: "/images/463745558_8546364702109480_790515959338722390_n.jpg" },
  { id: 46, category: "activities", src: "/images/463786883_8565028316909785_6386543611440002689_n.jpg" },
  { id: 47, category: "activities", src: "/images/463971729_8564984800247470_4798578499356047113_n.jpg" },
  { id: 48, category: "activities", src: "/images/479378107_995107792811895_7632059738256510241_n.jpg" },
  { id: 49, category: "activities", src: "/images/480220682_995107796145228_1286512408800773625_n.jpg" },
  { id: 50, category: "activities", src: "/images/480298407_995107689478572_7081135010726213738_n.jpg" },
  { id: 51, category: "activities", src: "/images/480457462_995107789478562_954061808826555293_n.jpg" },
  { id: 52, category: "activities", src: "/images/480688297_995107742811900_8824928019099309319_n.jpg" },
  { id: 53, category: "activities", src: "/images/504920307_9998662953546307_3774481003850726145_n.jpg" },
  { id: 54, category: "activities", src: "/images/463653341_8546504708762146_7667201234104561838_n.jpg" },
  { id: 55, category: "activities", src: "/images/463750036_8546393675439916_8372784249833168757_n.jpg" },
  { id: 56, category: "activities", src: "/images/WhatsApp Image 2026-02-25 at 11.57.50 AM.jpeg" },
  { id: 57, category: "activities", src: "/images/WhatsApp Image 2026-02-25 at 11.57.47 AM.jpeg" },
];

import { useLanguage } from "@/context/LanguageContext";

export default function GalleryClient() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Handle Keyboard Navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0));
  };
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0b1214]">
      <Navbar />
      
      <main className="flex-grow">
        {/* Cinematic Hero Section */}
        <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
             {/* Background Image */}
             <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000" 
                 style={{ backgroundImage: 'url("/images/gallery-img-11.jpeg")' }}
             ></div>
             {/* Dark Overlay with Gradient */}
             <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0b1214]"></div>

             <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                 <span className="inline-block px-4 py-1 mb-6 border border-accent-gold/50 rounded-full text-accent-gold text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                    {t('galleryPage.hero.badge')}
                 </span>
                 <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                    {t('galleryPage.hero.title1')} <span className="text-accent-gold italic font-serif">{t('galleryPage.hero.title2')}</span>
                 </h1>
                 <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed">
                    {t('galleryPage.hero.subtitle')}
                 </p>
             </div>
        </section>

        {/* Gallery Grid (Masonry) */}
        <section className="py-20 px-6 md:px-20 bg-white dark:bg-[#0b1214]">
             <div className="max-w-[1440px] mx-auto">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                    {galleryItems.map((item: any, index: number) => (
                        <div 
                            key={item.id} 
                            onClick={() => openModal(index)}
                            className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer shadow-xl mb-8"
                        >
                            <img 
                                alt={t(`galleryPage.categories.${item.category}`)} 
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                                src={item.src}
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                                    visibility
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
            <div 
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
                onClick={closeModal}
            >
                {/* Close Button */}
                <button 
                    onClick={closeModal}
                    className="absolute top-6 right-6 text-white/70 hover:text-white hover:rotate-90 transition-all duration-300 z-50 p-2"
                >
                    <span className="material-symbols-outlined text-4xl">close</span>
                </button>

                {/* Navigation Buttons */}
                <button 
                    onClick={showPrev}
                    className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all z-50 group"
                >
                    <span className="material-symbols-outlined text-3xl md:text-4xl group-hover:-translate-x-1 transition-transform">chevron_left</span>
                </button>

                <button 
                    onClick={showNext}
                    className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all z-50 group"
                >
                    <span className="material-symbols-outlined text-3xl md:text-4xl group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>

                {/* Main Content */}
                <div 
                    className="relative max-w-7xl max-h-[90vh] flex flex-col items-center"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                >
                    <img 
                        src={galleryItems[selectedIndex].src} 
                        alt={t(`galleryPage.categories.${galleryItems[selectedIndex].category}`)}
                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                    />
                    <div className="mt-4 text-center">
                        <p className="text-gray-400 text-sm mt-1">{t('galleryPage.lightbox.image')} {selectedIndex + 1} {t('galleryPage.lightbox.of')} {galleryItems.length}</p>
                    </div>
                </div>
            </div>
        )}

        {/* CTA Section */}
        <CTASection 
            bgImage="/images/gallery-img-16.jpeg"
            title={t('galleryPage.cta.title')}
            description={t('galleryPage.cta.desc')}
            primaryBtnText={t('galleryPage.cta.btn')}
            primaryBtnLink="/contact"
        />

      </main>
      <Footer />
    </div>
  );
}
