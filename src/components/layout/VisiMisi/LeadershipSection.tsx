"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

// Mapping icon
const iconMap = {
  EnvelopeIcon,
  GlobeAltIcon,
};

const leaders = [
  {
    name: "Dr. H. Syafrudin, S.Sos., M.Si.",
    title: "Wali Kota Serang",
    period: "Periode 2025–2030",
    message:
      '"Kami berkomitmen membangun Kota Serang yang modern, inklusif, dan berbudaya — sebuah kota yang mewarisi kebesaran Kesultanan Banten dan melangkah maju menuju era digital yang penuh harapan."',
    image:
      "https://images.unsplash.com/photo-1641029186041-ab4bcc6ba6c0",
    social: [
      { icon: "EnvelopeIcon", label: "Email Resmi" },
      { icon: "GlobeAltIcon", label: "Website" },
    ],
  },
  {
    name: "Drs. H. Subadri Usmanadji, M.M.",
    title: "Wakil Wali Kota Serang",
    period: "Periode 2025–2030",
    message:
      '"Pembangunan yang bermakna adalah pembangunan yang dirasakan oleh seluruh lapisan masyarakat — dari pusat kota hingga pelosok kelurahan di enam kecamatan Kota Serang."',
    image:
      "https://images.unsplash.com/photo-1516215240208-db23c841dd22",
    social: [
      { icon: "EnvelopeIcon", label: "Email Resmi" },
      { icon: "GlobeAltIcon", label: "Website" },
    ],
  },
];

export default function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add("visible");
                }, i * 150);
              });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-civic-bg dark:bg-slate-950"
      aria-labelledby="leadership-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-accent" />
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              Pimpinan Kota
            </span>
            <span className="w-8 h-0.5 bg-accent" />
          </div>

          <h2
            id="leadership-heading"
            className="reveal font-heading font-bold text-civic-heading dark:text-white"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: "1.2",
            }}
          >
            Pesan Pimpinan
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              className={`reveal reveal-delay-${
                i + 1
              } group card-hover bg-civic-surface dark:bg-slate-800 rounded-2xl overflow-hidden border border-civic-border dark:border-slate-700`}
            >
              <div className="grid grid-cols-5 h-full">
                {/* Image */}
                <div className="col-span-2 relative overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={`Foto ${leader.name}, ${leader.title}`}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 1024px) 40vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-civic-surface/20 dark:to-slate-800/20" />
                </div>

                {/* Content */}
                <div className="col-span-3 p-6 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary dark:bg-primary/20 dark:text-accent text-xs font-semibold rounded-full mb-3">
                      {leader.period}
                    </span>

                    <blockquote className="text-civic-body dark:text-slate-300 text-xs leading-relaxed italic mb-4 font-body">
                      {leader.message}
                    </blockquote>
                  </div>

                  <div>
                    <div className="font-heading font-bold text-civic-heading dark:text-white text-sm">
                      {leader.name}
                    </div>

                    <div className="text-accent text-xs font-semibold mt-0.5">
                      {leader.title}
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-2 mt-3">
                      {leader.social.map((s) => {
                        const IconComponent =
                          iconMap[
                            s.icon as keyof typeof iconMap
                          ];

                        return (
                          <button
                            key={s.label}
                            aria-label={s.label}
                            className="w-7 h-7 rounded-lg bg-civic-bg dark:bg-slate-700 flex items-center justify-center text-civic-muted dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-200"
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}