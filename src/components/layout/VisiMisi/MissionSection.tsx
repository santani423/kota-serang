"use client";

import React, { useEffect, useRef } from "react";
import {
  ScaleIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";

const missions = [
  {
    id: 1,
    title: "Tata Kelola Pemerintahan yang Baik",
    desc: "Mewujudkan pemerintahan yang bersih, transparan, akuntabel, dan berbasis teknologi informasi untuk pelayanan publik yang prima.",
    icon: ScaleIcon,
    color: "bg-primary/8 text-primary dark:bg-primary/20",
    highlight: "Reformasi Birokrasi",
  },
  {
    id: 2,
    title: "Pembangunan Ekonomi Berkelanjutan",
    desc: "Mendorong pertumbuhan ekonomi inklusif melalui pengembangan UMKM, investasi, dan digitalisasi sektor ekonomi lokal.",
    icon: CurrencyDollarIcon,
    color: "bg-accent/8 text-accent dark:bg-accent/20",
    highlight: "Green Economy",
  },
  {
    id: 3,
    title: "Peningkatan Kualitas SDM",
    desc: "Meningkatkan kualitas pendidikan, kesehatan, dan kesejahteraan masyarakat melalui program-program inovatif dan inklusif.",
    icon: AcademicCapIcon,
    color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20",
    highlight: "Human Capital",
  },
  {
    id: 4,
    title: "Pelestarian Budaya & Lingkungan",
    desc: "Melestarikan warisan budaya Banten Lama dan Kesultanan Banten, serta membangun kota hijau yang ramah lingkungan.",
    icon: GlobeAsiaAustraliaIcon,
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20",
    highlight: "Kota Hijau",
  },
];

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add("visible");
                }, i * 120);
              });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-civic-bg dark:bg-slate-900"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-accent" />
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              Misi Strategis
            </span>
            <span className="w-8 h-0.5 bg-accent" />
          </div>

          <h2 className="reveal font-heading font-bold text-civic-heading dark:text-white mb-4 text-[clamp(28px,4vw,44px)] leading-[1.2]">
            Empat Misi Utama <br />
            <span className="gradient-text">
              Kota Serang 2025–2030
            </span>
          </h2>

          <p className="reveal text-civic-body dark:text-slate-400 max-w-xl mx-auto">
            Peta jalan pembangunan yang terarah, terukur, dan berkelanjutan
            untuk mewujudkan visi Kota Serang yang Modern, Inklusif, dan
            Berbudaya.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {missions.map((mission, i) => {
            const Icon = mission.icon;

            return (
              <div
                key={mission.id}
                className="reveal card-hover group bg-civic-surface dark:bg-slate-800 rounded-2xl p-7 border border-civic-border dark:border-slate-700 flex flex-col gap-5 relative overflow-hidden"
              >
                {/* Watermark */}
                <div className="absolute top-4 right-5 font-heading font-extrabold text-6xl text-civic-border dark:text-slate-700 select-none">
                  0{mission.id}
                </div>

                <div className="flex items-start gap-4 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${mission.color} group-hover:scale-110 transition`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-2">
                      {mission.highlight}
                    </span>

                    <h3 className="font-heading font-bold text-civic-heading dark:text-white text-xl group-hover:text-primary dark:group-hover:text-accent transition">
                      {mission.title}
                    </h3>
                  </div>
                </div>

                <p className="text-civic-body dark:text-slate-400 text-sm leading-relaxed relative z-10">
                  {mission.desc}
                </p>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}