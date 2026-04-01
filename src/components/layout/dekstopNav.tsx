"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
    code: "transparansi",
    title: "Transparansi",
    href: "/transparansi",
  },
  {
    code: "wisata",
    title: "Wisata",
    href: "/wisata",
  },
];

export default function DekstopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.code}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href={item.href}>
                <button className="relative px-6 py-2 text-slate-500 hover:text-slate-900 transition">
                  {item.title}

                  {/* underline center (active style dummy) */}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1/2 h-[2px] bg-green-500 opacity-0 group-hover:opacity-100 transition" />
                </button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}