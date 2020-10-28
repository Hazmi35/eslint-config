/* eslint-env node */
const { resolve } = require("path");

module.exports = {
    extends: [resolve(__dirname, "..", "node.js"), resolve(__dirname, "index.js")]
};
