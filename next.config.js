/** @type {import('next').NextConfig} */
const { env } = process;

const nextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
