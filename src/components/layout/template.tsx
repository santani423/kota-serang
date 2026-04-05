"use client";

import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";
import AccessibilityComponent from "@/components/layout/Accessibility/accessibility";
import { Accessibility } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { fetchSettingsCorMenu } from "@/lib/settings";
import { setMenu } from "@/store/settingsSlice";


export default function Template({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch(); 
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchSettingsCorMenu(); 
        dispatch(setMenu(res.data));
      } catch (err) {
        console.error(err);
      }
    }; 
    getData();
  }, []);
  return (
    <>
      <Header />
      <main className="min-h-screen bg-serang-bg dark:bg-serang-bg-dark">{children}</main>
      <AccessibilityComponent />
      <Footer />
    </>
  );
}
