"use client";

import React, { useEffect, useRef } from "react";

export default function VisiMisiHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef?.current?.querySelectorAll(".reveal, .reveal-left");
    const timer = setTimeout(() => {
      els?.forEach((el) => el?.classList?.add("visible"));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-36 pb-20 overflow-hidden bg-white dark:bg-dark-bg bg-gradient-to-tr from-green-500/10 via-white/80 to-white"
    >
      {/* Background decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full -translate-x-1/3 translate-y-1/3" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-30 dark:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #1E3A8A18 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-8 text-center">
        <div className="reveal inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full px-4 py-1.5 text-xs font-display font-bold tracking-wider uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-light" />
          KOTA SERANG 2025–2030
        </div>

        <h1 className="reveal font-display text-5xl text-foreground dark:text-white font-extrabold mb-6 delay-100">
          Visi &{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #1E3A8A 0%, #10B981 100%)",
            }}
          >
            Misi
          </span>{" "}
          Kota Serang
        </h1>

        <p className="reveal text-muted dark:text-dark-muted text-body-lg max-w-2xl mx-auto delay-200">
          Arah pembangunan dan komitmen strategis Pemerintah Kota Serang dalam
          mewujudkan masyarakat yang sejahtera, berdaya saing, dan berkarakter.
        </p>

        {/* Breadcrumb */}
        <nav
          className="reveal mt-8 flex items-center justify-center gap-2 text-sm text-muted dark:text-dark-muted delay-300"
          aria-label="Breadcrumb"
        >
          <a
            href="/"
            className="hover:text-primary dark:hover:text-white transition-colors duration-200 font-body font-medium"
            style={{ fontWeight: 500 }}
          >
            Beranda
          </a>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <span
            className="text-foreground dark:text-white font-body font-semibold"
            style={{ fontWeight: 600 }}
          >
            Visi & Misi
          </span>
        </nav>
      </div>
    </section>
  );
}
