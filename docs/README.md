# 📚 Documentation Guide

**Purpose:** Entry point for agents and developers working on this project.

---

## 🚀 Quick Start for New Agents

1. **Read this file** (you're doing it!)

---

## 📂 Documentation Structure

```
docs/
├── README.md                          ← You are here (static guide)
├── SESSION_HANDOVER.md                ← CURRENT session state (updated each session)
├── CODE_QUALITY.md                    ← Code standards and quality gates
│
├── sessions/                          ← Archived session handovers
│   ├── SESSION_HANDOVER.001.md
│   ├── SESSION_HANDOVER.002.md
│   └── ...
│
├── architecture/                      ← System design & decisions
│   └── README.md
│
├── features/                          ← Feature specifications
│   └── *.md
│
├── research/                          ← Research & experiments
│   ├── haton-extraction/              ← Displacement effect research
│   └── experiments/
│
└── archive/                           ← Deprecated/old documentation
```

---

## 🏗️ Project Code Structure

```
<!-- TODO: PLEASE POPULATE THIS -->
docs/                   ← Documentation (this directory)
```

---

## 📝 Session Handover Protocol

### For Incoming Agent (Starting Session)

1. **Read `SESSION_HANDOVER.md`** (current state)
2. **Get context:**
   - What's the current focus?
   - What's blocking?
   - What needs to happen next?
3. **Archive current handover:**

```bash
# Find next number
NEXT=$(ls -1 docs/sessions/SESSION_HANDOVER.*.md | wc -l | xargs)
NEXT=$((NEXT + 1))

# Move current to sessions
mv docs/SESSION_HANDOVER.md docs/sessions/SESSION_HANDOVER.$(printf "%03d" $NEXT).md
```

4. **Create new `SESSION_HANDOVER.md`:**

```bash
touch docs/SESSION_HANDOVER.md
```

Use this file as a place to add running commentary

5. **Read `CODE_QUALITY.md`** (important)

6. **Begin work**

- Confirm action plan for this session / resolve any questions with user
- Ask if the user has anything additional to add

### For Outgoing Agent (Ending Session)

1. **Update handover with:**
   - What was accomplished
   - Current status
   - Next steps
   - Blockers/decisions needed
   - Links to relevant files

**Key principle:** `SESSION_HANDOVER.md` is always current. Old ones go to `sessions/` and become immutable.

---

## 🧹 Cleanup Instructions

During development, ad-hoc documents are often created in the project root or various locations.

### When to Clean Up

Periodically (or when instructed), organize loose documentation:

```bash
# Move loose docs to appropriate locations:

# Architecture decisions → docs/architecture/
mv ROOT_DOC_ABOUT_ARCHITECTURE.md docs/architecture/

# Feature specs → docs/features/
mv FEATURE_PROPOSAL.md docs/features/feature-name.md

# Research notes → docs/research/
mv EXPERIMENT_NOTES.md docs/research/experiment-name.md

# Outdated/deprecated → docs/archive/
mv OLD_APPROACH.md docs/archive/

# Planning docs that are complete → docs/archive/
mv REORGANIZATION_PLAN.md docs/archive/
```

### Guidelines

- **Architecture docs** → `docs/architecture/`
- **Feature specs** → `docs/features/` (use kebab-case)
- **Research/experiments** → `docs/research/`
- **Completed plans** → `docs/archive/`
- **Old/deprecated** → `docs/archive/`

**Keep root clean:** Only essential files (README.md, package.json, etc.) should live in project root.

---

## 🎯 Key Directories Explained

### `architecture/`

System design, architecture decisions, technical choices. Documents the "why" and "how" of the codebase structure.

### `features/`

Feature specifications and requirements. Each feature gets its own markdown file describing functionality, requirements, and implementation notes.

### `research/`

Research findings, experiments, proof-of-concepts. Includes the complete haton displacement effect extraction.

### `sessions/`

Archived session handovers. Immutable historical record of project progress and decisions.

### `archive/`

Deprecated or superseded documentation. Kept for historical reference but no longer active.

---

## 📖 Important Documents

**Current Session:**

- `SESSION_HANDOVER.md` - Start here for current state

**Standards:**

- `CODE_QUALITY.md` - Code standards and quality gates

**Architecture:**

- `architecture/README.md` - System architecture

**Features:**

- `features/displacement-effect.md` - Displacement effect spec

**Research:**

- `research/haton-extraction/INDEX.md` - Research navigation
- `research/haton-extraction/QUICK_REFERENCE.md` - Implementation guide
- `research/haton-extraction/EXTRACTION_COMPLETE.md` - Full technical docs

---

## ⚠️ Important Conventions

### Documentation

- **`SESSION_HANDOVER.md` is always current** - Updated each session
- **Old handovers go to `sessions/`** - Immutable archive
- **This README stays static** - Minimal maintenance required
- **Link, don't duplicate** - Reference other docs instead of copying

### File Organization

- **Active docs in root categories** (architecture/, features/)
- **Research in research/** - Experiments and analysis
- **Deprecated in archive/** - Historical reference only
- **Sessions in sessions/** - Project history

### Naming

- Session handovers: `SESSION_HANDOVER.nnn.md` (zero-padded)
- Feature docs: lowercase with hyphens `feature-name.md`
- Research: descriptive names, organized by topic

---

## 🚀 Common Commands

```bash
# Read current session handover
cat docs/SESSION_HANDOVER.md

# View session history
ls -lt docs/sessions/

# Check research
ls docs/research/haton-extraction/

# View docs structure
tree -L 2 docs/

# View project structure
tree -L 2 apps/ packages/
```

---

## 🎓 Context: What This Project Is

A world-class web application featuring:

- Three.js/WebGL rendering
- Fluid simulation displacement effects
- Custom interactive elements
- Professional, scalable architecture

Built with: React, Three.js, TypeScript, Vite

---

**Ready to work? → Read `SESSION_HANDOVER.md` now! 🚀**

---

## 📖 Quick Reference

**For Displacement Effect Implementation:**
→ `DISPLACEMENT_SPEC_DEFINITIVE.md` - Single source of truth (VALIDATED)

**For Implementation Plan:**
→ `SESSION_PLAN_PHASE1-3.md` - Step-by-step validated plan

**For Current Status:**
→ `SESSION_HANDOVER.md` - Where we are now

**For Code Standards:**
→ `CODE_QUALITY.md` - Quality requirements
