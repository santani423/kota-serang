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
  subMenu?: SubMenu[];
};