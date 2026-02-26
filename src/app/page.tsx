import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import HomeHero from "@/components/HomeHero";
import HomeSections from "@/components/HomeSections";

export const metadata: Metadata = {
  title: {
    absolute: "संत श्री रणधीर जी बाबल सेवा संस्थान | मानवता की सेवा, प्रकृति का सम्मान",
  },
  description: "संत श्री रणधीर जी बाबल सेवा संस्थान: शिक्षा, स्वास्थ्य, संस्कार और पर्यावरण संरक्षण के लिए समर्पित 500 वर्षों की आध्यात्मिक विरासत।",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-sans selection:bg-accent-gold selection:text-white">
      <Navbar />
      
      <main className="flex flex-col flex-grow">
        {/* Hero Section */}
        <HomeHero />

        <HomeSections />

        {/* CTA Section */}
        <CTASection bgImage="/images/gallery-img-05.jpeg" />
      </main>

      <Footer />
    </div>
  );
}
