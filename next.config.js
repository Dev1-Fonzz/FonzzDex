/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // Untuk kompilasi sisi server, kita perlu memastikan modul serialport tidak dimasukkan dalam bundle client
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "serialport": false, // Akan digunakan dalam API routes sahaja
    };
    return config;
  },
}

module.exports = nextConfig