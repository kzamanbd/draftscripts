#!/bin/bash
# Vercel "Ignored Build Step". Exit 1 = build, exit 0 = skip.
# Build whenever apps/showcase (or a shared workspace dep) changed. Default to
# building whenever the diff base is missing/unknown or git fails, so a shallow
# clone never makes us silently skip forever.

set -u

PATHS='^apps/showcase/|^packages/|^pnpm-lock.yaml|^pnpm-workspace.yaml|^turbo.json'
PREV="${VERCEL_GIT_PREVIOUS_SHA:-}"
CURR="${VERCEL_GIT_COMMIT_SHA:-HEAD}"

# No diff base → build to be safe.
if [ -z "$PREV" ]; then
    echo "No previous SHA — building"
    exit 1
fi

# Vercel uses shallow clones, so the previous SHA is often absent. Try to fetch
# it; if it still isn't reachable, build rather than skip.
if ! git cat-file -e "${PREV}^{commit}" 2>/dev/null; then
    git fetch --depth=200 origin "$PREV" 2>/dev/null || true
fi
if ! git cat-file -e "${PREV}^{commit}" 2>/dev/null; then
    echo "Previous SHA $PREV not in clone — building"
    exit 1
fi

# Compute the diff. If git itself fails, build instead of silently skipping.
if ! CHANGED="$(git diff --name-only "$PREV" "$CURR" 2>/dev/null)"; then
    echo "git diff failed — building"
    exit 1
fi

if printf '%s\n' "$CHANGED" | grep -qE "$PATHS"; then
    echo "Relevant changes detected — building"
    exit 1
fi

echo "No changes in showcase or shared deps — skipping build"
exit 0
