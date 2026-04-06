import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  GalleryVerticalEnd,
  Newspaper,
  Users,
  Building2,
  Clock,
  FileText,
  IdCard,
  Heart,
  GraduationCap,
  Truck,
  Store,
} from "lucide-react";

export const iconMap: Record<string, React.ElementType> = {
  Users: Users,
  Building2: Building2,
  Clock: Clock,
  GalleryVerticalEnd: GalleryVerticalEnd,
  Newspaper: Newspaper,
  FileText: FileText,
  IdCard: IdCard,
  Heart: Heart,
  GraduationCap: GraduationCap,
  Truck: Truck,
  Store: Store,
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
