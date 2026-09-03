import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "mcpobs - Observability built for MCP servers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [sans, mono] = await Promise.all([
    readFile(join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf")),
    readFile(join(process.cwd(), "node_modules/geist/dist/fonts/geist-mono/GeistMono-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090b",
          color: "#f2f3f4",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="76" height="76" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="9" fill="#08090b" />
            <rect x="1" y="1" width="30" height="30" rx="8" stroke="#f2f3f4" strokeOpacity="0.25" strokeWidth="1.5" />
            <path
              d="M8 20.5L12.5 11.5L16.5 18.5L19.5 13L24 20.5"
              stroke="#29e0e8"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontFamily: "Geist Mono", fontSize: 58, letterSpacing: -1.5 }}>mcpobs</span>
        </div>
        <div style={{ marginTop: 30, fontSize: 30, color: "#a6acb4", maxWidth: 840, textAlign: "center" }}>
          Observability built for MCP servers
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: sans, weight: 500 },
        { name: "Geist Mono", data: mono, weight: 500 },
      ],
    },
  );
}
