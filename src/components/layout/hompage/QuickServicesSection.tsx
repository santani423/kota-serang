"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FileText,
  IdCard,
  Heart,
  GraduationCap,
  Truck,
  Store,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

interface Service {
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
  bgColor: string;
  span?: string;
  href: string;
}

const services: Service[] = [
  {
    icon: FileText,
    title: "Perizinan Online",
    desc: "Ajukan izin usaha, IMB, dan dokumen lainnya secara digital tanpa antri.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    span: "col-span-1 md:col-span-2",
    href: "/public-services",
  },
  {
    icon: IdCard,
    title: "Kependudukan",
    desc: "KTP, KK, Akta — semua dalam satu platform.",
    color: "text-accent-dark dark:text-accent-light",
    bgColor: "bg-accent-50 dark:bg-accent/10",
    href: "/public-services",
  },
  {
    icon: Heart,
    title: "Layanan Kesehatan",
    desc: "Jadwal Puskesmas, rujukan, dan informasi kesehatan warga.",
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    href: "/public-services",
  },
  {
    icon: GraduationCap,
    title: "Pendidikan",
    desc: "Pendaftaran sekolah, beasiswa, dan data pendidikan kota.",
    color: "text-violet-600 dark:text-violet-400",
    bgColor: "bg-violet-50 dark:bg-violet-900/20",
    href: "/public-services",
  },
  {
    icon: Truck,
    title: "Infrastruktur",
    desc: "Laporkan kerusakan jalan, lampu, dan fasilitas umum.",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    href: "/public-services",
  },
  {
    icon: Store,
    title: "UMKM & Investasi",
    desc: "Dukung pertumbuhan ekonomi lokal dengan kemudahan perizinan UMKM.",
    color: "text-primary-700 dark:text-primary-light",
    bgColor: "bg-primary-50 dark:bg-primary-900/20",
    span: "col-span-1 md:col-span-2",
    href: "/public-services",
  },
];

const delays = [
  "delay-100",
  "delay-200",
  "delay-300",
  "delay-400",
  "delay-500",
];

export default function QuickServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
    const theme = useAppSelector((state) => state.theme.value);
 
 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal, .reveal-scale")
              .forEach((el) => el.classList.add("active"));
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
      id="layanan"
      className="py-20 lg:py-28 bg-gray-50 dark:bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0F172A]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 bg-gray-50 dark:bg-[#0F172A]">
          <div className="reveal">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#22c55e] mb-3">
              — LAYANAN PUBLIK
            </p>
            <h2 className="text-[2.5rem] leading-[1.1] font-display font-bold text-[#111827] dark:text-white">
              Semua Kebutuhan
              <br />
              <span className="gradient-title">Dalam Satu Portal</span>
            </h2>
          </div>

          <Link
            href="/news"
            className="reveal delay-200 flex items-center gap-2 text-sm border-2 border-[#1E3A8A] text-[#1E3A8A] px-6 py-3 rounded-xl hover:bg-[#1E3A8A]/10 transition"
          >
            Lihat Semua Layanan
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className={`
                  reveal-scale ${delays[i] || "delay-500"}
                  ${service.span || "col-span-1"}
                  group relative overflow-hidden
                  ${theme === "dark" ? "bg-[#22304a] " : "bg-gray-100"}  
                  border border-gray-200 dark:border-primary-800  
                  rounded-2xl p-6 flex flex-col gap-4
                  transform will-change-transform
                  hover:-translate-y-1
                  transition-transform duration-200
                `}
              >
                {/* Background Hover (INSTANT) */}
                <div className="absolute inset-0 bg-white dark:bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

                {/* Content wrapper biar di atas overlay */}
                <div className="relative z-10 flex flex-col gap-4 h-full">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.bgColor}`}
                  >
                    <Icon size={22} className={service.color} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display font-semibold text-base text-serang-foreground dark:text-white mb-1.5 group-hover:text-primary-700 transition-colors duration-150">
                      {service.title}
                    </h3>
                    <p className="text-sm text-serang-muted dark:text-slate-300 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="mt-auto flex items-center gap-1 text-xs text-serang-muted group-hover:text-primary-700 transition-colors duration-150">
                    Akses Layanan
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-150"
                    />
                  </div>
                </div>

                {/* Optional underline (tidak ganggu hover lagi) */}
                <div className="service-link-underline" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
