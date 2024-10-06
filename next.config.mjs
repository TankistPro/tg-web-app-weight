/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru'],
        localeDetection: false,
    },
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
    webpack(config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default nextConfig;
