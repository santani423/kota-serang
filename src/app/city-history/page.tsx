import React from 'react';
import type { Metadata } from 'next';    
import HistoryHeroSection from '@/components/layout/CityHistory/HistoryHeroSection';     
import TimelineEvent from '@/components/layout/CityHistory/HistoryHeroSection';     
import Template from "@/components/layout/template";

export const metadata: Metadata = {
  title: 'Pemkot Serang Luncurkan Aplikasi Smart City — SerangCity',
  description: 'Pemerintah Kota Serang meluncurkan platform digital terpadu yang mengintegrasikan 47 layanan publik dalam satu aplikasi mobile untuk warga Serang.',
};

export default function CityHistoryPage() {
  return (
    <Template> 
      {/* <VisiMisiHero />     */}
      <HistoryHeroSection />     
      <TimelineEvent />     
    </Template>
  );
}