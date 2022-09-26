# @cyw666/eslint-config-vue

## Usage

### Install

Using pnpm

```bash
pnpm add -D eslint @cyw666/eslint-config-vue
```

Using npm

```bash
npm install -D eslint @cyw666/eslint-config-vue
```

Using yarn

```bash
yarn add -D eslint @cyw666/eslint-config-vue
```

### Config .eslintrc

```json
{
  // ...
  "extends": ["@cyw666/eslint-config-vue"]
}
```

For TypeScript projects, use @cyw666/eslint-config-vue/typescript.

```json
{
  // ...
  "extends": ["@cyw666/eslint-config-vue/typescript"]
}
```

TypeScript users will also need a tsconfig.json file in their project. An empty object ({}) will do if this is a new project.
