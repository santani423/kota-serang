import React from 'react';
import Link from 'next/link';

// Data bisa dipindahkan ke file konstanta terpisah jika sudah besar
const relatedArticles = [
  {
    id: 'program-beasiswa-serang-cerdas-2026',
    title: 'Program Beasiswa Serang Cerdas 2026 Buka Pendaftaran untuk 500 Penerima',
    image: "https://images.unsplash.com/photo-1662947068241-f9860f8522f2",
    imageAlt: 'Siswa-siswa berseragam di depan sekolah',
    date: '1 Apr 2026',
    category: 'Pendidikan',
    readTime: '3 menit'
  },
  {
    id: 'revitalisasi-pasar-rau',
    title: 'Revitalisasi Pasar Rau Tahap II Dimulai, Target Selesai Akhir 2026',
    image: "https://images.unsplash.com/photo-1628921926657-9a19551cfc52",
    imageAlt: 'Proyek konstruksi gedung modern',
    date: '28 Mar 2026',
    category: 'Infrastruktur',
    readTime: '4 menit'
  },
  {
    id: 'umkm-digital-serang',
    title: 'Pemkot Serang Dorong 5.000 UMKM Masuk Ekosistem Digital Nasional 2026',
    image: "https://images.unsplash.com/photo-1667746213225-431db3ed8d13",
    imageAlt: 'Produk kerajinan UMKM lokal',
    date: '22 Mar 2026',
    category: 'Ekonomi',
    readTime: '5 menit'
  }
];

// Gunakan class utuh agar Tailwind compiler tidak melewatkannya
const getCategoryStyle = (category: string) => {
  const styles: Record<string, string> = {
    Pendidikan: 'bg-blue-100 text-blue-700',
    Infrastruktur: 'bg-orange-100 text-orange-700',
    Ekonomi: 'bg-violet-100 text-violet-700',
    Teknologi: 'bg-primary/10 text-primary',
    Kesehatan: 'bg-rose-100 text-rose-700',
  };
  return styles[category] || 'bg-gray-100 text-gray-700';
};

export default function RelatedArticles() {
  return (
    <section className="bg-slate-50 py-16 bg-surface-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-[2.5rem] leading-[1.1] font-display font-bold text-content">
              Berita <br /> <span className="gradient-title">terkait</span>
            </h2>
            <p className="text-slate-500 mt-2 text-sm">Informasi terbaru seputar perkembangan Kota Serang.</p>
          </div>
          
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all duration-300 group"
          >
            Semua Berita
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedArticles.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`} // Dinamis berdasarkan ID
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${getCategoryStyle(item.category)}`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-slate-400 text-xs mb-3">
                  <span>{item.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>{item.readTime} Baca</span>
                </div>

                <h3 className="font-bold text-content text-lg leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-primary text-xs font-bold uppercase tracking-wide group-hover:underline">
                    Baca Selengkapnya
                  </span>
                  <span className="text-slate-300 group-hover:text-primary transition-colors">↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}