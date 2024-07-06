import importPlugin from "eslint-plugin-import-x";
import tsdoc from "eslint-plugin-tsdoc";
import tseslint from "typescript-eslint";
import common from "./common.js";

export default tseslint.config({
    name: "hzmi/typescript",
    files: ["**/*.ts", "**/*.cts", "**/*.mts"],
    ignores: common[0].ignores,
    plugins: {
        typescript: tseslint.plugin,
        tsdoc,
        import: importPlugin
    },
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            ecmaVersion: common[0].languageOptions.ecmaVersion,
            project: ["./tsconfig.json", "./tsconfig.eslint.json"]
        }
    },
    rules: {
        // typescript-eslint rules
        "typescript/adjacent-overload-signatures": "error",
        "typescript/array-type": "error",
        "typescript/await-thenable": "error",
        "typescript/ban-ts-comment": ["error", { minimumDescriptionLength: 5 }],
        "typescript/ban-tslint-comment": "error",
        "typescript/class-literal-property-style": ["error", "fields"],
        "typescript/consistent-generic-constructors": "warn",
        "typescript/consistent-indexed-object-style": ["error", "record"],
        "typescript/consistent-type-assertions": [
            "error",
            {
                assertionStyle: "as",
                objectLiteralTypeAssertions: "allow"
            }
        ],
        "typescript/consistent-type-definitions": ["error", "type"],
        "typescript/consistent-type-exports": [
            "warn",
            {
                fixMixedExportsWithInlineTypeSpecifier: true
            }
        ],
        "typescript/consistent-type-imports": [
            "warn",
            {
                prefer: "type-imports"
            }
        ],
        "default-param-last": "off",
        "typescript/default-param-last": "warn",
        "dot-notation": "off",
        "typescript/dot-notation": "error",
        "typescript/explicit-function-return-type": [
            "error",
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: true,
                allowIIFEs: true
            }
        ],
        "typescript/explicit-member-accessibility": ["warn", { accessibility: "explicit" }],
        "typescript/explicit-module-boundary-types": [
            "error",
            {
                allowTypedFunctionExpressions: true,
                allowDirectConstAssertionInArrowFunctions: true
            }
        ],
        "typescript/method-signature-style": [2, "method"],
        camelcase: "off",
        "typescript/naming-convention": [
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
        "typescript/no-array-constructor": "warn",
        "typescript/no-array-delete": "error",
        "typescript/no-base-to-string": "error",
        "typescript/no-confusing-non-null-assertion": "error",
        "typescript/no-confusing-void-expression": [
            "error",
            {
                ignoreArrowShorthand: true,
                ignoreVoidOperator: false
            }
        ],
        "no-dupe-class-members": "off",
        "typescript/no-dupe-class-members": "error",
        "typescript/no-duplicate-enum-values": "warn",
        "typescript/no-duplicate-type-constituents": "error",
        "typescript/no-dynamic-delete": "error",
        "no-empty-function": "off",
        "typescript/no-empty-function": "warn",
        "typescript/no-empty-interface": "warn",
        "typescript/-non-null-assertion": "error",
        "typescript/no-extraneous-class": "warn",
        "typescript/no-floating-promises": [
            "error",
            {
                ignoreVoid: true,
                ignoreIIFE: true
            }
        ],
        "typescript/no-for-in-array": "error",
        "typescript/no-inferrable-types": [
            "error",
            {
                ignoreParameters: true,
                ignoreProperties: true
            }
        ],
        "no-implied-eval": "off",
        "typescript/no-implied-eval": "error",
        "typescript/no-import-type-side-effects": "warn",
        "no-invalid-this": "off",
        "typescript/no-invalid-this": "error",
        "typescript/no-invalid-void-type": [
            "error",
            {
                allowAsThisParameter: true,
                allowInGenericTypeArguments: true
            }
        ],
        "no-loop-func": "off",
        "typescript/no-loop-func": "error",
        "no-loss-of-precision": "off",
        "typescript/no-loss-of-precision": "error",
        "typescript/no-meaningless-void-operator": [
            "error",
            {
                checkNever: true
            }
        ],
        "typescript/no-misused-new": "error",
        "typescript/no-misused-promises": [
            "error",
            {
                checksConditionals: true,
                checksVoidReturn: false
            }
        ],
        "typescript/no-mixed-enums": "warn",
        "typescript/pace": [
            "error",
            {
                allowDeclarations: true
            }
        ],
        "typescript/no-non-null-asserted-nullish-coalescing": "error",
        "typescript/no-non-null-asserted-optional-chain": "error",
        "no-redeclare": "off",
        "typescript/no-redeclare": "error",
        "typescript/no-redundant-type-constituents": "warn",
        "typescript/no-require-imports": "error",
        "no-shadow": "off",
        "typescript/no-shadow": [
            "error",
            {
                builtinGlobals: false,
                hoist: "all"
            }
        ],
        "typescript/no-this-alias": [
            "error",
            {
                allowDestructuring: true
            }
        ],
        "no-throw-literal": "off",
        "typescript/no-throw-literal": "error",
        "typescript/no-unnecessary-boolean-literal-compare": "warn",
        "typescript/essary-condition": [
            "warn",
            {
                allowConstantLoopConditions: true
            }
        ],
        "typescript/no-unnecessary-qualifier": "warn",
        "typescript/no-unnecessary-type-arguments": "warn",
        "typescript/no-unnecessary-type-assertion": "warn",
        "typescript/no-unnecessary-type-constraint": "warn",
        "typescript/no-unsafe-argument": "error",
        "typescript/no-unsafe-assignment": "error",
        "typescript/no-unsafe-call": "error",
        "typescript/no-unsafe-declaration-merging": "error",
        "typescript/no-unsafe-enum-comparison": "error",
        "typescript/no-unsafe-member-access": "error",
        "typescript/no-unsafe-return": "error",
        "typescript/no-unsafe-unary-minus": "error",
        "no-unused-expressions": "off",
        "typescript/no-unused-expressions": "warn",
        "no-unused-vars": "off",
        "typescript/no-unused-vars": ["error", {
            caughtErrors: "all",
            destructuredArrayIgnorePattern: "^_"
        }],
        "no-use-before-define": "off",
        "typescript/no-use-before-define": [
            "error",
            {
                classes: true,
                functions: false,
                variables: true
            }
        ],
        "no-useless-constructor": "off",
        "typescript/no-useless-constructor": "warn",
        "typescript/no-useless-empty-export": "warn",
        "typescript/no-useless-template-literals": "warn",
        "typescript/no-var-requires": "error",
        "typescript/non-nullable-type-assertion-style": "warn",
        "typescript/prefer-as-const": "warn",
        "typescript/prefer-enum-initializers": "warn",
        "typescript/prefer-find": "error",
        "typescript/prefer-for-of": "warn",
        "typescript/prefer-function-type": "warn",
        "typescript/prefer-includes": "error",
        "typescript/prefer-literal-enum-member": "warn",
        "typescript/prefer-namespace-keyword": "warn",
        "typescript/prefer-nullish-coalescing": "error",
        "typescript/prefer-optional-chain": "error",
        "prefer-promise-reject-errors": "off",
        "typescript/prefer-promise-reject-errors": "error",
        "typescript/prefer-readonly": ["error", { onlyInlineLambdas: true }],
        "typescript/prefer-reduce-type-parameter": "warn",
        "typescript/prefer-regexp-exec": "error",
        "typescript/prefer-return-this-type": "warn",
        "typescript/prefer-string-starts-ends-with": "error",
        "typescript/prefer-ts-expect-error": "error",
        "typescript/promise-function-async": "error",
        "typescript/require-array-sort-compare": [
            "error",
            {
                ignoreStringArrays: false
            }
        ],
        "require-await": "off",
        "typescript/require-await": "warn",
        "typescript/restrict-plus-operands": "error",
        "typescript/restrict-template-expressions": [
            "error",
            {
                allowBoolean: true,
                allowNumber: true
            }
        ],
        "typescript/return-await": ["error", "in-try-catch"],
        "typescript/sort-type-constituents": "error",
        "typescript/strict-boolean-expressions": "error",
        "typescript/switch-exhaustiveness-check": "error",
        "typescript/triple-slash-reference": [
            "error",
            {
                lib: "never",
                path: "never",
                types: "never"
            }
        ],
        "typescript/unbound-method": [
            "error",
            {
                ignoreStatic: true
            }
        ],
        "typescript/unified-signatures": "warn",

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
            "typescript-eslint": [".ts", ".tsx", ".cts", ".mts"]
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
});
