"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  fetchArticlesCategories,
  fetchArticles,
} from "@/lib/services/articlesServices";
import { Category, Articles } from "@/types/articlesTypes";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDateToMMDDYYYY } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react"; 

// Gunakan class utuh agar Tailwind compiler tidak melewatkannya
const getCategoryStyle = (category: string) => {
  const styles: Record<string, string> = {
    Pendidikan: "bg-blue-100 text-blue-700",
    Infrastruktur: "bg-orange-100 text-orange-700",
    Ekonomi: "bg-violet-100 text-violet-700",
    Teknologi: "bg-primary/10 text-primary",
    Kesehatan: "bg-rose-100 text-rose-700",
  };
  return styles[category] || "bg-gray-100 text-gray-700";
};

export default function NewsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [articles, setArticles] = useState<Articles[]>([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [toArticles, setToArticles] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  // Intersection animation
  useEffect(() => {
    let fallbackTimeout: NodeJS.Timeout | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el) =>
                el.classList.add("opacity-100", "translate-y-0"),
              );
          }
        });
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    // Fallback: jika observer gagal, paksa reveal setelah 1 detik
    fallbackTimeout = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.querySelectorAll(".reveal").forEach((el) => {
          el.classList.add("opacity-100", "translate-y-0");
        });
      }
    }, 1000);

    return () => {
      observer.disconnect();
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
    };
  }, []);

  // Fetch categories (once)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetchArticlesCategories();
        setCategories([
          {
            id: 0,
            name: "Semua",
            style:
              "bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-gray-400",
            slug: "semua",
          },
          ...res.data,
        ]);
      } catch (err) {
        setCategories([
          {
            id: 0,
            name: "Semua",
            style:
              "bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-gray-400",
            slug: "semua",
          },
        ]);
      }
    };
    fetchCategories();
  }, []);

  // Fetch articles (on category/page change)
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetchArticles({
        page,
        perPage: 18,
        category: activeCategory === "Semua" ? undefined : activeCategory,
      });
      const dataArr = Array.isArray(res.data) ? res.data : res.data?.data || [];
      console.log("dataArr", res);

      setTotalArticles(res.total_data || 0);
      setToArticles(res.data.to || dataArr.length);
      setHasMore(res.data.to < res.total_data);
      setArticles(page === 1 ? dataArr : (prev) => [...prev, ...dataArr]);
    } catch (err) {
      setArticles([]);
      setTotalArticles(0);
      setToArticles(0);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [page, activeCategory]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, activeCategory]);

  // Reset page dan articles ketika kategori berubah
  useEffect(() => {
    setArticles([]); // reset grid agar tidak menampilkan data lama
    setPage(1);
  }, [activeCategory]);

  useEffect(() => {
    console.log("articlesarticles", articles);
  }, [articles]);

  return (
    <section
      ref={sectionRef}
      className="py-14 lg:py-20 bg-gray-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 flex flex-col sm:flex-row justify-between gap-5 mb-10">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Semua Berita
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
                  activeCategory === cat.name
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:text-blue-600 hover:border-blue-300"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 min-h-[300px]">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="reveal opacity-100 translate-y-0">
                  <Skeleton className="h-[220px] w-full rounded-2xl mb-4" />
                  <div className="px-2">
                    <Skeleton className="h-4 bg-blue-100 dark:bg-blue-900/30 w-1/2 mb-2" />
                    <Skeleton className="h-6 bg-blue-100 dark:bg-blue-900/30 w-full mb-2" />
                    <Skeleton className="h-3 bg-blue-100 dark:bg-blue-900/30 w-3/4 mb-2" />
                    <Skeleton className="h-3 bg-blue-100 dark:bg-blue-900/30 w-1/2 mb-4" />
                    <div className="flex gap-2 mb-2">
                      <Skeleton className="h-3 bg-blue-100 dark:bg-blue-900/30 w-12 rounded" />
                      <Skeleton className="h-3 bg-blue-100 dark:bg-blue-900/30 w-16 rounded" />
                    </div>
                    <div className="flex gap-2">
                      <Skeleton className="h-3 bg-blue-100 dark:bg-blue-900/30 w-10 rounded" />
                      <Skeleton className="h-3 bg-blue-100 dark:bg-blue-900/30 w-8 rounded" />
                    </div>
                  </div>
                </div>
              ))
            : articles.map((article: any, i: number) => (
                <Link
                  key={article.id}
                  href={`/news/${article.id}`} // Dinamis berdasarkan ID
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Thumbnail Container */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={article.featured_image}
                      alt={article.slug}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${getCategoryStyle(article.categories.length > 0 ? article.categories[0].name : "Uncategorized")}`}
                      >
                        {article.categories.length > 0 ? article.categories[0].name : "Uncategorized"}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-slate-400 text-xs mb-3">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span>{article.readTime} {formatDateToMMDDYYYY(article.created_at)}</span>
                    </div>

                    <h3 className="font-bold text-content text-lg leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-primary text-xs font-bold uppercase tracking-wide group-hover:underline">
                        Baca Selengkapnya
                      </span>
                      <span className="text-slate-300 group-hover:text-primary transition-colors">
                        ↗
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
        </div>

        {/* Empty */}
        {!loading && articles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-900 dark:text-white font-semibold">
              Belum Ada Berita
            </p>
            <p className="text-sm text-gray-500">
              Tidak ada berita untuk kategori ini.
            </p>
          </div>
        )}

        {/* Pagination */}
        {hasMore && !loading && (
          <div className="text-center mt-12">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-8 py-3.5 rounded-2xl text-sm bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Muat Lebih Banyak
            </button>
          </div>
        )}

        {/* Info */}
        <div className="text-center mt-6 pt-6">
          <p className="text-xs text-gray-500">
            Menampilkan {toArticles} dari {totalArticles} berita
          </p>
        </div>
      </div>
    </section>
  );
}
