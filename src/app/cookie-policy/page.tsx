
import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'कुकी नीति - संत श्री रणधीर जी बाबल सेवा संस्थान',
  description: 'जानें कि हम आपकी वेबसाइट पर आपके अनुभव को बेहतर बनाने के लिए कुकीज़ का उपयोग कैसे करते हैं।',
};

export default function CookiePolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0b1214] font-sans text-gray-800 dark:text-gray-200">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#1a2024] p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-accent-gold">
          
          <h1 className="text-3xl md:text-5xl font-display font-bold text-[#0b2b30] dark:text-white mb-6">कुकी नीति</h1>
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-widest font-bold">अंतिम अद्यतन: जनवरी 2026</p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              यह कुकी नीति बताती है कि कुकीज़ क्या हैं और हम उनका उपयोग कैसे करते हैं। आपको इस नीति को पढ़ना चाहिए ताकि आप समझ सकें कि हम किस प्रकार की कुकीज़ का उपयोग करते हैं, हम कुकीज़ का उपयोग करके क्या जानकारी एकत्र करते हैं और उस जानकारी का उपयोग कैसे किया जाता है।
            </p>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">कुकीज़ क्या हैं?</h3>
            <p>
              कुकीज़ छोटी टेक्स्ट फाइलें होती हैं जो आपके कंप्यूटर या मोबाइल डिवाइस पर तब संग्रहीत होती हैं जब आप किसी वेबसाइट पर जाते हैं। इनका व्यापक रूप से वेबसाइटों को काम करने, या अधिक कुशलता से काम करने, साथ ही साइट के मालिकों को जानकारी प्रदान करने के लिए उपयोग किया जाता है।
            </p>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">हम कुकीज़ का उपयोग कैसे करते हैं</h3>
            <p>हम निम्नलिखित उद्देश्यों के लिए कुकीज़ का उपयोग करते हैं:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><span className="font-bold">अनिवार्य कुकीज़:</span> वेबसाइट के ठीक से काम करने के लिए ये आवश्यक हैं। वे पृष्ठ नेविगेशन और सुरक्षित क्षेत्रों तक पहुंच जैसी मुख्य कार्यक्षमता को सक्षम करते हैं।</li>
              <li><span className="font-bold">एनालिटिक्स कुकीज़:</span> ये कुकीज़ हमें यह समझने में मदद करती हैं कि आगंतुक हमारी वेबसाइट के साथ कैसे इंटरैक्ट करते हैं, यह गुमनाम रूप से जानकारी एकत्र और रिपोर्ट करके किया जाता है। इससे हमें अपनी सेवाओं को बेहतर बनाने में मदद मिलती है।</li>
            </ul>

             <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">कुकीज़ का प्रबंधन</h3>
            <p>
              अधिकांश वेब ब्राउज़र स्वचालित रूप से कुकीज़ स्वीकार करते हैं, लेकिन यदि आप चाहें तो आमतौर पर कुकीज़ को अस्वीकार करने के लिए अपनी ब्राउज़र सेटिंग को संशोधित कर सकते हैं। हालाँकि, यह आपको वेबसाइट का पूर्ण लाभ उठाने से रोक सकता है।
            </p>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">संपर्क करें</h3>
            <p>यदि कुकीज़ के हमारे उपयोग के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:</p>
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
