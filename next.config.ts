import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: ".next-runtime",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" }
    ]
  }
};

export default nextConfig;
