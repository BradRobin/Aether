import type { LucideIcon } from "lucide-react";
import {
  Archive,
  Globe,
  LayoutDashboard,
  LineChart,
  Settings,
  SlidersHorizontal,
} from "lucide-react";

export type SidebarNavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export type TopNavItem = {
  title: string;
  href: string;
};

export const sidebarNav: SidebarNavItem[] = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Geospatial", href: "/geospatial", icon: Globe },
  { title: "Analysis", href: "/analysis", icon: LineChart },
  { title: "Operations", href: "/operations", icon: SlidersHorizontal },
  { title: "Archive", href: "/archive", icon: Archive },
];

export const topNav: TopNavItem[] = [
  { title: "Mission Control", href: "/mission-control" },
  { title: "Analysis", href: "/analysis" },
  { title: "Fleet", href: "/fleet" },
];

export const sidebarFooterNav: SidebarNavItem[] = [
  { title: "Settings", href: "/settings", icon: Settings },
];

/** Shell layout constants (Stitch: 256px sidebar, 64px header) */
export const SHELL = {
  headerHeight: "4rem",
  sidebarWidth: "16rem",
  statusBarHeight: "2rem",
} as const;
