/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.*.*',
                pathname: '/**/*',
            }
        ]
    },
    nextConfig: nextConfig,
}
