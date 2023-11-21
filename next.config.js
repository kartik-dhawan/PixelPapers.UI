/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // reactStrictMode: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "assets.ctfassets.net",
        pathname: "**",
      },
    ],
  },
}

module.exports = nextConfig
