import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow phones/other devices on the LAN to reach dev-only resources (HMR, etc.).
  // Next 16 blocks cross-origin dev requests by default.
  allowedDevOrigins: ["192.168.1.110", "192.168.1.*"],
};

export default nextConfig;
