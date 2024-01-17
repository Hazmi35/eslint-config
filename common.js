import js from "@eslint/js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest"
        },
        linterOptions: {
            reportUnusedDisableDirectives: "warn"
        },
        rules: {
            // Possible Errors
            "array-callback-return": "error",
            "no-await-in-loop": "warn",
            "no-constant-binary-expression": "error",
            "no-constructor-return": "error",
            "no-duplicate-imports": "error",
            "no-new-native-nonconstructor": "error",
            "no-promise-executor-return": "error",
            "no-self-compare": "error",
            "no-template-curly-in-string": "error",
            "no-unmodified-loop-condition": "error",
            "no-unreachable-loop": "error",
            "no-unused-private-class-members": "warn",
            "no-use-before-define": [
                "error",
                {
                    classes: true,
                    functions: false,
                    variables: true,
                },
            ],
            "require-atomic-updates": "error",

            // Suggestions
            "accessor-pairs": "warn",
            "arrow-body-style": ["warn", "as-needed"],
            "block-scoped-var": "error",
            camelcase: ["warn", {
                ignoreDestructuring: true,
                ignoreGlobals: true
            }],
            "class-methods-use-this": "off", // TODO: Decide
            "consistent-return": "error",
            "consistent-this": ["warn", "self"],
            curly: ["error", "multi-line", "consistent"],
            "default-case": "warn",
            "default-case-last": "warn",
            "default-param-last": "warn",
            "dot-notation": "error",
            eqeqeq: ["error", "smart"],
            "func-name-matching": ["warn", "always"],
            "func-names": ["warn", "as-needed"],
            "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
            "grouped-accessor-pairs": ["warn", "getBeforeSet"],
            "guard-for-in": "warn",
            "id-length": [
                "warn",
                {
                    exceptions: ["_", "$", "a", "b", "c", "x", "y", "z", "i"],
                    min: 2,
                },
            ],
            "logical-assignment-operators": ["warn", "always"],
            "new-cap": "warn"
        }
    }
]