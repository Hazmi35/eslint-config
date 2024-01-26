export { default as browser } from "./conf/browser.js";
export { default as common } from "./conf/common.js";
export { default as edge } from "./conf/edge.js";
export { default as modules } from "./conf/modules.js";
export { default as node } from "./conf/node.js";
export { default as prettier } from "./conf/prettier.js";
export { default as stylistic } from "./conf/stylistic.js";
export { default as typescript } from "./conf/typescript.js";

/**
 * @param {import("eslint").Linter.FlatConfig[]} config
 * @param {{ rule: string, option: ["off" | "warn" | "error", object] }[]} rulesAndOptions
 * @returns {import("eslint").Linter.FlatConfig[]}
 * @example extend(config, [{ rule: "no-console", option: ["warn", { allow: ["warn", "error"] }] }])
 */
export function extend(config, rulesAndOptions) {
    return config.map(c => {
        if (c.rules) {
            for (const { rule, option } of rulesAndOptions) {
                c.rules[rule] = option;
            }
        }
        return c;
    });
}
