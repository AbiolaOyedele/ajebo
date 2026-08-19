import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A package-lock.json sits above this folder in the home directory, which
  // would otherwise make Turbopack infer the wrong workspace root.
  turbopack: { root: path.resolve(".") },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
