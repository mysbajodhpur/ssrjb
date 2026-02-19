
import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'गोपनीयता नीति - संत श्री रणधीर जी बाबल सेवा संस्थान',
  description: 'आपकी गोपनीयता की रक्षा के लिए हमारी प्रतिबद्धता। यह पृष्ठ बताता है कि हम क्या जानकारी एकत्र करते हैं और हम उसका उपयोग कैसे करते हैं।',
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0b1214] font-sans text-gray-800 dark:text-gray-200">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#1a2024] p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-accent-gold">
          
          <h1 className="text-3xl md:text-5xl font-display font-bold text-[#0b2b30] dark:text-white mb-6">गोपनीयता नीति</h1>
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-widest font-bold">अंतिम अद्यतन: जनवरी 2026</p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              संत श्री रणधीर जी बाबल सेवा संस्थान ("हम," "हमारा," या "हमें") आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध है। यह गोपनीयता नीति बताती है कि एसएसआरजेबी सेवा संस्थान द्वारा आपकी व्यक्तिगत जानकारी कैसे एकत्र, उपयोग और प्रकट की जाती है।
            </p>
            <p>
              यह गोपनीयता नीति हमारी वेबसाइट और इसके संबंधित उपडोमेन (सामूहिक रूप से, हमारी "सेवा") पर लागू होती है। हमारी सेवा तक पहुँचने या उसका उपयोग करने से, आप यह संकेत देते हैं कि आपने इस गोपनीयता नीति में वर्णित अनुसार हमारी व्यक्तिगत जानकारी के संग्रह, भंडारण, उपयोग और प्रकटीकरण को पढ़, समझ और स्वीकार कर लिया है।
            </p>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">1. जानकारी जो हम एकत्र करते हैं</h3>
            <p>हम वह जानकारी एकत्र करते हैं जो आप हमें सीधे प्रदान करते हैं। उदाहरण के लिए, हम जानकारी तब एकत्र करते हैं जब आप:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>एक संपर्क फ़ॉर्म या स्वयंसेवक आवेदन भरते हैं।</li>
              <li>दान या योगदान करते हैं।</li>
              <li>हमारे न्यूज़लेटर या संचार की सदस्यता लेते हैं।</li>
              <li>तृतीय-पक्ष प्लेटफार्मों के माध्यम से हमारे साथ संवाद करते हैं।</li>
            </ul>
            <p>हमारे द्वारा एकत्र की जाने वाली जानकारी के प्रकारों में आपका नाम, ईमेल पता, फोन नंबर और कोई भी अन्य जानकारी शामिल हो सकती है जिसे आप प्रदान करना चुनते हैं।</p>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">2. हम आपकी जानकारी का उपयोग कैसे करते हैं</h3>
            <p>हम उस जानकारी का उपयोग करते हैं जिसे हम एकत्र करते हैं:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>हमारी सेवाओं और पहलों को प्रदान करने, बनाए रखने और सुधारने के लिए।</li>
              <li>दान संसाधित करने और रसीदें भेजने के लिए।</li>
              <li>आपको तकनीकी नोटिस, अपडेट, सुरक्षा अलर्ट और समर्थन संदेश भेजने के लिए।</li>
              <li>आपकी टिप्पणियों, प्रश्नों और अनुरोधों का जवाब देने के लिए।</li>
              <li>समाचार, घटनाओं और अभियानों के बारे में आपके साथ संवाद करने के लिए।</li>
            </ul>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">3. जानकारी का प्रकटीकरण</h3>
            <p>
              हम आपकी व्यक्तिगत रूप से पहचान योग्य जानकारी को बाहरी पार्टियों को बेचते, व्यापार या अन्यथा स्थानांतरित नहीं करते हैं जब तक कि हमारे पास आपकी अनुमति न हो या कानून द्वारा आवश्यक न हो।
            </p>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">4. सुरक्षा</h3>
            <p>
              हम नुकसान, चोरी, दुरुपयोग और अनधिकृत पहुंच, प्रकटीकरण, परिवर्तन और विनाश से आपके बारे में जानकारी की सुरक्षा में मदद करने के लिए उचित उपाय करते हैं। हालांकि, कोई भी इंटरनेट ट्रांसमिशन कभी भी पूरी तरह से सुरक्षित या त्रुटि मुक्त नहीं होता है।
            </p>

            <h3 className="text-[#0b2b30] dark:text-accent-gold font-display mt-8 mb-4 text-2xl font-bold">5. संपर्क करें</h3>
            <p>यदि इस गोपनीयता नीति के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:</p>
            <p className="font-bold mt-2">
              संत श्री रणधीर जी बाबल सेवा संस्थान<br/>
              मुख्यालय श्री जम्भेश्वर भगवान मंदिर,<br/>
              फिटकासनी, जिला जोधपुर, राजस्थान<br/>
              ईमेल: <a href="mailto:bishnoi.ramesh@gmail.com" className="text-accent-gold hover:underline">bishnoi.ramesh@gmail.com</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
