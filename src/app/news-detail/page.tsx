import React from 'react';
import type { Metadata } from 'next';  
import ArticleHero from '@/components/layout/news-detail/ArticleHero'; 
import ArticleContent from '@/components/layout/news-detail/ArticleContent'; 
import RelatedArticles from '@/components/layout/news-detail/RelatedArticles'; 
import Template from "@/components/layout/template";

export const metadata: Metadata = {
  title: 'Pemkot Serang Luncurkan Aplikasi Smart City — SerangCity',
  description: 'Pemerintah Kota Serang meluncurkan platform digital terpadu yang mengintegrasikan 47 layanan publik dalam satu aplikasi mobile untuk warga Serang.',
};

export default function NewsDetailPage() {
  return (
    <Template> 
      <ArticleHero />   
      <ArticleContent />
      <RelatedArticles />
    </Template>
  );
}