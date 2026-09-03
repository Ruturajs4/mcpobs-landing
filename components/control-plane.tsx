import { Buildings, BellRinging, CloudArrowUp } from "@phosphor-icons/react/dist/ssr";
import { AlertVisual } from "./alert-visual";

const POINTS = [
  {
    icon: Buildings,
    title: "Orgs, projects, and scoped API keys",
    detail:
      "Every team's traces are isolated at the query layer, not by convention.",
  },
  {
    icon: BellRinging,
    title: "Self-serve alerts, no operator in the loop",
    detail:
      "Error rate, p95 latency, or call volume — set a threshold, wire a webhook or Slack, done from the console.",
  },
  {
    icon: CloudArrowUp,
    title: "The same open-source stack, run for you",
    detail:
      "No cluster to operate, no upgrades to schedule. You get a key and a URL; we run the pipeline behind it.",
  },
];

export function ControlPlane() {
  return (
    <section
      id="managed"
      className="border-y border-border-soft bg-surface/20 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal">
            Managed control plane
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-paper md:text-4xl">
            The parts you don&apos;t want to run yourself.
          </h2>
          <p className="mt-4 text-paper-dim">
            Orgs, self-serve alerts, and the pipeline behind them — managed,
            so the only thing you operate is your MCP server.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <AlertVisual />
          </div>

          <div className="lg:col-span-6">
            <ul className="flex flex-col gap-8">
              {POINTS.map((point) => (
                <li key={point.title} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface/60">
                    <point.icon
                      weight="regular"
                      className="h-4 w-4 text-signal"
                    />
                  </span>
                  <div>
                    <p className="text-[14px] font-medium text-paper">
                      {point.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-paper-dim">
                      {point.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
