import React from 'react';
// import AppImage from '@/components/ui/AppImage';
import Image from 'next/image';

export default function LeadershipHero() {
  return (
    <section
      className="relative min-h-[420px] flex items-end pb-16 overflow-hidden pt-24"
      aria-label="Header halaman pimpinan">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1614489366920-0b086a2ada99"
          alt="Gedung perkantoran kota modern dengan fasad kaca biru langit cerah sebagai latar belakang"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          unoptimized />
        
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark/90 via-primary/80 to-accent/30" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-0.5 bg-accent" />
          <span className="text-accent text-xs font-700 tracking-[0.35em] uppercase">Pemerintah Kota Serang</span>
        </div>
        <h1 className="font-display text-white font-700 mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.025em' }}>
          Pimpinan & Perangkat<br />
          <span style={{ background: 'linear-gradient(90deg,#fff 0%,#34D399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Kota Serang
          </span>
        </h1>
        <p className="text-white/70 text-lg max-w-xl leading-relaxed font-400">
          Mengenal para pemimpin yang berdedikasi melayani dan membangun Kota Serang menuju masa depan yang lebih baik.
        </p>
      </div>
    </section>);

}