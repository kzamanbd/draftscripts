#!/bin/bash
# Vercel "Ignored Build Step". Exit 1 = build, exit 0 = skip.
# Build whenever apps/showcase (or a shared workspace dep) changed, and
# always build when the previous SHA is missing/unknown so we never get
# stuck skipping forever.

PATHS='^apps/showcase/|^packages/|^pnpm-lock.yaml|^pnpm-workspace.yaml|^turbo.json'

# No reliable diff base → build to be safe.
if [ -z "$VERCEL_GIT_PREVIOUS_SHA" ]; then
    echo "No previous SHA — building"
    exit 1
fi

if git diff --name-only "$VERCEL_GIT_PREVIOUS_SHA" "$VERCEL_GIT_COMMIT_SHA" 2>/dev/null | grep -qE "$PATHS"; then
    echo "Relevant changes detected — building"
    exit 1
fi

echo "No changes in showcase or shared deps — skipping build"
exit 0
