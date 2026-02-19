
import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import HistoryTimeline from "@/components/HistoryTimeline";
import FamilyTree from "@/components/FamilyTree";

export const metadata: Metadata = {
  title: "हमारी कहानी - इतिहास और मिशन",
  description: "संत श्री रणधीर जी बाबल द्वारा 1513 ईस्वी में स्थापित, हम जीव दया, पर्यावरण संरक्षण और समाज सेवा के लिए समर्पित हैं।",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-fixed bg-cover bg-center transition-transform duration-1000 scale-105" 
            style={{
              backgroundImage: 'linear-gradient(rgba(11, 43, 48, 0.6), rgba(11, 43, 48, 0.8)), url("/images/gallery-img-10.jpeg")'
            }}
          ></div>
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <span className="inline-block text-accent-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 border border-accent-gold/30 px-4 py-1 rounded-full bg-black/20 backdrop-blur-sm">हमारी विरासत</span>
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-8 leading-tight font-display drop-shadow-xl">
              परंपरा का सम्मान <br/><span className="text-accent-gold italic font-serif font-normal">मानवता की सेवा</span>
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 leading-relaxed">
               " <span className="font-semibold text-white border-b-2 border-accent-gold/50">संत श्री रणधीर जी बाबल</span> के कालातीत ज्ञान में निहित, हम जरूरतमंदों के लिए आशा के पुल बनाते हैं।"
            </p>
          </div>
        </section>

        {/* The Founder's Legacy Section - Enhanced Hindi History */}
        <section className="relative py-20 px-6 lg:px-16 overflow-hidden bg-white dark:bg-[#0e1214]">
             {/* Background decorative elements */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

             {/* History Timeline Component (Includes Intro & Events) */}
             <HistoryTimeline />

             {/* Family Tree Component (Vanshavali) */}
             <div className="mt-20 pt-16 border-t border-gray-100 dark:border-gray-800">
               <FamilyTree />
             </div>
        </section>

        {/* President's Message */}
         <section className="py-24 px-6 bg-[#f4f7f7] dark:bg-[#0e1618]">
            <div className="max-w-[1280px] mx-auto">
                 <div className="text-center mb-16">
                    <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-2 block">नेतृत्व</span>
                    <h2 className="text-4xl font-display font-black text-[#0d1b1c] dark:text-white">अध्यक्ष का संदेश</h2>
                 </div>

                 <div className="bg-white dark:bg-[#1a2024] rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-accent-gold"></div>
                    
                    <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
                        <div className="absolute inset-0 bg-accent-gold/20 rounded-full transform translate-x-4 translate-y-4"></div>
                        <img 
                            src="/images/ramesh-babal.png" 
                            alt="Shri Ramesh Babal" 
                            className="w-full h-full object-cover rounded-full shadow-lg relative z-10 border-4 border-white dark:border-[#0b1214]"
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <svg className="w-12 h-12 text-accent-gold/40 mb-6 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.082 15.652 14.529 17.67 14.529C19.688 14.529 21.323 16.082 21.323 18L21.323 21H14.017ZM8 21L8 18C8 16.082 9.635 14.529 11.653 14.529C13.671 14.529 15.306 16.082 15.306 18L15.306 21H8ZM14.017 6H21.323V13.044C21.323 13.044 19.387 13.044 17.67 13.044C15.953 13.044 14.659 13.565 14.659 13.565V6H14.017ZM8 6H15.306V13.044C15.306 13.044 13.37 13.044 11.653 13.044C9.936 13.044 8.642 13.565 8.642 13.565V6H8Z"></path>
                        </svg>
                        <blockquote className="text-xl md:text-2xl font-display font-medium text-gray-700 dark:text-gray-200 italic mb-8 leading-relaxed">
                            "हमारा मिशन सरल लेकिन गहरा है: मानवता की सेवा उसी भक्ति के साथ करना जो संत रणधीर जी की प्रकृति और सभी जीवित प्राणियों के लिए थी। शिक्षा, स्वास्थ्य और संस्कार केवल सेवाएं नहीं हैं, वे ईश्वर के प्रति हमारा समर्पण हैं।"
                        </blockquote>
                        <div>
                            <p className="text-2xl font-bold text-[#0d1b1c] dark:text-white font-display">श्री रमेश बाबल</p>
                            <p className="text-primary dark:text-accent-gold font-bold uppercase tracking-wider text-xs mt-1">अध्यक्ष, एसएसआरजेबी सेवा संस्थान</p>
                        </div>
                    </div>
                 </div>
            </div>
         </section>

        {/* Official Objectives (Uddeshya) */}
        <section className="py-24 px-6 bg-white dark:bg-[#0b1214]">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-2 block">हमारा संकल्प</span>
                    <h2 className="text-4xl font-display font-black text-[#0d1b1c] dark:text-white">संस्था के उद्देश्य</h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        समिति का कार्यक्षेत्र सम्पूर्ण राजस्थान राज्य की राजस्व सीमा तक है। हमारे मुख्य उद्देश्य निम्न हैं:
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "श्री जम्भेश्वर भगवान के दर्शन एवं शिक्षाओं का प्रचार-प्रसार करना।",
                        "श्री जम्भेश्वर भगवान् के परम शिष्य श्री रणधीरजी बाबल की विचारधारा एवं शिक्षा से सम्बन्धित समस्त कार्य करना।",
                        "श्री रणधीरजी बाबल के नाम से मेला प्रारम्भ एवं संचालन करना।",
                        "बाबल गौत्र के इतिहास एवं वंशावली को संग्रहित एवं प्रकाशित करना।",
                        "पर्यावरण एवं पारिस्थितिक संरक्षण का कार्य करना।",
                        "समाज में व्याप्त कुरीतियों का उन्मूलन करना।",
                        "बालक, बालिकाओं, महिलाओं एवं प्रौढ़जन के शिक्षा एवं विकास सम्बन्धि कार्य करना।",
                        "गरीब एवं आर्थिक तथा सामाजिक रूप से पिछड़े लोगों के उत्थान एवं विकास का कार्य करना।",
                        "विद्यालय, महाविद्यालय, विश्वविद्यालय को प्रारम्भ एवं उनका संचालन करना।",
                        "छात्र-छात्राओं के लिए छात्रावास, वाचनालय प्रारम्भ करना एवं उनका संचालन करना।",
                        "शिक्षा, स्वास्थय, चिकित्सा, खेती के विकास से सम्बन्धित कार्य करना।",
                        "विश्नोई पंथ के साहित्य एवं विकास हेतु समस्त कार्य करना।",
                        "जनहित से सम्बधित अन्य कार्य करना।"
                    ].map((item, index) => (
                        <div key={index} className="flex gap-4 p-6 rounded-xl bg-gray-50 dark:bg-[#1a2024] border border-gray-100 dark:border-gray-800 hover:border-accent-gold/30 transition-all hover:shadow-lg">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold font-bold font-display">
                                {index + 1}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Organizational Structure & Membership */}
        <section className="py-24 px-6 bg-[#f4f7f7] dark:bg-[#0e1618] border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-5xl mx-auto">
                 <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h3 className="text-2xl font-bold font-display text-[#0d1b1c] dark:text-white mb-6 flex items-center gap-3">
                            <span className="material-symbols-outlined text-accent-gold">groups</span>
                            कार्यकारिणी का गठन
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-justify">
                            संस्थान के कार्य को सुचारू रूप से चलाने के लिए एक प्रबंध कार्यकारिणी का गठन किया जाएगा जिसके कुल <strong>31 पदाधिकारी एवं सदस्य</strong> होंगे:
                        </p>
                        <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-gray-700 dark:text-gray-300">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div> अध्यक्ष (1)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div> उपाध्यक्ष (4)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div> महासचिव (1)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div> सचिव (4)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div> कोषाध्यक्ष (1)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div> सह-कोषाध्यक्ष (1)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div> प्रवक्ता (1)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div> संगठन सचिव (2)</li>
                            <li className="flex items-center gap-2 col-span-2"><div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div> कार्यकारिणी सदस्य (16)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold font-display text-[#0d1b1c] dark:text-white mb-6 flex items-center gap-3">
                            <span className="material-symbols-outlined text-accent-gold">verified_user</span>
                            सदस्यता एवं नियम
                        </h3>
                        <div className="space-y-6 text-sm text-gray-600 dark:text-gray-400 text-justify">
                            <p>
                                <strong>योग्यता:</strong> सदस्य बालिग होना चाहिए, शाकाहारी होना चाहिए, वन्य जीवों का शिकार न करने वाला एवं श्री जम्भेश्वर भगवान के सिद्धांतों में विश्वास रखने वाला होना चाहिए।
                            </p>
                            <div className="bg-white dark:bg-[#1a2024] p-5 rounded-lg border-l-4 border-accent-gold shadow-sm">
                                <h4 className="font-bold text-[#0d1b1c] dark:text-white mb-2">सदस्यता शुल्क</h4>
                                <ul className="space-y-2">
                                    <li className="flex justify-between">
                                        <span>आजीवन सदस्य</span>
                                        <span className="font-bold text-accent-gold">₹11,000/-</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>साधारण सदस्य</span>
                                        <span className="font-bold text-accent-gold">₹1,100/-</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-xs opacity-70">
                                नोट: सदस्यता निष्कासन, साधारण सभा, और बैठकों के नियम 'संघ विधान नियमावली' के अनुसार संचालित होंगे।
                            </p>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

        {/* CTA Section */}
        <CTASection 
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
