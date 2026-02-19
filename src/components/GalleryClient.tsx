"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const galleryItems = [
  { id: 1, title: "सामुदायिक सेवा", src: "/images/gallery-img-01.jpeg" },
  { id: 2, title: "नेत्र शिविर", src: "/images/gallery-img-02.jpeg" },
  { id: 3, title: "गौ सेवा", src: "/images/gallery-img-03.jpeg" },
  { id: 4, title: "शिक्षा", src: "/images/gallery-img-04.jpeg" },
  { id: 5, title: "जन जागरूकता", src: "/images/gallery-img-05.jpeg" },
  { id: 6, title: "पक्षी सेवा", src: "/images/gallery-img-06.jpeg" },
  { id: 7, title: "सत्संग", src: "/images/gallery-img-07.jpeg" },
  { id: 8, title: "पर्यावरण संरक्षण", src: "/images/gallery-img-08.jpeg" },
  { id: 9, title: "चिकित्सा सहायता", src: "/images/gallery-img-09.jpeg" },
  { id: 10, title: "वृक्षारोपण", src: "/images/gallery-img-10.jpeg" },
  { id: 11, title: "युवा विकास", src: "/images/gallery-img-11.jpeg" },
  { id: 12, title: "स्वास्थ्य शिविर", src: "/images/gallery-img-12.jpeg" },
  { id: 13, title: "शैक्षणिक भ्रमण", src: "/images/gallery-img-13.jpeg" },
  { id: 14, title: "राहत कार्य", src: "/images/gallery-img-14.jpeg" },
  { id: 15, title: "सांस्कृतिक कार्यक्रम", src: "/images/gallery-img-15.jpeg" },
  { id: 16, title: "योग और ध्यान", src: "/images/gallery-img-16.jpeg" },
  { id: 17, title: "महिला सशक्तिकरण", src: "/images/gallery-img-17.jpeg" },
  { id: 18, title: "स्वच्छ भारत", src: "/images/gallery-img-18.jpeg" },
  { id: 19, title: "वृद्धाश्रम सेवा", src: "/images/gallery-img-19.jpeg" },
  { id: 20, title: "जल संरक्षण", src: "/images/gallery-img-20.jpeg" },
  { id: 21, title: "रक्तदान शिविर", src: "/images/gallery-img-21.jpeg" },
];

export default function GalleryClient() {
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
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
             {/* Background Image */}
             <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000" 
                 style={{ backgroundImage: 'url("/images/gallery-img-11.jpeg")' }}
             ></div>
             {/* Dark Overlay with Gradient */}
             <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0b1214]"></div>

             <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                 <span className="inline-block px-4 py-1 mb-6 border border-accent-gold/50 rounded-full text-accent-gold text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                    दृश्य अभिलेखागार
                 </span>
                 <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                    फ्रेम्स में <span className="text-accent-gold italic font-serif">हमारी यात्रा</span>
                 </h1>
                 <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed">
                    परिवर्तन, मानवीय जुड़ाव और हमारे द्वारा सेवा किए जाने वाले समुदायों में निस्वार्थ सेवा की भावना का एक काव्य दृश्य अभिलेखागार।
                 </p>
             </div>
        </section>

        {/* Gallery Grid (Masonry) */}
        <section className="py-20 px-6 md:px-20 bg-white dark:bg-[#0b1214]">
             <div className="max-w-[1440px] mx-auto">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                    {galleryItems.map((item, index) => (
                        <div 
                            key={item.id} 
                            onClick={() => openModal(index)}
                            className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer shadow-xl mb-8"
                        >
                            <img 
                                alt={item.title} 
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
                        alt={galleryItems[selectedIndex].title}
                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                    />
                    <div className="mt-4 text-center">
                        <p className="text-gray-400 text-sm mt-1">Image {selectedIndex + 1} of {galleryItems.length}</p>
                    </div>
                </div>
            </div>
        )}

        {/* CTA Section */}
        <CTASection 
            title="अपनी कहानी साझा करें"
            description="क्या आपने हमारे कार्यक्रमों में भाग लिया है? हम आपके दृष्टिकोण को देखना और इसे अपने सामुदायिक अभिलेखागार में जोड़ना पसंद करेंगे।"
            primaryBtnText="संपर्क करें"
            primaryBtnLink="/contact"
        />

      </main>
      <Footer />
    </div>
  );
}
