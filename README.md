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

Required [ESLint](https://npmjs.com/package/eslint) versions are available in the [peerDependencies](https://github.com/Hazmi35/eslint-config/blob/07e75b930882fa3d3d347e5464b6adf9a4d72655/package.json#L53) section of the package.json file.