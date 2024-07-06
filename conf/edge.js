import globals from "globals";
import ignores from "./ignores.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        name: "hzmi/edge",
        ignores: ignores[0].ignores,
        languageOptions: {
            globals: {
                ...globals.node
            }
        },
        rules: {
            "no-restricted-globals": "off",
            "n/prefer-global/buffer": ["error", "always"],
            "n/prefer-global/console": ["error", "always"],
            "n/prefer-global/process": ["error", "always"],
            "n/prefer-global/text-decoder": ["error", "always"],
            "n/prefer-global/text-encoder": ["error", "always"],
            "n/prefer-global/url": ["error", "always"],
            "n/prefer-global/url-search-params": ["error", "always"]
        }
    }
];
