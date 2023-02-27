/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
    env: {
        GITHUB_KEY: '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',
    },
};

module.exports = nextConfig;
