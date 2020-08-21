/* eslint-env node */
const path = require("path");

module.exports = {
    "extends": path.join(__dirname, "index.js"),
    env: { node: true },
    rules: {
        "no-extra-parens": ["warn", "all", { nestedBinaryExpressions: false }],
        "array-callback-return": "warn",
        "object-shorthand": "warn"
    }
};
