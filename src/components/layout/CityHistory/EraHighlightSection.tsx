"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { useAppSelector } from "@/store/hooks";

const eras = [
  {
    title: "Masa Kesultanan",
    subtitle: "1524 – 1684",
    description:
      "Era kejayaan Kesultanan Banten sebagai pusat perdagangan internasional dan penyebaran Islam di Nusantara.",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_10513c7b0-1775840418142.png",
    imageAlt: "Situs Kesultanan Banten",
    color: "#1E3A8A",
    icon: "🏰",
    points: [
      "Pusat perdagangan rempah-rempah",
      "Penyebaran Islam di Nusantara",
      "Hubungan diplomatik internasional",
    ],
  },
  {
    title: "Masa Kolonial",
    subtitle: "1684 – 1945",
    description:
      "Periode panjang di bawah kolonialisme Belanda yang meninggalkan jejak arsitektur dan sistem administrasi.",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1e167c775-1775840416607.png",
    imageAlt: "Bangunan kolonial Belanda",
    color: "#92400E",
    icon: "⚓",
    points: [
      "Pembangunan infrastruktur kolonial",
      "Perlawanan rakyat Banten",
      "Transformasi kota administratif",
    ],
  },
  {
    title: "Masa Modern",
    subtitle: "1945 – Kini",
    description:
      "Serang berkembang menjadi kota modern sebagai ibu kota Provinsi Banten.",
    image: "https://images.unsplash.com/photo-1626608610826-9b3942763487",
    imageAlt: "Kota modern Serang",
    color: "#10B981",
    icon: "🏙️",
    points: [
      "Ibu kota Provinsi Banten",
      "Pembangunan infrastruktur modern",
      "Pusat pemerintahan dan ekonomi",
    ],
  },
];

export default function EraHighlightSection() {
  const sectionRef = useRef<HTMLElement>(null);
    const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-up").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("is-visible");
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
       className="py-20 lg:py-28 bg-surface-primary"
      aria-labelledby="era-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="reveal">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#22c55e] mb-3">
              — Era Bersejarah
            </p>
            <h2 className="text-[2.5rem] leading-[1.1] font-display font-bold text-content">
              Tiga Era yang Membentuk
              <br />
              <span className="gradient-title">Kota Serang</span>
            </h2>
          </div>

           
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {eras.map((era, i) => (
            <div
              key={era.title}
              className="reveal-up group rounded-3xl overflow-hidden border border-serang-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={era.image}
                  alt={era.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, ${era.color}40, ${era.color}80)`,
                  }}
                />

                {/* Icon */}
                <div className="absolute top-4 right-4 text-3xl">
                  {era.icon}
                </div>

                {/* Subtitle */}
                <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                  {era.subtitle}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: era.color }}
                  />
                  <h3 className="font-bold text-lg">{era.title}</h3>
                </div>

                <p className="text-sm text-gray-600 mb-4">{era.description}</p>

                <ul className="space-y-2">
                  {era.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-gray-600"
                    >
                      <span
                        className="w-2 h-2 mt-1 rounded-full"
                        style={{ background: era.color }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Accent */}
              <div
                className="h-1 w-full opacity-60 group-hover:opacity-100 transition-all"
                style={{
                  background: `linear-gradient(to right, ${era.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
