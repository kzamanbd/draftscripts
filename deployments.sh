#!/bin/bash

# Get all changed files
CHANGED_FILES=$(git diff --name-only $VERCEL_GIT_PREVIOUS_SHA $VERCEL_GIT_COMMIT_SHA)

# Check which apps have changes
PORTFOLIO_CHANGES=$(echo "$CHANGED_FILES" | grep "^apps/portfolio/" || true)
SAAS_CHANGES=$(echo "$CHANGED_FILES" | grep "^apps/saas/" || true)
SHOWCASE_CHANGES=$(echo "$CHANGED_FILES" | grep "^apps/showcase/" || true)

# Count how many apps have changes
CHANGED_APPS=0
CHANGED_APP_NAMES=""

if [ -n "$PORTFOLIO_CHANGES" ]; then
    CHANGED_APPS=$((CHANGED_APPS + 1))
    CHANGED_APP_NAMES="$CHANGED_APP_NAMES portfolio"
    echo "Changes detected in portfolio app"
fi

if [ -n "$SAAS_CHANGES" ]; then
    CHANGED_APPS=$((CHANGED_APPS + 1))
    CHANGED_APP_NAMES="$CHANGED_APP_NAMES saas"
    echo "Changes detected in saas app"
fi

if [ -n "$SHOWCASE_CHANGES" ]; then
    CHANGED_APPS=$((CHANGED_APPS + 1))
    CHANGED_APP_NAMES="$CHANGED_APP_NAMES showcase"
    echo "Changes detected in showcase app"
fi

# Report results and proceed accordingly
if [ $CHANGED_APPS -eq 0 ]; then
    echo "No changes in any app – skipping build"
    exit 0
elif [ $CHANGED_APPS -eq 1 ]; then
    echo "Changes detected in$CHANGED_APP_NAMES app – proceeding with build"
    exit 1
else
    echo "Changes detected in multiple apps:$CHANGED_APP_NAMES – proceeding with build"
    exit 1
fi
