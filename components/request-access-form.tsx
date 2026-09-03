"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { useState, type FormEvent } from "react";

// Overridable for local dev against a docker-compose stack
// (NEXT_PUBLIC_ACCESS_REQUESTS_ENDPOINT=http://localhost:8080/api/v1/access-requests).
// Production default is the ECC query service's public domain.
const ENDPOINT =
  process.env.NEXT_PUBLIC_ACCESS_REQUESTS_ENDPOINT ??
  "https://console.mcpobs.dev/api/v1/access-requests";

type Status = "idle" | "submitting" | "success" | "error";

export function RequestAccessForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // Honeypot: real visitors never see or fill this field (see the
    // hidden input below). If it's non-empty, the backend just pretends
    // success -- no point telling the caller anything went wrong.
    const company = String(form.get("company") ?? "");

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          org_name: String(form.get("org_name") ?? ""),
          email: String(form.get("email") ?? ""),
          company,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(
          body?.detail ?? "Something went wrong. Try again in a moment."
        );
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-8 rounded-xl border border-signal/30 bg-signal/10 px-6 py-4 text-sm text-paper">
        Thanks — we&apos;ll follow up by email to set up your first
        organisation.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 flex flex-col items-center gap-3">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
        <label className="sr-only" htmlFor="org_name">
          Org name
        </label>
        <input
          id="org_name"
          name="org_name"
          type="text"
          required
          maxLength={200}
          placeholder="Org name"
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-paper placeholder:text-paper-faint focus:border-signal focus:outline-none sm:w-56"
        />

        <label className="sr-only" htmlFor="email">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          placeholder="Work email"
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-paper placeholder:text-paper-faint focus:border-signal focus:outline-none sm:w-64"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-signal-ink transition-transform active:scale-[0.98] disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Request access"}
          {status !== "submitting" && (
            <ArrowRight
              weight="bold"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            />
          )}
        </button>
      </div>

      {status === "error" && (
        <p className="text-[13px] text-danger-soft">{error}</p>
      )}
    </form>
  );
}
