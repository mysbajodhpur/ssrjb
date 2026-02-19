
import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "हमारी टीम - नेतृत्व और स्वयंसेवक",
  description: "हमारे मिशन के पीछे समर्पित व्यक्तियों से मिलें, नेतृत्व संस्थापक संत श्री रणधीर जी बाबल और अध्यक्ष श्री रमेश बाबल कर रहे हैं।",
};

export default function Team() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 dark:bg-[#0b1214]">
      <Navbar />
      
      <main className="flex-grow">
        {/* Compact Hero Section */}
        <section className="relative py-24 flex items-center justify-center overflow-hidden">
           <div 
             className="absolute inset-0 bg-cover bg-center" 
             style={{
               backgroundImage: 'linear-gradient(rgba(11, 43, 48, 0.85), rgba(11, 43, 48, 0.95)), url("/images/gallery-img-18.jpeg")'
             }}
           ></div>
           <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
             <span className="inline-block text-accent-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 border border-accent-gold/30 px-4 py-1 rounded-full bg-black/20 backdrop-blur-sm">हमारे लोग</span>
             <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 font-display drop-shadow-xl">
               सेवा के <span className="text-accent-gold italic font-serif font-normal">संरक्षक</span>
             </h1>
             <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                करुणा की साझा दृष्टि से एकजुट, हमारा नेतृत्व और स्वयंसेवक जीवन बदलने के लिए अथक प्रयास करते हैं।
             </p>
           </div>
        </section>

        {/* Founder & President Section */}
        <section className="py-20 px-6 lg:px-16">
             <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-accent-gold font-bold uppercase tracking-widest text-xs">मार्गदर्शक मंडल</span>
                    <h2 className="text-4xl font-display font-bold mt-2 text-[#0d1b1c] dark:text-white">हमारे प्रेरणा स्रोत</h2>
                    <div className="h-1 w-20 bg-accent-gold mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
                    {/* Founder */}
                    <div className="group relative bg-white dark:bg-[#1a2024] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800">
                         <div className="aspect-[4/5] overflow-hidden relative">
                            <img 
                                src="/images/randheer-ji.jpg" 
                                alt="Sant Shri Randheer Ji Babal" 
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-accent-gold font-bold text-xs uppercase tracking-widest mb-1">संस्थापक</p>
                                <h3 className="font-display text-2xl font-bold">संत श्री रणधीर जी बाबल</h3>
                            </div>
                         </div>
                         <div className="p-6">
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                हमारे मिशन के पीछे की दिव्य शक्ति। करुणा, जीव दया और पर्यावरण संरक्षण की उनकी शिक्षाएं हमारे हर कदम का मार्गदर्शन करती हैं।
                            </p>
                         </div>
                    </div>

                    {/* President */}
                    <div className="group relative bg-white dark:bg-[#1a2024] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800">
                         <div className="aspect-[4/5] overflow-hidden relative">
                            <img 
                                src="/images/ramesh-babal.png" 
                                alt="Ramesh Bishnoi" 
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-accent-gold font-bold text-xs uppercase tracking-widest mb-1">अध्यक्ष</p>
                                <h3 className="font-display text-2xl font-bold">श्री रमेश बिश्नोई</h3>
                            </div>
                         </div>
                         <div className="p-6">
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                समर्पण और दूरदर्शिता के साथ संस्थान का नेतृत्व कर रहे हैं। उनके नेतृत्व में, संगठन ने समाज सेवा के नए आयाम स्थापित किए हैं।
                                <br/><span className="text-xs opacity-70 mt-2 block">निवास: गुरुग्राम, हरियाणा</span>
                            </p>
                         </div>
                    </div>
                </div>

                {/* Executive Committee Grid */}
                <div className="mb-20">
                    <h3 className="text-2xl font-display font-bold text-[#0d1b1c] dark:text-white mb-8 border-l-4 border-accent-gold pl-4">
                        उपाध्यक्ष (Vice Presidents)
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "बाबू राम", location: "बासनी निकुबा", img: "/images/team/baburam.png" },
                            { name: "मोहन लाल बिश्नोई", location: "फिटकासनी", img: "/images/team/mohanlalbishnoi.png" },
                            { name: "भागीरथ", location: "फिटकासनी (बाबल नगर)", img: "/images/team/Bhagirath.jpg" },
                            { name: "श्याम बिश्नोई", location: "रासीड़ा", img: "/images/team/ShyamBishnoi.jpg" }
                        ].map((member, idx) => (
                            <div key={idx} className="bg-white dark:bg-[#1a2024] p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                                <img src={member.img} alt={member.name} className="w-16 h-16 rounded-full object-cover border-2 border-accent-gold/20" />
                                <div>
                                    <h4 className="font-bold text-[#0d1b1c] dark:text-white">{member.name}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{member.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-20">
                    <h3 className="text-2xl font-display font-bold text-[#0d1b1c] dark:text-white mb-8 border-l-4 border-accent-gold pl-4">
                        प्रधान पदाधिकारी (Key Office Bearers)
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "जयकिशन बिश्नोई", role: "महासचिव", location: "बासनी निकुबा", img: "/images/team/jaikishanbishnoi.jpg" },
                            { name: "बाबू लाल बिश्नोई", role: "कोषाध्यक्ष", location: "फिटकासनी", img: "/images/team/babulalbishnoi.png" },
                            { name: "हनुमान राम बिश्नोई", role: "सह-कोषाध्यक्ष", location: "फिटकासनी", img: "/images/team/hanumanrambishnoi.jpg" }
                        ].map((member, idx) => (
                            <div key={idx} className="bg-white dark:bg-[#1a2024] p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                                <img src={member.img} alt={member.name} className="w-16 h-16 rounded-full object-cover border-2 border-accent-gold/20" />
                                <div>
                                    <span className="text-accent-gold text-[10px] font-bold uppercase tracking-wider block mb-1">{member.role}</span>
                                    <h4 className="font-bold text-[#0d1b1c] dark:text-white">{member.name}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{member.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-display font-bold text-[#0d1b1c] dark:text-white mb-8 border-l-4 border-accent-gold pl-4">
                        सचिव एवं अन्य पदाधिकारी
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "मेकाराम बिश्नोई", role: "सचिव", location: "फिटकासनी", img: "/images/team/mekarambishnoi.jpg" },
                            { name: "चम्पा लाल बिश्नोई", role: "सचिव", location: "डेरडी नाडी", img: "/images/team/ChampaLalBishnoi.jpg" },
                            { name: "बंशीलाल", role: "सचिव", location: "बासनी निकुबा", img: "/images/team/Banshilal.jpg" },
                            { name: "श्रवण राम", role: "सचिव", location: "फिटकासनी", img: "/images/team/ShrawanRam.jpg" },
                            { name: "राम स्वरूप बाबल", role: "संगठन सचिव", location: "फिटकासनी", img: "/images/team/RamSwaroopBabal.jpg" },
                            { name: "प्रेम प्रकाश", role: "संगठन सचिव", location: "बाबलों की ढाणी", img: "/images/team/PremPrakash.jpg" },
                            { name: "रामदीन", role: "प्रवक्ता", location: "सांगासनी", img: "/images/team/Ramdeen.jpg" },
                        ].map((member, idx) => (
                            <div key={idx} className="bg-white dark:bg-[#1a2024] p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                                <img src={member.img} alt={member.name} className="w-16 h-16 rounded-full object-cover border-2 border-accent-gold/20" />
                                <div>
                                    <span className="text-accent-gold text-[10px] font-bold uppercase tracking-wider block mb-1">{member.role}</span>
                                    <h4 className="font-bold text-[#0d1b1c] dark:text-white">{member.name}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{member.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

             </div>
        </section>

        {/* CTA Section (Gold Theme) */}
        <CTASection 
          title="हमारे मिशन में शामिल हों"
          description="हम अपनी पहुंच का विस्तार करने के लिए हमेशा भागीदारों और समर्थकों की तलाश में रहते हैं।"
          primaryBtnText="संपर्क करें"
        />

      </main>

      <Footer />
    </div>
  );
}
