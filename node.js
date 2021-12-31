/* eslint-env node */
const { resolve } = require("path");

module.exports = {
    extends: resolve(__dirname, "index.js"),
    env: { node: true }
};
