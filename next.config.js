/** @type {import('next').NextConfig} */
const { env } = process;
const path = require('path');
console.log('aaa - __dirname: ', __dirname);

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
