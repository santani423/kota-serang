"use client";

import { useEffect } from "react";
import Template from "@/components/layout/template";
import HeroSection from "@/components/layout/hompage/HeroSection";
import QuickServicesSection from "@/components/layout/hompage/QuickServicesSection";
import NewsPreviewSection from "@/components/layout/hompage/NewsPreviewSection";
import StatisticsSection from "@/components/layout/hompage/StatisticsSection";
import AspirasiSection from "@/components/layout/hompage/AspirasiSection";
import {
  fetchSettingsHomepage,
  fetchSettingsImageHomepage,
} from "@/lib/services/settingsServices";
import {
  setImageHomepage,
  setStatistikHeroSection,
  setQuickServicesSection,
  setNewsItemHomepage,
  setCityStats,setPerformanceMetrics,setServiceFeatures,
  setLoading,
} from "@/store/settingsSlice";
import { useAppDispatch } from "@/store/hooks";

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getData = async () => {
      dispatch(setLoading(true));
      try {
        const homepage = await fetchSettingsHomepage();
        console.log("homepage", homepage);
        dispatch(setStatistikHeroSection(homepage.data.StatistikHeroSection));
        dispatch(setQuickServicesSection(homepage.data.QuickServicesSection));
        dispatch(setNewsItemHomepage(homepage.data.NewsItemHomepage));
        dispatch(setPerformanceMetrics(homepage.data.PerformanceMetrics));
        dispatch(setServiceFeatures(homepage.data.ServiceFeatures));
        dispatch(setCityStats(homepage?.data?.CityStats || []));
        const imgHomepage = await fetchSettingsImageHomepage();
        dispatch(setImageHomepage(imgHomepage.data));
      } catch (err) {
        console.error(err);
      } finally {
        dispatch(setLoading(false));
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
