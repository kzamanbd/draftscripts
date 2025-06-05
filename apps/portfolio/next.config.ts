import { userMeta } from '@repo/shared';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    poweredByHeader: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**'
            }
        ]
    },
    publicRuntimeConfig: {
        siteURL: userMeta.siteURL,
        sitemapURL: `${userMeta.siteURL}/sitemap.xml`
    }
};

export default nextConfig;

