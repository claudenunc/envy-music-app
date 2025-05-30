/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
