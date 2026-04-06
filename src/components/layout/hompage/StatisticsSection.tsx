"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  UsersIcon, 
} from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Skeleton } from "@/components/ui/skeleton";
import { iconMap } from "@/lib/utils";
import { CityStats } from "@/types/settings";

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
  stat: CityStats;
  active: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, 1600, active);
  const Icon = iconMap[stat.icon] || UsersIcon;

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
        {Icon ? (
          <Icon className={`w-6 h-6 ${stat.color}`} />
        ) : (
          <span className="w-6 h-6 bg-gray-300 rounded" />
        )}
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
  const { cityStats , loading } = useSelector(
    (state: RootState) => state.settings,
  );

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
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`reveal delay-${Math.min(i * 100, 500)} ${theme === "dark" ? "bg-[#22304a]" : "bg-gray-100"} border ${theme === "dark" ? "border-white/10" : "border-gray-200"} rounded-2xl p-6 flex flex-col gap-4`}
                >
                  <Skeleton className="w-12 h-12 rounded-xl mb-2" />
                  <Skeleton className="h-8 w-20 mb-2" />
                  <Skeleton className="h-4 w-24 mb-1" />
                  <Skeleton className="h-3 w-16" />
                </div>
              ))
            : cityStats.map((stat, i) => (
                <StatCard
                  key={stat.label}
                  stat={stat}
                  active={active}
                  index={i}
                />
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
