/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: "https",
        hostname: "*.pravatar.cc",
        pathname: '/**',

      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
  webpack: (config) => {
    // 添加 SVG 文件支持的自定义处理规则
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'], // 使用 SVGR 进行处理
    });

    return config;
  },
};

export default nextConfig;
