
import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { completedWorks, upcomingProjects, WorkItem } from "@/data/works";
import ContributionSection from "@/components/ContributionSection";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "सेवा नहीं मिली",
    };
  }
  return {
    title: `${service.title} - संत श्री रणधीर जी बाबल सेवा संस्थान`,
    description: service.description,
    openGraph: {
      images: [service.heroImage],
    },
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0b1214]">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center px-6">
             <h1 className="text-4xl font-display font-bold text-[#0b2b30] dark:text-white mb-4">सेवा नहीं मिली</h1>
             <Link href="/services" className="px-6 py-2 bg-accent-gold text-[#0b2b30] rounded-full font-bold">सेवाओं पर वापस जाएं</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Filter related works
  const relatedCompleted: WorkItem[] = (service as any).relatedCompletedWorkIds 
    ? completedWorks.filter(w => (service as any).relatedCompletedWorkIds.includes(w.id))
    : [];
    
  const relatedUpcoming: WorkItem[] = (service as any).relatedUpcomingProjectIds
    ? upcomingProjects.filter(w => (service as any).relatedUpcomingProjectIds.includes(w.id))
    : [];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 dark:bg-[#0b1214]">
      <Navbar />

      <main className="flex-grow">
        {/* Parallax Hero Section */}
        <section className="relative flex items-center justify-center overflow-hidden pt-20 pb-30">
             {/* Background */}
             <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed" 
                style={{ backgroundImage: `url('${service.heroImage}')` }}
             ></div>
             {/* Overlay */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#0b2b30]/90 via-[#0b2b30]/70 to-[#0b2b30]/40"></div>
             
             <div className="relative z-10 container mx-auto px-6 text-center">
                 <span className="inline-block px-4 py-1 mb-6 border border-accent-gold/50 rounded-full text-accent-gold text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                    {service.tagline}
                 </span>
                 <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl">
                    {service.title}
                 </h1>
                 <p className="text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                    {service.description}
                 </p>
             </div>
        </section>

        {/* Related Completed Works */}
        {relatedCompleted.length > 0 && (
            <section className="py-24 px-6 md:px-16 bg-white dark:bg-[#0b1214]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-2 block">कार्य सिद्धि</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0d1b1c] dark:text-white mb-3">इस क्षेत्र में <span className="text-primary dark:text-accent-gold italic font-serif font-medium">हमारे प्रमुख कार्य</span></h2>
                        <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedCompleted.map((work) => (
                            <div key={work.id} className="bg-gray-50 dark:bg-[#1a2024] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-accent-gold/30 transition-all group">
                                <span className="material-symbols-outlined notranslate text-4xl text-accent-gold/40 mb-4 group-hover:scale-110 group-hover:text-accent-gold transition-all">
                                    {work.icon || 'star'}
                                </span>
                                <h3 className="text-xl font-bold text-[#0d1b1c] dark:text-white mb-2 font-display">{work.title}</h3>
                                {work.description && <p className="text-gray-600 dark:text-gray-400 text-sm">{work.description}</p>}
                                {work.location && <p className="text-accent-gold text-xs mt-4 uppercase tracking-widest font-bold">स्थान: {work.location}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}

        {/* Related Upcoming Projects */}
        {relatedUpcoming.length > 0 && (
            <section className="py-24 px-6 md:px-16 bg-gray-50 dark:bg-[#0e1618]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-2 block">भविष्य का संकल्प</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0d1b1c] dark:text-white mb-3">आगामी <span className="text-primary dark:text-accent-gold italic font-serif font-medium">योजनाएं</span></h2>
                        <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {relatedUpcoming.map((project) => (
                            <div key={project.id} className="bg-white dark:bg-[#1a2024] p-8 rounded-3xl border-l-4 border-l-accent-gold shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-xl font-bold text-[#0d1b1c] dark:text-white mb-2 font-display">{project.title}</h3>
                                {project.description && <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.description}</p>}
                                {project.location && <p className="text-accent-gold text-xs mt-4 uppercase tracking-widest font-bold">प्रस्तावित स्थान: {project.location}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}

        {/* Ways to Contribute Section */}
        <ContributionSection />

        {/* Replaced CTA Section */}
        <CTASection 
            title="परिवर्तन का हिस्सा बनें"
            description="500 वर्षों की इस पावन सेवा परंपरा से जुड़ें और समाज के उत्थान में अपना योगदान दें।"
            primaryBtnText="आज ही सहयोग करें"
            primaryBtnLink="/contact"
        />

      </main>
      <Footer />
    </div>
  );
}
