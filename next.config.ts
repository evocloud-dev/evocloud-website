import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   domains: ['upload.wikimedia.org', "www.drupal.org", "avatar.iran.liara.run", "raw.githubusercontent.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all https domains
      },
      {
        protocol: "http",
        hostname: "**", // allow all http domains (if you need)
      },
    ],
    unoptimized: false, // keep optimization enabled, just universal
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
