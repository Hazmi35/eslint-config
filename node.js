import node from "eslint-plugin-n";
import globals from "globals";

export default [
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
            parserOptions: {
                globalReturn: true
            }
        },
        plugins: {
            n: node
        },
        rules: {
            "no-restricted-globals": [
                "error",
                {
                    name: "Buffer",
                    message: "Import Buffer from `node:buffer` instead",
                },
                {
                    name: "process",
                    message: "Import process from `node:process` instead",
                },
                {
                    name: "setTimeout",
                    message: "Import setTimeout from `node:timers` instead",
                },
                {
                    name: "setInterval",
                    message: "Import setInterval from `node:timers` instead",
                },
                {
                    name: "setImmediate",
                    message: "Import setImmediate from `node:timers` instead",
                },
                {
                    name: "clearTimeout",
                    message: "Import clearTimeout from `node:timers` instead",
                },
                {
                    name: "clearInterval",
                    message: "Import clearInterval from `node:timers` instead",
                },
                {
                    name: "clearImmediate",
                    message: "Import clearImmediate from `node:timers` instead",
                },
            ],

            // eslint-plugin-unicorn
            "unicorn/prefer-node-protocol": "error",
            "unicorn/require-post-message-target-origin": "off",

            // eslint-plugin-node
            "n/callback-return": "error",
            "n/handle-callback-err": "error",
            "n/no-callback-literal": "error",
            "n/no-deprecated-api": "error",
            "n/no-exports-assign": "error",
            "n/no-new-require": "error",
            "n/no-path-concat": "error",
            "n/no-sync": [
                "error",
                {
                    allowAtRootLevel: true,
                }
            ],
            "n/no-unpublished-bin": "error",
            "n/prefer-global/buffer": ["error", "never"],
            "n/prefer-global/console": ["error", "always"],
            "n/prefer-global/process": ["error", "never"],
            "n/prefer-global/text-decoder": ["error", "never"],
            "n/prefer-global/text-encoder": ["error", "never"],
            "n/prefer-global/url": ["error", "never"],
            "n/prefer-global/url-search-params": ["error", "never"],
            "n/prefer-promises/dns": "error",
            "n/prefer-promises/fs": "error",
            "n/process-exit-as-throw": "error",
            "n/shebang": [
                "error",
                {
                    convertPath: {
                        "src/**/*.js": ["^src/(.+?)\\.js$", "dist/$1.js"],
                    },
                },
            ]
        }
    }
]
