import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { TraceWaterfall } from "./trace-waterfall";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 82% 15%, rgba(41,224,232,0.10), transparent 70%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h1 className="text-4xl font-medium leading-[1.05] tracking-tighter text-paper md:text-6xl">
            See which tool failed.
            <br />
            Not just that one did.
          </h1>

          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-paper-dim">
            Purpose-built tracing for MCP servers: classified failures, live
            progress on long-running tools, and every downstream call in
            context.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#request-access"
              className="group inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3 text-sm font-medium text-signal-ink transition-transform active:scale-[0.98]"
            >
              Request access
              <ArrowRight
                weight="bold"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="https://github.com/Ruturajs4/mcpobs"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-paper transition-colors hover:border-paper-dim"
            >
              View the OSS core
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <TraceWaterfall />
        </div>
      </div>
    </section>
  );
}
