"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["Semua", "Eksekutif", "Sekretariat", "Dinas", "Badan"];

const leaders = [
  {
    id: 1,
    name: "H. Syafrudin, S.Sos., M.Si.",
    title: "Wali Kota Serang",
    category: "Eksekutif",
    period: "2024–2029",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1651cfc0b-1763295052209.png",
    imageAlt:
      "Potret pria profesional berpakaian formal jas hitam dengan ekspresi percaya diri",
    featured: true,
  },
  {
    id: 2,
    name: "Hj. Rahma Kusumawati, S.H.",
    title: "Wakil Wali Kota Serang",
    category: "Eksekutif",
    period: "2024–2029",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1e3dcc45f-1772203448327.png",
    imageAlt:
      "Potret wanita profesional berpakaian formal dengan senyum ramah dan ekspresi percaya diri",
    featured: true,
  },
  {
    id: 3,
    name: "Drs. Ahmad Fauzi, M.M.",
    title: "Sekretaris Daerah",
    category: "Sekretariat",
    period: "Sejak 2023",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_194504bae-1763295050465.png",
    imageAlt:
      "Potret pria paruh baya berpakaian formal jas abu-abu dengan ekspresi serius dan profesional",
    featured: false,
  },
  {
    id: 4,
    name: "Ir. Budi Santoso, M.T.",
    title: "Kepala Dinas Pekerjaan Umum",
    category: "Dinas",
    period: "Sejak 2022",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1cf01c511-1763293461836.png",
    imageAlt:
      "Potret pria berambut pendek dengan senyum profesional mengenakan kemeja putih",
    featured: false,
  },
  {
    id: 5,
    name: "dr. Siti Nurjanah, Sp.A.",
    title: "Kepala Dinas Kesehatan",
    category: "Dinas",
    period: "Sejak 2023",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_19e1eec73-1772087973666.png",
    imageAlt:
      "Potret wanita dokter berjas putih dengan ekspresi hangat dan profesional",
    featured: false,
  },
  {
    id: 6,
    name: "H. Ridwan Kamali, S.E., M.M.",
    title: "Kepala Dinas Koperasi & UMKM",
    category: "Dinas",
    period: "Sejak 2021",
    image: "https://images.unsplash.com/photo-1726440464439-81579d883f5e",
    imageAlt:
      "Potret pria tersenyum percaya diri dengan kemeja biru formal dan latar belakang netral",
    featured: false,
  },
  {
    id: 7,
    name: "Dra. Lestari Wulandari, M.Pd.",
    title: "Kepala Dinas Pendidikan",
    category: "Dinas",
    period: "Sejak 2022",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1ee2bcef3-1763301295581.png",
    imageAlt:
      "Potret wanita profesional berambut pendek dengan ekspresi ceria dan pakaian formal",
    featured: false,
  },
  {
    id: 8,
    name: "Drs. Hendra Gunawan, M.Si.",
    title: "Kepala Badan Perencanaan Daerah",
    category: "Badan",
    period: "Sejak 2023",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1101e9026-1763296623238.png",
    imageAlt:
      "Potret pria muda profesional berjas gelap dengan senyum percaya diri",
    featured: false,
  },
  {
    id: 9,
    name: "Hj. Nurul Hidayah, S.H., M.H.",
    title: "Kepala Badan Kepegawaian Daerah",
    category: "Badan",
    period: "Sejak 2021",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1bee6f5b2-1772814263694.png",
    imageAlt:
      "Potret wanita profesional dengan rambut diikat dan pakaian formal berwarna gelap",
    featured: false,
  },
];

export default function LeadershipGrid() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filtered =
    activeCategory === "Semua"
      ? leaders
      : leaders.filter((l) => l.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            entry.target.classList.remove("reveal-hidden");
          }
        });
      },
      { threshold: 0.1 },
    );

    cardRefs.current.forEach((el) => {
      if (el) {
        el.classList.add("reveal-hidden");
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <section
      className="section-pad px-4 sm:px-6 lg:px-8 bg-surface"
      aria-labelledby="leadership-grid-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Filter Tabs */}
        <div
          className="flex flex-wrap gap-2 mb-12"
          role="tablist"
          aria-label="Filter kategori pimpinan"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-600 transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-soft"
                  : "bg-white text-neutral-600 border border-neutral-200 hover:border-primary/30 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <h2 id="leadership-grid-heading" className="sr-only">
          Daftar Pimpinan Kota Serang
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((leader, i) => (
            <div
              key={leader.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group cursor-pointer"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <Link href={`/leadership-detail/${leader.id}`} className="block">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-soft border border-neutral-100 hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-400 card-hover">
                  {/* Portrait Image */}
                  <div className="relative aspect-[4/5] img-zoom overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.imageAlt}
                      fill
                      className="object-cover object-top zoom-target"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-surface-dark/20 to-transparent" />

                    {/* Featured badge */}
                    {leader.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-700 px-3 py-1 rounded-full bg-accent text-white uppercase tracking-wider">
                          Pimpinan Utama
                        </span>
                      </div>
                    )}

                    {/* Category */}
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-600 px-3 py-1 rounded-full glass-dark text-white/80 uppercase tracking-wider">
                        {leader.category}
                      </span>
                    </div>

                    {/* Name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <h3 className="text-white font-700 text-base leading-tight mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-accent text-xs font-600 leading-tight">
                        {leader.title}
                      </p>
                      <p className="text-white/40 text-xs mt-1">
                        {leader.period}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 py-4 flex items-center justify-between border-t border-neutral-100">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
                      <span className="text-xs text-neutral-500 font-500">
                        Aktif Menjabat
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-primary text-xs font-600 group-hover:gap-2 transition-all">
                      Lihat Profil
                      <svg
                        className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-primary/20 text-primary font-600 text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            Tampilkan Lebih Banyak
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
