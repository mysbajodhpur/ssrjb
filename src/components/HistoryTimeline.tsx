
import React from 'react';
import { historyData } from '@/data/history';

const HistoryTimeline = () => {
  const events = [
    { 
      type: 'era', 
      title: 'वि.स. 1508', 
      desc: 'गुरु जाम्भोजी का अवतार (Guru Jambhoji Avatar)',
      icon: 'auto_awesome',
      color: 'bg-teal-700'
    },
    { 
      type: 'event', 
      title: historyData.poshakPrasang.title, 
      desc: historyData.poshakPrasang.description, 
      quote: historyData.poshakPrasang.verse,
      icon: 'checkroom', // Robe/Poshak icon
      color: 'bg-orange-600'
    },
    { 
      type: 'era', 
      title: historyData.migration.era, 
      desc: historyData.migration.title + ' - ' + historyData.migration.description,
      icon: 'hiking', // Migration
      color: 'bg-amber-700'
    },
    { 
      type: 'era', 
      title: historyData.temple.era, 
      desc: historyData.temple.title + ' - ' + historyData.temple.description,
      icon: 'temple_hindu',
      color: 'bg-teal-900'
    },
    { 
      type: 'event', 
      title: historyData.khejarli.title, 
      desc: historyData.khejarli.description,
      icon: 'forest',
      color: 'bg-green-700'
    }
  ];

  return (
    <div className="relative container mx-auto px-4 pt-12">
      {/* Introduction with Decorative Heading */}
      {/* Introduction with Decorative Heading */}
      <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
        {/* Founder Image */}
        <div className="relative w-48 h-64 mb-10 group cursor-pointer">
            <div className="absolute inset-0 border-[3px] border-accent-gold/60 rounded-t-full rounded-b-[2rem] transform rotate-3 transition-transform duration-500 group-hover:rotate-0"></div>
            <div className="absolute inset-0 border-[3px] border-accent-gold/60 rounded-t-full rounded-b-[2rem] transform -rotate-3 transition-transform duration-500 group-hover:rotate-0"></div>
            <div className="relative h-full w-full rounded-t-full rounded-b-[2rem] overflow-hidden border-4 border-white dark:border-[#0b2b30] shadow-2xl">
                <img 
                    src="/images/randheer-ji.jpg" 
                    alt="Sant Shree Randheer Ji Babal" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
            </div>
             <div className="absolute -inset-4 bg-accent-gold/20 blur-xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent-gold/10 text-accent-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-accent-gold/20">
          <span className="material-symbols-outlined text-sm">history_edu</span>
          Sacred History
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0b2b30] dark:text-white mb-8 leading-tight">
          {historyData.introduction.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-8 opacity-60"></div>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
          {historyData.introduction.content}
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Central Vertical Line (Gradient) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-gold/0 via-accent-gold/40 to-accent-gold/0 -ml-0.5 md:ml-0"></div>

        {events.map((item, index) => (
          <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-20 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Center Icon Marker */}
            <div className={`absolute left-4 md:left-1/2 top-0 size-12 rounded-full -translate-x-1/2 ring-4 ring-white dark:ring-[#0e1214] shadow-xl z-10 flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110 ${item.color}`}>
              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            </div>

            {/* Content Side */}
            <div className="ml-16 md:ml-0 md:w-1/2 p-0 md:px-12">
              <div className="relative bg-white dark:bg-[#1a2024] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Decorative Background Icon */}
                <span className="absolute -bottom-4 -right-4 text-9xl opacity-5 text-gray-500 pointer-events-none material-symbols-outlined select-none">
                    {item.icon}
                </span>

                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider ${item.type === 'era' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' : 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300'}`}>
                   {item.type === 'era' ? 'Historical Era' : 'Major Event'}
                </span>
                
                <h3 className="text-2xl font-bold font-display text-[#0b2b30] dark:text-white mb-4">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed mb-6">
                  {item.desc}
                </p>

                {item.quote && (
                  <div className="relative mt-6 pt-6 border-t border-dashed border-gray-200 dark:border-gray-700">
                     <span className="absolute top-4 left-0 text-4xl text-accent-gold/20 font-serif">"</span>
                     <blockquote className="font-display italic text-lg text-[#0b2b30] dark:text-accent-gold whitespace-pre-line pl-6">
                      {item.quote}
                    </blockquote>
                  </div>
                )}
              </div>
            </div>

            {/* Empty Side for Desktop Layout Balance */}
            <div className="hidden md:block md:w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryTimeline;
