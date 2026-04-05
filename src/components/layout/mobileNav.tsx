"use client";

import React, { useState } from "react";
import { RootState } from "@/store";  
import { useSelector } from "react-redux";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Menu, ChevronRightIcon, ChevronDownIcon } from "lucide-react"; // Tambahkan icon down untuk indikator buka
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";

export default function MobileNav() {
  // Gunakan string | null agar bisa benar-benar "kosong" saat semua tertutup
  const [active, setActive] = useState<string | null>("beranda");
  const [open, setOpen] = useState(false);
  const menu = useSelector((state: RootState) => state.settings.menu);

  // Fungsi Toggle Submenu
  const toggleSubMenu = (code: string) => {
    setActive((prev) => (prev === code ? null : code));
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open Menu"
          className="p-2 rounded-md hover:bg-white/10 transition"
        >
          <Menu className="w-6 h-6 text-slate-500" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="bg-[#0B1F3A] dark:bg-white text-white border-none w-[85%] sm:w-[400px] overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle>
            <Image src={Logo} alt="Logo" className="h-9 w-auto" priority />
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-6 flex flex-col gap-2 px-2">
          {menu.map((item) => {
            const isActive = active === item.code;
            const hasSubMenu = item.subMenu && item.subMenu.length > 0;

            if (hasSubMenu) {
              return (
                <div key={item.code} className="flex flex-col">
                  <button
                    type="button"
                    // 🔥 Perbaikan: Gunakan fungsi toggleSubMenu
                    onClick={() => toggleSubMenu(item.code)}
                    className={`flex items-center justify-between rounded-xl py-4 px-4 transition-all duration-200 w-full text-left ${
                      isActive
                        ? "bg-[#1E3A8A] shadow-md"
                        : "hover:bg-white/5 text-white/80 dark:text-black/80"
                    }`}
                  >
                    <span className={`font-medium ${isActive ? "text-white" : ""}`}>
                      {item.title}
                    </span>
                    
                    {/* Indikator panah berubah arah saat aktif */}
                    <ChevronRightIcon
                      className={`size-4 transition-transform duration-200 ${
                        isActive ? "rotate-90 text-white" : "opacity-60"
                      }`}
                    />
                  </button>

                  {/* SubMenu dengan animasi sederhana */}
                  {isActive && (
                    <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/20 pl-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.subMenu.map((sub, idx) => (
                        <Link
                          key={sub.href + idx}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="py-3 px-2 rounded hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.code}
                href={item.href}
                onClick={() => {
                  setActive(item.code);
                  setOpen(false);
                }}
                className={`flex items-center justify-between rounded-xl py-4 px-4 transition-all duration-200 ${
                  isActive
                    ? "bg-[#1E3A8A] shadow-md"
                    : "hover:bg-white/5 text-white/80 dark:text-black/80"
                }`}
              >
                <span className={`font-medium ${isActive ? "text-white" : ""}`}>
                  {item.title}
                </span>
                <ChevronRightIcon className="size-4 opacity-60" />
              </Link>
            );
          })}
        </nav>

        <SheetFooter className="mt-8">
          <Button type="button" className="w-full bg-blue-600 hover:bg-blue-700">
            Sampaikan Aspirasi
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}