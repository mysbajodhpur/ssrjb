"use client";

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { QRCodeSVG } from 'qrcode.react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal = ({ isOpen, onClose }: DonationModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [amount, setAmount] = useState<string>('501'); // Default auspicious amount
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted) return null;
  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast here if desired
  };

  const handleAmountChange = (value: string) => {
    const numValue = parseInt(value);
    if (numValue > 100000) {
      setAmount('100000');
      setShowWarning(true);
    } else {
      setAmount(value);
      setShowWarning(false);
    }
  };

  // UPI Configuration
  const upiId = 'mab.037213036680016@axisbank';
  const payeeName = 'SANT SHREE RANDHIRJI BABAL';
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount || '0'}&cu=INR`;

  const presetAmounts = ['101', '501', '1100', '2100', '5100'];

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white dark:bg-[#0e1618] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-accent-gold/20 animate-fade-in transform scale-100 opacity-100 transition-all max-h-[90vh] flex flex-col">
        {/* Header - Decorative */}
        <div className="bg-[#0b2b30] p-6 text-center relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-gold/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
          
          <h3 className="text-xl font-display font-bold text-white relative z-10">सहयोग राशि जमा करें</h3>
          <p className="text-accent-gold text-xs font-bold uppercase tracking-widest mt-1 relative z-10">बैंक विवरण एवं स्कैन कोड</p>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-800">
            
            {/* Left Side: Bank Details */}
            <div className="p-8 space-y-6 flex-1">
              <div className="text-center md:text-left mb-6">
                <h4 className="font-bold text-[#0b2b30] dark:text-white flex items-center justify-center md:justify-start gap-2">
                  <span className="material-symbols-outlined text-accent-gold">account_balance</span>
                  बैंक ट्रांसफर
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 leading-relaxed">
                  आप सीधे हमारे बैंक खाते में राशि ट्रांसफर कर सकते हैं।
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-[#1a2024] border border-gray-100 dark:border-gray-800 rounded-xl p-5 space-y-4 shadow-inner relative overflow-hidden">
                 {/* Decorative watermark */}
                 <div className="absolute right-[-20px] bottom-[-20px] opacity-5 pointer-events-none">
                    <span className="material-symbols-outlined text-[150px]">account_balance</span>
                 </div>

                 <div className="relative">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 block mb-1">खाता धारक का नाम</label>
                    <div className="text-[#0b2b30] dark:text-accent-gold font-bold font-display text-lg leading-tight">
                      SANT SHREE RANDHIRJI BABAL SEVA SANSTHAN
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 block mb-1">बैंक का नाम</label>
                      <div className="text-gray-800 dark:text-white font-semibold">AXIS BANK LTD</div>
                   </div>
                   <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 block mb-1">शाखा</label>
                      <div className="text-gray-800 dark:text-white font-semibold text-sm">SARASWATI NAGAR RJ, JODHPUR</div>
                   </div>
                 </div>

                 <div className="pt-2 border-t border-dashed border-gray-300 dark:border-gray-700">
                   <div className="flex justify-between items-end mb-3">
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 block mb-1">खाता संख्या (A/C No)</label>
                        <div className="text-base sm:text-lg font-mono font-bold text-[#0d1b1c] dark:text-white tracking-wider">923010052058319</div>
                      </div>
                      <button 
                        onClick={() => handleCopy('923010052058319')}
                        className="text-accent-gold hover:text-[#0b2b30] dark:hover:text-white transition-colors p-2 hover:bg-black/5 rounded-full"
                        title="Copy Account Number"
                      >
                        <span className="material-symbols-outlined text-lg">content_copy</span>
                      </button>
                   </div>
                   
                   <div className="flex justify-between items-end">
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 block mb-1">IFSC कोड</label>
                        <div className="text-base sm:text-lg font-mono font-bold text-[#0d1b1c] dark:text-white tracking-wider">UTIB0003668</div>
                      </div>
                      <button 
                        onClick={() => handleCopy('UTIB0003668')}
                        className="text-accent-gold hover:text-[#0b2b30] dark:hover:text-white transition-colors p-2 hover:bg-black/5 rounded-full"
                        title="Copy IFSC Code"
                      >
                         <span className="material-symbols-outlined text-lg">content_copy</span>
                      </button>
                   </div>
                 </div>
              </div>
            </div>

            {/* Right Side: QR Code Generator */}
            <div className="p-8 flex-1 bg-gray-50/50 dark:bg-black/20 flex flex-col items-center justify-center">
              <h4 className="font-bold text-[#0b2b30] dark:text-white flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-accent-gold">qr_code_scanner</span>
                QR कोड स्कैन करें
              </h4>

              {/* Amount Input */}
              <div className="w-full max-w-[280px] mb-6">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 block mb-2 text-center">सहयोग राशि (₹)</label>
                 <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₹</span>
                    <input 
                      type="number" 
                      value={amount}
                      onChange={(e) => handleAmountChange(e.target.value)}
                      className="w-full bg-white dark:bg-[#0e1618] border border-gray-200 dark:border-gray-700 rounded-xl py-3 pl-8 pr-4 text-center font-bold text-lg text-[#0b2b30] dark:text-white focus:ring-2 focus:ring-accent-gold outline-none transition-all"
                      placeholder="Enter Amount"
                    />
                 </div>
                 
                 {/* Preset Amounts */}
                 <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {presetAmounts.map((val) => (
                      <button
                        key={val}
                        onClick={() => handleAmountChange(val)}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${amount === val ? 'bg-accent-gold text-[#0b2b30]' : 'bg-white dark:bg-[#1a2024] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-accent-gold'}`}
                      >
                        ₹{val}
                      </button>
                    ))}
                 </div>

                 {/* Warning Message */}
                 {showWarning && (
                   <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg animate-fade-in">
                     <p className="text-xs text-red-600 dark:text-red-400 text-center leading-snug">
                       <span className="font-bold block mb-1">अधिकतम सीमा: ₹1,00,000</span>
                       एक लाख से अधिक राशि के लिए कृपया बैंक ट्रांसफर का उपयोग करें।
                     </p>
                   </div>
                 )}
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-accent-gold/20 mb-4 max-w-[280px]">
                <QRCodeSVG 
                  value={upiUrl}
                  size={200}
                  level="Q"
                  includeMargin={true}
                  imageSettings={{
                    src: "/images/randheer-ji.jpg",
                    x: undefined,
                    y: undefined,
                    height: 40,
                    width: 40,
                    excavate: true,
                  }}
                />
              </div>

              <div className="text-center space-y-1">
                 <p className="text-xs font-bold text-[#0b2b30] dark:text-accent-gold">{payeeName}</p>
                 <p className="text-[10px] text-gray-500">{upiId}</p>
              </div>

               <p className="text-[10px] text-gray-400 mt-4 max-w-[250px] text-center">
                PhonePe, GPay, Paytm या किसी भी UPI ऐप से स्कैन करें
              </p>
            </div>
          </div>
          
          {/* Contact Info */}
           <div className="text-center p-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0e1618]">
            <p className="text-xs text-gray-400 mb-1">दान संबंधी किसी भी प्रश्न के लिए संपर्क करें</p>
            <a href="tel:+919818757905" className="text-[#0b2b30] dark:text-white font-bold hover:text-accent-gold transition-colors text-sm">
              +91 98187 57905
            </a>
          </div>
        </div>
        
        {/* Footer actions */}
        <div className="bg-gray-50 dark:bg-[#151b1d] p-4 flex justify-center shrink-0 border-t border-gray-200 dark:border-gray-800">
          <button 
            onClick={onClose}
            className="px-8 py-2 bg-[#0b2b30] text-white rounded-full font-bold text-sm hover:bg-accent-gold hover:text-[#0b2b30] transition-all shadow-lg"
          >
            बंद करें
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DonationModal;
