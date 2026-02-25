
import React from "react";
import { completedWorks } from "@/data/works";
import { FormatBabal } from "./FormatBabal";

const CompletedWorks = () => {
  return (
    <section className="py-24 px-6 bg-[#f4f7f7] dark:bg-[#0e3f45]/20">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16">
          <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-2 block">सेवा और समर्पण</span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-[#0d1b1c] dark:text-white">
            मुख्य <span className="text-primary dark:text-accent-gold italic font-serif font-medium">कार्य एवं उपलब्धियां</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
            संस्थान के अंतर्गत परिवारजनों एवं बिश्नोई समाज के सामूहिक सहयोग से पूर्ण किए गए कुछ महत्वपूर्ण कार्य।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedWorks.map((work) => (
            <div 
              key={work.id} 
              className="bg-white dark:bg-[#1a2024] p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-accent-gold/20 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold flex-shrink-0">
                  <span className="material-symbols-outlined notranslate text-2xl">{work.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0d1b1c] dark:text-white font-display leading-snug"><FormatBabal text={work.title} /></h3>
                  {work.location && (
                    <span className="text-[10px] uppercase tracking-widest text-primary dark:text-accent-gold font-bold">
                      {work.location}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                <FormatBabal text={work.description || ""} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompletedWorks;
