"use client";

import React, { useEffect, useRef } from 'react';

const values = [
  { label: 'Transparansi', desc: 'Keterbukaan informasi publik', emoji: '🔍' },
  { label: 'Inovasi', desc: 'Solusi kreatif berbasis teknologi', emoji: '💡' },
  { label: 'Integritas', desc: 'Kejujuran dan tanggung jawab', emoji: '⚖️' },
  { label: 'Pelayanan Prima', desc: 'Masyarakat sebagai prioritas utama', emoji: '🌟' },
  { label: 'Keberlanjutan', desc: 'Pembangunan ramah lingkungan', emoji: '🌿' },
  { label: 'Inklusivitas', desc: 'Tidak ada yang tertinggal', emoji: '🤝' },
  { label: 'Kolaborasi', desc: 'Sinergi lintas sektor', emoji: '🔗' },
  { label: 'Akuntabilitas', desc: 'Pertanggungjawaban kinerja', emoji: '📊' },
];

export default function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 bg-civic-surface dark:bg-slate-800 border-y border-civic-border dark:border-slate-700 overflow-hidden"
      aria-labelledby="values-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 mb-10">
        <div className="reveal flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-accent" />
              <span className="text-xs font-mono text-accent uppercase tracking-widest">Nilai-Nilai Kami</span>
            </div>
            <h2
              id="values-heading"
              className="font-heading font-bold text-civic-heading dark:text-white"
              style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: '1.2' }}
            >
              Landasan Budaya Kerja
            </h2>
          </div>
          <p className="reveal text-civic-body dark:text-slate-400 text-sm max-w-xs">
            Delapan nilai inti yang menjadi fondasi setiap kebijakan dan pelayanan Pemerintah Kota Serang.
          </p>
        </div>
      </div>
      {/* Horizontal scroll strip */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-civic-surface dark:from-slate-800 to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-civic-surface dark:from-slate-800 to-transparent z-10 pointer-events-none" aria-hidden="true" />

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-4 px-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          role="list"
          aria-label="Nilai-nilai Kota Serang"
        >
          {[...values, ...values]?.map((value, i) => (
            <div
              key={`${value?.label}-${i}`}
              role="listitem"
              className="reveal flex-shrink-0 snap-start w-44 md:w-52 p-5 rounded-2xl bg-civic-bg dark:bg-slate-700 border border-civic-border dark:border-slate-600 card-hover group cursor-default"
            >
              <div className="text-3xl mb-3">{value?.emoji}</div>
              <div className="font-heading font-bold text-civic-heading dark:text-white text-base mb-1 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                {value?.label}
              </div>
              <p className="text-civic-muted dark:text-slate-400 text-xs leading-relaxed">{value?.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Scroll hint */}
      <div className="reveal flex items-center justify-center gap-2 mt-6 text-xs text-civic-muted dark:text-slate-500" aria-hidden="true">
        <span>←</span>
        <span className="font-mono">Geser untuk melihat semua nilai</span>
        <span>→</span>
      </div>
    </section>
  );
}