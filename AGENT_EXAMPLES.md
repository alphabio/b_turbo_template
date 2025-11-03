# Agent Handover Protocol Examples

This document provides practical examples of how to use the Agent Session Handover Protocol defined in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Example 1: Starting a New Feature

**Scenario**: Agent starts working on adding a new shared utility package.

### Initial Steps

1. Review the current state:
```bash
git status
git log --oneline -10
```

2. Create initial plan in PR description:
```markdown
## Task: Add Shared Utilities Package

### Progress
- [ ] Create packages/utils directory structure
- [ ] Add package.json with dependencies
- [ ] Create TypeScript configuration
- [ ] Implement string utilities
- [ ] Implement date utilities
- [ ] Write unit tests
- [ ] Update root README
- [ ] Update CHANGELOG

### Notes
- Using jest for testing
- Following existing package structure pattern
```

3. Start implementation and commit frequently:
```bash
# After creating directory structure
git add packages/utils
git commit -m "feat(utils): create package structure"

# After implementing string utilities
git add packages/utils/src/string.ts
git commit -m "feat(utils): add string utility functions"
```

## Example 2: Mid-Task Handover

**Scenario**: Agent A needs to hand over incomplete work to Agent B.

### Agent A's Actions

1. Commit all work in progress:
```bash
git add .
git commit -m "feat(auth): implement JWT token generation (WIP)"
```

2. Update PR description with detailed status:
```markdown
## Task: Implement User Authentication

### Progress
- [x] Set up auth package structure
- [x] Install dependencies (bcrypt, jsonwebtoken)
- [x] Implement JWT token generation
- [x] Add password hashing utilities
- [ ] Implement token verification
- [ ] Add refresh token logic
- [ ] Write unit tests for auth functions
- [ ] Add integration tests
- [ ] Update API endpoints to use auth

### Current State
**Completed**:
- File: `packages/auth/src/token.ts` - JWT token generation working
- File: `packages/auth/src/password.ts` - Password hashing with bcrypt

**In Progress**:
- Token verification function started but not complete
- Located in `packages/auth/src/token.ts` (commented out)

**Blocked**:
- Need to decide on refresh token strategy (short-lived access + long-lived refresh vs single token)
- Team decision needed before proceeding

### Next Steps for Incoming Agent
1. Review the token generation implementation
2. Decide on refresh token strategy or ask for team input
3. Complete token verification function
4. Implement refresh token logic
5. Write comprehensive tests

### Files Modified
- `packages/auth/package.json` - added dependencies
- `packages/auth/src/token.ts` - JWT generation (complete), verification (incomplete)
- `packages/auth/src/password.ts` - password hashing (complete)
- `packages/auth/src/index.ts` - exports

### Environment Notes
- JWT_SECRET needs to be set in .env files
- Using HS256 algorithm for signing
```

3. Push changes:
```bash
git push origin feature-branch
```

### Agent B's Actions

1. Pull latest changes:
```bash
git pull origin feature-branch
```

2. Review PR description and understand context

3. Check current state:
```bash
git log --oneline -5
git diff HEAD~2..HEAD
```

4. Continue from where Agent A left off:
```bash
# Complete token verification
# Add to packages/auth/src/token.ts

# Commit when done
git add packages/auth/src/token.ts
git commit -m "feat(auth): complete token verification function"
```

5. Update PR description to reflect new progress:
```markdown
## Task: Implement User Authentication

### Progress
- [x] Set up auth package structure
- [x] Install dependencies (bcrypt, jsonwebtoken)
- [x] Implement JWT token generation
- [x] Add password hashing utilities
- [x] Implement token verification
- [x] Add refresh token logic (decided on dual-token approach)
- [ ] Write unit tests for auth functions
- [ ] Add integration tests
- [ ] Update API endpoints to use auth

### Recent Updates (Agent B)
- Completed token verification function
- Implemented dual-token strategy (access + refresh)
- Added token refresh endpoint logic

### Next Steps
- Write unit tests for all auth functions
- Add integration tests for complete auth flow
- Update API to use auth middleware
```

## Example 3: Emergency Handover

**Scenario**: Agent must stop immediately due to system issue.

### Emergency Actions

1. Save current work state:
```bash
# Save everything, even if incomplete
git add .
git commit -m "chore: emergency save point - partial implementation of feature X"
```

2. Push to remote:
```bash
git push origin feature-branch
```

