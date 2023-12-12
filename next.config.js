/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: process.env.NODE_ENV === "development",
      ssr: true,
      fileName: false,
      topLevelImportPaths: ["@emotion/react", "@emotion/styled"],
      cssProp: true,
    },
  },
};

module.exports = nextConfig;
