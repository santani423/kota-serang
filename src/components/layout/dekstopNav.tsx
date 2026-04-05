"use client";

import { useEffect, useState } from "react";
import { fetchSettingsCorMenu } from "@/lib/settings";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CorMenu, SubMenu } from "@/types/settings";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; 

export default function DesktopNav() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<CorMenu[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchSettingsCorMenu();
        console.log("fetchSettingsCorMenu", res);

        setMenu(res.data); // sesuaikan dengan response API
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menu?.map((item) => {
          // Cek apakah item ini atau salah satu sub-menunya sedang aktif
          const subMenu: SubMenu[] = item.subMenu || [];
          const isActive =
            pathname === item.href ||
            subMenu.some((sub: SubMenu) => pathname.startsWith(sub?.href));

          // JIKA ADA SUB-MENU: Render Dropdown
          if (item.subMenu) {
            return (
              <NavigationMenuItem key={item.code}>
                <NavigationMenuTrigger
                  className={`${navigationMenuTriggerStyle()} group relative px-6 py-2 transition ${
                    isActive
                      ? "text-green-600"
                      : "text-white hover:text-slate-900"
                  }`}
                >
                  {item.title}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-1/2 h-[2px] bg-green-500 transition ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </NavigationMenuTrigger>

                <NavigationMenuContent className="bg-white rounded-lg shadow-lg p-0">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.subMenu.map((sub) => (
                      <li key={sub.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={sub.href}
                            className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-accent-foreground ${
                              pathname.startsWith(sub.href)
                                ? "bg-slate-50 text-green-600 font-medium"
                                : ""
                            }`}
                          >
                            <div className="text-sm font-semibold leading-none">
                              {sub.title}
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500 mt-1">
                              {sub.desc}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          // JIKA TIDAK ADA SUB-MENU: Render Link Biasa
          return (
            <NavigationMenuItem key={item.code}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={`${navigationMenuTriggerStyle()} group relative px-6 py-2 transition ${
                    pathname === item.href
                      ? "text-green-600"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {item.title}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-1/2 h-[2px] bg-green-500 transition ${
                      pathname === item.href
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
