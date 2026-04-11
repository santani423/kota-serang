"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";

interface CultureItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  colSpan: string;
  rowSpan: string;
  minHeight: string;
}

const cultureItems: CultureItem[] = [
  {
    id: 1,
    title: "Debus",
    category: "Seni Pertunjukan",
    description:
      "Seni bela diri dan pertunjukan tradisional khas Banten yang memamerkan kekebalan tubuh.",
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/2024372953610659661_0",
    imageAlt: "Pertunjukan Debus Banten",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
    minHeight: "480px",
  },
  {
    id: 2,
    title: "Batik Banten",
    category: "Kerajinan Tangan",
    description: "Kain batik dengan motif artefak sejarah Kesultanan Banten.",
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/1129387656443289227_0",
    imageAlt: "Batik Banten",
    colSpan: "md:col-span-1",
    rowSpan: "",
    minHeight: "220px",
  },
  {
    id: 3,
    title: "Rabeg",
    category: "Gastronomi",
    description:
      "Kuliner kambing khas Serang peninggalan Sultan Maulana Hasanuddin.",
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/14984344374110707506_0",
    imageAlt: "Kuliner Rabeg Serang",
    colSpan: "md:col-span-1",
    rowSpan: "",
    minHeight: "220px",
  },
  {
    id: 4,
    title: "Tari Tradisional",
    category: "Seni Tari",
    description: "Tarian tradisional penuh makna dari tanah Banten.",
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/3584313951313284957_0",
    imageAlt: "Tari Tradisional Banten",
    colSpan: "md:col-span-2",
    rowSpan: "",
    minHeight: "260px",
  },
  {
    id: 5,
    title: "Upacara Seba",
    category: "Tradisi Adat",
    description:
      "Ritual adat masyarakat Baduy bersilaturahmi kepada pemerintah.",
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/7323958997367783866_0",
    imageAlt: "Tradisi Seba Baduy",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
    minHeight: "480px",
  },
  {
    id: 6,
    title: "Anyaman",
    category: "Kerajinan",
    description: "Kerajinan bambu dan rotan khas perajin lokal.",
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/11811487843718791364_0",
    imageAlt: "Kerajinan Anyaman",
    colSpan: "md:col-span-1",
    rowSpan: "",
    minHeight: "220px",
  },
  {
    id: 7,
    title: "Masjid Agung Banten",
    category: "Warisan Arsitektur",
    description:
      "Masjid bersejarah dengan menara ikonik peninggalan kesultanan.",
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/3667460867857601790_0",
    imageAlt: "Masjid Agung Banten",
    colSpan: "md:col-span-1",
    rowSpan: "",
    minHeight: "220px",
  },
];

const categories = [
  "Semua",
  "Seni Pertunjukan",
  "Kerajinan Tangan",
  "Gastronomi",
  "Seni Tari",
  "Tradisi Adat",
  "Warisan Arsitektur",
];

export default function MasonryGridSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const theme = useAppSelector((state) => state.theme.value);

  const filtered =
    activeCategory === "Semua"
      ? cultureItems
      : cultureItems.filter((i) => i.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-item").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("is-visible");
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [activeCategory]); // Re-run animation trigger saat filter berubah

  return (
    <section
      ref={sectionRef}
      className={`py-20 lg:py-28 transition-colors duration-500 ${
        theme === "dark" ? "bg-slate-950" : "bg-slate-50"
      }`}
      aria-labelledby="masonry-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 reveal-item opacity-0 translate-y-4 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-orange-600 mb-3 font-semibold">
            — Khazanah Budaya
          </p>
          <h2
            className={`text-4xl md:text-5xl font-display font-bold mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Ragam Kearifan Lokal <span className="text-orange-600">Serang</span>
          </h2>
          <div className="h-1 w-20 bg-orange-600 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-16 reveal-item opacity-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === cat
                  ? "bg-orange-600 text-white shadow-xl shadow-orange-900/20 scale-105"
                  : theme === "dark"
                    ? "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                    : "bg-white text-slate-600 hover:text-orange-600 border border-slate-200 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`reveal-item opacity-0 translate-y-10 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 group relative rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl ${item.colSpan} ${item.rowSpan}`}
              style={{ minHeight: item.minHeight }}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                priority={item.id <= 3}
              />

              {/* Overlay Dinamis */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content Box */}
              <div className="absolute bottom-0 p-8 text-white w-full transform transition-transform duration-500">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-orange-600 px-3 py-1.5 rounded-lg mb-4 inline-block shadow-lg">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .reveal-item {
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </section>
  );
}
