import Link from "next/link";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { LogoMark } from "./logo-mark";

export function Footer() {
  return (
    <footer className="border-t border-border-soft py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <LogoMark className="h-6 w-6 text-paper-dim" />
          <span className="font-mono text-sm text-paper-dim">
            mcpobs. Apache-2.0 core, managed control plane on top.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/Ruturajs4/mcpobs"
            className="flex items-center gap-2 text-sm text-paper-dim transition-colors hover:text-paper"
          >
            <GithubLogo weight="regular" className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href="https://docs.mcpobs.dev"
            className="text-sm text-paper-dim transition-colors hover:text-paper"
          >
            Docs
          </Link>
          <Link
            href="#request-access"
            className="text-sm text-paper-dim transition-colors hover:text-paper"
          >
            Request access
          </Link>
        </div>
      </div>
    </footer>
  );
}
