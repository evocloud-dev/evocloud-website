import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['upload.wikimedia.org', "www.drupal.org", "avatar.iran.liara.run", "wso2.cachefly.net"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
