#!/usr/bin/env bash
VERSION=$(yarn info . version --silent)
UPSTREAM=$(yarn info @mapgrid/postcss version --silent)

if [[ "$VERSION" == "$UPSTREAM" ]]; then
    echo "Upstream version ($UPSTREAM) matches $VERSION. Exiting."
    exit
fi

echo "New Upstream version ($UPSTREAM). Publishing..."

yarn version --new-version "$UPSTREAM"
yarn publish --new-version "$UPSTREAM"
