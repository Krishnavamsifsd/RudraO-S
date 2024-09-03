/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost" ,'img.freepik.com' ,'ielts.thescorebooster.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
