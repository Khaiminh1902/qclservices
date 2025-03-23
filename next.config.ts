import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      { source: "/vn", destination: "/" },
      { source: "/vn/about_vn", destination: "/about_vn" },
      { source: "/vn/services_vn", destination: "/services_vn" },
      { source: "/vn/contact_vn", destination: "/contact_vn" },
      { source: "/vn/blog", destination: "/blog_vn" },
      { source: "/vn/blog/:id", destination: "/blog_vn/:id" }, // Add rewrite for Vietnamese blog detail page
      { source: "/en", destination: "/" },
      { source: "/en/about", destination: "/about" },
      { source: "/en/services", destination: "/services" },
      { source: "/en/contact", destination: "/contact" },
      { source: "/en/blog", destination: "/blog" },
      { source: "/en/blog/:id", destination: "/blog/:id" }, // Add rewrite for English blog detail page
    ];
  },
};

export default nextConfig;