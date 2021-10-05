const withPreact = require('next-plugin-preact')
const defaultImageSizes = [80, 160, 320, 480, 768, 1024, 1280]

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        deviceSizes: [
            ...defaultImageSizes,
            ...defaultImageSizes.map(size => size * 2),
        ],
        domains: ['source.unsplash.com'],
    },
}

module.exports = withPreact(nextConfig)
