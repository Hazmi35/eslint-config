# eslint-config
> An *opinionated, but sane* ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) that I used in my projects ✔

<div align="center">
<a href="https://www.npmjs.com/package/@hazmi35/eslint-config">
  <img src="https://img.shields.io/npm/v/@hazmi35/eslint-config?maxAge=3600" alt="npm version" ></a>
  <img src="https://img.shields.io/npm/dt/@hazmi35/eslint-config?maxAge=3600" alt="npm downloads">
</div>

## Install
```sh-session
npm install -D @hazmi35/eslint-config # npm
pnpm add -D @hazmi35/eslint-config # pnpm
yarn add -D @hazmi35/eslint-config # yarn
```
This package has the required dependency installed automatically by peer dependencies by default on npm v7+, pnpm, or yarn. Install them manually if not.

## Usage
This package requires ESLint Flat Configuration.

Available configurations:
- [common](./conf/common.js) - Common JavaScript rules.
- [typescript](./conf/typescript.js) - For usage with [TypeScript](https://www.typescriptlang.org)
- [stylistic](./conf/stylistic.js) - For code styling with [ESLint Stylistic](https://eslint.style). (Exclusive with Prettier)
- [prettier](./conf/prettier.js) - For code styling with [Prettier](https://prettier.io). (Exclusive with ESLint Stylistic)
- [browser](./conf/browser.js) - For usage within a browser environment (DOM and Web APIs).
- [node](./conf/node.js) - For usage within a [Node.js](https://nodejs.org) environment.
- [edge](./conf/edge.js) - For usage within an edge/serverless environment. For example [Cloudflare Workers](https://workers.cloudflare.com/).
- [modules](./conf/modules.js) - For usage with [ES Modules](https://nodejs.org/api/esm.html).

### Configuration
Create an `eslint.config.js` file in the root of your project and add the following code:

<details>
<summary>Node.js with ESM</summary>
<br>

```js
import { common, modules, node, stylistic } from "@hazmi35/eslint-config";

export default [...common, ...modules, ...node, ...stylistic];
``````
</details>

<details>
<summary>Node.js with CJS</summary>
<br>

```js
module.exports = (async () => {
    const { common, node, stylistic } = await import("@hazmi35/eslint-config");

    return [...common, ...node, ...stylistic];
})();
```
</details>

<details>
<summary>Node.js with TypeScript</summary>
<br>

```js
import { common, modules, node, stylistic, typescript } from "@hazmi35/eslint-config";

export default [...common, ...modules, ...node, ...stylistic, ...typescript];
```
</details>

<details>
<summary>Usage with Prettier</summary>
<br>

```js
import { common, modules, node, prettier } from "@hazmi35/eslint-config";

// Prettier must not be used with stylistic config, because it will conflict with each other.
export default [...common, ...modules, ...node, ...prettier];
```
</details>

<details>
<summary>Extending rules</summary>
<br>

Extending rules using the extend function is recommended.

```js
import { common, extend, modules, node, stylistic, typescript } from "./index.js";

export default [...common, ...modules, ...node, ...stylistic, ...extend(typescript, [
    {
        rule: "@typescript-eslint/no-unnecessary-condition",
        option: [
            "warn",
            {
                allowConstantLoopConditions: false
            }
        ]
        // or
        option: "off"
    }
])];
```
</details>

### Usage with Code Editors
#### VSCode
As of right now, the VSCode ESLint extension need to enable flat config support manually. To do that, open your VSCode settings and add the following code:
```json
{
    "eslint.experimental.useFlatConfig": true
}
```

This is a known issue and will be fixed in the future, see: [microsoft/vscode-eslint#1644](https://github.com/microsoft/vscode-eslint/issues/1644)
