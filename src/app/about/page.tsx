
import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSections from "@/components/AboutSections";

export const metadata: Metadata = {
  title: "हमारी कहानी - इतिहास और मिशन",
  description: "संत श्री रणधीर जी बाबल द्वारा 1513 ईस्वी में स्थापित, हम जीव दया, पर्यावरण संरक्षण और समाज सेवा के लिए समर्पित हैं।",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-accent-gold selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <AboutSections />

      </main>

      <Footer />
    </div>
  );
}
