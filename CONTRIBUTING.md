# Contributing to b_turbo_template

Thank you for your interest in contributing to this Turborepo template!

## Agent Session Handover Protocol

This document outlines the protocol for AI agents to follow when working on this codebase, particularly when handing over work between sessions or between different agents.

### Session Context Documentation

When starting or resuming work on this repository, agents should:

1. **Review Current State**
   - Check `git status` and recent commits
   - Review any open pull requests
   - Check CI/CD pipeline status
   - Review the project README and documentation

2. **Document Work in Progress**
   - Create or update a session log in `/tmp/session-log.md` (not committed)
   - Document current task, progress, and blockers
   - List modified files and their purposes
   - Note any failing tests or build issues

3. **Before Handover**
   - Commit all work with descriptive commit messages
   - Update PR description with current progress
   - Document any unresolved issues or next steps
   - Ensure build passes or document build failures
   - Run linting and tests

### Agent Handover Checklist

#### Outgoing Agent (Before Ending Session)

- [ ] All changes committed with clear messages
- [ ] PR description updated with checklist showing progress
- [ ] Build status documented (passing/failing)
- [ ] Test results documented
- [ ] Any blockers or issues clearly documented
- [ ] Next steps outlined
- [ ] Temporary files cleaned up (except intentional artifacts)

#### Incoming Agent (Starting Session)

- [ ] Review git log and understand recent changes
- [ ] Read PR description and understand task requirements
- [ ] Check current build and test status
- [ ] Review any documented blockers or issues
- [ ] Understand the file structure and dependencies
- [ ] Validate the development environment setup

### Communication Standards

#### Commit Messages

Follow conventional commits format:
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```
feat(api): add user authentication endpoint

- Implement JWT token generation
- Add password hashing with bcrypt
- Create user session management

Closes #123
```

#### PR Descriptions

Use this template:

```markdown
## Task Summary
[Brief description of the task]

## Progress
- [x] Completed item 1
- [x] Completed item 2
- [ ] In progress item 3
- [ ] Pending item 4

## Changes Made
- File/module 1: Description of changes
- File/module 2: Description of changes

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Notes for Next Session
[Any important context, blockers, or next steps]
```

### File Structure

This Turborepo template follows this structure:

```
b_turbo_template/
├── apps/               # Application packages
│   ├── web/           # Web application
│   └── api/           # API server
├── packages/          # Shared packages
│   ├── ui/            # Shared UI components
│   ├── config/        # Shared configurations
│   └── tsconfig/      # TypeScript configs
├── turbo.json         # Turborepo configuration
├── package.json       # Root package configuration
└── README.md          # Project documentation
```

### Development Workflow

1. **Setup**
   ```bash
   npm install
   ```

2. **Development**
   ```bash
   npm run dev        # Start all apps in dev mode
   npm run build      # Build all packages
   npm run lint       # Lint all packages
   npm run test       # Run all tests
   ```

3. **Before Committing**
   ```bash
   npm run lint       # Ensure code style
   npm run test       # Ensure tests pass
   npm run build      # Ensure builds succeed
   ```

### Handover Protocol Example

**Scenario**: Agent A is working on adding a new shared UI component and needs to hand over to Agent B.

**Agent A Actions**:
1. Commits work: `feat(ui): add Button component (WIP)`
2. Updates PR description:
   ```
   ## Progress
   - [x] Create Button component structure
   - [x] Add basic styling
   - [ ] Add variant props (primary, secondary, danger)
   - [ ] Add size props (sm, md, lg)
   - [ ] Write unit tests
   - [ ] Update documentation
   
   ## Notes for Next Session
   - Button component is in packages/ui/src/Button.tsx
   - Need to add TypeScript types for variant and size props
   - Consider using CSS modules vs styled-components (team decision needed)
   - Test file created but no tests written yet
   ```

**Agent B Actions**:
1. Reviews commit history and PR
2. Understands task is to complete Button component
3. Identifies next steps from checklist
4. Continues work from where Agent A left off
5. Updates progress checklist as work proceeds

### Best Practices

1. **Incremental Changes**: Make small, focused commits
2. **Clear Documentation**: Always update documentation with changes
3. **Test Coverage**: Maintain or improve test coverage
4. **Build Validation**: Never commit breaking changes
5. **Communication**: Use PR comments for questions or discussions
6. **Context Preservation**: Document decisions and rationale

### Emergency Handover

If an agent must stop work immediately:

1. Commit current state (even if incomplete): `chore: emergency save point`
2. Add a PR comment explaining the situation
3. Push changes to remote
4. Document in PR description what state the code is in

### Quality Gates

Before marking work as complete:

- [ ] All tests pass
- [ ] Build succeeds
- [ ] Linting passes
- [ ] Documentation updated
- [ ] PR description accurate
- [ ] No commented-out code (unless explicitly needed)
- [ ] No debug statements
- [ ] No temporary files committed

## Getting Help

If you encounter issues:
1. Check existing documentation
2. Review similar code in the repository
3. Check git history for context
4. Add questions to PR comments

Thank you for following this protocol to ensure smooth collaboration!
