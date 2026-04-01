import Template from "@/components/layout/template";
import ServicesHero from "@/components/layout/PublicServices/ServicesHero";
import ServicesGrid from "@/components/layout/PublicServices/ServicesGrid";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Publik — SerangKota Portal Resmi Pemerintah Kota Serang",
  description:
    "Akses 120+ layanan publik digital Pemerintah Kota Serang — perizinan, kependudukan, kesehatan, pendidikan, dan lainnya. Cepat, mudah, terpercaya.",
};
export default function Home() {
  return (
    <>
      <Template>
        <main className="min-h-screen bg-serang-bg dark:bg-serang-bg-dark">
          <ServicesHero />
          <ServicesGrid />
        </main>
      </Template>
    </>
  );
}
