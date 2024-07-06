import globals from "globals";
import ignores from "./ignores.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        name: "hzmi/browser",
        ignores: ignores[0].ignores,
        languageOptions: {
            globals: {
                ...globals.browser
            }
        },
        rules: {
            "unicorn/prefer-dom-node-append": "error",
            "unicorn/prefer-dom-node-dataset": "error",
            "unicorn/prefer-dom-node-remove": "error",
            "unicorn/prefer-dom-node-text-content": "error",
            "unicorn/prefer-keyboard-event-key": "error",
            "unicorn/prefer-modern-dom-apis": "error"
        }
    }
];
