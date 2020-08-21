/* eslint-env node */
const path = require("path");

module.exports = {
    "extends": path.join(__dirname, "index.js"),
    env: { node: true }
};
