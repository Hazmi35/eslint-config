/* eslint-env node */
const { resolve } = require("path");
const { readFileSync } = require("fs");
const stripJsonComments = require("strip-json-comments");

const file = readFileSync(resolve(__dirname, ".eslintrc.json")).toString();

module.exports = JSON.parse(stripJsonComments(file));
