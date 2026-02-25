
"use client";

import React from 'react';
import { teamData } from '@/data/team';
import { FormatBabal } from './FormatBabal';

const HierarchyTree = () => {
    const { spiritualHierarchy } = teamData;

    return (
        <div className="relative py-12 flex flex-col items-center">
            {/* Connecting Line Background */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-gold/20 via-accent-gold/50 to-accent-gold/20 left-1/2 -translate-x-1/2 rounded-full hidden md:block"></div>

            <div className="space-y-24 md:space-y-32 w-full max-w-4xl relative z-10 px-6">
                {spiritualHierarchy.map((leader, index) => (
                    <div 
                        key={leader.id} 
                        className={`flex flex-col items-center group transition-all duration-700 delay-${index * 200}`}
                    >
                        {/* Member Card */}
                        <div className="relative flex flex-col items-center w-full">
                            {/* Connector Line (Small Mobile Only) */}
                            {index !== 0 && (
                                <div className="md:hidden w-0.5 h-16 bg-accent-gold/30 mb-8"></div>
                            )}

                            {/* Image Container */}
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-2 bg-white dark:bg-[#1a2024] shadow-2xl relative z-20 overflow-hidden ring-4 ring-accent-gold/10 group-hover:ring-accent-gold/30 transition-all duration-500">
                                <div className="w-full h-full rounded-full overflow-hidden relative">
                                    <img 
                                        src={leader.image} 
                                        alt={leader.name} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b30]/40 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                {/* Halo Effect */}
                                <div className="absolute inset-0 bg-accent-gold/5 rounded-full animate-pulse blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            {/* Info Box */}
                            <div className="mt-8 text-center max-w-xl bg-white/80 dark:bg-[#1a2024]/80 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 transform group-hover:-translate-y-2 transition-transform duration-500">
                                <span className="inline-block px-4 py-1 bg-accent-gold/10 text-accent-gold text-xs font-bold rounded-full mb-3 uppercase tracking-[0.2em] border border-accent-gold/20">
                                    <FormatBabal text={leader.title} />
                                </span>
                                <h3 className="text-3xl md:text-4xl font-display font-black text-[#0d1b1c] dark:text-white mb-4">
                                    <FormatBabal text={leader.name} />
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base font-medium">
                                    <FormatBabal text={leader.description} />
                                </p>
                            </div>
                        </div>

                        {/* Connection Dot on the line (Visible only on desktop between items) */}
                        {index < spiritualHierarchy.length - 1 && (
                            <div className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#0b1214] border-4 border-accent-gold/20 items-center justify-center z-30">
                                <div className="w-3 h-3 rounded-full bg-accent-gold shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HierarchyTree;
