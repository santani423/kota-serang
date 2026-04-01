'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const featuredArticle = {
  category: 'Pembangunan',
  title: 'Pemkot Serang Luncurkan Program Smart City 2026: Integrasi 500 Sensor IoT di Seluruh Kecamatan',
  excerpt:
    'Program ambisius Pemerintah Kota Serang untuk mewujudkan kota cerdas dengan mengintegrasikan teknologi Internet of Things di infrastruktur publik. Sensor akan memantau kualitas udara, kepadatan lalu lintas, dan konsumsi energi secara real-time.',
  date: '27 Maret 2026',
  author: 'Dinas Kominfo Kota Serang',
  readTime: '5 menit',
  image:
    'https://images.unsplash.com/photo-1588689050843-77e1ee5a9f14',
  alt:
    'Infrastruktur kota cerdas dengan lampu jalan pintar dan sensor IoT yang terintegrasi di pusat kota modern',
};

export default function NewsHero() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="pt-24 bg-white dark:bg-slate-900" aria-label="Berita Utama">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Label */}
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="w-1 h-6 bg-[#37B27D] rounded-full" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#37B27D]">
            Berita & Pengumuman
          </span>
        </div>

        {/* Card */}
        <div
          className={`transition-all duration-700 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <article className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
              
              {/* Image */}
              <div className="relative min-h-[280px]">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 dark:to-slate-900/40" />

                {/* Badge */}
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-700/90 backdrop-blur text-white text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    {featuredArticle.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4 font-mono">
                  <span>{featuredArticle.date}</span>
                  <span>·</span>
                  <span>{featuredArticle.readTime} baca</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                  {featuredArticle.title}
                </h1>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-300">
                        A
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {featuredArticle.author}
                    </span>
                  </div>

                  <Link
                    href="/news"
                    className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
                  >
                    Baca Artikel →
                  </Link>
                </div>
              </div>

            </div>
          </article>
        </div>
      </div>
    </section>
  );
}