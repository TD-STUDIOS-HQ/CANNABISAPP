
import { motion } from "framer-motion";
import { Settings, Eye, Rocket, ArrowLeft } from "lucide-react";
import { INPUT_CLASSES, BUTTON_CLASSES } from "../constants";
import { Route } from "../types";

interface ConfigStageProps {
  selectedRoute: Route;
  onBack: () => void;
}

export const ConfigStage = ({ selectedRoute, onBack }: ConfigStageProps) => {
  const Icon = selectedRoute.icon;
  return (
    <motion.section key="config" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="grid gap-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-white/10 bg-white/10 p-2"><Icon className="size-5" /></div>
          <div><h2 className="font-semibold">{selectedRoute.title}</h2><p className="text-xs text-white/70">{selectedRoute.subtitle}</p></div>
        </div>
        <div className="text-xs text-white/60">Step 3 of 3</div>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 grid gap-6">
          <h3 className="text-lg font-semibold flex items-center gap-2"><Settings className="size-5" /> Configuration</h3>
          <div className="grid gap-3"><label className="text-sm font-medium text-white/90">Route Name</label><input className={INPUT_CLASSES} defaultValue={selectedRoute.title} /><p className="text-xs text-white/60">Internal name.</p></div>
          <div className="border-t border-white/10" />
          <div className="grid gap-3">
            <label className="text-sm font-medium text-white/90">Public URL</label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/50 bg-black/20 px-3 py-2 rounded-l-xl border border-r-0 border-white/10">tdstudios.hub/</span>
              <input className={INPUT_CLASSES + " rounded-l-none"} defaultValue={selectedRoute.title.toLowerCase().replace(/\s+/g, '-')}/>
            </div>
            <p className="text-xs text-white/60">Live URL.</p>
          </div>
          <div className="border-t border-white/10" />
          <div className="flex items-center justify-between"><div><label className="text-sm font-medium text-white/90">Status</label><p className="text-xs text-white/60 mt-1">Activate or deactivate this route.</p></div>
            <label className="relative inline-flex cursor-pointer items-center"><input type="checkbox" className="peer sr-only" defaultChecked /><div className="peer h-6 w-11 rounded-full bg-zinc-700 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-zinc-600 after:bg-white after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none"></div></label>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold flex items-center gap-2"><Eye className="size-5" /> Preview</h3>
          <div className="flex-grow rounded-lg bg-black/20 border border-white/10 flex items-center justify-center"><p className="text-xs text-white/50">Live preview unavailable</p></div>
          <button className={`${BUTTON_CLASSES} w-full bg-white/10 text-white/90 hover:bg-white/20`}><Rocket className="size-4" /> Launch</button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <button onClick={onBack} className={`${BUTTON_CLASSES} border border-white/15 text-sm text-white/80 hover:bg-white/10`}><ArrowLeft className="size-4" /> Back to Routes</button>
      </div>
    </motion.section>
  );
};
