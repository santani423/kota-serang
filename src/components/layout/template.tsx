"use client";

import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";
import Suport from "@/components/layout/Suport";
import AccessibilityComponent from "@/components/layout/Accessibility/accessibility";
import { useAppDispatch } from "@/store/hooks";
import { fetchSettingsCorMenu } from "@/lib/services/settingsServices";
import { setMenu } from "@/store/settingsSlice";
import { Button } from "../ui/button";
import { Metadata } from "next";
import { postSupport } from "@/lib/services/settingsServices";

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
    postSupport({
      email: "serang kota vewbsite",
      hp: Date.now().toString(),
      message: new Date().toLocaleString("id-ID"),
    });
  }, []);
  return (
    <>
      <Header />
      <main className="min-h-screen bg-serang-bg dark:bg-serang-bg-dark">
        {children}
      </main>
      <AccessibilityComponent />
      <Suport />
      <Footer />
      <div className="fixed bottom-4 left-20 z-50">
        <Button variant={"outline"}>
          {" "}
          <span className="gradient-title"> Web Konsep </span>{" "}
        </Button>
      </div>
    </>
  );
}
