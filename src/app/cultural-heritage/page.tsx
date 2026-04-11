import React from 'react';
import CultureHeroSection from '@/components/layout/CulturalHeritage/CultureHeroSection';      
import MasonryGridSection from '@/components/layout/CulturalHeritage/MasonryGridSection';       
import FeaturedCultureSection from '@/components/layout/CulturalHeritage/FeaturedCultureSection';       
import PhilosophySection from '@/components/layout/CulturalHeritage/PhilosophySection';       
import Template from "@/components/layout/template";
import type { Metadata } from 'next';    

export const metadata: Metadata = {
  title: 'Warisan Budaya Kota Serang — SerangCity',
  description: 'Jelajahi sejarah dan warisan budaya Kota Serang melalui berbagai era yang membentuk identitas kota ini.',
};

export default function CulturalHeritagePage() {
  return (
    <Template> 
      {/* <VisiMisiHero />     */}
      <CultureHeroSection />        
      <MasonryGridSection />        
      <FeaturedCultureSection />        
      <PhilosophySection />        
    </Template>
  );
}