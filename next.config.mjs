/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true, // Trigger rebuild
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
