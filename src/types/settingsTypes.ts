export type SubMenu = {
  title?: string;
  href: string;
  desc?: string;
};

export type CorMenu = {
  code: string;
  title?: string;
  href: string;
  desc?: string;
  subMenu: SubMenu[];
};

export type ImageHomepage = {
  code?: string;
  path: string;
};

export type StatistikHeroSection = {
  code: string;
  icon: string;
  desc: string;
  label: string;
  value: string;
};

export type CityStats = {
  code: string;
  icon: string;
  value: number;
  suffix: string;
  label: string;
  sub: string;
  color: string;
  bgColor: string;
};

export type QuickServicesSection = {
  icon: string;
  title: string;
  desc: string;
  color: string;
  bgColor: string;
  span?: string;
  href: string;
};

export type NewsItemHompage = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export type PerformanceMetrics = {
  value: number;
  label: string;
  gradient: string;
};

export type ServiceFeatures = {
  icon: string;
  title: string;
  desc: string;
};

export type CategoryAspirasi = {
  code: string;
  title: string;
  icon: string;
};

export type Support = {
  email?: string;
  hp?: string;
  message?: string;
};

export type SettingsStateHomePage = {
  title?: string;
  description?: string;
  date: string;
  imageHomepage: ImageHomepage[];
  StatistikHeroSection: StatistikHeroSection[];
  QuickServicesSection: QuickServicesSection[];
  PerformanceMetrics: PerformanceMetrics[];
};
