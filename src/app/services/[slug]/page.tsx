import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { completedWorks, upcomingProjects, WorkItem } from "@/data/works";
import ServiceDetailClient from "@/components/ServiceDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "सेवा नहीं मिली",
    };
  }
  return {
    title: `${service.title} - संत श्री रणधीर जी बाबल सेवा संस्थान`,
    description: service.description,
    openGraph: {
      images: [service.heroImage],
    },
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  // Filter related works
  const relatedCompleted: WorkItem[] = (service as any)?.relatedCompletedWorkIds 
    ? completedWorks.filter(w => (service as any).relatedCompletedWorkIds.includes(w.id))
    : [];
    
  const relatedUpcoming: WorkItem[] = (service as any)?.relatedUpcomingProjectIds
    ? upcomingProjects.filter(w => (service as any).relatedUpcomingProjectIds.includes(w.id))
    : [];

  return (
    <ServiceDetailClient 
      slug={slug}
      service={service || null}
      relatedCompleted={relatedCompleted}
      relatedUpcoming={relatedUpcoming}
    />
  );
}
