#!/usr/bin/env bash
set -euo pipefail

echo "Running tests (best-effort)..."

# Python (pytest)
if [ -f pyproject.toml ] || [ -f requirements.txt ] || [ -d .venv ] || command -v python >/dev/null 2>&1; then
  if command -v pytest >/dev/null 2>&1 && [ -d tests ]; then
    echo "- pytest"
    pytest -q
    exit 0
  fi
fi

# Node (npm test)
if [ -f package.json ]; then
  if command -v npm >/dev/null 2>&1; then
    echo "- npm test"
    npm test
    exit 0
  fi
fi

echo "No test runner detected."
echo "Edit scripts/run_tests.sh and Makefile to match your project."
exit 0
