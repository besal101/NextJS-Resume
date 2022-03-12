/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVICEID: 'YOUR SERVICE ID HERE',
    TEMPLATEID: 'YOUR TEMPLATE ID HERE',
    USERID: 'YOUR USER ID HERE',
  },
};

module.exports = nextConfig;
