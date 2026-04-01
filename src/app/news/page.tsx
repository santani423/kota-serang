import Template from "@/components/layout/template";
import NewsHero from "@/components/layout/News/NewsHero";
import NewsGrid from "@/components/layout/News/NewsGrid";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Publik — SerangKota Portal Resmi Pemerintah Kota Serang",
  description:
    "Akses 120+ layanan publik digital Pemerintah Kota Serang — perizinan, kependudukan, kesehatan, pendidikan, dan lainnya. Cepat, mudah, terpercaya.",
};
export default function NewsPage() {
  return (
    <>
      <Template>
        <NewsHero />
        <NewsGrid /> 
      </Template>
    </>
  );
}
