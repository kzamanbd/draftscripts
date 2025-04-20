/** @type {import('next').NextConfig} */

const nextConfig = {
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

module.exports = nextConfig;
