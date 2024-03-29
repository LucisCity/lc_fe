// lint-staged.config.js
module.exports = {
  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `yarn prettier --write ${filenames.join(" ")}`,
    `yarn eslint --fix ${filenames.join(" ")}`,
  ],

  // Format MarkDown and JSON
  "**/*.(md|json)": (filenames) => `yarn prettier --write ${filenames.join(" ")}`,
};
