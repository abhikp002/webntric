import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/services/web-development",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/services/seo",
        destination: "/services/seo-services",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/for-startups",
        destination: "/startup-technology-partner",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
