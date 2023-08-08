# eslint-config
> An *opinionated* ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) that I used in my projects ✔

<div align="center">
<a href="https://www.npmjs.com/package/@hazmi35/eslint-config"><img src="https://img.shields.io/npm/v/@hazmi35/eslint-config?maxAge=3600" alt="NPM version" ><a/>
</div>

## Install

```bash
npm install -D @hazmi35/eslint-config
```
or with yarn
```bash
yarn add -D @hazmi35/eslint-config
```

## Usage

ESLint guide: [link](https://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package)

Example:
```json
{
	"extends": "@hazmi35/eslint-config"
}
```
Use `@hazmi35/eslint-config/node` for Node environment


Example (TS):
```json
{
    "extends": "@hazmi35/eslint-config/typescript",
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "ignorePatterns": [
      "dist/**",
      "node_modules/**"
    ]
}
```
Use `@hazmi35/eslint-config/typescript/node` for Node environment

## Note

Requires [ESLint](https://npmjs.com/package/eslint) version 8.46.0 or above

TypeScript config requires:
 * [@typescript-eslint/parser](https://npmjs.com/package/@typescript-eslint/parser) version 6.3.0 or above
 * [@typescript-eslint/eslint-plugin](https://npmjs.com/package/@typescript-eslint/eslint-plugin) version 6.3.0 or above
 * [typescript](https://npmjs.com/package/typescript) version 4.3.5 to 5.2.0
