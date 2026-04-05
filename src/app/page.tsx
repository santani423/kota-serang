"use client";

import { useEffect } from "react";
import Template from "@/components/layout/template";
import HeroSection from "@/components/layout/hompage/HeroSection";
import QuickServicesSection from "@/components/layout/hompage/QuickServicesSection";
import NewsPreviewSection from "@/components/layout/hompage/NewsPreviewSection";
import StatisticsSection from "@/components/layout/hompage/StatisticsSection";
import AspirasiSection from "@/components/layout/hompage/AspirasiSection"; 

export default function Home() { 
 
  return (
    <>
      <Template>
        <HeroSection />
        <QuickServicesSection />
        <NewsPreviewSection />
        <StatisticsSection />
        <AspirasiSection />
      </Template>
    </>
  );
}
