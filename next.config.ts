import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/logo.jpg",
        destination: "/nca-emblem.svg",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
