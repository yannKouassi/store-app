import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Définit les qualités autorisées pour <Image />
    qualities: [75, 100],
  },
};

export default nextConfig;
