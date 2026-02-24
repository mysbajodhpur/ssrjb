
import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "संपर्क करें - सेवा से जुड़ें",
  description: "बाबलसर, बीकानेर में हमारे मुख्य केंद्र पर पधारें। स्वयंसेवा, दान या आध्यात्मिक मार्गदर्शन के लिए संपर्क करें। हम सेवा के लिए तत्पर हैं।",
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0b1214]">
      <Navbar />
      
      <main className="flex-grow">
        {/* Cinematic Hero Section */}
        <section className="relative flex items-center justify-center overflow-hidden pt-20 pb-30">
             {/* Background Image */}
             <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000" 
                 style={{ backgroundImage: 'url("/images/gallery-img-19.jpeg")' }} 
             ></div>
             {/* Dark Overlay with Gradient */}
             <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0b1214]"></div>

             <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                 <span className="inline-block px-4 py-1 mb-6 border border-accent-gold/50 rounded-full text-accent-gold text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                    जुड़ें हमारे साथ
                 </span>
                 <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                    संपर्क <span className="text-accent-gold italic font-serif">करें</span>
                 </h1>
                 <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl mx-auto">
                    चाहे आप दान करना चाहें, आध्यात्मिक मार्गदर्शन लेना चाहें, या बस जुड़ना चाहें, हमारे दरवाजे और दिल आपके लिए हमेशा खुले हैं।
                 </p>
             </div>
        </section>

        {/* Contact Cards (Royal Glass) */}
        <section className="px-6 -mt-20 relative z-20 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "mail", title: "ईमेल करें", desc: "सामान्य पूछताछ, दान या प्रतिक्रिया के लिए।", link: "mailto:bishnoi.ramesh@gmail.com", linkText: "bishnoi.ramesh@gmail.com" },
              { icon: "call", title: "कॉल करें", desc: "तत्काल सहायता के लिए हमारे स्वयंसेवकों से बात करें।", link: "tel:+919818757905", linkText: "+91 98187 57905" },
              { icon: "location_on", title: "पधारें", desc: "हमारा मुख्य कार्यालय", text: "मुख्यालय श्री जम्भेश्वर भगवान मंदिर,फिटकासनी, जिला जोधपुर, राजस्थान" }
            ].map((item, index) => (
              <div key={index} className="bg-white/95 dark:bg-[#1a2024]/95 backdrop-blur-md border-t-4 border-accent-gold p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-14 h-14 bg-accent-gold/10 rounded-full flex items-center justify-center text-accent-gold mb-6 group-hover:bg-accent-gold group-hover:text-[#0b2b30] transition-colors">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-[#0d1b1c] dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">{item.desc}</p>
                {item.link ? (
                  <a className="text-[#0b2b30] dark:text-accent-gold font-bold uppercase tracking-wider text-xs hover:underline decoration-2 underline-offset-4" href={item.link}>{item.linkText}</a>
                ) : (
                  <span className="text-[#0b2b30] dark:text-accent-gold font-bold uppercase tracking-wider text-xs">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Form and Map Split Section */}
        <section className="py-20 px-6 lg:px-16 bg-white dark:bg-[#0b1214]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            {/* Form Area */}
            {/* Form Area using Client Component */}
            <ContactForm />
            
            {/* Map and Details Area */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-[#fafafa] dark:bg-[#1a2024] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <h4 className="text-[#0d1b1c] dark:text-white font-display text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent-gold">schedule</span> मिलने का समय
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                    <span className="text-gray-500 dark:text-gray-400">सोमवार — शुक्रवार</span>
                    <span className="font-bold text-[#0d1b1c] dark:text-white">09:00 AM - 06:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                    <span className="text-gray-500 dark:text-gray-400">शनिवार</span>
                    <span className="font-bold text-[#0d1b1c] dark:text-white">10:00 AM - 04:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-gray-500 dark:text-gray-400">रविवार</span>
                    <span className="font-bold italic text-accent-gold">व्यक्तिगत सेवा के लिए बंद</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs italic text-gray-400 leading-relaxed">प्रशासनिक बैठकों के लिए कृपया यात्रा से कम से कम 24 घंटे पहले फोन पर संपर्क करें।</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
