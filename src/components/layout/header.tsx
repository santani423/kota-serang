"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { Moon, Sun } from "lucide-react";
import MobileNav from "@/components/layout/mobileNav";
import DekstopNav from "@/components/layout/dekstopNav";
import { Button } from "../ui/button";

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Scroll effect
  const handleScroll = useCallback(() => {
    setIsScrolling(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Load theme dari localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
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

        <div className="custom-container flex p-2 hidden md:flex xl:flex rounded-md transition">
          <DekstopNav />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md  hover:bg-gray-200 dark:hover:bg-gray-800 transition text-white hover:text-black"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-slate-500" />
            ) : (
              <Moon className="w-5 h-5 text-slate-500" />
            )}
          </button>

          {/* Mobile Menu */}
          <div className="p-2 rounded-md hover:bg-gray-200   hover:text-black dark:hover:bg-gray-800 transition md:hidden xl:hidden">
            <MobileNav />
          </div>
          <div className="custom-container flex p-2 hidden md:flex xl:flex rounded-md transition">
            <Button>Sampaikan Aspirasi</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
