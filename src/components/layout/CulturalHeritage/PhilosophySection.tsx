"use client";
import React, { useEffect, useRef } from "react";
import { useAppSelector } from "@/store/hooks";

const values = [
  {
    title: "Silih Asah",
    subtitle: "Saling Mencerdaskan",
    description:
      "Nilai gotong royong dalam berbagi ilmu dan pengetahuan. Masyarakat Serang percaya bahwa kemajuan dicapai bersama melalui saling mendidik dan menginspirasi satu sama lain.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    gradient: "from-primary-900 to-primary-700",
    lightBg: "#EFF6FF",
    textColor: "#1E3A8A",
  },
  {
    title: "Silih Asih",
    subtitle: "Saling Menyayangi",
    description:
      "Rasa kasih sayang dan kepedulian antar sesama yang menjadi pondasi masyarakat Banten. Kebersamaan dan toleransi adalah warisan nilai yang terus dipegang teguh.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    gradient: "from-secondary-600 to-secondary-400",
    lightBg: "#ECFDF5",
    textColor: "#059669",
  },
  {
    title: "Silih Asuh",
    subtitle: "Saling Membimbing",
    description:
      "Tradisi bimbingan dan pengasuhan lintas generasi. Yang tua membimbing yang muda, dan yang muda menghormati yang tua — sebuah siklus kebijaksanaan yang tak terputus.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    gradient: "from-blue-600 to-blue-400",
    lightBg: "#EFF6FF",
    textColor: "#2563EB",
  },
];

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("is-visible"), i * 130);
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden py-20 lg:py-28 "
      style={{ background: "#F8FAFF" }}
      aria-labelledby="philosophy-heading"
    >
      {/* Background decoration */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-center items-center gap-6 mb-14">
            <div className="text-center mb-14 reveal-up ">
            <h2 className="text-[2.5rem] leading-[1.1] font-display font-bold text-content justify-center text-center">
            Tiga Pilar  
              <span className="gradient-title"> Kearifan Lokal</span>
            </h2>
            <p className="body-lg text-gray-400 font-body max-w-2xl mx-auto">
            Filosofi hidup masyarakat Banten yang telah diwariskan selama berabad-abad dan masih relevan hingga masa kini.
          </p>
          </div>
        </div>

        {/* Philosophy Cards — 3-col grid
            Row 1: [Silih Asah cs-1] + [Silih Asih cs-1] + [Silih Asuh cs-1] = 3/3 ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {values?.map((val, i) => (
            <div
              key={val?.title}
              className={`reveal-up delay-${(i + 1) * 150} group relative rounded-3xl p-8 bg-white border border-serang-border shadow-soft card-hover overflow-hidden`}
            >
              {/* Background gradient accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-10 bg-gradient-to-br ${val?.gradient} -translate-y-1/2 translate-x-1/2`}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: val?.lightBg, color: val?.textColor }}
              >
                {val?.icon}
              </div>

              {/* Content */}
              <div className="mb-2">
                <span
                  className="font-body text-xs font-semibold tracking-widest uppercase"
                  style={{ color: val?.textColor }}
                >
                  {val?.subtitle}
                </span>
              </div>
              <h3 className="font-display font-bold text-serang-foreground text-2xl mb-4 tracking-tight">
                {val?.title}
              </h3>
              <p className="font-body text-serang-muted text-sm leading-relaxed">
                {val?.description}
              </p>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${val?.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Decorative quote */}
        <div className="mt-16 text-center reveal-up delay-500">
          <div className="inline-block max-w-3xl">
            <div className="divider-gradient mb-8" />
            <blockquote
              className="font-display font-semibold text-serang-muted"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              "Urang Banten kudu bisa ngajaga budaya jeung adat istiadat nu geus
              diwariskeun ku karuhun urang."
            </blockquote>
            <p className="font-body text-xs text-serang-muted mt-4 tracking-wider uppercase">
              Pepatah Banten — Masyarakat Banten harus bisa menjaga budaya dan
              adat istiadat yang telah diwariskan leluhur
            </p>
            <div className="divider-gradient mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
