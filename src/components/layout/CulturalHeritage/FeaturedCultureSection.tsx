"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

const featuredItems = [
  {
    title: "Seni Debus Banten",
    subtitle: "Warisan Tak Benda UNESCO",
    description:
      "Debus adalah seni bela diri dan pertunjukan tradisional yang berasal dari Banten. Pertunjukan ini menampilkan atraksi luar biasa di mana para pemain menunjukkan ketangguhan fisik yang tidak tertandingi, termasuk kekebalan terhadap senjata tajam, api, dan benda keras lainnya.",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_19fc693b1-1775840416425.png",
    imageAlt:
      "Pertunjukan Debus Banten dengan pemain berpakaian putih memegang obor api dalam arena gelap penuh penonton",
    points: [
      "Berakar dari tradisi pesantren abad ke-16",
      "Dipentaskan dalam acara kebudayaan resmi",
      "Diakui sebagai warisan budaya tak benda nasional",
      "Diajarkan di sanggar seni seluruh Banten",
    ],

    imageLeft: true,
    accentColor: "#1E3A8A",
  },
  {
    title: "Kuliner Khas Serang",
    subtitle: "Cita Rasa Otentik Nusantara",
    description:
      "Kota Serang memiliki kekayaan kuliner yang tak tertandingi. Dari Sate Bandeng yang gurih, Rabeg berbumbu rempah khas, hingga Angeun Lada yang pedas menyengat — setiap hidangan menceritakan sejarah dan kearifan masyarakat Banten yang kaya.",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_11ccf709b-1775840415460.png",
    imageAlt:
      "Sajian lengkap kuliner khas Serang dengan sate bandeng, rabeg, angeun lada dan pelengkap dalam piring tradisional di atas meja kayu",
    points: [
      "Sate Bandeng: ikan bandeng tanpa duri berbumbu khas",
      "Rabeg: gulai daging kambing rempah Banten",
      "Angeun Lada: sayur pedas kuah bening khas lokal",
      "Kue Pasung dan jajanan tradisional pasar",
    ],

    imageLeft: false,
    accentColor: "#10B981",
  },
];

export default function FeaturedCultureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal-left, .reveal-right, .reveal-up")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("is-visible"), i * 120);
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-surface-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="reveal">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#22c55e] mb-3">
              — Budaya Unggulan
            </p>
            <h2 className="text-[2.5rem] leading-[1.1] font-display font-bold text-content">
              Sorotan Kearifan Lokal
              <br />
              <span className="gradient-title">Kota Serang</span>
            </h2>
          </div>

          
        </div>

        {/* Featured Items */}
        <div className="flex flex-col gap-20 lg:gap-28">
          {featuredItems?.map((item, idx) => (
            <div
              key={item?.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                !item?.imageLeft ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`${item?.imageLeft ? "reveal-left" : "reveal-right lg:col-start-2"}`}
              >
                <div
                  className="relative rounded-3xl overflow-hidden img-zoom-container shadow-large"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={item?.image}
                    alt={item?.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                </div>

                {/* Decorative offset border */}
                <div
                  className={`hidden lg:block absolute rounded-3xl border-2 w-full h-full top-4 -z-10 ${
                    item?.imageLeft ? "-left-4" : "-right-4"
                  }`}
                  style={{ borderColor: `${item?.accentColor}30` }}
                />
              </div>

              {/* Text */}
              <div
                className={`${item?.imageLeft ? "reveal-right" : "reveal-left lg:col-start-1"}`}
              >
                <span
                  className="badge mb-4 p-2 inline-flex rounded-2xl text-sm font-semibold"
                  style={{
                    background: `${item?.accentColor}15`,
                    color: item?.accentColor,
                    border: `1px solid ${item?.accentColor}30`,
                  }}
                >
                  {item?.subtitle}
                </span>

                <h3
                  className="font-display font-bold text-serang-foreground mb-4"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item?.title}
                </h3>

                <p className="font-body text-serang-muted body-lg mb-8 leading-relaxed">
                  {item?.description}
                </p>

                {/* Bullet points */}
                <ul className="flex flex-col gap-3 mb-8">
                  {item?.points?.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 font-body text-serang-muted text-sm leading-relaxed"
                    >
                      <div
                        className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${item?.accentColor}15` }}
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style={{ color: item?.accentColor }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Decorative stat */}
                <div
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{
                    background: `${item?.accentColor}08`,
                    border: `1px solid ${item?.accentColor}20`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item?.accentColor}15` }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={{ color: item?.accentColor }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="font-display font-bold text-sm"
                      style={{ color: item?.accentColor }}
                    >
                      Warisan Budaya Nasional
                    </div>
                    <div className="font-body text-xs text-serang-muted mt-0.5">
                      Diakui oleh Kementerian Pendidikan dan Kebudayaan RI
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
