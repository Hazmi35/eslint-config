import stylistic from "@stylistic/eslint-plugin";
import ignores from "./ignores.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        name: "hzmi/stylistic",
        ignores: ignores[0].ignores,
        plugins: {
            stylistic
        },
        rules: {
            // Disable legacy rules
            ...stylistic.configs["disable-legacy"].rules,

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
            "stylistic/no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 1, maxBOF: 0 }],
            "stylistic/no-trailing-spaces": "warn",
            "stylistic/no-whitespace-before-property": "error",
            "stylistic/nonblock-statement-body-position": ["warn", "beside"],
            "stylistic/object-curly-newline": ["warn", { multiline: true, consistent: true }],
            "stylistic/object-curly-spacing": ["error", "always"],
            "stylistic/object-property-newline": ["warn", { allowAllPropertiesOnSameLine: true }],
            "stylistic/operator-linebreak": ["warn", "after", {
                overrides: {
                    "?": "before",
                    ":": "before"
                }
            }],
            "stylistic/padded-blocks": ["warn", "never"],
            "stylistic/padding-line-between-statements": "warn",
            "stylistic/quote-props": ["warn", "as-needed"],
            "stylistic/quotes": ["warn", "double", { avoidEscape: true, allowTemplateLiterals: false }],
            "stylistic/rest-spread-spacing": ["error", "never"],
            "stylistic/semi": ["error", "always", { omitLastInOneLineBlock: false }],
            "stylistic/semi-spacing": ["error", { before: false, after: true }],
            "stylistic/semi-style": ["error", "last"],
            "stylistic/space-before-blocks": ["warn", "always"],
            "stylistic/space-before-function-paren": ["warn", { anonymous: "always", named: "never", asyncArrow: "always" }],
            "stylistic/space-in-parens": ["warn", "never"],
            "stylistic/space-infix-ops": ["warn", { int32Hint: true }],
            "stylistic/space-unary-ops": ["warn", { words: true, nonwords: false }],
            "stylistic/spaced-comment": ["warn", "always"],
            "stylistic/switch-colon-spacing": ["error", { after: true, before: false }],
            "stylistic/template-curly-spacing": ["warn", "never"],
            "stylistic/template-tag-spacing": ["warn", "never"],
            "stylistic/type-annotation-spacing": [
                "warn",
                {
                    before: false,
                    after: true,
                    overrides:
                    {
                        arrow: {
                            before: true,
                            after: true
                        }
                    }
                }
            ],
            "stylistic/type-generic-spacing": "warn",
            "stylistic/type-named-tuple-spacing": "warn",
            "stylistic/wrap-iife": ["warn", "inside"],
            "stylistic/wrap-regex": "warn",
            "stylistic/yield-star-spacing": ["warn", "both"],

            // JSX
            "stylistic/jsx-child-element-spacing": "warn",
            "stylistic/jsx-closing-bracket-location": "warn",
            "stylistic/jsx-closing-tag-location": "warn",
            "stylistic/jsx-curly-brace-presence": "warn",
            "stylistic/jsx-curly-newline": ["warn", "consistent"],
            "stylistic/jsx-curly-spacing": ["warn", "never"],
            "stylistic/jsx-equals-spacing": ["warn", "never"],
            "stylistic/jsx-first-prop-new-line": "warn",
            "stylistic/jsx-function-call-newline": "warn",
            "stylistic/jsx-indent": ["error", 4],
            "stylistic/jsx-indent-props": ["error", 4],
            "stylistic/jsx-max-props-per-line": "warn",
            "stylistic/jsx-newline": "warn",
            "stylistic/jsx-one-expression-per-line": "warn",
            "stylistic/jsx-props-no-multi-spaces": "warn",
            "stylistic/jsx-pascal-case": "warn",
            "stylistic/jsx-quotes": ["warn", "prefer-double"],
            "stylistic/jsx-self-closing-comp": "warn",
            "stylistic/jsx-sort-props": "warn",
            "stylistic/jsx-tag-spacing": "warn",
            "stylistic/jsx-wrap-multilines": "warn"
        }
    }
];
