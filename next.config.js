// const { i18n } = require("./next-i18next.config");
//
// module.exports = {
//   i18n,
// };
module.exports = {
  // i18n: {
  //   locales: ["ru", "en"],
  //   defaultLocale: "ru",
  // },
  reactStrictMode: false, // Иногда ворнинги появляются из-за StrictMode
  eslint: {
    ignoreDuringBuilds: true, // Отключает ESLint при билде
  },
  typescript: {
    ignoreBuildErrors: true, // Отключает TypeScript ошибки при билде
  },
  webpack(config) {
    config.infrastructureLogging = { level: "error" }; // Отключает логи Webpack
    return config;
  },
};
