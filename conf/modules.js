import unicorn from "eslint-plugin-unicorn";
import ignores from "./ignores.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        ignores: ignores[0].ignores,

        languageOptions: {
            sourceType: "module"
        },

        plugins: {
            unicorn
        },

        rules: {
            "unicorn/prefer-module": "error",
            "unicorn/prefer-top-level-await": "warn"
        }
    }
];
