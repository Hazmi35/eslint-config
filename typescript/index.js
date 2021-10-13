/* eslint-disable sort-keys */
/* eslint-env node */
const { resolve } = require("path");

module.exports = {
    extends: [resolve(__dirname, "..", "index.js"), "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended-requiring-type-checking"],
    parserOptions: {
        project: "./tsconfig.json"
    },
    rules: {
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/await-thenable": "off",
        "@typescript-eslint/ban-ts-comments": "off",
        "@typescript-eslint/ban-tslint-comment": "warn",
        "@typescript-eslint/ban-types": "warn",
        "brace-style": "off",
        "@typescript-eslint/brace-style": ["error", "1tbs", {
            allowSingleLine: true
        }],
        "@typescript-eslint/class-literal-property-style": "off",
        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": ["error", {
            before: false,
            after: true
        }],
        "@typescript-eslint/consistent-type-assertions": ["error", {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "allow-as-parameter"
        }],
        "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "no-type-imports" }],
        "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "warn",
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": ["warn", {
            allowKeywords: true,
            allowPattern: "(^[A-Z])|(^[a-z]+(_[a-z]+)+$)"
        }],
        "@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: true }],
        "@typescript-eslint/explicit-member-accessibility": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": ["error", "never"],
        indent: "off",
        "@typescript-eslint/indent": ["error", 4, {
            SwitchCase: 1
        }],
        "init-declaration": "off",
        "@typescript-eslint/init-declaration": "off",
        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": ["error", {
            before: true,
            after: true
        }],
        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": ["error", "always", {
            exceptAfterSingleLine: true
        }],
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/member-ordering": ["warn", {
            default: [
                // Index signature
                "signature",

                // Fields
                "public-static-field",
                "protected-static-field",
                "private-static-field",
                "public-decorated-field",
                "protected-decorated-field",
                "private-decorated-field",
                "public-instance-field",
                "protected-instance-field",
                "private-instance-field",
                "public-abstract-field",
                "protected-abstract-field",
                "private-abstract-field",

                // Constructors
                "public-constructor",
                "protected-constructor",
                "private-constructor",

                // Methods
                "public-static-method",
                "protected-static-method",
                "private-static-method",
                "public-decorated-method",
                "protected-decorated-method",
                "private-decorated-method",
                "public-instance-method",
                "protected-instance-method",
                "private-instance-method",
                "public-abstract-method",
                "protected-abstract-method",
                "private-abstract-method"
            ]
        }],
        camelcase: "off",
        "@typescript-eslint/naming-convention": ["warn",
            {
                selector: "default",
                format: ["camelCase", "PascalCase"],
                leadingUnderscore: "allow",
                trailingUnderscore: "forbid"
            },
            {
                selector: "variableLike",
                format: ["camelCase", "PascalCase"],
                leadingUnderscore: "allow",
                trailingUnderscore: "forbid"
            },
            {
                selector: "memberLike",
                format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
                leadingUnderscore: "allow",
                trailingUnderscore: "forbid"
            },
            {
                selector: "typeLike",
                format: ["camelCase", "PascalCase"],
                leadingUnderscore: "allow",
                trailingUnderscore: "forbid"
            }],
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "off",
        "@typescript-eslint/no-base-to-string": "error",
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "error",
        "no-duplicate-imports": "off",
        "@typescript-eslint/no-duplicate-imports": ["warn", { includeExports: false }],
        "@typescript-eslint/no-dynamic-delete": "error",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": ["error", {
            allowSingleExtends: false
        }],
        "@typescript-eslint/no-explicit-any": "off",
        "no-extra-parens": "off",
        "@typescript-eslint/no-extra-parens": "off",
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-misused-promises": ["warn", {
            checksVoidReturn: false
        }],
        "@typescript-eslint/no-non-null-assertion": "off",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": ["error"],
        "@typescript-eslint/no-throw-literal": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn", {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: true
        }],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["warn", {
            functions: false
        }],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/prefer-ts-expect-error": "warn",
        quotes: "off",
        "@typescript-eslint/quotes": ["warn", "double", {
            avoidEscape: true,
            allowTemplateLiterals: true
        }],
        "require-await": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/restrict-template-expressions": [
            "warn", {
                allowAny: true,
                allowBoolean: true,
                allowNumber: true
            }
        ],
        semi: "off",
        "@typescript-eslint/semi": ["error", "always", {
            omitLastInOneLineBlock: false
        }],
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": ["error", {
            anonymous: "always",
            named: "never",
            asyncArrow: "always"
        }],
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/unified-signatures": "error"
    }
};
