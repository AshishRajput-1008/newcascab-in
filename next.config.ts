import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      type: 'asset/resource',
    });
    return config;
  },
  
  // Configure Turbopack to handle video files
  turbopack: {
    rules: {
      '*.mp4': ['file-loader'],
      '*.webm': ['file-loader'],
      '*.ogg': ['file-loader'],
    },
  },
  
  // Optional: Fix cross-origin warnings from your network IP
  experimental: {
    allowedDevOrigins: ['172.20.10.3'],
    turbo: {
      rules: {
        '*.mp4': {
          loaders: ['file-loader'],
          as: '*.js',
        },
        '*.webm': {
          loaders: ['file-loader'],
          as: '*.js',
        },
        '*.ogg': {
          loaders: ['file-loader'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;