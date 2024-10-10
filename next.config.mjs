/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    reactStrictMode: false,
    productionBrowserSourceMaps: true,
    poweredByHeader: false,
    headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=60, s-maxage=600, stale-while-revalidate=14400, stale-if-error=14400',
                    },
                ],
            },
        ];
    },
    images: {
        deviceSizes: [390, 430, 460, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 64],
        minimumCacheTTL: 1200,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default withNextIntl(nextConfig);
