"use client";

import  {useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fetchArticlesCategories,fetchArticles } from "@/lib/services/articlesServices";
import { Category,Articles } from "@/types/articlesTypes";
import { formatDateToMMDDYYYY } from "@/lib/utils";

interface Article {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  alt: string;
  tags: string[];
}

const articles: Article[] = [
  {
    id: 1,
    category: "Layanan Publik",
    title:
      "Sistem Antrian Digital Puskesmas Kini Terintegrasi Portal SerangKota",
    excerpt:
      "Warga kini dapat mendaftar antrian Puskesmas dari rumah melalui portal resmi kota tanpa perlu datang pagi-pagi.",
    date: "22 Mar 2026",
    author: "Dinas Kesehatan",
    readTime: "3 menit",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_11dd292e2-1764667687408.png",
    alt: "Petugas kesehatan menggunakan tablet untuk sistem antrian digital di Puskesmas modern",
    tags: ["Kesehatan", "Digital"],
  },
  {
    id: 2,
    category: "Ekonomi",
    title:
      "Pasar UMKM Digital Serang Catat Transaksi Rp 4,2 Miliar di Kuartal I 2026",
    excerpt:
      "Program digitalisasi UMKM yang diluncurkan awal tahun berhasil meningkatkan omzet pedagang lokal secara signifikan.",
    date: "20 Mar 2026",
    author: "Dinas Perdagangan",
    readTime: "4 menit",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1d5b361fd-1774649961794.png",
    alt: "Pedagang UMKM menggunakan smartphone untuk transaksi digital di pasar modern Kota Serang",
    tags: ["UMKM", "Ekonomi"],
  },
  {
    id: 3,
    category: "Pendidikan",
    title:
      "Serang Raih Penghargaan Kota Literasi Digital Terbaik Tingkat Provinsi Banten",
    excerpt:
      "Inovasi program literasi digital yang menjangkau 120 sekolah di seluruh kecamatan mendapat pengakuan provinsi.",
    date: "18 Mar 2026",
    author: "Dinas Pendidikan",
    readTime: "3 menit",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1f995b44c-1774649960096.png",
    alt: "Siswa sekolah dasar menggunakan komputer di laboratorium digital modern Kota Serang",
    tags: ["Pendidikan", "Penghargaan"],
  },
  {
    id: 4,
    category: "Lingkungan",
    title: "Program Serang Hijau: 10.000 Pohon Ditanam di Seluruh Kecamatan",
    excerpt:
      "Gerakan penghijauan masif melibatkan komunitas warga, sekolah, dan instansi pemerintah untuk Serang yang lebih hijau.",
    date: "15 Mar 2026",
    author: "Dinas Lingkungan Hidup",
    readTime: "2 menit",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_111a6e9b2-1774649959594.png",
    alt: "Komunitas warga menanam pohon di taman kota sebagai bagian program Serang Hijau",
    tags: ["Lingkungan", "Komunitas"],
  },
  {
    id: 5,
    category: "Infrastruktur",
    title: "Pembangunan Jalan Lingkar Timur Serang Capai Progress 68%",
    excerpt:
      "Proyek strategis yang akan memperlancar konektivitas antar kecamatan ini ditargetkan selesai akhir 2026.",
    date: "12 Mar 2026",
    author: "Dinas PUPR",
    readTime: "4 menit",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1227842d5-1770821562771.png",
    alt: "Proses pembangunan jalan raya baru dengan alat berat dan pekerja konstruksi di Kota Serang",
    tags: ["Infrastruktur", "Pembangunan"],
  },
  {
    id: 6,
    category: "Sosial",
    title: "Bantuan Sosial Langsung Tunai Tahap II Disalurkan ke 45.000 KPM",
    excerpt:
      "Pemerintah Kota Serang menyalurkan BST tahap kedua kepada keluarga penerima manfaat melalui rekening bank.",
    date: "10 Mar 2026",
    author: "Dinas Sosial",
    readTime: "3 menit",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_131be2a6d-1774649961771.png",
    alt: "Petugas sosial membantu warga dalam proses penerimaan bantuan sosial di kantor kelurahan",
    tags: ["Sosial", "Bantuan"],
  },
  {
    id: 7,
    category: "Ekonomi",
    title: "Serang Investment Forum 2026 Tarik Minat 32 Investor Nasional",
    excerpt:
      "Forum investasi tahunan kota Serang berhasil menarik komitmen investasi senilai Rp 1,8 triliun di berbagai sektor.",
    date: "8 Mar 2026",
    author: "DPMPTSP Kota Serang",
    readTime: "5 menit",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_130a039a2-1765172518149.png",
    alt: "Para eksekutif dan investor duduk dalam forum diskusi bisnis di ruang konferensi modern",
    tags: ["Investasi", "Ekonomi"],
  },
  {
    id: 8,
    category: "Infrastruktur",
    title:
      "RSUD Kota Serang Tambah 3 Gedung Baru dengan Kapasitas 200 Tempat Tidur",
    excerpt:
      "Perluasan fasilitas rumah sakit daerah ini merupakan bagian dari investasi kesehatan jangka panjang pemerintah kota.",
    date: "5 Mar 2026",
    author: "RSUD Kota Serang",
    readTime: "3 menit",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1008f3ef7-1767606960262.png",
    alt: "Gedung rumah sakit modern yang baru selesai dibangun dengan arsitektur kontemporer",
    tags: ["Kesehatan", "Infrastruktur"],
  },
  {
    id: 9,
    category: "Layanan Publik",
    title:
      "E-Government Award 2026: Serang Masuk 10 Kota Terbaik Transformasi Digital",
    excerpt:
      "Penghargaan nasional ini mengakui upaya Pemkot Serang dalam digitalisasi layanan publik selama dua tahun terakhir.",
    date: "2 Mar 2026",
    author: "Humas Pemkot Serang",
    readTime: "4 menit",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_13ed0a2d2-1774649961452.png",
    alt: "Tim pemerintah kota menerima penghargaan e-government di acara penghargaan nasional",
    tags: ["Penghargaan", "Digital"],
  },
];

