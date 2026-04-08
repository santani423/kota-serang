"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchArticlesRandom } from "@/lib/services/articlesServices";
import { Articles } from "@/types/articlesTypes";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDateToMMDDYYYY } from "@/lib/utils";

export default function NewsHero() {
  const [revealed, setRevealed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [randomArticles, setRandomArticles] = useState<Articles>({
    id: 0,
    title: "",
    slug: "",
    alt: "",
    featured_image: "",
    categories: [],
    tags: [],
  });

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const randomArticles = await fetchArticlesRandom();
      setRandomArticles(randomArticles.data);
      setLoading(false);
    };
    fetchData();
    const t = setTimeout(() => setRevealed(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="pt-24 pb-5 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
      aria-label="Berita Utama"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Label */}
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-1.5 h-7 bg-gradient-to-b from-[#37B27D] to-[#1B8C5A] rounded-full shadow-md" />
          <span className="text-sm font-semibold font-mono uppercase tracking-[0.25em] text-[#1B8C5A] drop-shadow-sm">
            Berita & Pengumuman
          </span>
        </div>

        {/* Card */}
        <div
          className={`transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {loading ? (
            <article className="group relative overflow-hidden rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-gray-100 dark:border-blue-900/20 shadow-lg transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
                {/* Skeleton Image */}
                <div className="relative min-h-[240px] md:min-h-[280px] overflow-hidden h-full">
                  <Skeleton className="absolute bg-blue-100 dark:bg-blue-900/30 inset-0 w-full h-full" />
                  <div className="absolute top-5 left-5">
                    <Skeleton className="w-24 h-7 bg-blue-100 dark:bg-blue-900/30 rounded-full" />
                  </div>
                </div>
                {/* Skeleton Content */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs md:text-sm mb-4 font-mono">
                    <Skeleton className="w-20 bg-blue-100 dark:bg-blue-900/30 h-4" />
                    <Skeleton className="w-4 bg-blue-100 dark:bg-blue-900/30 h-4" />
                    <Skeleton className="w-20 bg-blue-100 dark:bg-blue-900/30 h-4" />
                  </div>
                  <Skeleton className="h-10 w-3/4 mb-4 bg-blue-100 dark:bg-blue-900/30" />
                  <Skeleton className="h-6 w-full mb-2 bg-blue-100 dark:bg-blue-900/30" />
                  <Skeleton className="h-6 w-5/6 mb-2 bg-blue-100 dark:bg-blue-900/30" />
                  <Skeleton className="h-6 w-2/3 mb-7 bg-blue-100 dark:bg-blue-900/30" />
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <Skeleton className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30" />
                      <Skeleton className="w-20 h-4 bg-blue-100 dark:bg-blue-900/30" />
                    </div>
                    <Skeleton className="w-32 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30" />
                  </div>
                </div>
              </div>
            </article>
          ) : (
            <article className="group relative overflow-hidden rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-gray-100 dark:border-blue-900/20 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
                {/* Image */}
                <div className="relative min-h-[240px] md:min-h-[280px] overflow-hidden h-full">
                  {randomArticles?.featured_image ? (
                    <Image
                      src={randomArticles.featured_image}
                      alt={randomArticles.alt || "Gambar artikel"}
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/60 dark:from-slate-900/0 dark:via-slate-900/20 dark:to-slate-900/60" />
                  {/* Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600/90 shadow-md backdrop-blur text-white text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                      {(Array.isArray(randomArticles.categories) &&
                        randomArticles.categories.length > 0 &&
                        randomArticles.categories[0]?.name) ||
                        "Kategori"}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4 font-mono">
                    <span>{formatDateToMMDDYYYY(randomArticles?.created_at)}</span> 
                  </div>
                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                    {randomArticles?.title}
                  </h1>
                  {/* Excerpt */}
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-7 line-clamp-3">
                    {randomArticles?.excerpt}
                  </p>
                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-100 via-blue-200 to-emerald-100 dark:from-blue-900/40 dark:via-blue-800/30 dark:to-emerald-900/30 flex items-center justify-center shadow">
                        <span className="text-base font-bold text-blue-700 dark:text-blue-300">
                          {randomArticles?.author?.name}
                        </span>
                      </div>
                      <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium">
                        {randomArticles?.author?.name}
                      </span>
                    </div>
                    <Link
                      href="/news"
                      className="flex items-center gap-2 text-sm md:text-base font-bold text-white bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600 px-5 py-2 rounded-full shadow hover:from-emerald-600 hover:to-blue-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      Baca Artikel
                      <span className="ml-1.5 text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
