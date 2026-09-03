import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

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
            Tell us about your MCP server and we&apos;ll set up your first
            organisation.
          </p>

          <Link
            href="mailto:ruturajshinde2807@gmail.com?subject=Request%20access"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-signal-ink transition-transform active:scale-[0.98]"
          >
            Request access
            <ArrowRight
              weight="bold"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
