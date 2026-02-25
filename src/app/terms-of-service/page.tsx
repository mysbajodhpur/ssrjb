
import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'सेवा की शर्तें - संत श्री रणधीर जी बाबल सेवा संस्थान',
  description: 'एसएसआरजेबी सेवा संस्थान वेबसाइट का उपयोग करने के लिए नियम और शर्तें।',
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0b1214] font-sans text-gray-800 dark:text-gray-200">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#1a2024] p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-accent-gold">
          
          <h1 className="text-3xl md:text-5xl font-display font-bold text-[#0b2b30] dark:text-white mb-6">सेवा की शर्तें</h1>
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-widest font-bold">अंतिम अद्यतन: जनवरी 2026</p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">1. शर्तें</h3>
            <p>
              <span className="font-bold">https://randheerseva.org</span> पर वेबसाइट तक पहुँचकर, आप सेवा की इन शर्तों, सभी लागू कानूनों और नियमों से बंधे होने के लिए सहमत हो रहे हैं, और सहमत हैं कि आप किसी भी लागू स्थानीय कानूनों के अनुपालन के लिए जिम्मेदार हैं।
            </p>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">2. उपयोग लाइसेंस</h3>
            <p>
              संत श्री रणधीर जी <span className="notranslate">बाबल</span> सेवा संस्थान की वेबसाइट पर सामग्री (जानकारी या सॉफ़्टवेयर) की एक प्रति केवल व्यक्तिगत, गैर-व्यावसायिक क्षणिक देखने के लिए अस्थायी रूप से डाउनलोड करने की अनुमति दी गई है। यह लाइसेंस का अनुदान है, शीर्षक का हस्तांतरण नहीं है, और इस लाइसेंस के तहत आप यह नहीं कर सकते:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>सामग्री को संशोधित या कॉपी करना;</li>
              <li>सामग्री का उपयोग किसी भी व्यावसायिक उद्देश्य के लिए, या किसी भी सार्वजनिक प्रदर्शन (व्यावसायिक या गैर-व्यावसायिक) के लिए करना;</li>
              <li>वेबसाइट पर निहित किसी भी सॉफ़्टवेयर को डिकंपाइल या रिवर्स इंजीनियर करने का प्रयास करना;</li>
              <li>सामग्री से किसी भी कॉपीराइट या अन्य स्वामित्व नोटेशन को हटाना; या</li>
              <li>सामग्री को किसी अन्य व्यक्ति को स्थानांतरित करना या किसी अन्य सर्वर पर सामग्री को "मिरर" करना।</li>
            </ul>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">3. अस्वीकरण</h3>
            <p>
              संत श्री रणधीर जी <span className="notranslate">बाबल</span> सेवा संस्थान की वेबसाइट पर सामग्री 'जैसी है' के आधार पर प्रदान की जाती है। हम कोई वारंटी, व्यक्त या निहित नहीं करते हैं, और एतद्द्वारा अन्य सभी वारंटी को अस्वीकार और नकारते हैं, जिसमें बिना किसी सीमा के, निहित वारंटी या व्यापारिक योग्यता की शर्तें, किसी विशेष उद्देश्य के लिए उपयुक्तता, या बौद्धिक संपदा का गैर-उल्लंघन या अधिकारों का अन्य उल्लंघन शामिल है।
            </p>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">4. शासी कानून</h3>
            <p>
              ये नियम और शर्तें राजस्थान, भारत के कानूनों द्वारा शासित और उनके अनुसार होंगी और आप उस राज्य या स्थान में अदालतों के अनन्य क्षेत्राधिकार के लिए अपरिवर्तनीय रूप से प्रस्तुत करते हैं।
            </p>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">5. संपर्क करें</h3>
            <p>यदि इन शर्तों के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:</p>
             <p className="font-bold mt-2">
              ईमेल: <a href="mailto:info@randheerjibabal.org" className="text-accent-gold hover:underline">info@randheerjibabal.org</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
