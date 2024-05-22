// import withBundleAnalyzer from "@next/bundle-analyzer"

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      // {
      //   protocol: 'http',
      //   hostname: 'img.bbystatic.com',
      // },
      {
        protocol: 'https',
        hostname: 'youtube.com',
      },
    ],
  },
}

// const bundleConfig = withBundleAnalyzer(nextConfig)
// export default bundleConfig
export default nextConfig
