'use client';

import Image from 'next/image';
import { User, Calendar, Clock } from 'lucide-react';

const article = {
  title: 'Pemkot Serang Resmi Luncurkan Aplikasi Smart City untuk Kemudahan Layanan Warga',
  category: 'Teknologi',
  date: '3 April 2026',
  author: 'Tim Humas Pemkot Serang',
  authorRole: 'Humas & Protokol',
  readTime: '5 menit baca',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe4dd004-1773800272776.png",
  imageAlt: 'Ruang kontrol smart city modern',
  imageCaption: 'Pusat Kendali Smart City Kota Serang yang baru diresmikan. (Foto: Humas Pemkot Serang)',
};

export default function ArticlePage() {
  return (
    <main className="bg-[#F9FAFB] text-gray-800">

      {/* HERO */}
      <section className="relative w-full h-[60vh] min-h-[360px]">

        {/* IMAGE */}
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/50 to-transparent" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto w-full px-6 md:px-12 pb-10 text-white">

            {/* CATEGORY */}
            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-500 font-medium">
                {article.category}
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm">
                Berita Resmi
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl">
              {article.title}
            </h1>

            {/* META */}
            <div className="flex flex-wrap items-center gap-6 text-sm">

              {/* AUTHOR */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-600/90 flex items-center justify-center shadow-md">
                  <User size={16} className="text-white" />
                </div>
                <div className="leading-tight">
                  <p className="text-white font-medium text-sm">
                    {article.author}
                  </p>
                  <p className="text-white/60 text-xs">
                    {article.authorRole}
                  </p>
                </div>
              </div>

              {/* DATE */}
              <div className="flex items-center gap-2 text-white/80">
                <Calendar size={16} className="opacity-80" />
                <span>{article.date}</span>
              </div>

              {/* READ TIME */}
              <div className="flex items-center gap-2 text-white/80">
                <Clock size={16} className="opacity-80" />
                <span>{article.readTime}</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CAPTION */}
      <div className="max-w-3xl mx-auto px-4 text-center mt-4">
        <p className="text-xs text-gray-500 italic leading-relaxed">
          {article.imageCaption}
        </p>
      </div>

    </main>
  );
}