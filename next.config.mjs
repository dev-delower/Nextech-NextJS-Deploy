/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all HTTPS image hosts
      },
      {
        protocol: "http",
        hostname: "**", // allow all HTTP image hosts (optional)
      },
    ],
  },
};

export default nextConfig;
