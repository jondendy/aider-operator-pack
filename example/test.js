# Operator workflow (Aider)

This repo is set up for disciplined AI-assisted development.

## The loop
**Plan → Act → Verify → Repeat**

1. **Plan**: write or update `spec.md` and select the next step in `prompt_plan.md`.
2. **Act**: start Aider with only the files you need; give one atomic instruction.
3. **Verify**: run tests/lint/typecheck; treat failures as data.
4. **Repeat**: fix only what failed; commit when green; move to the next step.

## Session hygiene
- Keep steps small to avoid context bloat.
- Prefer restarting Aider between steps rather than one long chat.

## Prompt templates

### Execution (one step)
```
Implement the following step exactly:

[PASTE STEP]

Constraints:
- Make minimal changes only
- Do not refactor unrelated code
- Keep functions small and simple

Output:
- Modify files directly
- Do not explain unless necessary
```

### Debug / fix
```
The implementation failed the following tests:

[PASTE ERROR OUTPUT]

Fix only the failing behaviour.

Constraints:
- Do not rewrite working code
- Keep changes minimal
- Ensure all tests pass
```

## Verification gates
- The strongest gate is a passing test suite.
- Next best: typecheck + lint.
- Weak: visual inspection.

## Git discipline
- Commit after every verified step.
- Use small commits so rollbacks are easy.
