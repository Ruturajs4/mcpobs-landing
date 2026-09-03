import { Check } from "@phosphor-icons/react/dist/ssr";

const POINTS = [
  "Failure text is read once, reduced to an enum, then discarded.",
  "Tool arguments and results stay off by default.",
  "Works the same whether your server runs over stdio or HTTP.",
];

export function Integration() {
  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-medium tracking-tight text-paper md:text-4xl">
            One line. That&apos;s the whole integration.
          </h2>
          <p className="mt-4 text-paper-dim">
            No middleware to wire, no config file to write first.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check
                  weight="bold"
                  className="mt-0.5 h-4 w-4 shrink-0 text-signal"
                />
                <span className="text-[14px] leading-relaxed text-paper-dim">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <pre className="overflow-x-auto rounded-xl border border-border bg-surface p-6 font-mono text-[13px] leading-relaxed">
            <code>
              <span className="text-paper-faint"># pip install mcpobs</span>
              {"\n\n"}
              <span className="text-signal">from</span>
              <span className="text-paper"> mcpobs </span>
              <span className="text-signal">import</span>
              <span className="text-paper"> instrument</span>
              {"\n\n"}
              <span className="text-paper">instrument(mcp)</span>
              <span className="text-paper-faint">
                {"  "}# that is the whole integration
              </span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