3. Add PR comment:
```markdown
⚠️ **Emergency Handover**

System issue forced immediate stop.

**Current State**:
- Was implementing feature X in file Y
- Code compiles but tests not written yet
- About 60% complete with the task

**Immediate Context**:
- Was debugging issue with async function in src/service.ts line 45
- Console shows "TypeError: Cannot read property 'data' of undefined"
- Suspect the issue is null data from API call

**To Resume**:
1. Check src/service.ts line 45
2. Add null check before accessing data property
3. Continue with test implementation
4. Run full test suite

**Time**: 2025-11-03 14:30 UTC
```

## Example 4: Completing a Task

**Scenario**: Agent finishes feature implementation.

### Completion Checklist

1. Ensure all tests pass:
```bash
npm run test
npm run lint
npm run build
```

2. Update documentation:
- Update README with new feature
- Update CHANGELOG with changes
- Add JSDoc comments where needed

3. Final commit:
```bash
git add .
git commit -m "feat(ui): complete Button component with all variants and tests"
```

4. Update PR description with completion status:
```markdown
## Task: Implement Button Component

### Progress
- [x] Create Button component structure
- [x] Add basic styling
- [x] Add variant props (primary, secondary, danger)
- [x] Add size props (sm, md, lg)
- [x] Write unit tests
- [x] Update documentation

### Summary
Successfully implemented a reusable Button component with:
- 3 variants (primary, secondary, danger)
- 3 sizes (sm, md, lg)
- Disabled state
- TypeScript types
- 95% test coverage
- Complete documentation

### Testing
- [x] Unit tests pass (14/14)
- [x] Integration tests pass
- [x] Manual testing completed
- [x] All builds successful

### Documentation
- [x] Updated packages/ui/README.md
- [x] Added CHANGELOG entry
- [x] JSDoc comments on all exported functions

### Quality Checks
- [x] All tests pass
- [x] Build succeeds
- [x] Linting passes (0 errors, 0 warnings)
- [x] No console.log statements
- [x] No commented-out code
- [x] TypeScript strict mode compliant

**Ready for Review** ✅
```

5. Request code review:
```bash
# Mark PR as ready for review
# Add reviewers
# Notify team
```

## Example 5: Handling Build Failures

**Scenario**: Agent encounters failing builds that need to be fixed.

### Diagnostic Process

1. Check build output:
```bash
npm run build 2>&1 | tee build.log
```

2. Document the failure in PR:
```markdown
### Build Status: ❌ FAILING

**Error**:
```
Error: Cannot find module '@b-turbo-template/utils'
  at packages/ui/src/index.ts:2:24
```

**Root Cause**:
- The utils package hasn't been built yet
- Build order in turbo.json doesn't account for new dependency

**Fix in Progress**:
1. Update turbo.json to ensure utils builds before ui
2. Add utils to ui's dependencies in package.json
3. Run npm install to link workspaces
```

3. Implement fix:
```bash
# Fix the build configuration
git add turbo.json packages/ui/package.json
git commit -m "fix(build): add utils package to build dependencies"

# Verify fix
npm run build
```

4. Update PR:
```markdown
### Build Status: ✅ PASSING

**Fixed**:
- Updated turbo.json build order
- Added proper dependency declarations
- All packages now build successfully

**Verification**:
```
✓ packages/utils: Built successfully
✓ packages/ui: Built successfully
✓ packages/config: Built successfully
✓ apps/api: Built successfully
✓ apps/web: Built successfully
```
```

## Best Practices Summary

1. **Commit Frequently**: Small, focused commits make handovers easier
2. **Clear Messages**: Use conventional commit format consistently
3. **Update PR Regularly**: Keep progress checklists up to date
4. **Document Context**: Explain decisions and reasoning
5. **Test Before Handover**: Ensure code is in a working state
6. **Use Issue Links**: Reference related issues and PRs
7. **Leave Breadcrumbs**: Comment code for future context
8. **Quality Gates**: Always verify builds and tests

## Communication Templates

### Starting Work
```markdown
## Starting Work on [Task Name]

**Context**: [Brief description of what needs to be done]

**Plan**:
- [ ] Step 1
- [ ] Step 2
- [ ] Step 3

**Estimated Completion**: [timeframe]
```

### Progress Update
```markdown
## Progress Update - [Date/Time]

**Completed**:
- [x] Item 1
- [x] Item 2

**In Progress**:
- [ ] Item 3 (60% complete)

**Blockers**: [Any issues preventing progress]

**ETA**: [Updated estimate]
```

### Handover
```markdown
## Handover Note

**Current State**: [Summary of what's done]

**Next Steps**: [What needs to be done next]

**Context**: [Important information for next agent]

**Files to Review**:
- File 1: [status/notes]
- File 2: [status/notes]
```

---

For more information, see [CONTRIBUTING.md](./CONTRIBUTING.md).
