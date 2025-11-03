# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-03

### Added
- Initial Turborepo template structure
- Agent Session Handover Protocol documentation
- Workspace configuration with apps and packages directories
- TypeScript configurations (base, react, node)
- Shared UI component package with Button component
- Shared config package for ESLint presets
- Example web application structure
- Example API server with basic endpoints
- Comprehensive README with setup instructions
- CONTRIBUTING.md with detailed agent handover protocol
- SECURITY.md with security guidelines
- MIT License
- Prettier configuration
- .gitignore for common build artifacts
- Turborepo pipeline configuration

### Protocol Features
- Session context documentation guidelines
- Handover checklist for incoming/outgoing agents
- Communication standards (commit messages, PR descriptions)
- Quality gates and verification steps
- Emergency handover procedures
- Best practices for agent collaboration

### Structure
```
b_turbo_template/
├── apps/
│   ├── web/     # Web application placeholder
│   └── api/     # Node.js API server
├── packages/
│   ├── ui/      # Shared React components
│   ├── config/  # Shared configurations
│   └── tsconfig/# TypeScript configurations
└── [configuration files]
```

[1.0.0]: https://github.com/alphabio/b_turbo_template/releases/tag/v1.0.0
