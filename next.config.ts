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
  // No basePath/assetPrefix: mcpobs.dev (see public/CNAME) serves from the
  // root, unlike the ruturajs4.github.io/mcpobs-landing/ URL this used
  // before the custom domain existed.
};

export default nextConfig;
