// import withBundleAnalyzer from "@next/bundle-analyzer"

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'bnsyauupzwhhsloomymu.supabase.co',
      },
    ],
  },
}

// const bundleConfig = withBundleAnalyzer(nextConfig)
// export default bundleConfig
export default nextConfig
