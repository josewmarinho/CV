/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: { 
//     remotePatterns: [
//       {protocol: "https", hostname: "**"}
//     ],
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/auth/:path*',
//         destination: '/auth/:path*',
//       },
//       {
//         source: '/minha-conta/pedidos/:path*',
//         destination: '/minha-conta/pedidos/:path*',
//       },
//       {
//         source: '/:path/p/:product*',
//         destination: '/produtos/:path/p/:product*',
//       },
//     ]
//   },
// }

// module.exports = nextConfig
