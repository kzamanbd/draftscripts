import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    poweredByHeader: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'sandbox.sslcommerz.com'
            }
        ]
    }
};

export default nextConfig;

