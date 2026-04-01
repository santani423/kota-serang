"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Menu, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const navItems = [
  {
    code: "beranda",
    title: "Beranda",
    href: "/",
  },
  {
    code: "layanan-publik",
    title: "Layanan Publik",
    href: "/public-services",
  },
  {
    code: "berita",
    title: "Berita",
    href: "/news",
  },
  {
    code: "wisata",
    title: "Wisata",
    href: "/",
  },
];

export default function MobileNav() {
  const [active, setActive] = useState("beranda");
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <SheetTrigger asChild>
        <button
          aria-label="Open Menu"
          className="p-2 rounded-md hover:bg-white/10 transition"
        >
          <Menu className="w-6 h-6 text-slate-500" />
        </button>
      </SheetTrigger>

      {/* Content */}
      <SheetContent
        side="left"
        className="bg-[#0B1F3A] dark:bg-white text-white border-none w-[85%] sm:w-[400px]"
      >
        <SheetHeader>
          <SheetTitle>
            <Image src={Logo} alt="Logo" className="h-9 w-auto" priority />
          </SheetTitle>
        </SheetHeader>

        {/* Navigation */}
        <nav className="mt-6 flex flex-col gap-2 px-2">
          {navItems.map((item) => {
            const isActive = active === item.code;

            return (
              <Link
                key={item.code}
                href={item.href}
                onClick={() => {
                  setActive(item.code);
                  setOpen(false); // 🔥 auto close sheet
                }}
                className={`flex items-center justify-between rounded-xl py-4 px-4 transition-all duration-200 ${
                  isActive
                    ? "bg-[#1E3A8A] shadow-md"
                    : "hover:bg-white/5 text-black dark:text-black hover:text-white dark:text-black dark:hover:bg-gray-800/50 dark:text-white/80 dark:hover:text-white"
                }`}
              >
                <span
                  className={`font-medium ${isActive ? "text-white" : "text-white/80 dark:text-black/80"}`}
                >
                  {item.title}
                </span>

                <ChevronRightIcon
                  className={`size-4 transition ${
                    isActive
                      ? "translate-x-1 text-white/80"
                      : "opacity-60 text-white/80 dark:text-black/80"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        <SheetFooter>
          <Button type="submit">Sampaikan Aspirasi</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
