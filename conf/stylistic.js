import stylistic from "@stylistic/eslint-plugin";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        plugins: {
            stylistic
        },
        rules: {
            // Disable legacy rules
            //...stylistic.configs["disable-legacy"].rules,

            // Stylistic rules
            "stylistic/array-bracket-newline": ["warn", "consistent"],
            "stylistic/array-bracket-spacing": ["warn", "never", { singleValue: false, objectsInArrays: false, arraysInArrays: false }],
            "stylistic/array-element-newline": ["warn", "consistent", { multiline: true, minItems: 6 }],
            "stylistic/arrow-parens": ["warn", "as-needed", { requireForBlockBody: false }],
            "stylistic/arrow-spacing": ["warn", { before: true, after: true }],
            "stylistic/block-spacing": ["warn", "always"],
            "stylistic/brace-style": ["warn", "1tbs", { allowSingleLine: true }],
            "stylistic/comma-dangle": ["warn", "never"],
            "stylistic/comma-spacing": ["warn", { before: false, after: true }],
            "stylistic/comma-style": ["warn", "last"],
            "stylistic/computed-property-spacing": ["warn", "never"],
            "stylistic/dot-location": ["warn", "property"],
            "stylistic/eol-last": ["warn", "always"],
            "stylistic/function-call-argument-newline": ["warn", "consistent"],
            "stylistic/function-call-spacing": ["warn", "never"],
            "stylistic/function-paren-newline": ["warn", "consistent"],
            "stylistic/generator-star-spacing": ["warn", "both"],
            "stylistic/implicit-arrow-linebreak": ["warn", "beside"],
            "stylistic/indent": ["error", 4, { SwitchCase: 1 }],
            "stylistic/indent-binary-ops": ["error", 4],
            "stylistic/key-spacing": ["warn", { beforeColon: false, afterColon: true, mode: "strict" }],
            "stylistic/keyword-spacing": ["warn", { before: true, after: true }],
            "stylistic/linebreak-style": ["error", "unix"],
            "stylistic/lines-around-comment": [
                "warn",
                {
                    "beforeBlockComment": true,
                    "afterBlockComment": false,
                    "beforeLineComment": true,
                    "afterLineComment": false,
                    "allowBlockStart": true,
                    "allowBlockEnd": true,
                    "allowObjectStart": true,
                    "allowObjectEnd": true,
                    "allowArrayStart": true,
                    "allowArrayEnd": true,
                    "allowClassStart": true,
                    "allowClassEnd": true,
                    "afterHashbangComment": true
                }
            ],
            "stylistic/lines-between-class-members": ["warn", "always", { exceptAfterSingleLine: true }],
            "stylistic/max-len": [
                "warn",
                {
                    code: 180,
                    tabWidth: 4,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                    ignoreRegExpLiterals: true
                }
            ],
            "stylistic/max-statements-per-line": ["warn", { max: 3 }],
            "stylistic/member-delimiter-style": [
                "warn",
                {
                    multiline: {
                        requireLast: true
                    },
                    singleline: {
                        requireLast: true
                    }
                }
            ],
            "stylistic/multiline-ternary": ["warn", "always-multiline"],
            "stylistic/new-parens": "warn",
            "stylistic/newline-per-chained-call": ["warn", { ignoreChainWithDepth: 3 }],
            "stylistic/no-confusing-arrow": ["warn", { onlyOneSimpleParam: true }],
            "stylistic/no-extra-parens": [
                "warn",
                "all",
                {
                    nestedBinaryExpressions: false,
                    enforceForArrowConditionals: false,
                    enforceForNewInMemberExpressions: false
                }
            ],
            "stylistic/no-extra-semi": "warn",
            "stylistic/no-floating-decimal": "error",
            "stylistic/no-mixed-operators": "error",
            "stylistic/no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
            "stylistic/no-multi-spaces": ["error", { ignoreEOLComments: true }],
            "stylistic/no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 1, maxBOF: 1 }],
            "stylistic/no-trailing-spaces": "warn",
            "stylistic/no-whitespace-before-property": "error",
            "stylistic/nonblock-statement-body-position": ["warn", "beside"],

            // JSX
            "stylistic/jsx-child-element-spacing": "warn",
            "stylistic/jsx-closing-bracket-location": "warn",
            "stylistic/jsx-closing-tag-location": "warn",
            "stylistic/jsx-curly-brace-presence": "warn",
            "stylistic/jsx-curly-newline": ["warn", "consistent"],
            "stylistic/jsx-curly-spacing": ["warn", "never"],
            "stylistic/jsx-equals-spacing": ["warn", "never"],
            "stylistic/jsx-first-prop-new-line": "warn",
            "stylistic/jsx-indent": ["error", 4],
            "stylistic/jsx-indent-props": ["error", 4],
            "stylistic/jsx-max-props-per-line": "warn",
            "stylistic/jsx-newline": "warn",
            "stylistic/jsx-one-expression-per-line": "warn",
            "stylistic/jsx-props-no-multi-spaces": "warn",
            "stylistic/jsx-quotes": ["warn", "prefer-double"],
            "stylistic/jsx-self-closing-comp": "warn",
            "stylistic/jsx-sort-props": "warn",
            "stylistic/jsx-tag-spacing": "warn",
            "stylistic/jsx-wrap-multilines": "warn"
        }
    }
]
