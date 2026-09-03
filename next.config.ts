import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages -- no server, so every route (including
  // opengraph-image.tsx) has to be fully pre-renderable at build time. It
  // already is: no dynamic segments, no next/image usage, nothing else
  // that needs a live server.
  output: "export",
  images: {
    // Next's Image Optimization API needs a server to run; static export
    // never has one. Moot today (no next/image usage), set so it stays
    // correct if that changes.
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
  // GitHub Pages serves a project repo (not a ruturajs4.github.io repo)
  // at /<repo-name>/, so every asset/link needs that prefix baked in.
  // Remove both if/when this moves to a custom domain, where the site
  // lives at the root again.
  basePath: "/mcpobs-landing",
  assetPrefix: "/mcpobs-landing/",
};

export default nextConfig;
