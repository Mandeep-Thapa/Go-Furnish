/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["your-image-domain.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://your-dotnet-api.com/api/:path*",
      },
      {
        source: "/admin",
        destination: "/admin/index",
      },
      {
        source: "/admin/:path*",
        destination: "/admin/:path*",
      },
    ]
  },
}

module.exports = nextConfig

