"use client";

import React, { useState } from 'react';
import { historyData } from '@/data/history';

const FamilyTree = () => {
  const { lineage } = historyData.vanshavaliDetails;
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <div className="py-20 bg-white dark:bg-[#0b1214]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-2 block">वंशावली</span>
          <h2 className="text-4xl font-display font-black text-[#0d1b1c] dark:text-white">बाबल वंश का इतिहास</h2>
          <div className="w-20 h-1 bg-accent-gold mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-dashed border-accent-gold/30 ml-8 md:ml-32 py-10 space-y-16">
          {lineage.map((person, index) => (
            <div 
              key={index} 
              className="relative pl-12 group"
              onMouseEnter={() => setHoveredNode(index)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Timeline Connector Dot */}
              <div className={`absolute top-0 left-[-9px] w-4 h-4 rounded-full border-2 border-white dark:border-[#0b1214] z-10 transition-all duration-300 ${hoveredNode === index ? 'bg-accent-gold scale-125' : 'bg-gray-300 dark:bg-gray-700'}`}></div>
              
              {/* Year/Era Badge (Left) */}
              <div className="absolute left-[-160px] top-[-5px] hidden md:block w-32 text-right">
                <span className="text-accent-gold font-bold text-sm tracking-tighter notranslate">
                   {person.note?.match(/संवत् \d+/)?.[0] || person.village || ""}
                </span>
              </div>

              {/* Node Card */}
              <div className={`bg-gray-50 dark:bg-[#1a2024] p-6 lg:p-8 rounded-[2rem] border transition-all duration-500 relative ${hoveredNode === index ? 'border-accent-gold shadow-2xl shadow-accent-gold/10 -translate-y-1' : 'border-gray-100 dark:border-gray-800'}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-display font-bold text-[#0d1b1c] dark:text-white">{person.name}</h3>
                  {person.village && (
                    <span className="px-4 py-1.5 bg-accent-gold/10 text-accent-gold text-xs font-bold rounded-full border border-accent-gold/20">
                       {person.village}
                    </span>
                  )}
                </div>

                {/* Sub-details (Wives/Sons) */}
                <div className="space-y-4">
                  {person.wives && (
                    <div className="flex flex-wrap gap-2">
                      {(Array.isArray(person.wives) ? person.wives : [person.wives]).map((w: any, i: number) => (
                        <div key={i} className="group/wife relative">
                          <span className="inline-block px-3 py-1 bg-pink-50 dark:bg-pink-900/10 text-pink-700 dark:text-pink-300 text-[11px] font-bold rounded-md border border-pink-100 dark:border-pink-800/30">
                            {typeof w === 'string' ? w : w.name} {(w.from) && `(${w.from})`}
                          </span>
                          {w.details && (
                            <div className="absolute bottom-full left-0 mb-2 w-48 p-3 bg-[#0b272c] text-white text-[10px] rounded-xl opacity-0 group-hover/wife:opacity-100 transition-opacity z-20 pointer-events-none shadow-xl border border-white/10">
                              {w.details}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {person.sons && (
                    <div className="flex flex-wrap gap-2 items-center">
                       <span className="text-[10px] uppercase font-bold text-gray-400 mr-2">पुत्र:</span>
                       {person.sons.map((son: string, i: number) => (
                         <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 text-[11px] font-bold rounded-md border border-blue-100 dark:border-blue-800/30">
                           {son}
                         </span>
                       ))}
                    </div>
                  )}

                  {person.note && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed italic border-t border-gray-100 dark:border-gray-800 pt-4 mt-4">
                      {person.note}
                    </p>
                  )}
                </div>

                {/* Vertical Decorative Bar on Hover */}
                <div className={`absolute left-0 top-8 bottom-8 w-1 bg-accent-gold rounded-full transition-opacity duration-300 ${hoveredNode === index ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </div>
          ))}

          {/* End Cap */}
          <div className="absolute bottom-0 left-[-5px] w-2.5 h-2.5 bg-accent-gold rounded-full"></div>
        </div>

        <div className="mt-20 p-8 bg-accent-gold text-[#0b2b30] rounded-[2.5rem] text-center shadow-xl">
           <p className="font-display font-bold text-lg">"अभी रणधीर जी बाबल वंश की 16वीं/17वीं पीढ़ियां चल रही है।"</p>
        </div>
      </div>
    </div>
  );
};

export default FamilyTree;
