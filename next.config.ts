import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  module: {
    rules: [
      {
        test: /\.svg$/, // Match all `.svg` files
        use: [
          {
            loader: "@svgr/webpack", // Convert SVG to React components
            options: {
              icon: true, // Optional: Adjust SVGR options here
            },
          },
        ],
      },
    ],
  },
};

export default nextConfig;
