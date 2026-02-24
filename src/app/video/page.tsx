
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'जीवन दर्शन (Documentary) | संत श्री रणधीर जी बाबल',
    description: 'संत श्री रणधीर जी बाbal के जीवन और उनके द्वारा किए गए सामाजिक कार्यों पर आधारित एक विशेष शॉर्ट फिल्म।',
};

const VideoPage = () => {
    return (
        <main className="min-h-screen bg-[#0b1214] text-white overflow-x-hidden">
            <Navbar />

            {/* Cinematic Hero / Spotlight */}
            <div className="pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-gold/10 text-accent-gold rounded-full mb-6 border border-accent-gold/20">
                            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span>
                            <span className="text-xs font-bold uppercase tracking-widest">विशेष प्रस्तुति (Special Presentation)</span>
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">
                            जीवन दर्शन: <span className="text-accent-gold">documentary</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                            संत श्री रणधीर जी बाबल की आध्यात्मिक यात्रा, समाज सुधार के कार्य और पर्यावरण संरक्षण के प्रति उनके अटूट प्रेम की एक झलक।
                        </p>
                    </div>

                    {/* Theatre Mode Player - YouTube Embed */}
                    <div className="relative group rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(197,160,89,0.15)] border border-white/10 bg-black">
                        <div className="aspect-video w-full">
                            <iframe 
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/ftKQFDAPrNY?si=deUBson-uappEKyF" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Social Shares / Links */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold font-display text-accent-gold">About the Film</h3>
                            <p className="text-gray-400 leading-relaxed">
                                यह फिल्म संत बाबल जी के जीवन के स्वर्णिम पलों, उनकी शिक्षाओं और बाबल परिवार के ऐतिहासिक संघर्षों को एक साथ पिरोती है।
                            </p>
                        </div>
                        <div className="space-y-4 text-center">
                            <h3 className="text-xl font-bold font-display text-accent-gold">Experience more</h3>
                            <a 
                                href="/about" 
                                className="inline-block px-8 py-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all text-sm font-bold uppercase tracking-widest"
                            >
                                संपूर्ण इतिहास पढ़ें
                            </a>
                        </div>
                        <div className="space-y-4 text-right">
                            <h3 className="text-xl font-bold font-display text-accent-gold">Resolution</h3>
                            <p className="text-gray-400">
                                1080p HD (Cinema Optimization)<br/>
                                Released for Seva Sansthan
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default VideoPage;
