
"use client";

import React from 'react';
import { teamData } from '@/data/team';
import { FormatBabal } from './FormatBabal';

interface CommitteeMember {
    name: string;
    role: string;
    image: string;
    location?: string;
    description?: string;
}

const ExecutiveCommittee = () => {
    const { executiveCommittee } = teamData;

    const sections = [
        { title: 'अध्यक्ष एवं संरक्षक (President)', data: executiveCommittee.presidents },
        { title: 'उपाध्यक्ष (Vice Presidents)', data: executiveCommittee.vicePresidents },
        { title: 'प्रधान पदाधिकारी (Key Office Bearers)', data: executiveCommittee.keyBearers },
        { title: 'सचिव एवं अन्य पदाधिकारी (Secretaries & Others)', data: executiveCommittee.secretaries },
    ];

    return (
        <section className="py-12 px-6 md:px-12 bg-[#f8fafb] dark:bg-black/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-accent-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block underline underline-offset-8 decoration-accent-gold/30">कार्यकारिणी</span>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-[#0d1b1c] dark:text-white mb-6">
                        हमारी सक्रिय टीम
                    </h2>
                </div>

                <div className="space-y-24">
                    {sections.map((section, sIdx) => {
                        const isTriple = section.data.length === 3;
                        return (
                            <div key={sIdx} className="relative">
                                {/* Section Header - Matches Image Style */}
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-1.5 h-10 bg-accent-gold rounded-full"></div>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-[#0d1b1c] dark:text-white uppercase tracking-tight">
                                        {section.title}
                                    </h3>
                                </div>

                                <div className={`grid grid-cols-1 md:grid-cols-2 ${
                                    section.data.length <= 2 ? 'lg:grid-cols-2' :
                                    section.data.length === 3 ? 'lg:grid-cols-3' : 
                                    'lg:grid-cols-4'
                                } gap-6`}>
                                    {(section.data as CommitteeMember[]).map((member, index) => (
                                        <div 
                                            key={index} 
                                            className="bg-white dark:bg-[#1a2024] rounded-3xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-5 border border-gray-100 dark:border-gray-800"
                                        >
                                            {/* Circular Image with Gold Ring - Smaller Sizing */}
                                            <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 relative">
                                                <div className="absolute inset-0 rounded-full border-[2px] border-accent-gold/40 scale-105"></div>
                                                <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-gray-100">
                                                    <img 
                                                        src={member.image} 
                                                        alt={member.name} 
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"%3E%3Cpath fill="%23ccc" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/%3E%3C/svg%3E';
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Text Content - Smaller Typography */}
                                            <div className="flex-1">
                                                <h4 className="text-base md:text-lg font-bold text-[#0d1b1c] dark:text-white leading-tight mb-0.5">
                                                    <FormatBabal text={member.name} />
                                                </h4>
                                                {member.location && (
                                                    <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs font-medium">
                                                        <FormatBabal text={member.location} />
                                                    </p>
                                                )}
                                                {/* Optional: Show role if it's not obvious from category */}
                                                {(member.role && member.role !== 'उपाध्यक्ष' && member.role !== 'सचिव') && (
                                                    <span className="text-[9px] text-accent-gold font-bold uppercase tracking-wider mt-0.5 block">
                                                        <FormatBabal text={member.role} />
                                                    </span>
                                                )}
                                                {member.description && (
                                                    <p className="text-gray-600 dark:text-gray-400 text-[10px] md:text-xs mt-1 leading-snug">
                                                        <FormatBabal text={member.description} />
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ExecutiveCommittee;
