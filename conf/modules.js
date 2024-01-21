import unicorn from "eslint-plugin-unicorn";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
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
