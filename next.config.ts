/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/contact.php',
        destination: 'http://localhost:8000/contact.php',
      },
    ]
  },
}

module.exports = nextConfig