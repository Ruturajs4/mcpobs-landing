const STACK = [
  { slug: "opentelemetry", name: "OpenTelemetry" },
  { slug: "apachekafka", name: "Kafka" },
  { slug: "clickhouse", name: "ClickHouse" },
  { slug: "python", name: "Python" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "docker", name: "Docker" },
];

export function BuiltOn() {
  return (
    <section className="border-y border-border-soft py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-sm text-paper-faint">
          Built on the same pipeline you already trust
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {STACK.map((item) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={item.slug}
              src={`https://cdn.simpleicons.org/${item.slug}/a6acb4`}
              alt={item.name}
              className="h-6 w-auto opacity-70 grayscale transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
