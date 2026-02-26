"use client";

import React, { useState } from 'react';

import { useLanguage } from '@/context/LanguageContext';

const HistoryFullReader = () => {
  const { t } = useLanguage();
  const historyData = t('historyPage', true);
  const chapters = historyData?.chapters || [];
  const [activeTab, setActiveTab] = useState(chapters[0]?.id || "chapter-1");

  const activeChapter = chapters.find((c: any) => c.id === activeTab) || chapters[0];

  if (!chapters.length) return null;

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto no-scrollbar border-b border-gray-100 dark:border-gray-800 mb-12">
        <div className="flex min-w-max gap-4 pb-2">
          {chapters.map((chapter: any) => (
            <button
              key={chapter.id}
              onClick={() => setActiveTab(chapter.id)}
              className={`px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all relative ${ activeTab === chapter.id ? 'text-accent-gold' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200' }`}
            >
              <span>{chapter.title}</span>
              {activeTab === chapter.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-gold rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white dark:bg-[#1a2024] rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-gray-50 dark:border-gray-800 relative overflow-hidden min-h-[500px]">
        {/* Decorative Watermark */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-accent-gold"></div>
            <span className="text-accent-gold font-bold uppercase tracking-widest text-xs">{t('historyPage.chaptersBadge') || 'अध्याय'} {chapters.indexOf(activeChapter) + 1}</span>
          </div>

          <h3 className="text-3xl md:text-5xl font-display font-black text-[#0d1b1c] dark:text-white mb-10 leading-tight">
            {activeChapter.title}
          </h3>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-12 text-justify whitespace-pre-wrap">
              {activeChapter.content}
            </p>

            {activeChapter.aarti && (
              <div className="my-16 p-8 md:p-12 bg-[#f4f7f7] dark:bg-black/20 rounded-3xl border-l-8 border-accent-gold relative">
                 <span className="material-symbols-outlined absolute top-6 right-8 text-accent-gold/20 text-6xl select-none notranslate">music_note</span>
                 <h4 className="text-accent-gold font-black text-xl mb-8 font-display uppercase tracking-widest">मूल आरती (नृसिंह आरती)</h4>
                 <div className="space-y-4">
                    {activeChapter.aarti.map((line: string, idx: number) => (
                      <p key={idx} className="text-xl md:text-2xl font-serif font-medium text-[#0d1b1c] dark:text-gray-100 leading-snug">
                        {line}
                      </p>
                    ))}
                 </div>
                 <p className="mt-8 text-sm text-gray-500 italic opacity-80">
                   * यह जाम्भाणी साहित्य की प्रथम आरती मानी जाती है।
                 </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryFullReader;
