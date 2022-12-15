/* eslint-disable */
const {
  isDevMode,
  fetchRemoteEnv,
  inject_git_commit_id_to_page,
  inject_app_env,
} = require('./next.config.helper');


const fetchRemoteEnv2 = () => {
  throw new Error("stop");
}



const defaultRuntimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
  dest: 'public',
  // Disable PWA in dev mode, if you need to debug PWA in dev mode, plz turn it on
  disable: isDevMode,
  /*
    Force next-pwa to generate worker box production build by specify the option mode: 'production' in your pwa section of next.config.js. Though next-pwa automatically generate the worker box development build during development (by running next) and worker box production build during production (by running next build and next start). You may still want to force it to production build even during development of your web app for following reason:
    Reduce logging noise due to production build doesn't include logging.
    Improve performance a bit duOe to production build is optimized and minified.
     */
  // mode: 'production', // Disable this if you want to debug PWA in dev mode

  publicExcludes: [
    '!version.json', // try to avoid version.json cache
  ],

  // runtimeCaching: [
  //   {
  //     urlPattern: /\/api\/todoitem/,
  //     method: "GET",
  //     handler: "StaleWhileRevalidate",
  //     options: {
  //       cacheName: "todoApp-api",
  //       expiration: {
  //         maxEntries: 64,
  //         maxAgeSeconds: 24 * 60 * 60, // 24 hours
  //       },
  //     },
  //   },
  //   ...defaultRuntimeCaching,
  // ],
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files
  output: "standalone",

  // pwa: {}, // the same as you passed into next-pwa option above

  /**
   * From Static structure: /about.html
   * To Static structure: /about/index.html
   *
   * But this also make all client url end with a `/`, so we will turn it off
   * https://nextjs.org/docs/api-reference/next.config.js/exportPathMap#adding-a-trailing-slash
   */
  // trailingSlash: false,

  // images: { loader: "custom" },
  images: {
    loader: "imgix",
    path: "",
  },

  /**
   * Custom webpack config
   * https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
   */
  webpack: (config, { isServer }) => {
    const rules = config.module.rules;

    inject_git_commit_id_to_page(rules);
    inject_app_env(rules);

    return config;
  },

  env: isDevMode ? undefined : fetchRemoteEnv2(),
};

module.exports = withPWA(nextConfig);
