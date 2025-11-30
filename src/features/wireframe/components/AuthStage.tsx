
import { motion } from "framer-motion";
import { Lock, LogIn } from "lucide-react";
import { INPUT_CLASSES, BUTTON_CLASSES } from "../constants";

interface AuthStageProps {
  onContinue: () => void;
}

export const AuthStage = ({ onContinue }: AuthStageProps) => {
  return (
    <motion.section key="auth" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mx-auto grid max-w-xl gap-6">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl border border-white/10 bg-white/10 p-2"><Lock className="size-5" /></div>
          <h1 className="text-xl font-semibold">Secure Access</h1>
        </div>
        <div className="grid gap-3">
          <label className="text-xs text-white/70">Username</label>
          <input className={INPUT_CLASSES} placeholder="Enter username" />
          <label className="mt-3 text-xs text-white/70">Password</label>
          <input type="password" className={INPUT_CLASSES} placeholder="••••••••" />
          <div className="mt-3 flex items-center justify-between text-xs">
            <label className="inline-flex items-center gap-2 opacity-80"><input type="checkbox" className="size-3 accent-white/50" /> Remember me</label>
            <button className="opacity-80 underline">Forgot?</button>
          </div>
          <button onClick={onContinue} className={`${BUTTON_CLASSES} mt-6 bg-white text-black`}><LogIn className="size-4" /> Continue</button>
        </div>
      </div>
      <p className="mx-auto max-w-xl text-center text-xs text-white/60">Static wireframe. Button advances to Route Picker.</p>
    </motion.section>
  );
};
