import js from "@eslint/js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest",
            parserOptions: {
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                }
            }
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
            "new-cap": "warn",
            "no-alert": "warn",
            "no-array-constructor": "warn",
            "no-caller": "error",
            "no-else-return": "warn", // To prefer guard clauses and early returns
            "no-empty-function": "warn", // If it's empty, you should add a comment explaining why
            "no-empty-static-block": "warn",
            "no-eq-null": "error",
            "no-eval": "error",
            "no-extend-native": "error",
            "no-extra-bind": "error",
            "no-extra-label": "error",
            "no-implicit-coercion": "error",
            "no-implicit-globals": "error",
            "no-implied-eval": "error",
            "no-invalid-this": "error",
            "no-iterator": "error",
            "no-label-var": "error",
            "no-labels": "error",
            "no-lone-blocks": "error",
            "no-lonely-if": "error",
            "no-loop-func": "error",
            "no-multi-assign": ["warn", { ignoreNonDeclaration: true }],
            "no-multi-str": "warn",
            "no-negated-condition": "error",
            "no-nested-ternary": "error",
            "no-new-func": "error",
            "no-new-wrappers": "error",
            "no-object-constructor": "error",
            "no-octal-escape": "error",
            "no-param-reassign": "error",
            "no-proto": "error",
            "no-return-assign": "error",
            "no-script-url": "error",
            "no-sequences": "error",
            "no-shadow": [
                "error",
                {
                    builtinGlobals: false,
                    hoist: "all",
                },
            ],
            "no-throw-literal": "error",
            "no-undef-init": "error",
            "no-unneeded-ternary": "error",
            "no-unused-expressions": "warn",
            "no-useless-call": "error",
            "no-useless-computed-key": "warn",
            "no-useless-concat": "warn",
            "no-useless-constructor": "warn",
            "no-useless-rename": [
                "warn",
                {
                    ignoreDestructuring: false,
                    ignoreExport: false,
                    ignoreImport: false,
                }
            ],
            "no-useless-return": "warn",
            "no-var": "error",
            "no-warning-comments": "warn",
            "object-shorthand": "warn",
            "one-var": ["warn", "never"],
            "operator-assignment": ["warn", "always"],
            "prefer-arrow-callback": "error",
            "prefer-const": "error",
            "prefer-exponentiation-operator": "warn",
            "prefer-named-capture-group": "warn",
            "prefer-numeric-literals": "error",
            "prefer-object-has-own": "error",
            "prefer-object-spread": "error",
            "prefer-promise-reject-errors": "error",
            "prefer-regex-literals": ["warn", { disallowRedundantWrapping: true }],
            "prefer-rest-params": "error",
            "prefer-spread": "error",
            "prefer-template": "error",
            "radix": "warn",
            "require-await": "warn",
            "sort-vars": "warn",
            strict: ["error", "never"],
            "symbol-description": "error",
            "vars-on-top": "warn",
            yoda: ["error", "never"],

            // Layout and Formatting
            "unicode-bom": ["error", "never"]
        }
    }
]