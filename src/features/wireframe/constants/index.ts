
import {
  User, Leaf, Briefcase, Bot, MonitorSmartphone, ShoppingCart, BookOpen, LayoutGrid, Globe, Video
} from "lucide-react";
import { Route } from "../types";

export const CARD_CLASSES = "group relative rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-4 flex flex-col gap-2 min-h-[120px] shadow-sm hover:shadow-md text-left w-full";
export const INPUT_CLASSES = "rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20 w-full";
export const BUTTON_CLASSES = "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-medium transition-transform active:scale-95";
export const STORAGE_KEY = "tdhub_linkinbio_v1";

export const routes: Route[] = [
  { icon: User, title: "Creator Link-in-Bio", subtitle: "Profile • Buttons • Styles • Features" },
  { icon: Leaf, title: "Cannabis Brand Page", subtitle: "Strains • Menu • Compliance" },
  { icon: Briefcase, title: "Agency Page", subtitle: "Web • Branding • Social" },
  { icon: Bot, title: "AI Course Page", subtitle: "Curriculum • Checkout • Drip" },
  { icon: MonitorSmartphone, title: "Personal Dashboard", subtitle: "Ops • Tasks • Integrations" },
  { icon: ShoppingCart, title: "E‑commerce Page", subtitle: "Catalog • Cart • Checkout" },
  { icon: BookOpen, title: "Blog", subtitle: "Posts • Tags • SEO" },
  { icon: LayoutGrid, title: "Empty Slot A", subtitle: "Reserve" },
  { icon: LayoutGrid, title: "Empty Slot B", subtitle: "Reserve" },
  { icon: LayoutGrid, title: "Empty Slot C", subtitle: "Reserve" },
  { icon: Globe, title: "External Sites Hub", subtitle: "Open multiple sites" },
  { icon: Video, title: "Live/Video Features", subtitle: "Video chat • Tips" },
];
