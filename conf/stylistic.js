import stylistic from "@stylistic/eslint-plugin";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
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
