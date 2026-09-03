import { Database, Globe, Sparkle, Broadcast } from "@phosphor-icons/react/dist/ssr";

const CELLS = [
  {
    span: "db",
    title: "Redis, Postgres, MySQL, Mongo, SQLite",
    detail: "System, operation, table, and statement (redacted before storage).",
    icon: Database,
    className: "md:col-span-2 md:row-span-2",
    glow: "radial-gradient(120% 100% at 0% 0%, rgba(41,224,232,0.08), transparent 60%)",
  },
  {
    span: "http",
    title: "httpx, requests, aiohttp",
    detail: "Method, status, host, and body/headers with instrument_httpx().",
    icon: Globe,
    className: "md:col-span-2",
    glow: "radial-gradient(120% 140% at 100% 0%, rgba(41,224,232,0.06), transparent 60%)",
  },
  {
    span: "llm",
    title: "OpenAI, Anthropic, Bedrock",
    detail: "System, model, and input/output token counts.",
    icon: Sparkle,
    className: "md:col-span-1",
    glow: "radial-gradient(140% 140% at 50% 100%, rgba(41,224,232,0.05), transparent 65%)",
  },
  {
    span: "messaging",
    title: "Kafka, RabbitMQ, SQS",
    detail: "Stored and rendered generically, same as everything else.",
    icon: Broadcast,
    className: "md:col-span-1",
    glow: "radial-gradient(140% 140% at 100% 100%, rgba(41,224,232,0.07), transparent 65%)",
  },
];

export function FeatureDownstream() {
  return (
    <section id="how-it-works" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-paper md:text-4xl">
            Your database calls, in context.
          </h2>
          <p className="mt-4 text-paper-dim">
            One opt-in call finds whatever OpenTelemetry instrumentors you
            already installed and reports what it touched.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:auto-rows-[176px] md:grid-cols-4">
          {CELLS.map((cell) => (
            <div
              key={cell.span}
              className={`relative overflow-hidden rounded-xl border border-border p-6 ${cell.className}`}
              style={{ backgroundImage: cell.glow }}
            >
              <cell.icon
                weight="regular"
                className="h-5 w-5 text-signal"
                aria-hidden="true"
              />
              <p className="mt-4 font-mono text-[13px] text-paper">
                {cell.span}
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-paper-dim">
                {cell.title}
              </p>
              <p className="mt-3 text-[12px] leading-relaxed text-paper-faint">
                {cell.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
