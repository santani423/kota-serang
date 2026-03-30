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
import { Moon, Sun, GalleryVerticalEnd, Newspaper } from "lucide-react";

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
          <Card className="w-full max-w-sm bg-white/20 backdrop-blur-md border border-white/30 shadow-lg mb-4 px-4 py-6">
            <CardHeader></CardHeader>
            <CardContent></CardContent>
          </Card>
          <Card className="w-full max-w-sm bg-white/20 backdrop-blur-md border border-white/30 shadow-lg px-4 py-6">
            <CardHeader></CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
