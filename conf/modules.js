/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        languageOptions: {
            sourceType: "module"
        },
        rules: {
            "unicorn/prefer-module": "error",
            "unicorn/prefer-top-level-await": "warn"
        }
    }
];
