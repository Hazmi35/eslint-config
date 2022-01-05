/* eslint-env node */
const { resolve } = require("path");
const base = resolve(__dirname, "..", "index.js");

// @typescript-eslint original rules
let rules = {
    "array-type": ["warn", { default: "array" }],
    "ban-ts-comment": ["error", { minimumDescriptionLength: 5 }],
    "ban-tslint-comment": "error",
    "consistent-indexed-object-style": ["error", "record"],
    "consistent-type-assertions": ["error", { assertionStyle: "as", objectLiteralTypeAssertions: "allow-as-parameter" }],
    "consistent-type-definitions": ["error", "interface"],
    "consistent-type-exports": ["warn", { fixMixedExportsWithInlineTypeSpecifier: false }],
    "consistent-type-imports": ["warn", { prefer: "no-type-imports" }],
    "explicit-function-return-type": ["error", { allowExpressions: true }],
    "explicit-member-accessibility": ["warn", { accessibility: "explicit", overrides: { constructors: "no-public" } }],
    "member-delimiter-style": "error",
    "member-ordering": ["warn", {
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

            "public-field",
            "protected-field",
            "private-field",

            "static-field",
            "instance-field",
            "abstract-field",

            "decorated-field",

            "field",

            // Constructors
            "public-constructor",
            "protected-constructor",
            "private-constructor",

            "constructor",

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
            "private-abstract-method",

            "public-method",
            "protected-method",
            "private-method",

            "static-method",
            "instance-method",
            "abstract-method",

            "decorated-method",

            "method"
        ]
    }],
    "method-signature-style": ["warn", "property"],
    "naming-convention": ["warn"], // TODO: Add more strict option? (Currently, the default option is similar to ESLint's "camelCase" rule.)
    "no-base-to-string": "error",
    "no-confusing-non-null-assertion": "warn",
    "no-confusing-void-expression": ["warn", { ignoreArrowShorthand: true }],
    "no-dynamic-delete": "error",
    "no-explicit-any": "off",
    "no-extraneous-class": "error",
    "no-invalid-void-type": "warn",
    "no-meaningless-void-operator": "warn",
    "no-non-null-asserted-nullish-coalescing": "warn",
    "no-require-imports": "warn",
    "no-unnecessary-boolean-literal-compare": "error",
    "no-unnecessary-condition": "error",
    "no-unnecessary-type-arguments": "error",
    "no-unsafe-assignment": "off", // TODO: Create a more stricter version that disallow implicit any or even all any?
    "no-unsafe-call": "warn",
    "no-unsafe-return": "off",
    "non-nullable-type-assertion-style": "warn",
    "prefer-enum-initializers": "warn", // TODO: Reconsider of severity of these prefer rules (warn or error)
    "prefer-for-of": "warn",
    "prefer-function-type": "warn",
    "prefer-includes": "warn",
    "prefer-nullish-coalescing": "warn",
    "prefer-optional-chain": "warn",
    "prefer-readonly": "warn",
    "prefer-reduce-type-parameter": "warn",
    "prefer-regexp-exec": "warn",
    "prefer-return-this-type": "warn",
    "prefer-string-starts-ends-with": "warn",
    "prefer-ts-expect-error": "error",
    "restrict-template-expressions": ["warn", { allowBoolean: true, allowNumber: true }],
    "sort-type-union-intersection-members": "warn",
    "switch-exhaustiveness-check": "error",
    "type-annotation-spacing": "warn",
    "unified-signatures": "warn"
};

/*
 * @typescript-eslint extended rules from eslint original rules
 * Currently the extended rules option is not different than the one from base rules, so I make it an Array and infer the option from the base rules
 */
let extensionRules = [
    "brace-style",
    "comma-dangle",
    "comma-spacing",
    "default-param-last",
    "dot-notation",
    "func-call-spacing",
    "indent",
    "keyword-spacing",
    "lines-between-class-members",
    "no-array-constructor",
    "no-dupe-class-members",
    "no-duplicate-imports",
    "no-empty-function",
    "no-extra-parens",
    "no-extra-semi",
    "no-implied-eval",
    "no-invalid-this",
    "no-loop-func",
    "no-loss-of-precision",
    "no-magic-numbers",
    "no-redeclare",
    "no-restricted-imports",
    "no-shadow",
    "no-throw-literal",
    "no-unused-expressions",
    "no-unused-vars",
    "no-use-before-define",
    "no-useless-constructor",
    "object-curly-spacing",
    "padding-line-between-statements",
    "quotes",
    "require-await",
    "return-await",
    "semi",
    "space-before-function-paren",
    "space-infix-ops"
];

const addPrefix = string => `@typescript-eslint/${string}`;
const delPrefix = string => string.replace("@typescript-eslint/", "");

// Prefix everything with "@typescript-eslint/""
rules = Object.fromEntries(Object.entries(rules).map(([key, val]) => [addPrefix(key), val]));
extensionRules = Object.fromEntries(extensionRules.map(rule => [addPrefix(rule), "toBeInfered"]));

// Generate the baseRules from extensionRules and disable it
const baseRules = Object.entries(extensionRules).map(([key]) => [delPrefix(key), "off"]);

// Import baseRules options
const eslintRecommended = require(resolve(require.resolve("eslint"), "..", "..", "conf", "eslint-recommended.js"));
const baseRulesOptions = { ...eslintRecommended.rules, ...require(base).rules };

// Infer options from baseRulesOptions for the extensionRules
const toInfer = Object.entries(extensionRules)
    .filter(([_key, val]) => val === "toBeInfered")
    .map(([key]) => [key, baseRulesOptions[delPrefix(key)] ?? "off"]);

extensionRules = { ...Object.fromEntries(baseRules), ...Object.fromEntries(toInfer) };

module.exports = {
    extends: [base, "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended-requiring-type-checking"],
    parserOptions: {
        project: "./tsconfig.json"
    },
    // Things that are not from typescript-eslint/recommended or it's added to override their default settings in typescript-eslint/recommended
    rules: { ...rules, ...extensionRules }
};
