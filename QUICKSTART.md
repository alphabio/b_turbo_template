# Quick Start Guide

Get started with the b_turbo_template in 5 minutes!

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

## Installation

```bash
# 1. Clone the repository (or use as template)
git clone https://github.com/alphabio/b_turbo_template.git my-project
cd my-project

# 2. Install dependencies
npm install

# 3. Verify installation
npm run build
```

## Project Structure at a Glance

```
my-project/
├── apps/           # Your applications
│   ├── web/       # Frontend app
│   └── api/       # Backend API
├── packages/       # Shared code
│   ├── ui/        # UI components
│   ├── config/    # Shared configs
│   └── tsconfig/  # TS configs
└── turbo.json     # Build config
```

## Common Tasks

### Start Development Server

```bash
npm run dev
```

This starts all apps in development mode with hot reload.

### Build All Packages

```bash
npm run build
```

Builds all packages and apps in the correct order.

### Lint Code

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

### Run Tests

```bash
npm run test
```

## Adding Your First Feature

### 1. Create a New Component in UI Package

```bash
# Create new component file
touch packages/ui/src/Card.tsx
```

```tsx
// packages/ui/src/Card.tsx
import * as React from 'react';

export interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
```

### 2. Export the Component

```tsx
// packages/ui/src/index.ts
export { Button } from './Button';
export { Card } from './Card';
```

### 3. Build the Package

```bash
cd packages/ui
npm run build
```

### 4. Use in Your App

```tsx
// apps/web/src/App.tsx
import { Button, Card } from '@b-turbo-template/ui';

function App() {
  return (
    <Card title="Welcome">
      <p>This is my first feature!</p>
      <Button variant="primary" onClick={() => alert('Hello!')}>
        Click Me
      </Button>
    </Card>
  );
}
```

## Working with the Agent Protocol

### For AI Agents

If you're an AI agent working on this repository:

1. **Read First**: [CONTRIBUTING.md](./CONTRIBUTING.md)
2. **Check Examples**: [AGENT_EXAMPLES.md](./AGENT_EXAMPLES.md)
3. **Follow Protocol**: Use the handover checklist
4. **Commit Often**: Small, focused commits
5. **Update Progress**: Keep PR description current

### Session Workflow

```
1. Start Session
   ↓
2. Review Context (git log, PR, docs)
   ↓
3. Plan Work (create checklist in PR)
   ↓
4. Implement Changes
   ↓
5. Test & Verify
   ↓
6. Commit & Document
   ↓
7. Update Progress
   ↓
8. Handover (if needed)
```

## Troubleshooting

### Build Failures

```bash
# Clean everything and rebuild
npm run clean
rm -rf node_modules
npm install
npm run build
```

### Turbo Cache Issues

```bash
# Clear turbo cache
rm -rf .turbo
npm run build
```

### Workspace Linking Issues

```bash
# Re-link workspaces
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Check TypeScript in all packages
cd packages/ui
npx tsc --noEmit
```

## Next Steps

1. ✅ **Customize for Your Project**
   - Rename packages
   - Update package.json metadata
   - Configure your build tools

2. ✅ **Add Your Apps**
   - Set up Next.js, Vite, or other frameworks
   - Configure API with Express, Fastify, etc.

3. ✅ **Extend Shared Packages**
   - Add more UI components
   - Create utility libraries
   - Add shared types

4. ✅ **Set Up CI/CD**
   - GitHub Actions
   - Testing pipeline
   - Deployment automation

5. ✅ **Team Onboarding**
   - Share CONTRIBUTING.md
   - Review agent protocol
   - Set up code review process

## Resources

- 📖 [Full Documentation](./README.md)
- 🤝 [Contributing Guide](./CONTRIBUTING.md)
- 💡 [Agent Examples](./AGENT_EXAMPLES.md)
- 🔒 [Security Policy](./SECURITY.md)
- 📝 [Changelog](./CHANGELOG.md)
- 🏗️ [Turborepo Docs](https://turbo.build/repo/docs)

## Getting Help

- Check existing documentation first
- Review git history for context
- See [AGENT_EXAMPLES.md](./AGENT_EXAMPLES.md) for common scenarios
- Open an issue for bugs or questions

## Quick Reference

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev servers |
| `npm run build` | Build all packages |
| `npm run lint` | Lint code |
| `npm run format` | Format code |
| `npm run test` | Run tests |
| `npm run clean` | Clean build artifacts |

---

Happy coding! 🚀
