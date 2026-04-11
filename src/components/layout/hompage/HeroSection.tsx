"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { iconMap } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { GalleryVerticalEnd, Newspaper } from "lucide-react";

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [zoomIn, setZoomIn] = useState(true);

  const { imageHomepage, statistikHeroSection, loading } = useSelector(
    (state: RootState) => state.settings,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageHomepage.length);
      setZoomIn((prev) => !prev);
    }, 6000); // lebih panjang = lebih smooth

    return () => clearInterval(interval);
  }, [imageHomepage.length]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* IMAGE LAYER 1 */}
        {imageHomepage[index]?.path ? (
          <Image
            src={imageHomepage[index]?.path}
            alt="bg1"
            fill
            priority
            className={`absolute object-cover transition-all duration-[6000ms] ease-in-out ${
              zoomIn
                ? "scale-110 translate-x-2 translate-y-1 opacity-100"
                : "scale-100 translate-x-0 translate-y-0 opacity-0"
            }`}
          />
        ) : null}

        {/* IMAGE LAYER 2 */}
        {imageHomepage.length > 1 &&
        imageHomepage[(index + 1) % imageHomepage.length]?.path ? (
          <Image
            src={imageHomepage[(index + 1) % imageHomepage.length]?.path}
            alt="bg2"
            fill
            priority
            className={`absolute object-cover transition-all duration-[6000ms] ease-in-out ${
              zoomIn
                ? "scale-100 translate-x-0 translate-y-0 opacity-0"
                : "scale-110 translate-x-2 translate-y-1 opacity-100"
            }`}
          />
        ) : null}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col md:flex-row justify-between gap-10 my-20">
        {/* LEFT */}
        <div className="flex flex-col gap-4 text-left justify-center">
          <h1 className="text-white text-4xl md:text-7xl font-bold">
            Serang Kota
          </h1>

          <h2 className="text-[#37B27D] text-4xl md:text-7xl font-bold">
            Maju & Mandiri
          </h2>

          <p className="text-white/80 max-w-md">
            Temukan informasi terbaru, layanan publik, dan berbagai hal menarik
            tentang Kota Serang di sini.
          </p>

      

          {/* Indicator */}
          <div className="flex items-center gap-2 mt-4">
            {imageHomepage.map((_, idx) => (
              <span
                key={idx}
                className={`transition-all duration-300 h-2 rounded-full ${
                  index === idx ? "bg-[#37B27D] w-10" : "bg-white/30 w-6"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex flex-col gap-6 max-w-sm w-full">
          <p className="text-xs font-mono tracking-widest text-white/50">
            DATA KOTA 2026
          </p>

          <div className="flex flex-col gap-4">
            {loading ? (
              Array.from({ length: 3 }).map((_, idx) => (
                <Card
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg animate-pulse"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon skeleton */}
                    <div className="bg-[#406A40] p-3 rounded-xl">
                      <Skeleton className="h-6 w-6 rounded-md bg-[#37B27D]/40" />
                    </div>

                    {/* Text skeleton */}
                    <div className="flex flex-col gap-2 w-full">
                      <Skeleton className="h-3 w-20 bg-white/20" />
                      <Skeleton className="h-8 w-24 bg-white/30" />
                      <Skeleton className="h-3 w-28 bg-white/20" />
                    </div>
                  </div>
                </Card>
              ))
            ) : statistikHeroSection?.length ? (
              statistikHeroSection.map((item, idx) => {
                const Icon = iconMap[item.icon];

                return (
                  <Card
                    key={idx}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-[#406A40] p-3 rounded-xl">
                        {Icon ? (
                          <Icon size={24} className="text-[#37B27D]" />
                        ) : (
                          <span className="text-white text-xs">No Icon</span>
                        )}
                      </div>

                      <div>
                        <p className="text-xs text-white/60 uppercase tracking-widest">
                          {item.label}
                        </p>

                        <p className="text-4xl font-bold text-white">
                          {item.value}
                        </p>

                        <p className="text-sm text-white/60">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                );
              })
            ) : (
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg">
                <p className="text-center text-white/60">
                  Tidak ada data tersedia
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* FOG */}
      <div
        className={`
      pointer-events-none absolute bottom-0 left-0 w-full h-30
      bg-gradient-to-t
        to-transparent
    .bg-gradient-theme
      backdrop-blur-lg
  `}
      />
    </section>
  );
}
