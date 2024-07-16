import dayjs from "dayjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  env: {
    APP_BUILD_TIME: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  },
};

export default nextConfig;
