
import React from "react";
import type { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "हमारी यादें - हमारा प्रभाव",
  description: "हमारी सेवा गतिविधियों को देखें: वृक्षारोपण, चिकित्सा शिविर, गौ सेवा और राजस्थान भर में सामुदायिक कार्यक्रम।",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
