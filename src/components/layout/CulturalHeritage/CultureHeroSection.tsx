'use client';


import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function CultureHeroSection() {
  return (
    <section
      className="relative w-full min-h-[70vh] flex items-end overflow-hidden py-20"
      aria-label="Hero Sejarah Kota Serang"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1716539268599-3a7091439dc1"
          alt="Reruntuhan benteng kuno Kesultanan Banten dengan dinding batu tebal berwarna abu-abu tua di bawah langit mendung yang dramatis"
          fill
          priority
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB..."
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Glow effects */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl px-6 text-center mx-auto pb-16 pt-32">
        {/* Badge */}
      

        {/* Title */}
        <h1 className="font-display text-white mb-5 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em]">
          Warisan Budaya <span className="gradient-text">Kota Serang</span>
        </h1>

        {/* Description */}
        <p className="font-body text-white/80 max-w-2xl mx-auto text-[clamp(1rem,2vw,1.2rem)] leading-[1.75]">
          Dari seni Debus yang memukau hingga kuliner khas yang menggugah selera, kearifan lokal Serang mencerminkan kekayaan jiwa masyarakat Banten yang terus dijaga lintas generasi.
        </p>

        {/* Meta Chips */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          {["Seni & Budaya", "Kuliner Khas", "Tradisi Adat","Kerajinan Lokal"].map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-white/80 border-white/20 bg-white/10 backdrop-blur-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}