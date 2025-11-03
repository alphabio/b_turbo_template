# b_turbo_template

A production-ready Turborepo template for building modern web applications with agent session handover protocol.

## Features

- 🚀 **Turborepo** - High-performance build system for JavaScript/TypeScript monorepos
- 📦 **Workspace Management** - Organize apps and packages efficiently
- 🔄 **Agent Handover Protocol** - Structured workflow for AI agent collaboration
- 🛠️ **Development Tools** - Pre-configured linting, formatting, and testing
- 📝 **Documentation** - Comprehensive guides and best practices

## Quick Start

```bash
# Clone the repository
git clone https://github.com/alphabio/b_turbo_template.git
cd b_turbo_template

# Install dependencies
npm install

# Start development
npm run dev

# Build all packages
npm run build

# Run tests
npm run test

# Lint code
npm run lint
```

## Project Structure

```
b_turbo_template/
├── apps/               # Application packages
│   ├── web/           # Example web application
│   └── api/           # Example API server
├── packages/          # Shared packages
│   ├── ui/            # Shared UI components
│   ├── config/        # Shared configurations
│   └── tsconfig/      # TypeScript configurations
├── turbo.json         # Turborepo pipeline configuration
├── package.json       # Root package configuration
├── CONTRIBUTING.md    # Contribution guidelines and agent handover protocol
└── README.md          # This file
```

## Agent Session Handover Protocol

This template includes a comprehensive **Agent Session Handover Protocol** designed for AI agents working on the codebase. This protocol ensures smooth transitions between sessions and agents.

### Key Features of the Protocol

1. **Session Context Documentation** - Clear guidelines for reviewing and documenting work
2. **Handover Checklist** - Step-by-step process for outgoing and incoming agents
3. **Communication Standards** - Consistent commit messages and PR descriptions
4. **Quality Gates** - Verification steps before completing work

### For AI Agents

If you're an AI agent working on this codebase:

1. **Start** by reading [CONTRIBUTING.md](./CONTRIBUTING.md)
2. **Follow** the agent handover checklist
3. **Document** your progress in PR descriptions
4. **Commit** frequently with clear messages
5. **Update** documentation as you make changes

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the complete protocol.

## Available Scripts

- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all packages and apps
- `npm run lint` - Lint all packages
- `npm run format` - Format code with Prettier
- `npm run test` - Run all tests
- `npm run clean` - Remove all build artifacts and dependencies

## Turborepo Features

### Remote Caching

Turborepo can use a technique known as Remote Caching to share cache artifacts across machines:

```bash
npx turbo login
npx turbo link
```

### Pipeline Configuration

The build pipeline is configured in `turbo.json`. Tasks are cached by default and can depend on each other:

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    }
  }
}
```

## Adding New Packages

### Create a New App

```bash
mkdir -p apps/my-app
cd apps/my-app
npm init -y
```

### Create a New Package

```bash
mkdir -p packages/my-package
cd packages/my-package
npm init -y
```

Then add the workspace to the root `package.json`:

```json
{
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

## Best Practices

1. **Incremental Development** - Make small, focused changes
2. **Test Coverage** - Write tests for new features
3. **Documentation** - Keep README and docs up to date
4. **Code Review** - Follow the PR template
5. **Clean Commits** - Use conventional commit messages

## Contributing

We welcome contributions! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for:

- Agent session handover protocol
- Development workflow
- Code standards
- PR guidelines
- Quality gates

## License

MIT

## Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Monorepo Best Practices](https://turbo.build/repo/docs/handbook)
- [Contributing Guide](./CONTRIBUTING.md)