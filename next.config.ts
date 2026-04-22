import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  basePath,
  // assetPrefix must match basePath so browsers can load static files
  // even when a reverse proxy strips the path prefix before forwarding
  assetPrefix: basePath,
};

export default nextConfig;
