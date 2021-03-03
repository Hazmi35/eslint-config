# eslint-config
> An ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) that I used in my projects ✔

<div align="center">
<a href="https://www.npmjs.com/package/@hazmi35/eslint-config"><img src="https://img.shields.io/npm/v/@hazmi35/eslint-config?maxAge=3600" alt="NPM version" ><a/>
</div>

## Install

```bash
yarn add -D @hazmi35/eslint-config
```
or with NPM
```bash
npm install -D @hazmi35/eslint-config
```

## Usage

ESLint guide: [link](https://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package)

Example:
```json
{
	"extends": "@hazmi35/eslint-config"
}
```
or `"@hazmi35/eslint-config/node"` for Node environment


Example (TS):
```json
{
    "extends": "@hazmi35/eslint-config/typescript"
}
```
or `"@hazmi35/eslint-config/typescript/node"` for Node environment

## Note

Requires [ESLint](https://npmjs.com/package/eslint) version 7.21.0 or above

TypeScript config requires:
 * [@typescript-eslint/parser](https://npmjs.com/package/@typescript-eslint/parser) version 4.16.1 or above
 * [@typescript-eslint/eslint-plugin](https://npmjs.com/package/@typescript-eslint/eslint-plugin) version 4.16.1 or above
 * [typescript](https://npmjs.com/package/typescript) version 3.8.2 to 4.3.0
