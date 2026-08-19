import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/logo.jpg",
        destination: "/logo.png",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
