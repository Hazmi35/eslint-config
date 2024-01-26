import node from "eslint-plugin-n";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        languageOptions: {
            globals: {
                ...globals.node
            },
            parserOptions: {
                globalReturn: true
            }
        },
        plugins: {
            node
        },
        rules: {
            "no-restricted-globals": [
                "error",
                {
                    name: "Buffer",
                    message: "Import Buffer from `node:buffer` instead"
                },
                {
                    name: "process",
                    message: "Import process from `node:process` instead"
                },
                {
                    name: "setTimeout",
                    message: "Import setTimeout from `node:timers` instead"
                },
                {
                    name: "setInterval",
                    message: "Import setInterval from `node:timers` instead"
                },
                {
                    name: "setImmediate",
                    message: "Import setImmediate from `node:timers` instead"
                },
                {
                    name: "clearTimeout",
                    message: "Import clearTimeout from `node:timers` instead"
                },
                {
                    name: "clearInterval",
                    message: "Import clearInterval from `node:timers` instead"
                },
                {
                    name: "clearImmediate",
                    message: "Import clearImmediate from `node:timers` instead"
                }
            ],

            // eslint-plugin-unicorn
            "unicorn/prefer-node-protocol": "error",
            "unicorn/require-post-message-target-origin": "off",

            // eslint-plugin-n (Mapped to node)
            "node/callback-return": ["error", ["callback", "cb"]],
            "node/handle-callback-err": "error",
            "node/no-callback-literal": "error",
            "node/no-deprecated-api": "error",
            "node/no-exports-assign": "error",
            "node/no-new-require": "error",
            "node/no-path-concat": "error",
            "node/no-sync": [
                "error",
                {
                    allowAtRootLevel: true
                }
            ],
            "node/no-unpublished-bin": "error",
            "node/prefer-global/buffer": ["error", "never"],
            "node/prefer-global/console": ["error", "always"],
            "node/prefer-global/process": ["error", "never"],
            "node/prefer-global/text-decoder": ["error", "never"],
            "node/prefer-global/text-encoder": ["error", "never"],
            "node/prefer-global/url": ["error", "never"],
            "node/prefer-global/url-search-params": ["error", "never"],
            "node/prefer-promises/dns": "error",
            "node/prefer-promises/fs": "error",
            "node/process-exit-as-throw": "error",
            "node/shebang": [
                "error",
                {
                    convertPath: {
                        "src/**/*.ts": ["^src/(.+?)\\.ts$", "dist/$1.js"]
                    }
                }
            ]
        }
    }
];
