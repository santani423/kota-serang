"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { Moon, Sun } from "lucide-react";
import MobileNav from "@/components/layout/mobileNav";
import DekstopNav from "@/components/layout/dekstopNav";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setTheme } from "@/store/themeSlice";

export default function Header() {
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);

  // Scroll effect
  const handleScroll = useCallback(() => {
    setIsScrolling(window.scrollY > 40);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Load theme dari localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${
          isScrolling
            ? "h-14 shadow-lg backdrop-blur-lg"
            : "h-16 backdrop-blur-md"
        }
          bg-[#DDE1D5]/80 dark:bg-gray-900/70
      `}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Image
          src={Logo}
          alt="Logo"
          className={`
            w-auto transition-all duration-300
            ${isScrolling ? "h-8" : "h-10"}
          `}
        />

        <div className="custom-container flex p-2 hidden xl:flex rounded-md transition">
          <DekstopNav />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md  hover:bg-gray-200 dark:hover:bg-gray-800 transition text-white hover:text-black"
          >
            {isMounted ? (
              theme === "dark" ? (
                <Sun className="w-5 h-5 text-slate-500" />
              ) : (
                <Moon className="w-5 h-5 text-slate-500" />
              )
            ) : null}
          </button>

          {/* Mobile Menu */}
          <div className="p-2 rounded-md hover:bg-gray-200   hover:text-black dark:hover:bg-gray-800 transition   xl:hidden">
            <MobileNav />
          </div>
          <a href="/">
          <div className="custom-container flex p-2 hidden   xl:flex rounded-md transition">
            <Button  className="flex items-center justify-center text-white gap-2 bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 py-3 rounded-xl font-medium transition">
              Sampaikan Aspirasi
            </Button>
          </div>
          </a>
        </div>
      </div>
    </header>
  );
}
