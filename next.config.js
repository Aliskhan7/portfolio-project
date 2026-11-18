/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  webpack(config) {
    config.infrastructureLogging = { level: "error" };
    return config;
  },
};
