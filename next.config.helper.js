/* eslint-disable */
const Os = require("os");
const fs = require("fs");
const AWS = require('aws-sdk')

const isDevMode = process.env.NODE_ENV === 'development';

/**
 * Fetch remote config from remote service like AWS, Vault
 */
async function fetchRemoteEnv() {
  const ssmClient = new AWS.SSM({
    apiVersion: '2014-11-06',
    region: 'eu-west-1'
  });

  const params = await new Promise(resolve => {
    ssmClient.getParametersByPath({
      Path: `/lc_fe/env/`,
      Recursive: true,
      WithDecryption: true
    }, (err, data) => {
      if (err) {
        console.log(err, err.stack);
        throw new Error("Failed to fetch remote env");
      }

      if (data?.Parameters) {
        return data.Parameters;
      } else {
        throw new Error("Success to fetch remote env but NO DATA");
      }
    });
  })

  console.log('{fetchRemoteEnv} params: ', params);
  throw new Error("Stop to debug");

  return params;
}


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


module.exports = {
  isDevMode,
  fetchRemoteEnv,
  inject_app_env,
  inject_git_commit_id_to_page,
  show_testnet_text_on_header,
}
