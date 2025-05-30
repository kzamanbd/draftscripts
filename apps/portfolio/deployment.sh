#!/bin/bash

# Ignore deployment if there are no changes in apps/portfolio
if ! git diff --name-only $VERCEL_GIT_PREVIOUS_SHA $VERCEL_GIT_COMMIT_SHA | grep ^apps/portfolio/; then
    echo "No changes in portfolio app – skipping build"
    exit 0
fi

# Continue with build
exit 1
