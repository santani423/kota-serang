import Template from "@/components/layout/template";
import NewsHero from "@/components/layout/News/NewsHero";
import NewsGrid from "@/components/layout/News/NewsGrid";
import { useParams } from "next/navigation";
import { useState } from "react";

// Komponen ListKomentar dan FormKomentar akan dibuat terpisah

export default function NewsDetailPage() {
  // Ambil slug dari URL
  const params = useParams();
  const slug = params?.slug || "";

  // Dummy data berita detail
  const berita = {
    title: "Judul Berita Contoh",
    date: "2 April 2026",
    content: `Ini adalah isi detail berita. Konten berita akan ditampilkan di sini sesuai dengan slug.`,
  };

  // Dummy data list berita terkait
  const beritaTerkait = [
    { title: "Berita Terkait 1", slug: "berita-terkait-1" },
    { title: "Berita Terkait 2", slug: "berita-terkait-2" },
    { title: "Berita Terkait 3", slug: "berita-terkait-3" },
  ];

  return (
    <Template>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <NewsHero />
        <article className="bg-white rounded-lg shadow p-6 mb-8">
          <h1 className="text-2xl font-bold mb-2">{berita.title}</h1>
          <div className="text-gray-500 text-sm mb-4">{berita.date}</div>
          <div className="prose max-w-none mb-6">{berita.content}</div>
        </article>

        {/* List Berita Terkait */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Berita Terkait</h2>
          <ul className="space-y-2">
            {beritaTerkait.map((item) => (
              <li key={item.slug}>
                <a href={`/news/${item.slug}`} className="text-blue-600 hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* List Komentar */}
        <ListKomentar />

        {/* Form Komentar */}
        <FormKomentar />
      </div>
    </Template>
  );
}

function ListKomentar() {
  // Dummy data komentar
  const komentar = [
    { nama: "Budi", isi: "Berita yang sangat informatif!" },
    { nama: "Siti", isi: "Terima kasih atas informasinya." },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Komentar</h2>
      <ul className="space-y-4">
        {komentar.map((k, idx) => (
          <li key={idx} className="border-b pb-2">
            <div className="font-semibold">{k.nama}</div>
            <div>{k.isi}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FormKomentar() {
  const [nama, setNama] = useState("");
  const [isi, setIsi] = useState("");
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Tinggalkan Komentar</h2>
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Nama"
            className="border rounded px-3 py-2 w-full"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Komentar"
            className="border rounded px-3 py-2 w-full"
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Kirim
        </button>
      </form>
    </section>
  );
}
