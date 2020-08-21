# eslint-config
> An ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) that I used in my projects ✔

<div align="center">
<a href="https://www.npmjs.com/package/@hazmi35/eslint-config"><img src="https://img.shields.io/npm/v/@hazmi35/eslint-config?maxAge=3600" alt="NPM version" ><a/>
</div>

## Install

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
or `"@hazmi35/eslint-config/node"` for Node environment


Example (TS):
```json
{
    "extends": "@hazmi35/eslint-config/typescript"
}
```
or `"@hazmi35/eslint-config/typescript/node` for Node environment