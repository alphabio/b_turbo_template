# TypeScript Configurations

Shared TypeScript configurations for the monorepo.

## Available Configs

- `base.json` - Base configuration for all projects
- `react.json` - Configuration for React projects
- `node.json` - Configuration for Node.js projects

## Usage

In your package's `tsconfig.json`:

```json
{
  "extends": "@b-turbo-template/tsconfig/react.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```
