"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "@/assets/hompage/1.jpg";
import img2 from "@/assets/hompage/2.jpg";
import img3 from "@/assets/hompage/3.jpg";
import img4 from "@/assets/hompage/4.jpg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Moon, Sun, GalleryVerticalEnd, Newspaper, Users } from "lucide-react";
// Data untuk card
const dataCard = [
  {
    label: "Penduduk",
    value: "750K+",
    desc: "Jiwa Terdaftar",
    icon: <Users size={28} className="text-[#37B27D]" />,
    bg: "bg-[#406A40]/30"
  },
  {
    label: "Kecamatan",
    value: "6",
    desc: "Kecamatan",
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='white' className='w-7 h-7'><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21v-3.75A2.25 2.25 0 016 15h3a2.25 2.25 0 012.25 2.25V21M15.75 21v-3.75A2.25 2.25 0 0118 15h0a2.25 2.25 0 012.25 2.25V21M6 6.75a3 3 0 116 0 3 3 0 01-6 0zm6 0a3 3 0 116 0 3 3 0 01-6 0z' /></svg>
    ),
    bg: "bg-blue-600/30"
  },
  {
    label: "Layanan",
    value: "30+",
    desc: "Jenis Layanan",
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='white' className='w-7 h-7'><path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>
    ),
    bg: "bg-yellow-500/30"
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
    <section className="w-screen h-screen min-h-screen flex flex-col items-center justify-center bg-gray-100 p-0 m-0 relative overflow-hidden">
      {/* Slider Fullscreen */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div
          className={`transition-opacity duration-500 w-full h-full ${fade ? "opacity-0" : "opacity-100"}`}
          style={{ transitionProperty: "opacity" }}
        >
          <Image
            src={images[current]}
            alt={`Slide ${current + 1}`}
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* Navigasi dihilangkan */}
        <div className="absolute inset-0 bg-black/40 z-0" />
      </div>
      {/* Content Centered */}
      <div className="relative z-10 px-4 py-4 flex flex-col  justify-center h-full w-full text-center max-w-2xl mx-auto">
        <div className="px-4">
          <h1 className="font-sans text-white text-4xl font-bold tracking-tight">
            Serang Kota
          </h1>
          <h2 className="font-sans text-[#34D399] text-4xl font-bold tracking-tight">
            Maju & Mandiri
          </h2>
          <p className="text-lg md:text-sm text-white mb-6 drop-shadow-lg">
            Temukan informasi terbaru, layanan publik, dan berbagai hal menarik
            tentang Kota Serang di sini.
          </p>
          <div className="text-white flex flex-col items-center gap-4">
            <Button className="h-auto rounded-2xl py-4 px-6">
              <span className="font-bold flex gap-3 items-center">
                <GalleryVerticalEnd size={28} className="text-white" />
                <span className="text-lg">Akses Layanan</span>
              </span>
            </Button>
            <button
              className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white font-bold text-xl"
              style={{
                WebkitBackdropFilter: "blur(8px)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Newspaper size={28} className="text-white" />
              <span className="font-bold">Berita Terkini</span>
            </button>
          </div>
        </div>
        <div className="custom-container mt-4">
          <p
            className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-1"
            aria-label="Data Kota 2026"
          >
            DATA KOTA 2026
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 items-center justify-center">
            {dataCard.map((item, idx) => (
              <Card key={item.label} className="w-full max-w-sm bg-white/20 backdrop-blur-md border border-white/30 shadow-lg px-0 py-0 rounded-2xl overflow-hidden">
                <div className="flex flex-col gap-0">
                  <div className="flex items-center gap-3 px-6 pt-6">
                    <div className={`${item.bg} rounded-xl p-3 flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/70">{item.label}</span>
                    </div>
                  </div>
                  <div className="px-6 pt-2 pb-1">
                    <span className="text-4xl font-extrabold text-white drop-shadow-lg">{item.value}</span>
                  </div>
                  <div className="px-6 pb-6">
                    <span className="text-sm text-white/70 font-mono">{item.desc}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
