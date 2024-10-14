import prettier from "eslint-config-prettier";
import ignores from "./ignores.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
    {
        name: "hzmi/prettier",
        ignores: ignores[0].ignores,
        rules: {
            ...prettier.rules
        }
    }
];
