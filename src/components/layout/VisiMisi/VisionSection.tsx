"use client";


import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";


export default function VisionSection() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    if (sectionRef.current) {
      sectionRef.current.classList.add("visible");
    }
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-dark-bg bg-gradient-to-tr from-green-500/10 via-white/80 to-white"
      aria-labelledby="vision-heading"
    >
      {/* Background decorative */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1716978497800-d61b039926c8"
          alt="Pemandangan kota modern sebagai latar visi Kota Serang"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-civic-heading/90" />
        <div className="absolute inset-0 batik-pattern opacity-20" aria-hidden="true" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #1E3A8A18 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-32 text-center">
        {/* Breadcrumb */}
        <nav
          className={`reveal flex items-center justify-center gap-2 text-sm text-white/70 dark:text-dark-muted font-mono mb-12 transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          aria-label="Breadcrumb"
        >
          <a
            href="/"
            className="hover:text-primary dark:hover:text-white transition-colors duration-200 font-body font-medium"
            style={{ fontWeight: 500 }}
          >
            Beranda
          </a>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <span className="text-foreground dark:text-white font-body font-semibold" style={{ fontWeight: 600 }}>
            Visi & Misi
          </span>
        </nav>

        {/* Label */}
        <div className={`reveal flex items-center justify-center gap-2 mb-8 transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="w-12 h-0.5 bg-accent" />
          <span className="text-xs font-mono text-accent uppercase tracking-widest">Visi Kota Serang 2025–2030</span>
          <span className="w-12 h-0.5 bg-accent" />
        </div>

        {/* Vision Text */}
        <div className={`reveal transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h1
            id="vision-heading"
            className="font-display font-extrabold text-foreground dark:text-white mx-auto mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 72px)", lineHeight: "1.05", maxWidth: "900px" }}
          >
            "Terwujudnya Kota Serang yang
            <span className="text-accent"> Modern</span>,
            <span className="text-accent"> Inklusif</span>, dan
            <span className="text-accent"> Berbudaya</span>"
          </h1>
        </div>

        <p className={`reveal text-muted dark:text-dark-muted text-lg md:text-xl font-body font-light max-w-2xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Visi Pemerintah Kota Serang Periode 2025–2030: Membangun kota yang maju secara ekonomi, inklusif secara sosial, dan kaya akan identitas budaya Banten.
        </p>

        {/* Three pillars */}
        <div className={`reveal grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { label: "Modern", desc: "Tata kelola berbasis teknologi dan inovasi digital", emoji: "🏙️" },
            { label: "Inklusif", desc: "Pembangunan yang merata untuk seluruh lapisan masyarakat", emoji: "🤝" },
            { label: "Berbudaya", desc: "Melestarikan warisan Kesultanan Banten di era modern", emoji: "🕌" },
          ].map((pillar) => (
            <div
              key={pillar.label}
              className="glass-panel rounded-2xl p-6 text-center hover:bg-white/90 dark:hover:bg-dark-bg/80 backdrop-blur-md transition-all duration-300 shadow-lg border border-white/20"
            >
              <div className="text-3xl mb-3">{pillar.emoji}</div>
              <div className="font-display font-bold text-primary text-lg mb-2">{pillar.label}</div>
              <p className="text-civic-body text-xs leading-relaxed text-muted dark:text-dark-muted">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50" aria-hidden="true">
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
}