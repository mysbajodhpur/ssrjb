
import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSections from "@/components/ServicesSections";


export const metadata: Metadata = {
  title: "हमारी पहल - शिक्षा, स्वास्थ्य और पर्यावरण",
  description: "हमारी मुख्य सेवाओं का अन्वेषण करें: विद्या (शिक्षा), निरोगी काया (स्वास्थ्य), पर्यावरण (प्रकृति संरक्षण), और संस्कार (नैतिक मूल्य)। मानवता की सेवा ही ईश्वर की सेवा है।",
};

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 dark:bg-[#0b1214]">
      <Navbar />
      
      <main className="flex-grow">
        <ServicesSections />

      </main>

      <Footer />
    </div>
  );
}
