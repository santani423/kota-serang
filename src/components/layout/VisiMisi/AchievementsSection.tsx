"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  TrophyIcon,
  DocumentCheckIcon,
  StarIcon,
  ComputerDesktopIcon,
  FaceSmileIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  BuildingLibraryIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

// Mapping icon
const iconMap = {
  TrophyIcon,
  DocumentCheckIcon,
  StarIcon,
  ComputerDesktopIcon,
  FaceSmileIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  BuildingLibraryIcon,
  ArrowTopRightOnSquareIcon,
};

const achievements = [
  {
    year: "2025",
    title: "Penghargaan Kota Layak Anak Tingkat Nindya",
    org: "Kementerian PPPA RI",
    icon: "TrophyIcon",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    year: "2024",
    title: "Predikat WTP (Wajar Tanpa Pengecualian) ke-5 Berturut-turut",
    org: "BPK Perwakilan Banten",
    icon: "DocumentCheckIcon",
    color: "text-accent",
    bg: "bg-accent/8 dark:bg-accent/15",
  },
  {
    year: "2024",
    title: "Top 10 Inovasi Pelayanan Publik Terbaik Provinsi Banten",
    org: "Pemerintah Provinsi Banten",
    icon: "StarIcon",
    color: "text-primary",
    bg: "bg-primary/8 dark:bg-primary/15",
  },
  {
    year: "2023",
    title: "Penghargaan Smart City Kategori Smart Governance",
    org: "Kementerian Kominfo RI",
    icon: "ComputerDesktopIcon",
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-900/20",
  },
  {
    year: "2023",
    title: "Indeks Kepuasan Masyarakat (IKM) Kategori Sangat Baik",
    org: "Ombudsman RI Perwakilan Banten",
    icon: "FaceSmileIcon",
    color: "text-accent",
    bg: "bg-accent/8 dark:bg-accent/15",
  },
  {
    year: "2022",
    title: "Penghargaan Open Government Partnership (OGP) Lokal",
    org: "Bappenas & KSP RI",
    icon: "GlobeAltIcon",
    color: "text-primary",
    bg: "bg-primary/8 dark:bg-primary/15",
  },
];

function CountUpNumber({
  target,
  started,
}: {
  target: number;
  started: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!started) return;

    const steps = 50;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCurrent(Math.min(Math.round((target / steps) * step), target));
      if (step >= steps) clearInterval(timer);
    }, 1800 / steps);

    return () => clearInterval(timer);
  }, [started, target]);

  return <span>{current}</span>;
}

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 80);
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
      className="py-20 md:py-28 bg-civic-surface dark:bg-slate-900"
      aria-labelledby="achievements-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT */}
          <div className="lg:col-span-4">
            <div className="reveal flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-accent" />
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                Prestasi & Penghargaan
              </span>
            </div>

            <h2 className="reveal font-heading font-bold text-civic-heading dark:text-white mb-5 text-[clamp(26px,3.5vw,40px)] leading-[1.2]">
              Pengakuan atas <br />
              <span className="gradient-text">Kerja Nyata</span>
            </h2>

            {/* Stats */}
            <div className="reveal grid grid-cols-2 gap-4">
              {[
                { label: "Total Penghargaan", value: 24, suffix: "+" },
                { label: "Tahun Berturut WTP", value: 5, suffix: "x" },
                { label: "Inovasi Terdaftar", value: 38, suffix: "+" },
                { label: "Skor IKM 2024", value: 94, suffix: "%" },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-xl bg-civic-bg dark:bg-slate-800 border border-civic-border dark:border-slate-700">
                  <div className="text-2xl font-extrabold text-primary dark:text-accent">
                    <CountUpNumber target={s.value} started={started} />
                    {s.suffix}
                  </div>
                  <div className="text-xs text-civic-muted">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Link */}
            <div className="reveal mt-8">
              <Link href="/public-services" className="flex items-center gap-2 text-sm font-semibold text-primary">
                Jelajahi Layanan Kami
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-8 space-y-3">
            {achievements.map((item, i) => {
              const IconComponent =
                iconMap[item.icon as keyof typeof iconMap];

              return (
                <div key={item.title} className="reveal flex gap-4 p-5 rounded-2xl bg-civic-bg dark:bg-slate-800 border">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.bg}`}>
                    <IconComponent className={`w-5 h-5 ${item.color}`} />
                  </div>

                  <div className="flex-1">
                    <span className="text-xs">{item.year}</span>
                    <h3 className="text-sm font-semibold">{item.title}</h3>

                    <p className="text-xs flex items-center gap-1">
                      <BuildingLibraryIcon className="w-3 h-3" />
                      {item.org}
                    </p>
                  </div>

                  <ArrowTopRightOnSquareIcon className="w-4 h-4 opacity-50" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}