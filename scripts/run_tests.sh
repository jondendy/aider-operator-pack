#!/usr/bin/env bash

echo "Running tests..."

if command -v pytest >/dev/null; then
    pytest
elif command -v npm >/dev/null; then
    npm test
else
    echo "No tests configured"
fi
