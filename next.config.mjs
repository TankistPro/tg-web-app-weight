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
