#!/usr/bin/env bash
set -euo pipefail

STEP_FILE="prompt_plan.md"

if [ ! -f "$STEP_FILE" ]; then
  echo "Missing $STEP_FILE"
  exit 1
fi

echo "Open $STEP_FILE and copy the next step into Aider."
echo "Tip: keep each step small and include success criteria."
