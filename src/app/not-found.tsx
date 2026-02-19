
"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0b1214] font-sans">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center relative overflow-hidden py-24 px-6">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{
                backgroundImage: 'url("/images/gallery-img-21.jpeg")'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0b2b30]/80 to-black/90"></div>
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-accent-gold/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8 border border-accent-gold/40 shadow-[0_0_30px_rgba(197,160,89,0.3)] animate-pulse">
                <span className="material-symbols-outlined text-accent-gold text-5xl">wrong_location</span>
            </div>
            
            <h1 className="text-8xl md:text-9xl font-black font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-4 tracking-tighter drop-shadow-2xl">
                404
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-wide">
                पृष्ठ नहीं मिला
            </h2>
            
            <div className="w-20 h-1 bg-accent-gold mx-auto mb-8 rounded-full"></div>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-10">
                "जो भटकते हैं वे सभी खोए हुए नहीं हैं, लेकिन ऐसा लगता है कि आप ज्ञात पथ से भटक गए हैं। हमें आपको हमारे अभयारण्य में वापस ले जाने दें।"
            </p>

            <Link 
                href="/" 
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent-gold text-[#0b2b30] font-bold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-accent-gold/20"
            >
                <span className="material-symbols-outlined">home</span>
                घर लौटें
            </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
