import React from 'react';
// import { ChevronRight, User } from 'lucide-react'; // Contoh jika menggunakan lucide

const FEATURES = [
  { title: "Antrian Digital", desc: "Ambil nomor antrian secara online tanpa tunggu lama." },
  { title: "Tracking Dokumen", desc: "Pantau status surat melalui notifikasi push real-time." },
  { title: "Pengaduan Lokasi", desc: "Lapor masalah infrastruktur dengan foto dan koordinat GPS." },
  { title: "Pembayaran Terintegrasi", desc: "Dukungan berbagai metode digital untuk retribusi daerah." },
];

const TAGS = ['Smart City', 'Teknologi', 'Layanan Publik', 'Inovasi', 'Serang'];

export default function ArticleContent() {
  return (
    <article className="max-w-[720px] mx-auto px-4 sm:px-6 py-12 leading-relaxed">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-serang-muted mb-10" aria-label="Breadcrumb">
        <a href="/homepage" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Beranda</a>
        <span className="text-serang-border" aria-hidden="true">/</span>
        <a href="/news" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Berita</a>
        <span className="text-serang-border" aria-hidden="true">/</span>
        <span className="text-serang-fg font-medium line-clamp-1 italic" aria-current="page">
          Peluncuran Aplikasi Smart City
        </span>
      </nav>

      {/* Article Body */}
      <div className="article-body prose prose-serang max-w-none">
        <p className="mb-6">
          Pemerintah Kota Serang secara resmi meluncurkan aplikasi <strong className="text-serang-fg">SerangCity Mobile</strong> pada Jumat, 3 April 2026, di Aula Utama Balai Kota Serang. Peluncuran ini merupakan tonggak penting dalam perjalanan transformasi digital Kota Serang yang telah dicanangkan sejak 2023.
        </p>

        <p className="mb-6">
          Walikota Serang, Dr. H. Syafrudin, M.Si, menyatakan bahwa kehadiran aplikasi ini merupakan wujud nyata komitmen pemerintah dalam memberikan pelayanan terbaik kepada masyarakat. &ldquo;Kami ingin warga Serang bisa mengakses seluruh layanan pemerintahan hanya dari genggaman tangan mereka,&rdquo; ujarnya.
        </p>

        <blockquote className="border-l-4 border-primary pl-6 my-10 italic">
          <p className="text-lg text-serang-fg leading-snug">
            &ldquo;Transformasi digital bukan sekadar tren — ini adalah kewajiban kami untuk memastikan setiap warga Serang mendapatkan pelayanan yang cepat, transparan, dan berkeadilan.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-serang-muted not-italic font-medium">
            — Dr. H. Syafrudin, M.Si, Walikota Serang
          </footer>
        </blockquote>

        <h2 className="text-2xl font-bold text-serang-fg mt-12 mb-6">47 Layanan Publik dalam Satu Genggaman</h2>

        <p className="mb-4">
          Aplikasi SerangCity Mobile mengintegrasikan tidak kurang dari 47 layanan publik. Beberapa fitur unggulan meliputi:
        </p>

        <ul className="space-y-4 mb-8">
          {FEATURES.map((feature, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                <strong className="text-serang-fg">{feature.title}</strong> — {feature.desc}
              </span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-serang-fg mt-12 mb-6">Kolaborasi dan Investasi</h2>
        <p className="mb-6">
          Proses pengembangan memakan waktu sekitar 18 bulan dengan investasi sebesar Rp 12,4 miliar dari APBD 2025, dirancang dengan pendekatan <em>human-centered design</em> yang melibatkan 2.000 warga.
        </p>
      </div>

      {/* Tags Section */}
      <section className="mt-12 pt-8 border-t border-serang-border">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-serang-muted font-bold uppercase tracking-wider mr-2">Tag:</span>
          {TAGS.map((tag) => (
            <button 
              key={tag} 
              className="px-4 py-1.5 bg-serang-bg border border-serang-border rounded-full text-xs text-serang-muted hover:border-primary hover:text-primary transition-all active:scale-95"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Author Card */}
      <footer className="mt-12 p-8 bg-serang-bg border border-serang-border rounded-3xl flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <div 
          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0"
          aria-hidden="true"
        >
          {/* Fallback avatar: Initial "H" for Humas */}
          <span className="text-xl font-bold">H</span>
        </div>
        <div>
          <h3 className="font-bold text-serang-fg text-lg">Tim Humas Pemkot Serang</h3>
          <p className="text-primary text-sm font-medium mb-2">Humas & Protokol — Kota Serang</p>
          <p className="text-serang-muted text-sm leading-relaxed">
            Menyampaikan informasi resmi dan terpercaya dari Pemerintah Kota Serang kepada seluruh masyarakat.
          </p>
        </div>
      </footer>
    </article>
  );
}