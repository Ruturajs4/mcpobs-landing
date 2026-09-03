"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

interface Span {
  name: string;
  start: number;
  width: number;
  kind: "ok" | "error" | "child";
}

const SPANS: Span[] = [
  { name: "tools/call search_docs", start: 0, width: 78, kind: "ok" },
  { name: "db.query postgres", start: 8, width: 22, kind: "child" },
  { name: "tools/call fetch_ticket", start: 30, width: 40, kind: "ok" },
  { name: "http.request api.internal", start: 34, width: 18, kind: "child" },
  { name: "tools/call update_status", start: 74, width: 20, kind: "error" },
];

const KIND_STYLES: Record<Span["kind"], string> = {
  ok: "bg-signal/70",
  child: "bg-paper-dim/40",
  error: "bg-danger/80",
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const bar: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function TraceWaterfall() {
  const reduce = useReducedMotion();

  return (
    <div className="w-full rounded-xl border border-border bg-surface/60 p-5 font-mono text-[11px] shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]">
      <div className="mb-4 flex items-center justify-between text-paper-faint">
        <span>trace_id 7f3a1c…e92b</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-danger" />
          1 failing span
        </span>
      </div>

      <motion.div
        className="flex flex-col gap-2.5"
        initial={reduce ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container}
      >
        {SPANS.map((span) => (
          <div key={span.name} className="flex items-center gap-3">
            <span
              className={`w-40 shrink-0 truncate ${
                span.kind === "error" ? "text-danger-soft" : "text-paper-dim"
              }`}
            >
              {span.name}
            </span>
            <div className="relative h-4 flex-1">
              <motion.div
                className={`absolute inset-y-0 origin-left rounded-sm ${KIND_STYLES[span.kind]}`}
                style={{ left: `${span.start}%`, width: `${span.width}%` }}
                variants={bar}
              />
            </div>
          </div>
        ))}
      </motion.div>

      <div className="mt-4 flex items-center justify-between border-t border-border-soft pt-3 text-paper-faint">
        <span>error.type</span>
        <span className="text-danger-soft">tool_error</span>
      </div>
    </div>
  );
}
