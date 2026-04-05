import { useEffect, useState } from "react";
import Template from "@/components/layout/template";
import HeroSection from "@/components/layout/hompage/HeroSection";
import QuickServicesSection from "@/components/layout/hompage/QuickServicesSection";
import NewsPreviewSection from "@/components/layout/hompage/NewsPreviewSection";
import StatisticsSection from "@/components/layout/hompage/StatisticsSection";
import AspirasiSection from "@/components/layout/hompage/AspirasiSection";
import type { CorMenu, SubMenu } from "@/types/settings";
import { fetchSettingsCorMenu } from "@/lib/settings";

export default function Home() {
  const [menu, setMenu] = useState<CorMenu[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchSettingsCorMenu();

        setMenu(res.data);
      } catch (err) {
        console.error(err);
      }
    }; 
    getData();
  }, []);
  return (
    <>
      <Template>
        <HeroSection />
        <QuickServicesSection />
        <NewsPreviewSection />
        <StatisticsSection />
        <AspirasiSection />
      </Template>
    </>
  );
}
