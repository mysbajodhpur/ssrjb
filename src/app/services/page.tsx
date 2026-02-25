
import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { FormatBabal } from "@/components/FormatBabal";

export const metadata: Metadata = {
  title: "हमारी पहल - शिक्षा, स्वास्थ्य और पर्यावरण",
  description: "हमारी मुख्य सेवाओं का अन्वेषण करें: विद्या (शिक्षा), निरोगी काया (स्वास्थ्य), पर्यावरण (प्रकृति संरक्षण), और संस्कार (नैतिक मूल्य)। मानवता की सेवा ही ईश्वर की सेवा है।",
};

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 dark:bg-[#0b1214]">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 flex items-center justify-center overflow-hidden">
           <div 
             className="absolute inset-0 bg-cover bg-center" 
             style={{
               backgroundImage: 'linear-gradient(rgba(11, 43, 48, 0.90), rgba(11, 43, 48, 0.98)), url("/images/463484571_8546353255443958_4588912091064799768_n.jpg")'
             }}
           ></div>
           <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
             <span className="inline-block text-accent-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 border border-accent-gold/30 px-4 py-1 rounded-full bg-black/20 backdrop-blur-sm">हमारी पहल</span>
             <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 font-display drop-shadow-xl">
               सेवा <span className="text-accent-gold italic font-serif font-normal">कार्यान्वित</span>
             </h1>
             <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                सामुदायिक उत्थान के प्रति हमारे समग्र दृष्टिकोण को जानें, जो शिक्षा और स्वास्थ्य सेवा से लेकर आध्यात्मिक विकास और पर्यावरण संरक्षण तक फैला है।
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
                                
                                <h3 className="text-2xl font-bold mb-3 font-display text-white"><FormatBabal text={service.title} /></h3>
                                
                                {/* Reveal Text */}
                                <p className="text-gray-300 leading-relaxed mb-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-h-0 group-hover:max-h-32 overflow-hidden">
                                    <FormatBabal text={service.description} />
                                </p>
                                
                                <Link href={`/services/${service.slug}`} className="text-accent-gold font-bold flex items-center gap-2 transition-all text-sm uppercase tracking-wider hover:gap-3">
                                    और जानें <span className="material-symbols-outlined notranslate text-sm">arrow_forward</span>
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
          title="बदलाव लाने के लिए प्रेरित हैं?"
          description="आपका समर्थन इन पहलों को बढ़ावा दे सकता है और अनगिनत जीवन में प्रकाश ला सकता है। आज ही हमसे जुड़ें।"
          primaryBtnText="एक नेक काम का समर्थन करें"
        />

      </main>

      <Footer />
    </div>
  );
}
