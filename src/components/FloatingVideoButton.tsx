
"use client";

import React, { useState } from 'react';
import VideoPlayerModal from './VideoPlayerModal';

const FloatingVideoButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <div className="fixed bottom-24 left-6 md:left-10 z-[80] group">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white dark:bg-[#1a2024] rounded-full shadow-[0_0_30px_rgba(197,160,89,0.3)] border-2 border-accent-gold/20 hover:border-accent-gold transition-all duration-500 hover:scale-110 active:scale-95 group"
                    aria-label="Watch Documentary"
                >
                    {/* Pulsing Aura */}
                    <div className="absolute inset-0 bg-accent-gold/20 rounded-full animate-ping group-hover:animate-none opacity-60"></div>
                    <div className="absolute inset-0 bg-accent-gold/10 rounded-full animate-pulse"></div>

                    {/* Button Image/Icon */}
                    <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                        <span className="material-symbols-outlined notranslate text-3xl md:text-4xl text-accent-gold translate-x-0.5 group-hover:scale-125 transition-transform duration-500">play_arrow</span>
                    </div>

                    {/* Label (Hidden by default, shown on hover) */}
                    <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white dark:bg-[#0b2b30] px-4 py-2 rounded-xl border border-accent-gold/20 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                        <p className="text-[#0b2b30] dark:text-white font-bold text-xs uppercase tracking-widest leading-none">दस्तावेजी फिल्म</p>
                        <p className="text-accent-gold font-bold text-[10px] uppercase mt-1">Watch Documentary</p>
                    </div>
                </button>
            </div>

            {/* Video Modal - Using YouTube Source */}
            <VideoPlayerModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                videoSrc="https://www.youtube.com/embed/ftKQFDAPrNY?si=deUBson-uappEKyF" 
            />
        </>
    );
};

export default FloatingVideoButton;
