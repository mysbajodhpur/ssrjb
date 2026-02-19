
import React from 'react';
import { historyData } from '@/data/history';

const FamilyTree = () => {
  const { vanshavali } = historyData;

  // Reusable Tree Node
  const TreeNode = ({ label, highlight = false, subLabel = '', icon = '' }: { label: string, highlight?: boolean, subLabel?: string, icon?: string }) => (
    <div className={`relative flex flex-col items-center group transition-all duration-300 z-10 ${highlight ? 'scale-110' : 'hover:scale-105'}`}>
      <div className={`
        flex flex-col items-center justify-center p-4 min-w-[140px] rounded-xl border-2 shadow-lg backdrop-blur-sm
        ${highlight 
          ? 'bg-[#0b2b30] border-accent-gold text-white shadow-accent-gold/20' 
          : 'bg-white dark:bg-[#1a2024] border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-accent-gold/50'}
      `}>
        {icon && <span className="material-symbols-outlined notranslate text-accent-gold mb-1">{icon}</span>}
        <span className={`font-bold font-display text-center leading-tight ${highlight ? 'text-lg' : 'text-base'}`}>
          {label}
        </span>
        {subLabel && (
          <span className={`text-[10px] uppercase tracking-wider font-bold mt-1 ${highlight ? 'text-accent-gold' : 'text-gray-400'}`}>
            {subLabel}
          </span>
        )}
      </div>
      
      {/* Connector Dot */}
      <div className={`w-3 h-3 rounded-full border-2 border-white dark:border-[#0e1214] absolute -bottom-1.5 ${highlight ? 'bg-accent-gold' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
       {/* Top Connector Dot if needed */}
       <div className={`w-3 h-3 rounded-full border-2 border-white dark:border-[#0e1214] absolute -top-1.5 ${highlight ? 'bg-accent-gold' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
    </div>
  );

  return (
    <div className="w-full overflow-x-auto pb-12 pt-8 scrollbar-hide">
      <div className="min-w-[900px] flex flex-col items-center relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'radial-gradient(#c5a059 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="text-center mb-12 relative z-10">
           <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-gold/10 text-accent-gold mb-4 ring-1 ring-accent-gold/30">
              <span className="material-symbols-outlined notranslate">account_tree</span>
           </div>
           <h3 className="text-2xl font-bold font-display text-[#0b2b30] dark:text-white">
             {vanshavali.title}
           </h3>
           <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">A Legacy of Service & Sacrifice</p>
        </div>

        {/* Level 1: Root */}
        <TreeNode label={vanshavali.root} subLabel="मूल पुरुष (Root Ancestor)" icon="spa" />
        
        {/* Connector Line Vertical */}
        <div className="w-0.5 h-12 bg-gray-300 dark:bg-gray-700"></div>

        {/* Level 2: Sons Container */}
        <div className="flex justify-center gap-16 relative pt-4">
            {/* Horizontal Bar connecting siblings */}
            <div className="absolute top-0 left-[20%] right-[20%] h-0.5 bg-gray-300 dark:bg-gray-700"></div>
            
            {/* Umedji Branch */}
            <div className="flex flex-col items-center">
                <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-700 -mt-4"></div>
                <TreeNode label={vanshavali.sons[1]} />
            </div>

            {/* Randheer Ji Branch (Center/Main) */}
            <div className="flex flex-col items-center">
                <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-700 -mt-4"></div>
                <TreeNode label={vanshavali.sons[0]} highlight={true} subLabel="Patvi Shishya (Successor)" />
                
                {/* Vertical Line to Descendants */}
                <div className="w-0.5 h-12 bg-gradient-to-b from-accent-gold to-gray-300 dark:to-gray-700"></div>

                {/* Sub-Branch: Randheer's Family */}
                <div className="bg-white/50 dark:bg-white/5 p-8 rounded-3xl border border-dashed border-accent-gold/30 relative">
                     <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-white dark:bg-[#1a2024] border border-accent-gold/50 rounded-full text-[10px] font-bold text-accent-gold uppercase whitespace-nowrap">
                        The Divine Lineage
                     </span>

                     <div className="flex flex-col items-center gap-8">
                         <div className="flex gap-2 flex-wrap justify-center max-w-md">
                             {vanshavali.randheerLineage.wives.map((wife, i) => (
                                 <div key={i} className="px-3 py-1.5 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 text-xs font-bold rounded-lg border border-pink-100 dark:border-pink-800">
                                     Wife: {wife}
                                 </div>
                             ))}
                         </div>
                         
                         <TreeNode label={vanshavali.randheerLineage.son} subLabel="Son" icon="boy" />
                         
                         {/* Down to Hapuji's kids */}
                         <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-700"></div>
                         
                         <div className="grid grid-cols-2 gap-12 text-center relative">
                             <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
                             
                             {/* Grandsons */}
                             <div className="flex flex-col items-center pt-4">
                                <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-700 -mt-4"></div>
                                <span className="text-xs font-bold text-gray-400 mb-2 uppercase">Sons</span>
                                <div className="flex gap-3">
                                    {vanshavali.randheerLineage.hapujiChildren.sons.map((s,i)=>(
                                        <div key={i} className="px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded border border-blue-200 dark:border-blue-800 text-sm font-bold shadow-sm">{s}</div>
                                    ))}
                                </div>
                             </div>

                             {/* Granddaughters */}
                             <div className="flex flex-col items-center pt-4">
                                <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-700 -mt-4"></div>
                                <span className="text-xs font-bold text-gray-400 mb-2 uppercase">Daughters</span>
                                <div className="flex gap-3">
                                    {vanshavali.randheerLineage.hapujiChildren.daughters.map((s,i)=>(
                                        <div key={i} className="px-3 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 rounded border border-purple-200 dark:border-purple-800 text-sm font-bold shadow-sm">{s}</div>
                                    ))}
                                </div>
                             </div>
                         </div>
                     </div>
                </div>

            </div>

            {/* Udoji Branch */}
            <div className="flex flex-col items-center">
                <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-700 -mt-4"></div>
                <TreeNode label={vanshavali.sons[2]} />
            </div>
        </div>

        {/* Khejarli Martyrs Section */}
        <div className="mt-20 w-full max-w-4xl">
            <div className="relative bg-[#0b2b30] rounded-3xl overflow-hidden shadow-2xl">
                {/* Decorative BG */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
                
                <div className="relative z-10 p-8 md:p-12 text-center">
                    <div className="w-20 h-1 bg-accent-gold mx-auto mb-6"></div>
                    <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                        {historyData.khejarli.title}
                    </h4>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        {historyData.khejarli.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {historyData.khejarli.martyrs.map((martyr, i) => (
                            <div key={i} className="p-2 bg-white/10 hover:bg-white/20 rounded border border-white/5 text-xs md:text-sm text-gray-200 font-medium transition-colors cursor-default">
                                {martyr}
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/10 text-xs text-accent-gold uppercase tracking-widest font-bold">
                        Forever Remembered • 1787 AD
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default FamilyTree;
