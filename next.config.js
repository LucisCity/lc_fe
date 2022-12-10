/* eslint-disable */
const Os = require("os");
const fs = require("fs");

const defaultRuntimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
  dest: 'public',
  // Disable PWA in dev mode, if you need to debug PWA in dev mode, plz turn it on
  // disable: process.env.NODE_ENV === 'development',
  /*
    Force next-pwa to generate worker box production build by specify the option mode: 'production' in your pwa section of next.config.js. Though next-pwa automatically generate the worker box development build during development (by running next) and worker box production build during production (by running next build and next start). You may still want to force it to production build even during development of your web app for following reason:
    Reduce logging noise due to production build doesn't include logging.
    Improve performance a bit duOe to production build is optimized and minified.
     */
  mode: 'production', // Disable this if you want to debug PWA in dev mode

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
};

module.exports = withPWA(nextConfig);

/**
 * Determine whether the Node.js process runs on Windows.
 *
 * @returns {Boolean}
 */
function isWindows() {
  return Os.platform() === "win32";
}

function inject_git_commit_id_to_page(rules) {
  if (isWindows()) {
    throw new Error("NOTE: You need to run in on Mac, Linux, or WSL, We prohibit Windows");
  }

  /**
   * Inject git commit id into debug page
   */
  let git_commit_id = "";
  try {
    git_commit_id = require("child_process").execSync("git rev-parse --short HEAD").toString().trim();
  } catch (e) {
    throw new Error("Please install git first");
  }

  // Insert into Env.ts
  const stringReplaceLoaderRule = {
    test: /src\/utils\/env\.ts$/,
    loader: "string-replace-loader",
    options: {
      search: "LUCIS_VERSION_COMMIT_ID",
      replace: git_commit_id,
    },
  };
  rules.push(stringReplaceLoaderRule);

  // Insert into version.json
  const versionJsonContent = { "version": git_commit_id, "created": Date.now() };
  fs.writeFileSync('public/version.json', JSON.stringify(versionJsonContent));
}

function inject_app_env(rules) {
  if (isWindows()) {
    throw new Error("NOTE: You need to run in on Mac, Linux, or WSL, We prohibit Windows");
  }

  const git_branch = require("child_process")
    /**
     * NOTE: You need to run in on Mac, Linux, or WSL, We prohibit Windows
     */
    .execSync("cat .git/HEAD")
    // .execSync('git branch --show-current')
    .toString()
    .trim();

  let app_env = "";
  if (git_branch === "ref: refs/heads/main") {
    app_env = "prod";
  } else if (git_branch === "ref: refs/heads/beta") {
    app_env = "beta";
  } else if (git_branch === "ref: refs/heads/test") {
    app_env = "stg";
  } else {
    app_env = "dev";
  }

  rules.push({
    test: /src\/utils\/env\.ts$/,
    loader: "string-replace-loader",
    options: {
      search: '"APP_ENV"',
      replace: `"${app_env}"`,
    },
  });
}

function show_testnet_text_on_header(rules) {
  /**
   * Show testnet text on the header
   */
  const git_branch = require("child_process")
    /**
     * NOTE: You need to run in on Mac, Linux, or WSL, We prohibit Windows
     */
    .execSync("cat .git/HEAD")
    // .execSync('git branch --show-current')
    .toString()
    .trim();
  rules.push({
    test: /components\/ui\/header\/Header\.tsx$/,
    loader: "string-replace-loader",
    options: {
      search: '"IS_TESTNET"',
      replace: (git_branch === "ref: refs/heads/trial").toString(),
    },
  });
}
