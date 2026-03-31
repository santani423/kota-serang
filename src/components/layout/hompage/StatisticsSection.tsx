"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  UsersIcon,
  BuildingOffice2Icon,
  DocumentCheckIcon,
  ChartBarIcon,
  BuildingStorefrontIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

/* ================= TYPES ================= */
interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  sub: string;
  color: string;
  bgColor: string;
}

/* ================= DATA ================= */
const stats: Stat[] = [
  {
    icon: UsersIcon,
    value: 750,
    suffix: "K+",
    label: "Total Penduduk",
    sub: "Data BPS 2025",
    color: "text-primary-700 dark:text-primary-light",
    bgColor: "bg-primary-50 dark:bg-primary-900/20",
  },
  {
    icon: BuildingOffice2Icon,
    value: 6,
    suffix: "",
    label: "Kecamatan",
    sub: "Wilayah administratif",
    color: "text-accent-dark dark:text-accent-light",
    bgColor: "bg-accent-50 dark:bg-accent/10",
  },
  {
    icon: DocumentCheckIcon,
    value: 120,
    suffix: "+",
    label: "Layanan Digital",
    sub: "Tersedia 24/7 online",
    color: "text-violet-600 dark:text-violet-400",
    bgColor: "bg-violet-50 dark:bg-violet-900/20",
  },
  {
    icon: ChartBarIcon,
    value: 98,
    suffix: "%",
    label: "Kepuasan Warga",
    sub: "Survei Q1 2026",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    icon: BuildingStorefrontIcon,
    value: 42000,
    suffix: "+",
    label: "UMKM Terdaftar",
    sub: "Aktif & terverifikasi",
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
  },
  {
    icon: AcademicCapIcon,
    value: 320,
    suffix: "+",
    label: "Sekolah Aktif",
    sub: "SD, SMP, SMA/SMK",
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
  },
];

/* ================= HOOK ================= */
function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const step = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += step;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
}

/* ================= CARD ================= */
function StatCard({
  stat,
  active,
  index,
}: {
  stat: Stat;
  active: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, 1600, active);
  const Icon = stat.icon;
  
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <div
      className={`reveal delay-${Math.min(
        index * 100,
        500,
      )} ${theme === "dark" ? "bg-[#22304a]" : "bg-gray-100"} border   ${theme === "dark" ? "border-white/10" : "border-gray-200"} rounded-2xl p-6 flex flex-col gap-4 transition hover:scale-[1.03]`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bgColor}`}
      >
        <Icon className={`w-6 h-6 ${stat.color}`} />
      </div>

      <div>
        <div className={`text-3xl lg:text-4xl font-extrabold ${stat.color}`}>
          {stat.value >= 1000 ? count.toLocaleString("id-ID") : count}
          <span>{stat.suffix}</span>
        </div>

        <div className="text-base font-semibold text-serang-foreground dark:text-white mt-1">
          {stat.label}
        </div>

        <div className="text-xs text-serang-muted dark:text-slate-500 mt-1 font-mono">
          {stat.sub}
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN ================= */
export default function StatisticsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el) => el.classList.add("active"));
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transparansi"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2f6f8f, #2bb673)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-14 reveal">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-3">
            — Data & Transparansi
          </p>
          <h2 className="text-3xl font-bold text-white mb-4">
            Serang dalam Angka
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Data resmi Pemerintah Kota Serang yang diperbarui secara berkala
            untuk transparansi publik.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={active} index={i} />
          ))}
        </div>

        {/* PROGRESS */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              label: "Realisasi APBD 2025",
              value: 87,
              gradient: "from-blue-500 via-indigo-500 to-emerald-400",
            },
            {
              label: "Tingkat Literasi Digital",
              value: 74,
              gradient: "from-emerald-500 via-green-400 to-teal-300",
            },
            {
              label: "Cakupan Layanan Online",
              value: 92,
              gradient: "from-purple-500 via-indigo-500 to-blue-500",
            },
          ].map(({ label, value, gradient }) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
            >
              <div className="flex justify-between mb-4">
                <span className="text-white/90 text-sm">{label}</span>
                <span className="text-white font-bold">{value}%</span>
              </div>

              <div className="h-2 bg-white/20 rounded-full overflow-hidden relative">
                <div
                  className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                  style={{
                    width: active ? `${value}%` : "0%",
                  }}
                />

                {/* glow */}
                <div
                  className={`absolute inset-0 opacity-30 blur-sm bg-gradient-to-r ${gradient}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
