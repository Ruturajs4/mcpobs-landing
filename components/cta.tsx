import { RequestAccessForm } from "./request-access-form";

export function Cta() {
  return (
    <section id="request-access" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="relative overflow-hidden rounded-xl border border-border px-8 py-16 text-center sm:px-16"
          style={{
            backgroundImage:
              "radial-gradient(60% 80% at 50% 0%, rgba(41,224,232,0.10), transparent 70%)",
          }}
        >
          <h2 className="mx-auto max-w-lg text-3xl font-medium tracking-tight text-paper md:text-4xl">
            Currently invite-only, while we work directly with early teams.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-paper-dim">
            Tell us about your org and we&apos;ll set up your first
            organisation.
          </p>

          <RequestAccessForm />
        </div>
      </div>
    </section>
  );
}
