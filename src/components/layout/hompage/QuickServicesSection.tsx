"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { iconMap } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface Service {
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
  bgColor: string;
  span?: string;
  href: string;
}

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
  const { quickServicesSection, loading } = useSelector(
    (state: RootState) => state.settings,
  );

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
      className={`py-20 lg:py-28 bg-surface`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-surface`}>
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 bg-surface`}
        >
          <div className="reveal">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#22c55e] mb-3">
              — LAYANAN PUBLIK
            </p>
            <h2
              className={`text-[2.5rem] leading-[1.1] font-display font-bold   text-content`}
            >
              Semua Kebutuhan
              <br />
              <span className="gradient-title">Dalam Satu Portal</span>
            </h2>
          </div>

          <Link
            href="/news"
            className={`reveal delay-200 flex items-center gap-2 text-sm border-2 border-[#1E3A8A] px-6 py-3 rounded-xl hover:bg-[#1E3A8A]/10 transition text-highlight`}
          >
            Lihat Semua Layanan
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {loading ? (
            // 🔹 SKELETON (6 items)
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="col-span-1 bg-surface border border-gray-200 dark:border-primary-800 rounded-2xl p-6 flex flex-col gap-4 animate-pulse"
              >
                {/* Icon */}
                <Skeleton className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl" />

                {/* Title */}
                <Skeleton className="h-4 bg-blue-100 dark:bg-blue-900/30 w-32" />

                {/* Desc */}
                <Skeleton className="h-3 bg-blue-100 dark:bg-blue-900/30 w-full" />
                <Skeleton className="h-3 bg-blue-100 dark:bg-blue-900/30 w-5/6" />

                {/* CTA */}
                <Skeleton className="h-3 bg-blue-100 dark:bg-blue-900/30 w-24 mt-auto" />
              </div>
            ))
          ) : quickServicesSection?.length ? (
            // 🔹 DATA
            quickServicesSection.map((service, i) => {
              const Icon = iconMap[service.icon];

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`
          reveal-scale ${delays[i] || "delay-500"}
          ${service.span || "col-span-1"}
          group relative overflow-hidden
          bg-surface  
          border border-gray-200 dark:border-primary-800  
          rounded-2xl p-6 flex flex-col gap-4
          transform will-change-transform
          hover:-translate-y-1
          transition-transform duration-200
        `}
                >
                  {/* Background Hover */}
                  <div className="absolute inset-0 bg-white dark:bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

                  <div className="relative z-10 flex flex-col gap-4 h-full">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.bgColor}`}
                    >
                      {Icon ? (
                        <Icon size={22} className={service.color} />
                      ) : (
                        <span className="text-xs">?</span>
                      )}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="mt-2 font-bold text-brand-hover transition-colors">
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          theme === "dark"
                            ? "text-slate-300"
                            : "text-serang-muted"
                        } leading-relaxed`}
                      >
                        {service.desc}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto flex items-center gap-1 text-xs group-hover:text-primary-700 transition-colors duration-150">
                      Akses Layanan
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform duration-150"
                      />
                    </div>
                  </div>

                  <div className="service-link-underline" />
                </Link>
              );
            })
          ) : (
            // 🔹 EMPTY STATE
            <div className="col-span-full flex items-center justify-center">
              <div className="text-center bg-surface border border-gray-200 dark:border-primary-800 rounded-2xl p-8">
                <p className="text-sm text-serang-muted">
                  Tidak ada layanan tersedia
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
