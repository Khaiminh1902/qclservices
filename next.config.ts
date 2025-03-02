// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      { source: "/vn", destination: "/" },
      { source: "/vn/about_vn", destination: "/about_vn" },
      { source: "/vn/services_vn", destination: "/services_vn" },
      { source: "/vn/contact_vn", destination: "/contact_vn" },
      { source: "/en", destination: "/" }, // English homepage
      { source: "/en/about", destination: "/about" },
      { source: "/en/services", destination: "/services" },
      { source: "/en/contact", destination: "/contact" },
    ];
  },
};

export default nextConfig;