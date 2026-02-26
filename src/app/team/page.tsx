
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSections from '@/components/TeamSections';
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

            <TeamSections />

            <Footer />
        </main>
    </div>
);
};

export default TeamPage;
