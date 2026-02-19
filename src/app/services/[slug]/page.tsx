
import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { servicesData } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "सेवा नहीं मिली",
    };
  }
  return {
    title: `${service.title} - संत श्री रणधीर जी बाबल सेवा संस्थान`,
    description: service.description,
    openGraph: {
      images: [service.heroImage],
    },
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0b1214]">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center px-6">
             <h1 className="text-4xl font-display font-bold text-[#0b2b30] dark:text-white mb-4">सेवा नहीं मिली</h1>
             <Link href="/services" className="px-6 py-2 bg-accent-gold text-[#0b2b30] rounded-full font-bold">सेवाओं पर वापस जाएं</Link>
        </div>
        <Footer />
      </div>
    );
  }

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
                    {service.tagline}
                 </span>
                 <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl">
                    {service.title}
                 </h1>
                 <p className="text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                    {service.description}
                 </p>
             </div>
        </section>

        {/* Floating Impact Metrics (Home Page Style) */}
        <section className="relative z-20 -mt-20 px-6 mb-20">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                {service.stats.map((stat, index) => (
                    <div key={index} className="bg-white/95 dark:bg-[#0e3f45]/95 backdrop-blur p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-all duration-300 border-b-4 border-accent-gold ring-1 ring-black/5">
                        <span className="material-symbols-outlined text-4xl text-primary dark:text-accent-gold mb-3 opacity-80 group-hover:scale-110 transition-transform">
                            {/* Generic icon since stats data doesn't have specific icons, or mapping based on index/label could be added */}
                            verified
                        </span>
                        <span className="text-3xl md:text-4xl font-bold font-display text-primary dark:text-white mb-2">{stat.value}</span>
                        <p className="text-gray-500 dark:text-gray-300 text-xs uppercase tracking-widest font-semibold">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Key Initiatives Grid */}
        <section className="py-24 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0d1b1c] dark:text-white mb-3">प्रमुख पहल</h2>
                    <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full"></div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {service.features.map((feature, index) => (
                        <div key={index} className="group bg-white dark:bg-[#1a2024] rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                             <div className="h-48 overflow-hidden relative">
                                 <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                                    style={{ backgroundImage: `url('${feature.image}')` }}
                                 ></div>
                                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                             </div>
                             <div className="p-8 relative">
                                 <div className="absolute -top-8 right-8 w-16 h-16 bg-white dark:bg-[#1a2024] rounded-full flex items-center justify-center shadow-lg border-2 border-accent-gold/20">
                                     <span className="material-symbols-outlined text-3xl text-accent-gold">{feature.icon}</span>
                                 </div>
                                 <h3 className="text-xl font-bold font-display text-[#0d1b1c] dark:text-white mb-3 mt-2">{feature.title}</h3>
                                 <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                    {feature.description}
                                 </p>

                             </div>
                        </div>
                    ))}
                 </div>
            </div>
        </section>

        {/* Success Story Section */}
        {service.testimonial && (
            <section className="py-20 px-6 bg-[#f4f7f7] dark:bg-[#12181a] relative overflow-hidden">
                 <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
                      <div className="w-full md:w-1/2">
                           <div className="relative aspect-square rounded-full border-8 border-white dark:border-[#1a2024] shadow-2xl overflow-hidden max-w-[400px] mx-auto">
                                <img src={service.testimonial.image} alt={service.testimonial.author} className="w-full h-full object-cover" />
                           </div>
                      </div>
                      <div className="w-full md:w-1/2 text-center md:text-left">
                           <span className="text-accent-gold font-bold uppercase tracking-widest text-sm mb-4 block">सफलता की कहानियाँ</span>
                           <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0d1b1c] dark:text-white mb-8">वास्तविक प्रभाव</h2>
                           
                           <blockquote className="text-xl md:text-2xl font-light italic text-gray-600 dark:text-gray-300 leading-relaxed mb-8 relative">
                                <span className="absolute -top-4 -left-4 text-6xl text-accent-gold opacity-20 font-serif">"</span>
                                {service.testimonial.quote}
                                <span className="absolute -bottom-10 right-0 text-6xl text-accent-gold opacity-20 font-serif">"</span>
                           </blockquote>
                           
                           <div>
                                <h4 className="text-xl font-bold text-[#0d1b1c] dark:text-white">{service.testimonial.author}</h4>
                                <p className="text-primary dark:text-accent-gold text-sm uppercase tracking-wide">{service.testimonial.role}</p>
                           </div>
                      </div>
                 </div>
            </section>
        )}

        {/* Replaced CTA Section */}
        <CTASection 
            title="परिवर्तन बनें"
            description="आपका समर्थन हमें ऐसी और कहानियाँ फिर से लिखने में मदद कर सकता है।"
            primaryBtnText="इस उद्देश्य का समर्थन करें"
            primaryBtnLink="/contact"
        />

      </main>
      <Footer />
    </div>
  );
}
