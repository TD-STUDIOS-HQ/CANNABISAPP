
import { motion } from "framer-motion";
import { Grid, ArrowLeft } from "lucide-react";
import { BUTTON_CLASSES, routes } from "../constants";
import { Route } from "../types";
import { RouteCard } from "./RouteCard";

interface RoutePickerStageProps {
  onBack: () => void;
  onSelect: (route: Route) => void;
}

export const RoutePickerStage = ({ onBack, onSelect }: RoutePickerStageProps) => {
  return (
    <motion.section key="routes" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="grid gap-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3"><Grid className="size-4 opacity-70" /><div className="text-sm font-semibold">Pick a Route</div></div>
          <div className="text-xs text-white/60">Step 2 of 3</div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {routes.map(route => (<RouteCard key={route.title} {...route} onClick={() => onSelect(route)} />))}
      </div>
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <button onClick={onBack} className={`${BUTTON_CLASSES} border border-white/15 text-sm text-white/80 hover:bg-white/10`}><ArrowLeft className="size-4" /> Back</button>
        <div className="text-xs text-white/60"><span>Next: choose a card to expand configuration →</span></div>
      </div>
    </motion.section>
  );
};
