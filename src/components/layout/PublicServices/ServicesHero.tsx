"use client";

import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function ServicesHero() {
  const [revealed, setRevealed] = useState(false);
  const [search, setSearch] = useState("");
  const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className={`
  pt-28 pb-16 relative overflow-hidden
  ${
    theme === "dark"
      ? "bg-[#162034]"
      : "bg-gradient-to-tr from-green-100/10 via-white to-white"
  }
`}
      aria-label="Layanan Publik"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-50 dark:bg-primary-900/10 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent-50 dark:bg-accent/5 blur-3xl opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="reveal">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#22c55e] mb-3">
                — Layanan Publik Digital
              </p>
              <h2
                className={`text-[2.5rem] leading-[1.1] font-display font-bold ${theme === "dark" ? "text-white" : "text-[#111827]"}`}
              >
                Semua Layanan
                <br />
                <span className="gradient-title">Satu Pintu</span>
              </h2>
              <p className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed mt-4">
                Akses 120+ layanan pemerintahan Kota Serang secara digital —
                kapan saja, di mana saja, tanpa antri.
              </p>
            </div>
          </div>

          {/* Search */}
          <div
            className={`transition-all duration-700 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative">
              {/* Icon Search */}
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 dark:text-slate-500"
              />

              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari layanan... (KTP, IMB, UMKM...)"
                className={`
                  w-full pl-12 pr-10 py-4 rounded-2xl
                  border dark:border-white/10 
                  ${theme === "dark" ? "bg-[#0A1628] text-gray-200" : "bg-gray-50 text-gray-900"}
                  dark:placeholder-slate-500
                  outline-none
                  focus:border-[#1E3A8A] dark:focus:border-accent
                  focus:ring-2 focus:ring-[#1E3A8A]/10 dark:focus:ring-accent/10
                  transition-all text-sm font-body`}
                aria-label="Cari layanan publik"
              />

              {/* Clear Button */}
              {search.trim() && (
                <button
                  onClick={() => setSearch("")}
                  className="
                    absolute right-4 top-1/2 -translate-y-1/2
                    text-gray-300  
                    dark:hover:text-white transition-colors
                  "
                  aria-label="Hapus pencarian"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div
          className={`flex flex-wrap gap-6 mt-10 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          {[
            { value: "120+", label: "Layanan Tersedia" },
            { value: "24/7", label: "Akses Online" },
            { value: "< 3 Hari", label: "Waktu Proses" },
            { value: "98%", label: "Kepuasan Warga" },
          ].map(({ value, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className={`text-xl font-display font-bold ${theme === "dark" ? "text-[#22c55e]" : "text-[#1E3A8A] text-accent-light"}`}
              >
                {value}
              </span>
              <span className="text-sm text-gray-500 dark:text-slate-500">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
