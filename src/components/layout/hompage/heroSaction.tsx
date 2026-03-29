"use client";

import { useState } from "react";
import Image from "next/image";
import img1 from "@/assets/hompage/1.jpg";
import img2 from "@/assets/hompage/2.jpg";
import img3 from "@/assets/hompage/3.jpg";
import img4 from "@/assets/hompage/4.jpg";

const images = [img1, img2, img3, img4];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);


  const [fade, setFade] = useState(false);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(false);
    }, 300);
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setFade(false);
    }, 300);
  };

  return (
    <section className="w-screen h-screen min-h-screen flex flex-col items-center justify-center bg-gray-100 p-0 m-0 relative overflow-hidden">
      {/* Slider Fullscreen */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className={`transition-opacity duration-500 w-full h-full ${fade ? 'opacity-0' : 'opacity-100'}`} style={{transitionProperty:'opacity'}}>
          <Image
            src={images[current]}
            alt={`Slide ${current + 1}`}
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* Button Prev */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow hover:bg-white z-10"
          aria-label="Sebelumnya"
        >
          &#8592;
        </button>
        {/* Button Next */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow hover:bg-white z-10"
          aria-label="Selanjutnya"
        >
          &#8594;
        </button>
        <div className="absolute inset-0 bg-black/40 z-0" />
      </div>
      {/* Content Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Selamat Datang di Kota Serang
        </h1>
        <p className="text-lg md:text-2xl text-white mb-6 drop-shadow-lg">
          Temukan informasi terbaru, layanan publik, dan berbagai hal menarik tentang Kota Serang di sini.
        </p>
        <a
          href="#services"
          className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition text-lg font-semibold shadow-lg"
        >
          Jelajahi Layanan
        </a>
      </div>
    </section>
  );
}