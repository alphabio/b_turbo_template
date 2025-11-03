# 🚀 B_Fluid Monorepo - World-Class DX

Modern TypeScript monorepo with best-in-class developer experience.

## 📦 Structure

```
b_fluid/
├── apps/
│   └── spa/              # React SPA application
├── packages/
│   ├── ui/               # Shared React components
│   ├── store/            # Zustand state management
│   ├── tailwind-config/  # Centralized Tailwind config & styles
│   └── typescript-config/# Shared TypeScript configs
└── .changeset/           # Version management
```

## 🎯 Quick Start

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build all packages
pnpm build

# Run Lint & format & type checking
pnpm check
```

## 🎨 Making Changes

### 1. Create a branch

```bash
git checkout -b feat/my-feature
```

### 2. Make your changes

Edit code, add features, fix bugs...

### 3. Commit with interactive prompt

```bash
pnpm commit
```

This launches an interactive prompt that helps you write conventional commits:

- **Type**: feat, fix, docs, style, refactor, test, chore
- **Scope**: spa, ui, store, config, deps, dx
- **Subject**: Short description
- **Body**: (optional) Detailed explanation
- **Footer**: (optional) Breaking changes, issues closed

Example output: `feat(ui): ✨ add new Button variant`

### 4. Add a changeset (for versioned changes)

```bash
pnpm changeset
```

Answer the prompts:

1. Which packages changed? (select with spacebar)
2. What type of change? (patch/minor/major)
3. Write a summary for the changelog

This creates a file in `.changeset/` that tracks the change.

### 5. Push and create PR

```bash
git push origin feat/my-feature
```

## 📝 Versioning & Releases

### Version Management with Changesets

**Automated versioning:**

```bash
# Bump versions based on changesets
pnpm changeset:version

# This will:
# - Update package.json versions
# - Generate/update CHANGELOG.md files
# - Delete consumed changeset files
```

**Publishing (when ready):**

```bash
pnpm release

# This will:
# 1. Build all packages
# 2. Version packages
# 3. Update lockfile
# 4. Publish to registry (if configured)
```

### Changelog Generation

Changelogs are auto-generated from changesets with GitHub PR links:

```markdown
## 0.2.0

### Minor Changes

- [#123](https://github.com/alphabio/b_fluid/pull/123) [`abc1234`] feat(ui): Added dark mode support
- [#124](https://github.com/alphabio/b_fluid/pull/124) [`def5678`] feat(spa): Added user preferences
```

## 🔧 Dependency Management

### PNPM Catalog (Centralized Versions)

All shared dependencies are managed in `pnpm-workspace.yaml`:

```yaml
catalog:
  react: ^19.2.0
  typescript: ~5.9.3
```

**Using catalog versions:**

```json
{
  "dependencies": {
    "react": "catalog:",
    "zustand": "catalog:"
  }
}
```

**Update React everywhere:**

1. Edit `pnpm-workspace.yaml`
2. Run `pnpm install`
3. Single source of truth = no version drift!

**Check versions:**

```bash
pnpm ls react
pnpm why react
```

## 🔐 Git Hooks (Lefthook)

Automatic quality checks:

**Pre-commit:**

- ✅ Auto-format with Biome
- ✅ Lint staged files
- ✅ Auto-fix issues

**Commit-msg:**

- ✅ Validate conventional commit format
- ✅ Enforce scope usage
- ✅ Block bad commits

**Pre-push:**

- ✅ Run full lint
- ✅ Type checking
- ✅ Prevent broken pushes

**Skip hooks (emergency only):**

```bash
git commit --no-verify -m "emergency fix"
```

## 🧪 Testing

```bash
# Run tests
pnpm test

# Watch mode
pnpm test:watch

# Coverage
pnpm test:coverage
```

## 📊 Turborepo

Smart build system with caching:

```bash
# Build only changed packages
pnpm build

# Build specific package
pnpm --filter @b/ui build

# Clear cache
pnpm clean
```

## 🎯 Best Practices

### Commits

✅ `feat(ui): add Button component`
✅ `fix(spa): resolve hydration issue`
✅ `docs(dx): update README`
❌ `updated stuff`
❌ `wip`

### Changesets

- Always add changeset for user-facing changes
- Skip for internal refactors (chore commits)
- Write clear summaries (they become changelog entries)

### Package Dependencies

- Use `catalog:` for shared deps (React, TypeScript, etc.)
- Use `workspace:*` for internal packages
- Use exact versions for Vite plugins (avoids issues)

### Scopes

- `spa` - SPA application code
- `ui` - Component library changes
- `store` - State management
- `config` - Tooling configs (Tailwind, TS)
- `deps` - Dependency updates
- `dx` - Developer experience improvements

## 🛠️ Commands Reference

| Command                  | Description               |
| ------------------------ | ------------------------- |
| `pnpm install`           | Install dependencies      |
| `pnpm dev`               | Start dev servers         |
| `pnpm build`             | Build all packages        |
| `pnpm commit`            | Interactive commit        |
| `pnpm changeset`         | Add version change        |
| `pnpm changeset:version` | Bump versions             |
| `pnpm release`           | Build + version + publish |
| `pnpm lint`              | Lint code                 |
| `pnpm format`            | Format code               |
| `pnpm typecheck`         | Run TypeScript checks     |
| `pnpm test`              | Run tests                 |
| `pnpm clean`             | Clean build artifacts     |

## 📚 Learn More

- [Changesets Documentation](https://github.com/changesets/changesets)
- [PNPM Catalog](https://pnpm.io/catalogs)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Turborepo](https://turbo.build/repo)
- [Biome](https://biomejs.dev/)

---

**Built with ❤️ for world-class DX**
