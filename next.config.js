/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: "utfs.io"
        }],
        domains: ["lh3.googleusercontent.com"],
    },
};

module.exports = nextConfig;