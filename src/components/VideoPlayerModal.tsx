
"use client";

import React, { useEffect } from 'react';

interface VideoPlayerModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoSrc: string;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ isOpen, onClose, videoSrc }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
            {/* Close Button */}
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-accent-gold text-white hover:text-[#0b2b30] transition-all flex items-center justify-center group"
            >
                <span className="material-symbols-outlined notranslate text-3xl group-hover:rotate-90 transition-transform">close</span>
            </button>

            {/* Modal Content Wrapper */}
            <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4 gap-6 animate-in zoom-in-95 duration-300">
                {/* Video Container */}
                <div className="w-full aspect-video relative">
                    {/* Decorative border or glow */}
                    <div className="absolute -inset-1 bg-accent-gold/20 blur-2xl rounded-[2rem] -z-10 animate-pulse"></div>
                    
                    <div className="w-full h-full bg-black rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 relative">
                        {/* Dynamic Player (YouTube or Local) */}
                        {videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be') ? (
                            <iframe 
                                className="w-full h-full"
                                src={videoSrc} 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <video 
                                src={videoSrc} 
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                                playsInline
                            >
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                </div>

                {/* Video Info Overlay (Responsive) */}
                <div className="text-center px-4">
                    <h3 className="text-white text-base md:text-lg font-bold font-display tracking-wide uppercase leading-tight">
                        संत श्री रणधीर जी बाबल <br className="md:hidden" />
                        <span className="text-accent-gold">— जीवन दर्शन (Documentary)</span>
                    </h3>
                </div>
            </div>

            {/* Backdrop click to close */}
            <div 
                className="absolute inset-0 -z-20 cursor-pointer" 
                onClick={onClose}
            ></div>
        </div>
    );
};

export default VideoPlayerModal;
