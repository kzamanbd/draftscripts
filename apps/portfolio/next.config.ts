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
        siteURL: 'https://kzaman.me',
        sitemapURL: `https://kzaman.me/sitemap.xml`
    }
};

export default nextConfig;

