
import Template from "@/components/layout/template";
import HeroSection from "@/components/layout/hompage/HeroSection";
import QuickServicesSection from "@/components/layout/hompage/QuickServicesSection";
import NewsPreviewSection from "@/components/layout/hompage/NewsPreviewSection";
import StatisticsSection from "@/components/layout/hompage/StatisticsSection";
import AspirasiSection from "@/components/layout/hompage/AspirasiSection";
import type { Metadata } from 'next';

import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: 'Warisan Budaya Kota Serang — SerangCity',
  description: 'Jelajahi sejarah dan warisan budaya Kota Serang melalui berbagai era yang membentuk identitas kota ini.',
};

export default function Home() {
  return (
    <>
      <HomeClient />
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