const categoryColors: Record<string, string> = {
  "Layanan Publik":
    "bg-accent-50 text-accent-dark dark:bg-accent/15 dark:text-accent-light",
  Ekonomi:
    "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300",
  Pendidikan:
    "bg-violet-50 text-violet-700 dark:bg-violet-900/20 dark:text-violet-300",
  Lingkungan:
    "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300",
  Infrastruktur:
    "bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300",
  Sosial: "bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-300",
};

export default function NewsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [loading, setLoading] = useState(false);
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [allArticles, setAllArticles] = useState<Articles[]>([]); 
  const [totalArticles, setTotalArticles] = useState(0);
  const [toArticles, setToArticles] = useState(0);
  const [hasMore, setHasMore] = useState(0);
  const router = useRouter();
  const [page, setPage] = useState(1); 
  const handleClick = () => {
    router.push("/news/detail");
  };
  useEffect(() => {
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
    return () => observer.disconnect();
  }, []);


 
 

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const articles = await fetchArticles({ page, category: activeCategory === "Semua" ? undefined : activeCategory });
        console.log("fetchArticles", articles);
        // Pastikan allArticles selalu array
        setAllArticles(Array.isArray(articles.data) ? articles.data : articles.data?.data || []);
        setTotalArticles(articles.data.total);
        setToArticles(articles.data.to);

        const categories = await fetchArticlesCategories();
        console.log("categories", categories);
        setAllCategories([
          {
            id: 0,
            name: "Semua",
            style:
              "bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-gray-400",
            slug: "semua",
          },
          ...categories.data,
        ]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

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
            {allCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setPage(1);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition
                ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allArticles.map((article: any, i: number) => (
            <article
              key={article.id}
              onClick={handleClick}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal cursor-pointer opacity-0 translate-y-6 transition-all duration-700 group bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden flex flex-col hover:shadow-md"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.featured_image || article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute top-3 left-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      categoryColors[
                        article.categories?.[0]?.style || article.category
                      ] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {article.categories?.[0]?.name || article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span>{formatDateToMMDDYYYY(article.created_at || article.date)}</span>
                  <span>·</span>
                  <span>{article.readTime || ""}</span>
                </div>

                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2.5 leading-snug group-hover:text-blue-600 transition line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs text-gray-600 dark:text-gray-400 flex-1 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10 flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[120px]">
                    {article.author?.name || article.author}
                  </span>

                  <Link
                    href="/news"
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    Baca →
                  </Link>
                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {(article.tags || []).map((tag: any, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400"
                    >
                      #{tag?.name || tag || "tag"}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty */}
        {allArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-900 dark:text-white font-semibold">
              Belum Ada Berita
            </p>
            <p className="text-sm text-gray-500">
              Tidak ada berita untuk kategori ini.
            </p>
          </div>
        )}

     
        
          <div className="text-center mt-12">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-8 py-3.5 rounded-2xl text-sm bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Muat Lebih Banyak
            </button>
          </div>
    

        {/* Info */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            Menampilkan {toArticles} dari {totalArticles} berita
          </p>
        </div>
      </div>
    </section>
  );
}
