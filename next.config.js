const withTM = require("next-transpile-modules")([
  "@stripe/firestore-stripe-payments",
]); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "image.tmdb.org"],
  },
});

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["rb.gy", "image.tmdb.org"],
//   },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//       config.resolve.fallback.net = false;
//       config.resolve.fallback.tls = false;
//       config.resolve.fallback.child_process = false;
//     }
//     return config;
//   },
//   transpilePackages: ["@stripe/firestore-stripe-payments"],
// };

// module.export = nextConfig;
