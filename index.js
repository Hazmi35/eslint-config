export { default as browser } from "./conf/browser.js";
export { default as common } from "./conf/common.js";
export { default as edge } from "./conf/edge.js";
export { default as modules } from "./conf/modules.js";
export { default as node } from "./conf/node.js";
export { default as prettier } from "./conf/prettier.js";
export { default as stylistic } from "./conf/stylistic.js";
export { default as typescript } from "./conf/typescript.js";
export { default as ignores } from "./conf/ignores.js";

/**
 * @param {import("eslint").Linter.FlatConfig[]} config - eslint config
 * @param {{ rule: string, option: ["off" | "warn" | "error", object] }[]} rulesAndOptions - rules and options to extend
 * @param {boolean} replace - replace existing options
 * @returns {import("eslint").Linter.FlatConfig[]}
 * @example extend(config, [{ rule: "no-console", option: ["warn", { allow: ["warn", "error"] }] }])
 */
export function extend(config, rulesAndOptions, replace = false) {
    return config.map(c => {
        if (c.rules) {
            for (const { rule, option } of rulesAndOptions) {
                if (replace) {
                    c.rules[rule] = option;
                } else {
                    const oldOption = c.rules[rule];
                    c.rules[rule] = [
                        option[0],
                        Array.isArray(oldOption) ? { ...oldOption[1], ...option[1] } : option[1]
                    ];
                }
            }
        }
        return c;
    });
}
