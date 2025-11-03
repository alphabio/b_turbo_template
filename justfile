# CSS Shorthand Expand - Build Commands
set shell := ["bash", "-cu"]

# Default task
default: check

dev:
    pnpm dev

# ------------- Build & Test -------------
build:
    pnpm build

test:
    pnpm test

cover:
    pnpm test:coverage
# ------------- Quality Gates -------------

typecheck:
    pnpm typecheck

format:
    pnpm format

lint:
    pnpm lint

check:
    pnpm check


# ------------- Development -------------
clean:
    pnpm clean

# ------------- llm -------------

# Add path comment header to files
path_helper:
    b_path_helper --execute --relative

llm_txt:
    b_llm_txt packages/b_fluid-sim/src --recursive > docs/b_fluid-sim.txt
    b_llm_txt apps/explore/src/app/routes/displacement --recursive > docs/b_explore.txt


llm: path_helper
