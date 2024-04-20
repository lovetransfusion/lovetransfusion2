// import withBundleAnalyzer from "@next/bundle-analyzer"

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}

// const bundleConfig = withBundleAnalyzer(nextConfig)
// export default bundleConfig
export default nextConfig
