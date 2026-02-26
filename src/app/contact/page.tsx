
import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSections from "@/components/ContactSections";

export const metadata: Metadata = {
  title: "संपर्क करें - सेवा से जुड़ें",
  description: "बाबलसर, बीकानेर में हमारे मुख्य केंद्र पर पधारें। स्वयंसेवा, दान या आध्यात्मिक मार्गदर्शन के लिए संपर्क करें। हम सेवा के लिए तत्पर हैं।",
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0b1214]">
      <Navbar />
      
      <main className="flex-grow">
        <ContactSections />
      </main>

      <Footer />
    </div>
  );
}
