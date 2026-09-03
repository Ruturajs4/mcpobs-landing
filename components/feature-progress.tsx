import { ProgressVisual } from "./progress-visual";

export function FeatureProgress() {
  return (
    <section className="border-y border-border-soft bg-surface/20 py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-medium tracking-tight text-paper md:text-4xl">
          Watch it while it runs.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-paper-dim">
          A span exports when it ends, so a ten-minute tool stays silent for
          ten minutes unless progress reports its own.
        </p>

        <div className="mt-14">
          <ProgressVisual />
        </div>
      </div>
    </section>
  );
}
