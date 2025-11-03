// b_path:: commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["spa", "ui", "store", "config", "deps", "dx"]],
    "scope-empty": [1, "never"],
    "subject-case": [0],
  },
};
