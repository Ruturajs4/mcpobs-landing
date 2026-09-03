import Link from "next/link";
import { LogoMark } from "./logo-mark";

const LINKS = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#managed", label: "Managed" },
  { href: "https://docs.mcpobs.dev", label: "Docs" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-soft/80 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark className="h-7 w-7 text-paper" />
          <span className="font-mono text-[15px] font-medium tracking-tight text-paper">
            mcpobs
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-paper-dim transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#request-access"
          className="rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink transition-transform active:scale-[0.98]"
        >
          Request access
        </Link>
      </div>
    </header>
  );
}
