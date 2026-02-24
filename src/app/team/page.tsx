
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HierarchyTree from '@/components/HierarchyTree';
import MentorshipBoard from '@/components/MentorshipBoard';
import ExecutiveCommittee from '@/components/ExecutiveCommittee';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'नेतृत्व एवं टीम | संत श्री रणधीर जी बाबल सेवा संस्थान',
    description: 'संस्थान के आध्यात्मिक मार्गदर्शक, संस्थापक और वर्तमान कार्यकारिणी टीम का विवरण।',
};

const TeamPage = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans selection:bg-accent-gold selection:text-white">
            <Navbar />
            
            <main className="flex-grow bg-white dark:bg-[#0b1214]">

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-fixed bg-cover bg-center transition-transform duration-1000 scale-105" 
                    style={{
                        backgroundImage: 'linear-gradient(rgba(11, 43, 48, 0.7), rgba(11, 43, 48, 0.9)), url("/images/gallery-img-11.jpeg")'
                    }}
                ></div>
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <span className="inline-block text-accent-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 border border-accent-gold/30 px-4 py-1 rounded-full bg-black/20 backdrop-blur-sm">संगठन एवं टीम</span>
                    <h1 className="text-white text-5xl md:text-7xl font-black mb-8 leading-tight font-display drop-shadow-2xl">
                        आध्यात्मिक जड़ें, <br/>
                        <span className="text-accent-gold italic font-serif font-normal">आधुनिक नेतृत्व</span>
                    </h1>
                    <p className="text-white/90 text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
                        "गुरु जाम्भोजी की शिक्षाओं से प्रेरित, संत रणधीर जी द्वारा स्थापित यह संस्थान निरंतर सेवा पथ पर अग्रसर है।"
                    </p>
                </div>
            </section>

            {/* 1. Leadership hierarchy (Jambhoji -> Randheer -> Ramesh) */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-accent-gold font-bold uppercase tracking-[0.4em] text-xs mb-2">Hierarchy</h2>
                        <div className="text-3xl md:text-4xl font-display font-black dark:text-white">वंश एवं नेतृत्व परंपरा</div>
                    </div>
                    <HierarchyTree />
                </div>
            </section>

            {/* 2. Margdarshak Mandal (Mentorship Board) */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <MentorshipBoard />
                </div>
            </section>

            {/* 3. Executive Committee */}
            <section className="py-20 bg-[#f8fafb] dark:bg-black/20">
                <div className="max-w-7xl mx-auto px-6">
                    <ExecutiveCommittee />
                </div>
            </section>

            {/* Joint CTA */}
            <CTASection />

            <Footer />
        </main>
    </div>
);
};

export default TeamPage;
