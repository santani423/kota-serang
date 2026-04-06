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

import {
  UsersIcon,
  BuildingOffice2Icon,
  DocumentCheckIcon,
  ChartBarIcon,
  BuildingStorefrontIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

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
  UsersIcon: UsersIcon,
  BuildingOffice2Icon: BuildingOffice2Icon,
  DocumentCheckIcon: DocumentCheckIcon,
  ChartBarIcon: ChartBarIcon,
  BuildingStorefrontIcon: BuildingStorefrontIcon,
  AcademicCapIcon: AcademicCapIcon,
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
