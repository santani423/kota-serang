import React from 'react';
import type { Metadata } from 'next';  
import VisiMisiHero from '@/components/layout/VisiMisi/VisiMisiHero';  
import VisionSection from '@/components/layout/VisiMisi/VisionSection';  
import Template from "@/components/layout/template";

export const metadata: Metadata = {
  title: 'Pemkot Serang Luncurkan Aplikasi Smart City — SerangCity',
  description: 'Pemerintah Kota Serang meluncurkan platform digital terpadu yang mengintegrasikan 47 layanan publik dalam satu aplikasi mobile untuk warga Serang.',
};

export default function NewsDetailPage() {
  return (
    <Template> 
      {/* <VisiMisiHero />     */}
      <VisionSection />    
    </Template>
  );
}