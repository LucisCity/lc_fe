// eslint-disable-next-line @typescript-eslint/no-var-requires
const Os = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  // https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files
  output: "standalone",

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

module.exports = nextConfig;

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

  const stringReplaceLoaderRule = {
    test: /src\/utils\/env\.ts$/,
    loader: "string-replace-loader",
    options: {
      search: "LUCIS_VERSION_COMMIT_ID",
      replace: git_commit_id,
    },
  };
  rules.push(stringReplaceLoaderRule);
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
