const KINDS = [
  {
    name: "tool_error",
    detail: "Everything your tool code raised or returned as isError.",
  },
  {
    name: "unknown_tool",
    detail: "The SDK rejected the call before your handler ran.",
  },
  {
    name: "invalid_arguments",
    detail: "Schema validation failed against the tool's input.",
  },
  {
    name: "protocol_error",
    detail: "An MCP-level failure below any single tool.",
  },
  {
    name: "401 / 403",
    detail: "Auth flow states from the spec, never counted as failures.",
  },
];

export function FeatureClassification() {
  return (
    <section id="product" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-paper md:text-4xl">
            Failures, classified. Not counted.
          </h2>
          <p className="mt-4 text-paper-dim">
            A generic error rate collapses five different problems into one
            number. Each of these has a different owner and a different fix.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {KINDS.map((kind) => (
            <div
              key={kind.name}
              className="rounded-xl border border-border bg-surface/40 p-5"
            >
              <p className="font-mono text-[13px] text-signal">{kind.name}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-paper-dim">
                {kind.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
