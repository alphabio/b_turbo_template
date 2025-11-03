# Session Workflow Quick Reference

**Simple 2-phase process: Start → Work → Next agent archives**

---

## 🚀 Starting a New Session (e.g., Session 002)

```bash
# 1. Read current handover
cat docs/SESSION_HANDOVER.md

# 2. Archive previous session (001)
mkdir -p docs/sessions/001
mv docs/SESSION_HANDOVER.md docs/sessions/001/
git rev-parse HEAD > docs/sessions/001/git-ref.txt

# 3. Move session artifacts (keep template, README, CODE_QUALITY)
find docs/ -maxdepth 1 -name "*.md" \
  -not -name "README.md" \
  -not -name "CODE_QUALITY.md" \
  -not -name "SESSION_HANDOVER_TEMPLATE.md" \
  -exec mv {} docs/sessions/001/ \;

# 4. Create fresh handover
cp docs/SESSION_HANDOVER_TEMPLATE.md docs/SESSION_HANDOVER.md

# Done! Read sessions/001/ if you need more context
```

---

## 💼 During Your Session

**Edit `docs/SESSION_HANDOVER.md` as you work:**

- What you accomplished
- Current state
- Next steps
- Artifacts created

**Create working docs in `docs/` as needed:**

```bash
docs/BUG_ADVECTION.md
docs/PERFORMANCE_FIX.md
docs/CRITICAL_FINDINGS.md
```

**Don't stress about organization** - next agent will archive everything.

---

## 📦 Ending Your Session

Just finish your handover! Next agent will archive it.

**Optional - promote lasting docs:**

```bash
mv docs/ADR-001-decision.md docs/architecture/decisions/
```

---

## 🗂️ Result After Session 002

```
docs/
├── SESSION_HANDOVER.md              ← Your session 002 work
├── SESSION_HANDOVER_TEMPLATE.md
├── CODE_QUALITY.md
├── README.md
│
└── sessions/
    └── 001/
        ├── SESSION_HANDOVER.md      ← Archived
        ├── git-ref.txt              ← Commit SHA
        ├── BUG_FIX.md              ← Artifact
        └── ANALYSIS.md             ← Artifact
```

---

## 💡 Key Points

1. **Work in root** - `docs/SESSION_HANDOVER.md` is current
2. **Archive on START** - incoming agent cleans up previous session
3. **Git ref captures end state** - of previous session
4. **Create docs freely** - they'll get archived together
5. **Manual process** - flexible, adapt as needed

---

## 🔍 Looking Back

```bash
# Read old session
cat docs/sessions/001/SESSION_HANDOVER.md

# See what artifacts were created
ls docs/sessions/001/

# Checkout code from that session
git checkout $(cat docs/sessions/001/git-ref.txt)
```

---

## 📛 Conventions

**Temp files:** Always prefix with `b_`

```bash
/tmp/b_analysis.md      # ✅ Good
/tmp/analysis.md        # ❌ Bad
```

**Session artifacts:** Descriptive names

```bash
BUG_ADVECTION.md        # Clear purpose
PERFORMANCE_FIX.md      # Clear purpose
ANALYSIS.md             # Too vague
```

---

**KISS principle in action:** Work naturally, let structure emerge.
