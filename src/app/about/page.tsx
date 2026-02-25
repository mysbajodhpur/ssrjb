
import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import HistoryFullReader from "@/components/HistoryFullReader";
import KhejreliMartyrs from "@/components/KhejreliMartyrs";
import FamilyTree from "@/components/FamilyTree";
import CompletedWorks from "@/components/CompletedWorks";
import UpcomingProjects from "@/components/UpcomingProjects";

export const metadata: Metadata = {
  title: "हमारी कहानी - इतिहास और मिशन",
  description: "संत श्री रणधीर जी बाबल द्वारा 1513 ईस्वी में स्थापित, हम जीव दया, पर्यावरण संरक्षण और समाज सेवा के लिए समर्पित हैं।",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-accent-gold selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-fixed bg-cover bg-center transition-transform duration-1000 scale-105" 
            style={{
              backgroundImage: 'linear-gradient(rgba(11, 43, 48, 0.6), rgba(11, 43, 48, 0.8)), url("/images/463397791_8546346878777929_5238208331993450471_n.jpg")'
            }}
          ></div>
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <span className="inline-block text-accent-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 border border-accent-gold/30 px-4 py-1 rounded-full bg-black/20 backdrop-blur-sm">हमारी विरासत</span>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight font-display drop-shadow-2xl">
              परंपरा का <span className="text-accent-gold italic font-serif font-normal">सम्मान</span><br/>
              <span className="opacity-90">मानवता की सेवा</span>
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
               " <span className="font-semibold text-white border-b-2 border-accent-gold/50 notranslate">संत श्री रणधीर जी बाबल</span> के कालातीत ज्ञान में निहित, हम जरूरतमंदों के लिए आशा के पुल बनाते हैं।"
            </p>
          </div>
        </section>

        {/* The Founder's Legacy - Tabbed History Reader */}
        <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-white dark:bg-[#0e1214] overflow-hidden">
             <div className="max-w-7xl mx-auto">
                <HistoryFullReader />
             </div>
        </section>

        {/* Khejreli Memorial Section */}
        <KhejreliMartyrs />

        {/* Family Tree Section (Vanshavali) */}
        <section className="py-24 bg-gray-50 dark:bg-[#0e1618] border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto">
            <FamilyTree />
          </div>
        </section>

        {/* Leadership Section */}
         <section className="py-24 px-6 bg-[#f4f7f7] dark:bg-[#0e1618]">
            <div className="max-w-[1280px] mx-auto">
                 <div className="text-center mb-16">
                    <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-2 block">नेतृत्व</span>
                    <h2 className="text-4xl font-display font-black text-[#0d1b1c] dark:text-white">हमारा नेतृत्व</h2>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* President Card */}
                    <div className="bg-white dark:bg-[#1a2024] rounded-[2rem] p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group hover:-translate-y-1 transition-all">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-gold"></div>
                        <div className="w-40 h-40 flex-shrink-0 relative">
                            <div className="absolute inset-0 bg-accent-gold/10 rounded-full group-hover:scale-110 transition-transform"></div>
                            <img 
                                src="/images/ramesh-babal.png" 
                                alt="अध्यक्ष श्री रमेश बाबल" 
                                className="w-full h-full object-cover rounded-full shadow-lg relative z-10 border-4 border-white dark:border-[#0b1214]"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <blockquote className="text-base text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                                "हमारा मिशन मानवता की सेवा उसी भक्ति के साथ करना है जो <span className="notranslate">संत रणधीर जी</span> की प्रकृति के लिए थी।"
                            </blockquote>
                            <div>
                                <h3 className="text-xl font-bold text-[#0d1b1c] dark:text-white font-display notranslate">अध्यक्ष श्री रमेश बाबल</h3>
                                <p className="text-primary dark:text-accent-gold font-bold uppercase tracking-wider text-[10px] mt-1">अध्यक्ष, संस्थान</p>
                            </div>
                        </div>
                    </div>

                    {/* General Secretary Card */}
                    <div className="bg-white dark:bg-[#1a2024] rounded-[2rem] p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group hover:-translate-y-1 transition-all">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-gold"></div>
                        <div className="w-40 h-40 flex-shrink-0 relative">
                            <div className="absolute inset-0 bg-accent-gold/10 rounded-full group-hover:scale-110 transition-transform"></div>
                            {/* Using a placeholder icon/div since no image is provided yet */}
                            <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative z-10 border-4 border-white dark:border-[#0b1214] overflow-hidden">
                                 <img 
                                src="/images/team/jaikishanbishnoi.jpg" 
                                alt="अध्यक्ष श्री रमेश बाबल" 
                                className="w-full h-full object-cover rounded-full shadow-lg relative z-10 border-4 border-white dark:border-[#0b1214]"
                            />
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <blockquote className="text-base text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed text-balance">
                                "संस्थान के माध्यम से समाज में शिक्षा और संस्कारों का बीजारोपण करना ही हमारा मुख्य लक्ष्य है।"
                            </blockquote>
                            <div>
                                <h3 className="text-xl font-bold text-[#0d1b1c] dark:text-white font-display notranslate">जयकिशन बिश्नोई</h3>
                                <p className="text-primary dark:text-accent-gold font-bold uppercase tracking-wider text-[10px] mt-1">महासचिव (<span className="notranslate">बासनी निकुबा</span>)</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
         </section>

        {/* Official Objectives (Uddeshya) */}
        <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#0b1214]">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-2 block">हमारा संकल्प</span>
                    <h2 className="text-3xl lg:text-4xl font-display font-black text-[#0d1b1c] dark:text-white mb-4">संस्था के उद्देश्य</h2>
                    <div className="w-20 h-1 bg-accent-gold mx-auto mb-6 rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        समिति का कार्यक्षेत्र सम्पूर्ण राजस्थान राज्य की राजस्व सीमा तक है। हमारे मुख्य उद्देश्य निम्न हैं:
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {[
                        <><span className="notranslate">श्री जम्भेश्वर भगवान</span> के दर्शन एवं शिक्षाओं का प्रचार-प्रसार करना।</>,
                        <><span className="notranslate">श्री जम्भेश्वर भगवान्</span> के परम शिष्य <span className="notranslate">श्री रणधीरजी बाबल</span> की विचारधारा एवं शिक्षा से सम्बन्धित समस्त कार्य करना।</>,
                        <><span className="notranslate">श्री रणधीरजी बाबल</span> के नाम से मेला प्रारम्भ एवं संचालन करना।</>,
                        <><span className="notranslate">बाबल</span> गौत्र के इतिहास एवं वंशावली को संग्रहित एवं प्रकाशित करना।</>,
                        "पर्यावरण एवं पारिस्थितिक संरक्षण का कार्य करना।",
                        "समाज में व्याप्त कुरीतियों का उन्मूलन करना।",
                        "बालक, बालिकाओं, महिलाओं एवं प्रौढ़जन के शिक्षा एवं विकास सम्बन्धि कार्य करना।",
                        "गरीब एवं आर्थिक तथा सामाजिक रूप से पिछड़े लोगों के उत्थान एवं विकास का कार्य करना।",
                        "विद्यालय, महाविद्यालय, विश्वविद्यालय को प्रारम्भ एवं उनका संचालन करना।",
                        "छात्र-छात्राओं के लिए छात्रावास, वाचनालय प्रारम्भ करना एवं उनका संचालन करना।",
                        "शिक्षा, स्वास्थय, चिकित्सा, खेती के विकास से सम्बन्धित कार्य करना।",
                        <><span className="notranslate">विश्नोई पंथ</span> के साहित्य एवं विकास हेतु समस्त कार्य करना।</>,
                        "जनहित से सम्बधित अन्य कार्य करना।"
                    ].map((item, index) => (
                        <div key={index} className="flex gap-4 p-7 rounded-2xl bg-gray-50 dark:bg-[#1a2024] border border-gray-100 dark:border-gray-800 hover:border-accent-gold/40 transition-all duration-300 hover:shadow-xl group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold font-bold font-display group-hover:bg-accent-gold group-hover:text-white transition-colors notranslate">
                                {index + 1}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed font-medium break-words">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Organizational Structure & Membership */}
        <section className="py-24 px-6 md:px-12 bg-[#f4f7f7] dark:bg-[#0e1618] border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="bg-white dark:bg-[#1a2024] p-10 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800">
                        <h3 className="text-2xl font-bold font-display text-[#0d1b1c] dark:text-white mb-8 flex items-center gap-3">
                            <span className="material-symbols-outlined notranslate text-accent-gold text-3xl">groups</span>
                            कार्यकारिणी का गठन
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            संस्थान के कार्य को सुचारू रूप से चलाने के लिए एक प्रबंध कार्यकारिणी का गठन किया जाएगा जिसमें कुल <strong className="text-primary dark:text-accent-gold">31 पदाधिकारी एवं सदस्य</strong> होंगे:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-base text-gray-700 dark:text-gray-300">
                            {[
                                { label: "अध्यक्ष", count: "1" },
                                { label: "उपाध्यक्ष", count: "4" },
                                { label: "महासचिव", count: "1" },
                                { label: "सचिव", count: "4" },
                                { label: "कोषाध्यक्ष", count: "1" },
                                { label: "सह-कोषाध्यक्ष", count: "1" },
                                { label: "प्रवक्ता", count: "1" },
                                { label: "संगठन सचिव", count: "2" },
                                { label: "कार्यकारिणी सदस्य", count: "16", full: true },
                            ].map((item, i) => (
                                <li key={i} className={`flex items-center justify-between gap-3 p-2 border-b border-gray-50 dark:border-gray-800/50 ${item.full ? 'sm:col-span-2' : ''}`}>
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="w-1.5 h-1.5 bg-accent-gold rounded-full shrink-0"></div>
                                        <span className="truncate">{item.label}</span>
                                    </div>
                                    <span className="font-bold text-accent-gold notranslate">({item.count})</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold font-display text-[#0d1b1c] dark:text-white mb-6 flex items-center gap-3">
                                <span className="material-symbols-outlined notranslate text-accent-gold text-3xl">verified_user</span>
                                सदस्यता एवं नियम
                            </h3>
                            <div className="bg-white dark:bg-[#1a2024] p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm space-y-8">
                                <div className="space-y-4">
                                    <h4 className="text-accent-gold font-bold uppercase tracking-widest text-xs">पात्रता / Eligibility</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed break-words">
                                        <strong>योग्यता:</strong> सदस्य बालिग होना चाहिए, पूर्ण शाकाहारी, वन्य जीवों का शिकार न करने वाला एवं <span className="notranslate">श्री जम्भेश्वर भगवान</span> के सिद्धांतों में अटूट विश्वास रखने वाला होना चाहिए।
                                    </p>
                                </div>
                                
                                <div className="space-y-4 pt-6 border-t border-gray-50 dark:border-gray-800">
                                    <h4 className="text-accent-gold font-bold uppercase tracking-widest text-xs">सदस्यता शुल्क / Membership Fee</h4>
                                    <div className="space-y-3">
                                        {[
                                            { type: "आजीवन सदस्य", fee: "₹11,000/-" },
                                            { type: "साधारण सदस्य", fee: "₹1,100/-" }
                                        ].map((fee, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-black/20 rounded-xl">
                                                <span className="font-medium text-gray-700 dark:text-gray-300">{fee.type}</span>
                                                <span className="font-bold text-primary dark:text-accent-gold notranslate">{fee.fee}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="pt-4">
                                    <p className="text-xs text-gray-400 leading-relaxed italic">
                                        नोट: सदस्यता निष्कासन, साधारण सभा, और बैठकों के नियम 'संस्थान विधान नियमावली' के अनुसार संचालित होंगे।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

        {/* Upcoming Projects Section */}
        <UpcomingProjects />

        {/* CTA Section */}
        <CTASection 
            bgImage="/images/gallery-img-08.jpeg"
            title="हमारी सेवा विरासत में शामिल हों"
            description="500 साल पुरानी करुणा की परंपरा का हिस्सा बनें। आपका समर्थन हमें अधिक गांवों तक अपनी शैक्षिक और स्वास्थ्य सेवाओं का विस्तार करने में मदद कर सकता है।"
            primaryBtnText="हमारे मिशन का समर्थन करें"
            primaryBtnLink="/contact"
        />

      </main>

      <Footer />
    </div>
  );
}
