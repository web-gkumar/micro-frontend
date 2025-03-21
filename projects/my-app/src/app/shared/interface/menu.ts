export interface Menu {
  title?: string;
  icon?: string;
  link?: string;
  color?: string;
  hideFor?: string;
  expanded?: boolean;
  subMenu?: Menu[];
}

export type Menuitem = Menu[];
