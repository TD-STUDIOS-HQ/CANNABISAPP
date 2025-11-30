
import { ChevronRight } from "lucide-react";
import { Route } from "../types";
import { CARD_CLASSES } from "../constants";

interface RouteCardProps extends Route {
  onClick: () => void;
}

export function RouteCard({ icon: Icon, title, subtitle, onClick }: RouteCardProps) {
  return (
    <button onClick={onClick} className={CARD_CLASSES}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-white/10 bg-white/10 p-2"><Icon className="size-5" /></div>
          <div className="text-left">
            <div className="font-semibold">{title}</div>
            {subtitle ? <div className="text-xs text-white/70">{subtitle}</div> : null}
          </div>
        </div>
        <ChevronRight className="size-4 opacity-60 group-hover:translate-x-0.5 transition" />
      </div>
      <div className="mt-auto pt-3 grid grid-cols-3 gap-2 text-[10px] text-white/60">
        <div className="rounded-lg border border-white/10 bg-black/10 px-2 py-1 text-center">Config</div>
        <div className="rounded-lg border border-white/10 bg-black/10 px-2 py-1 text-center">Preview</div>
        <div className="rounded-lg border border-white/10 bg-black/10 px-2 py-1 text-center">Launch</div>
      </div>
    </button>
  );
}
