"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "@/assets/hompage/1.jpg";
import img2 from "@/assets/hompage/2.jpg";
import img3 from "@/assets/hompage/3.jpg";
import img4 from "@/assets/hompage/4.jpg";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import {
  GalleryVerticalEnd,
  Newspaper,
  Users,
  Building2,
  Clock
} from "lucide-react";

// ✅ Data Card Lebih Clean
const dataCard = [
  {
    label: "Penduduk",
    value: "750K+",
    desc: "Jiwa Terdaftar",
    icon: Users,
  },
  {
    label: "Kecamatan",
    value: "6",
    desc: "Kecamatan",
    icon: Building2,
  },
  {
    label: "Layanan",
    value: "30+",
    desc: "Jenis Layanan",
    icon: Clock,
  }
];

const images = [img1, img2, img3, img4];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-screen min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Background Slider */}
      <div className="absolute inset-0">
        <div className={`transition-opacity duration-500 w-full h-full ${fade ? "opacity-0" : "opacity-100"}`}>
          <Image
            src={images[current]}
            alt="slider"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col xl:flex-row justify-between gap-10 my-20">

        {/* LEFT */}
        <div className="flex flex-col gap-4 text-left justify-center">
          <h1 className="text-white text-4xl md:text-7xl font-bold">
            Serang Kota
          </h1>

          <h2 className="text-[#37B27D] text-4xl md:text-7xl font-bold">
            Maju & Mandiri
          </h2>

          <p className="text-white/80 max-w-md">
            Temukan informasi terbaru, layanan publik, dan berbagai hal menarik tentang Kota Serang di sini.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button>
              <GalleryVerticalEnd size={22} />
              Akses Layanan
            </Button>
            <Button variant="floating">
              <Newspaper size={22} />
              Berita
            </Button>
          </div>
          {/* Slide Position Indicator */}
          <div className="flex items-center gap-2 mt-4">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`transition-all duration-300 ease-in-out h-2 rounded-full ${current === idx ? "bg-emerald-500 w-10" : "bg-white/30 w-6"}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex flex-col gap-6 max-w-sm  w-full">
          <p className="text-xs font-mono tracking-widest text-white/50 mb-3">
            DATA KOTA 2026
          </p>

          <div className="flex flex-col gap-4">

            {dataCard.map((item, idx) => {
              const Icon = item.icon;

              return (
                <Card
                  key={idx}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5"
                >
                  <div className="flex items-center gap-4">

                    {/* ICON */}
                    <div className="bg-[#406A40] p-3 rounded-xl">
                      <Icon size={24} className="text-[#37B27D]" />
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-widest">
                        {item.label}
                      </p>

                      <p className="text-4xl font-bold text-white">
                        {item.value}
                      </p>

                      <p className="text-sm text-white/60">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </Card>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}