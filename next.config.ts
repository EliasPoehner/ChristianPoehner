import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keine externen Bilddomains nötig (alle Bilder lokal in /public)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  output: "standalone",
};

export default nextConfig;
