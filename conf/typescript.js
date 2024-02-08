import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import common from "./common.js";

// TODO [2025-04-30]: Remove dirname workaround. Bump Node.js requirement to >=20.11.0
const directoryName = import.meta.dirname ?? dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ resolvePluginsRelativeTo: directoryName });

// TODO [@typescript-eslint/parser@>=7]: Use entirely flat config. REF: https://github.com/typescript-eslint/typescript-eslint/issues/7694#issuecomment-1854655034
/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        files: ["**/*.ts", "**/*.cts", "**/*.mts"],
        ignores: common[0].ignores,

        ...compat.config({
            plugins: ["@typescript-eslint", "tsdoc"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: common[0].languageOptions.ecmaVersion,
                project: ["./tsconfig.json", "./tsconfig.eslint.json"],

                // TODO [@typescript-eslint/parser@>=7]: Remove this. (It's the default from 7 onwards)
                allowAutomaticSingleRunInference: true
            }
        })[0],

        rules: {
            // typescript-eslint rules
            "@typescript-eslint/adjacent-overload-signatures": "error",
            "@typescript-eslint/array-type": "error",
            "@typescript-eslint/await-thenable": "error",
            "@typescript-eslint/ban-ts-comment": ["error", { minimumDescriptionLength: 5 }],
            "@typescript-eslint/ban-tslint-comment": "error",
            "@typescript-eslint/class-literal-property-style": ["error", "fields"],
            "@typescript-eslint/consistent-generic-constructors": "warn",
            "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
            "@typescript-eslint/consistent-type-assertions": [
                "error",
                {
                    assertionStyle: "as",
                    objectLiteralTypeAssertions: "allow"
                }
            ],
            "@typescript-eslint/consistent-type-definitions": ["error", "type"],
            "@typescript-eslint/consistent-type-exports": [
                "warn",
                {
                    fixMixedExportsWithInlineTypeSpecifier: true
                }
            ],
            "@typescript-eslint/consistent-type-imports": [
                "warn",
                {
                    prefer: "type-imports"
                }
            ],
            "default-param-last": "off",
            "@typescript-eslint/default-param-last": "warn",
            "dot-notation": "off",
            "@typescript-eslint/dot-notation": "error",
            "@typescript-eslint/explicit-function-return-type": [
                "error",
                {
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true,
                    allowDirectConstAssertionInArrowFunctions: true,
                    allowConciseArrowFunctionExpressionsStartingWithVoid: true,
                    allowIIFEs: true
                }
            ],
            "@typescript-eslint/explicit-member-accessibility": ["warn", { accessibility: "explicit" }],
            "@typescript-eslint/explicit-module-boundary-types": [
                "error",
                {
                    allowTypedFunctionExpressions: true,
                    allowDirectConstAssertionInArrowFunctions: true
                }
            ],
            "@typescript-eslint/method-signature-style": [2, "method"],
            camelcase: "off",
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "default",
                    format: ["camelCase", "PascalCase"],
                    leadingUnderscore: "allow",
                    trailingUnderscore: "forbid"
                },
                {
                    selector: "variable",
                    format: null,
                    modifiers: ["destructured"]
                },
                {
                    selector: "default",
                    format: null,
                    modifiers: ["requiresQuotes"]
                }
            ],
            "no-array-constructor": "off",
            "@typescript-eslint/no-array-constructor": "warn",
            "@typescript-eslint/no-array-delete": "error",
            "@typescript-eslint/no-base-to-string": "error",
            "@typescript-eslint/no-confusing-non-null-assertion": "error",
            "@typescript-eslint/no-confusing-void-expression": [
                "error",
                {
                    ignoreArrowShorthand: true,
                    ignoreVoidOperator: false
                }
            ],
            "no-dupe-class-members": "off",
            "@typescript-eslint/no-dupe-class-members": "error",
            "@typescript-eslint/no-duplicate-enum-values": "warn",
            "@typescript-eslint/no-duplicate-type-constituents": "error",
            "@typescript-eslint/no-dynamic-delete": "error",
            "no-empty-function": "off",
            "@typescript-eslint/no-empty-function": "warn",
            "@typescript-eslint/no-empty-interface": "warn",
            "@typescript-eslint/no-extra-non-null-assertion": "error",
            "@typescript-eslint/no-extraneous-class": "warn",
            "@typescript-eslint/no-floating-promises": [
                "error",
                {
                    ignoreVoid: true,
                    ignoreIIFE: true
                }
            ],
            "@typescript-eslint/no-for-in-array": "error",
            "@typescript-eslint/no-inferrable-types": [
                "error",
                {
                    ignoreParameters: true,
                    ignoreProperties: true
                }
            ],
            "no-implied-eval": "off",
            "@typescript-eslint/no-implied-eval": "error",
            "@typescript-eslint/no-import-type-side-effects": "warn",
            "no-invalid-this": "off",
            "@typescript-eslint/no-invalid-this": "error",
            "@typescript-eslint/no-invalid-void-type": [
                "error",
                {
                    allowAsThisParameter: true,
                    allowInGenericTypeArguments: true
                }
            ],
            "no-loop-func": "off",
            "@typescript-eslint/no-loop-func": "error",
            "no-loss-of-precision": "off",
            "@typescript-eslint/no-loss-of-precision": "error",
            "@typescript-eslint/no-meaningless-void-operator": [
                "error",
                {
                    checkNever: true
                }
            ],
            "@typescript-eslint/no-misused-new": "error",
            "@typescript-eslint/no-misused-promises": [
                "error",
                {
                    checksConditionals: true,
                    checksVoidReturn: false
                }
            ],
            "@typescript-eslint/no-mixed-enums": "warn",
            "@typescript-eslint/no-namespace": [
                "error",
                {
                    allowDeclarations: true
                }
            ],
            "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
            "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
            "no-redeclare": "off",
            "@typescript-eslint/no-redeclare": "error",
            "@typescript-eslint/no-redundant-type-constituents": "warn",
            "@typescript-eslint/no-require-imports": "error",
            "no-shadow": "off",
            "@typescript-eslint/no-shadow": [
                "error",
                {
                    builtinGlobals: false,
                    hoist: "all"
                }
            ],
            "@typescript-eslint/no-this-alias": [
                "error",
                {
                    allowDestructuring: true
                }
            ],
            "no-throw-literal": "off",
            "@typescript-eslint/no-throw-literal": "error",
            "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
            "@typescript-eslint/no-unnecessary-condition": [
                "warn",
                {
                    allowConstantLoopConditions: true
                }
            ],
            "@typescript-eslint/no-unnecessary-qualifier": "warn",
            "@typescript-eslint/no-unnecessary-type-arguments": "warn",
            "@typescript-eslint/no-unnecessary-type-assertion": "warn",
            "@typescript-eslint/no-unnecessary-type-constraint": "warn",
            "@typescript-eslint/no-unsafe-argument": "error",
            "@typescript-eslint/no-unsafe-assignment": "error",
            "@typescript-eslint/no-unsafe-call": "error",
            "@typescript-eslint/no-unsafe-declaration-merging": "error",
            "@typescript-eslint/no-unsafe-enum-comparison": "error",
            "@typescript-eslint/no-unsafe-member-access": "error",
            "@typescript-eslint/no-unsafe-return": "error",
            "@typescript-eslint/no-unsafe-unary-minus": "error",
            "no-unused-expressions": "off",
            "@typescript-eslint/no-unused-expressions": "warn",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["error", {
                caughtErrors: "all",
                destructuredArrayIgnorePattern: "^_"
            }],
            "no-use-before-define": "off",
            "@typescript-eslint/no-use-before-define": [
                "error",
                {
                    classes: true,
                    functions: false,
                    variables: true
                }
            ],
            "no-useless-constructor": "off",
            "@typescript-eslint/no-useless-constructor": "warn",
            "@typescript-eslint/no-useless-empty-export": "warn",
            "@typescript-eslint/no-useless-template-literals": "warn",
            "@typescript-eslint/no-var-requires": "error",
            "@typescript-eslint/non-nullable-type-assertion-style": "warn",
            "@typescript-eslint/prefer-as-const": "warn",
            "@typescript-eslint/prefer-enum-initializers": "warn",
            "@typescript-eslint/prefer-for-of": "warn",
            "@typescript-eslint/prefer-function-type": "warn",
            "@typescript-eslint/prefer-includes": "error",
            "@typescript-eslint/prefer-literal-enum-member": "warn",
            "@typescript-eslint/prefer-namespace-keyword": "warn",
            "@typescript-eslint/prefer-nullish-coalescing": "error",
            "@typescript-eslint/prefer-optional-chain": "error",
            "prefer-promise-reject-errors": "off",
            "@typescript-eslint/prefer-promise-reject-errors": "error",
            "@typescript-eslint/prefer-readonly": ["error", { onlyInlineLambdas: true }],
            "@typescript-eslint/prefer-reduce-type-parameter": "warn",
            "@typescript-eslint/prefer-regexp-exec": "error",
            "@typescript-eslint/prefer-return-this-type": "warn",
            "@typescript-eslint/prefer-string-starts-ends-with": "error",
            "@typescript-eslint/prefer-ts-expect-error": "error",
            "@typescript-eslint/promise-function-async": "error",
            "@typescript-eslint/require-array-sort-compare": [
                "error",
                {
                    ignoreStringArrays: false
                }
            ],
            "require-await": "off",
            "@typescript-eslint/require-await": "warn",
            "@typescript-eslint/restrict-plus-operands": "error",
            "@typescript-eslint/restrict-template-expressions": [
                "error",
                {
                    allowBoolean: true,
                    allowNumber: true
                }
            ],
            "@typescript-eslint/return-await": ["error", "in-try-catch"],
            "@typescript-eslint/sort-type-constituents": "error",
            "@typescript-eslint/strict-boolean-expressions": "error",
            "@typescript-eslint/switch-exhaustiveness-check": "error",
            "@typescript-eslint/triple-slash-reference": [
                "error",
                {
                    lib: "never",
                    path: "never",
                    types: "never"
                }
            ],
            "@typescript-eslint/unbound-method": [
                "error",
                {
                    ignoreStatic: true
                }
            ],
            "@typescript-eslint/unified-signatures": "warn",

            // tsdoc and jsdoc rules
            "jsdoc/check-tag-names": "off",
            "jsdoc/require-property-type": "off",
            "tsdoc/syntax": "warn"
        },

        settings: {
            jsdoc: {
                mode: "typescript"
            },
            "import/parsers": {
                "@typescript-eslint/parser": [".ts", ".tsx", ".cts", ".mts"]
            },
            "import/external-module-folders": ["node_modules", "node_modules/@types"],
            "import/extensions": [".ts", ".tsx", ".cts", ".mts", ".js", ".jsx"],
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: ["./tsconfig.json", "./tsconfig.eslint.json"]
                },
                node: {
                    extensions: [".ts", ".tsx", ".cts", ".mts", ".js", ".jsx"]
                }
            }
        }
    }
];
