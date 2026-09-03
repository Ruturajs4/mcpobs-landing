"use client";

import { motion, useReducedMotion } from "motion/react";

export function ProgressVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto w-full max-w-3xl rounded-xl border border-border bg-surface/60 p-6">
      <div className="flex items-center justify-between font-mono text-[11px] text-paper-faint">
        <span className="flex items-center gap-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-signal"
            animate={reduce ? {} : { opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          tools/call reindex_workspace - running
        </span>
        <span>02:41</span>
      </div>

      <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-border-soft">
        <motion.div
          className="h-full rounded-full bg-signal"
          initial={reduce ? { width: "64%" } : { width: "4%" }}
          whileInView={{ width: "64%" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-paper-faint">
        <span>1,842 / 2,875 documents</span>
        <span className="text-signal">64%</span>
      </div>
    </div>
  );
}
