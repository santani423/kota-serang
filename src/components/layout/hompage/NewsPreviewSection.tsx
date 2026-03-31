"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

interface NewsItem {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  alt: string;
  featured?: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    category: "Pembangunan",
    title:
      "Pemkot Serang Resmikan Taman Digital Interaktif di Kawasan Pusat Kota",
    excerpt:
      "Wali Kota Serang meresmikan taman digital pertama di Banten yang dilengkapi fasilitas Wi-Fi gratis, area co-working outdoor, dan instalasi seni interaktif berbasis teknologi.",
    date: "2026-03-25",
    author: "Humas Pemkot Serang",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_11b6f0c0a-1766576933251.png",
    alt: "Taman digital modern",
    featured: true,
  },
  {
    id: 2,
    category: "Layanan Publik",
    title:
      "Sistem Antrian Digital Puskesmas Kini Terintegrasi Portal SerangKota",
    excerpt:
      "Warga kini dapat mendaftar antrian Puskesmas dari rumah melalui portal resmi kota.",
    date: "2026-03-22",
    author: "Dinas Kesehatan",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1ddcb448a-1768154076773.png",
    alt: "Sistem digital Puskesmas",
  },
  {
    id: 3,
    category: "Ekonomi",
    title:
      "Pasar UMKM Digital Serang Catat Transaksi Rp 4,2 Miliar di Kuartal I",
    excerpt:
      "Program digitalisasi UMKM berhasil meningkatkan omzet pedagang lokal.",
    date: "2026-03-20",
    author: "Dinas Perdagangan",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_101358c49-1772054905122.png",
    alt: "UMKM digital",
  },
  {
    id: 4,
    category: "Pendidikan",
    title: "Serang Raih Penghargaan Kota Literasi Digital Terbaik",
    excerpt:
      "Program literasi digital menjangkau 120 sekolah di seluruh kecamatan.",
    date: "2026-03-18",
    author: "Dinas Pendidikan",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1fe4dd004-1773800272776.png",
    alt: "Siswa belajar digital",
  },
];

const categoryColors: Record<string, string> = {
  Pembangunan:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Layanan Publik":
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  Ekonomi:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  Pendidikan:
    "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
};

const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];

export default function NewsPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el) => el.classList.add("active"));
          }
        });
      },
      { threshold: 0.08 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featured = newsItems.find((n) => n.featured);
  const secondary = newsItems.filter((n) => !n.featured);

  return (
    <section
      ref={sectionRef}
      id="berita"
      className={`py-20 lg:py-28 ${theme === "dark" ? "bg-[#0A1628]" : "bg-gray-100"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="reveal">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#22c55e] mb-3">
              — Berita & Pengumuman
            </p>
            <h2
              className={`text-[2.5rem] leading-[1.1] font-display font-bold ${theme === "dark" ? "text-white" : "text-[#111827]"}`}
            >
              Semua Kebutuhan
              <br />
              <span className="gradient-title">Kota Serang</span>
            </h2>
          </div>

          <Link
            href="/news"
            className={`reveal delay-200 flex items-center gap-2 text-sm border-2 border-[#1E3A8A] px-6 py-3 rounded-xl hover:bg-[#1E3A8A]/10 transition ${theme === "dark" ? "text-white" : "text-[#1E3A8A]"}`}
          >
            Semua Berita
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured */}
          {featured && (
            <Link
              href="/news"
              className={`lg:col-span-3 reveal group rounded-2xl overflow-hidden ${theme === "dark" ? "bg-white/5" : "bg-white"} border border-gray-200 dark:border-white/10 flex flex-col`}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <span
                  className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full ${categoryColors[featured.category]}`}
                >
                  {featured.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className={`flex items-center gap-2 text-xs text-gray-500 mb-3 ${theme === "dark" ? "text-gray-300" : "text-gray-500"}`}>
                  <Calendar size={14} />
                  <time>{featured.date}</time>
                </div>

                <h3
                  className={`text-lg font-semibold mb-3  ${theme === "dark" ? "group-hover:text-[#37B27D]" : "group-hover:text-[#1E3A8A]"} transition-colors`}
                >
                  {featured.title}
                </h3>

                <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"} flex-1`}>
                  {featured.excerpt}
                </p>

                <div className={`mt-4 flex items-center gap-2 text-sm ${theme === "dark" ? "text-[#37B27D]" : "text-[#1E3A8A]"} group-hover:gap-3 transition-all`}>
                  Baca Selengkapnya
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          )}

          {/* Secondary */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {secondary.map((item, i) => (
              <Link
                key={item.id}
                href="/news"
                className={`reveal ${delays[i]} group flex gap-4 p-4 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-white hover:bg-gray-50"} border border-gray-200 dark:border-white/10  dark:hover:bg-white/10 transition
                hover:shadow-2xl hover:-translate-y-1 hover:z-10 focus-visible:shadow-2xl focus-visible:-translate-y-1 focus-visible:z-10 duration-300`}
                style={{
                  transitionProperty:
                    "box-shadow, transform, z-index, background-color, color",
                }}
              >
                <div className="w-24 h-24 relative rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[item.category]}`}
                    >
                      {item.category}
                    </span>

                    <h3 className={`mt-2 font-medium ${theme === "dark" ? "group-hover:text-[#37B27D]" : "group-hover:text-[#1E3A8A]"} transition-colors`}>
                      {item.title}
                    </h3>
                  </div>

                  <div className={`flex items-center gap-2 text-xs mt-2 ${theme === "dark" ? "text-gray-300" : "text-gray-500"}`}>

                    <Calendar size={12} />
                    <time>{item.date}</time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
