import prettier from "eslint-config-prettier";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        rules: {
            ...prettier.rules
        }
    }
];
