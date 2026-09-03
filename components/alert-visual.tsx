"use client";

import { SlackLogo } from "@phosphor-icons/react/dist/ssr";
import { motion, useReducedMotion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.35 } },
};

const row: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function AlertVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="w-full rounded-xl border border-border bg-surface/60 p-6 font-mono text-[11px] shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]">
      <div className="flex items-center justify-between text-paper-faint">
        <span>alerts / rules</span>
        <span className="flex items-center gap-1.5 text-danger-soft">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-danger"
            animate={reduce ? {} : { opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
          firing
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 border-t border-border-soft pt-4">
        <div>
          <p className="text-[13px] text-paper">checkout_payment error rate</p>
          <p className="mt-1 text-paper-faint">
            &gt; 5% &middot; 15m window &middot; 2 consecutive breaches
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-danger/40 bg-danger/10 px-2.5 py-1 text-danger-soft">
          8.2%
        </span>
      </div>

      <motion.div
        initial={reduce ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={container}
        className="mt-4 flex flex-col gap-2 border-t border-border-soft pt-4"
      >
        <motion.div
          variants={row}
          className="flex items-center gap-2 text-paper-dim"
        >
          <SlackLogo weight="fill" className="h-3.5 w-3.5 text-paper-faint" />
          <span>#incidents-checkout</span>
          <span className="ml-auto text-paper-faint">0.4s</span>
        </motion.div>
        <motion.div variants={row} className="text-paper-faint">
          Delivered on the second consecutive breach — before anyone opened
          the dashboard.
        </motion.div>
      </motion.div>
    </div>
  );
}
