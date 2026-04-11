"use client";

import { useEffect } from "react";
import {
  fetchSettingsHomepage,
  fetchSettingsImageHomepage,
} from "@/lib/services/settingsServices";
import {
  setImageHomepage,
  setStatistikHeroSection,
  setQuickServicesSection,
  setNewsItemHomepage,
  setCityStats,
  setPerformanceMetrics,
  setServiceFeatures,
  setLoading,
} from "@/store/settingsSlice";
import { useAppDispatch } from "@/store/hooks";

export default function HomeClient() {
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
  }, [dispatch]);
  return null;
}