//add your other devices' IP (allowedDevOrigins: ["10.0.0.0"]) to access the Dev environment from a local network.
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: ["10.0.0.249"],
  images: {
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
