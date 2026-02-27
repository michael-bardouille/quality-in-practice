# Quality In Practice

Senior Software Engineer focused on building quality into systems, not testing it later.

This repo is my public workshop for practicing and demonstrating quality-first engineering. It is deliberately small in UI scope and deep in quality intent. The purpose is to show how I design systems so quality is embedded in architecture, contracts, workflows, and feedback loops.

## Principles

- Quality is designed, not inspected. It must live in architecture, contracts, and workflows, not only in QA at the end.
- Speed and quality are not opposites. Strong guardrails (contracts, tests, observability) enable faster delivery.
- User experience is part of correctness. Broken deep links, inconsistent state, and UX friction are quality failures.
- Ownership must be explicit. Microservices and microfrontends require clear responsibility boundaries, including test ownership.
- Systems must be observable. If you cannot measure it, you cannot improve it.

## How This Repo Demonstrates Quality

- Contract-first thinking for API and UI boundaries.
- Acceptance test-driven development.
- Integration and E2E quality gates.
- Risk-based test strategy.
- Observability-driven debugging (Sentry, logs, tracing).
- UX signal gathering (micro surveys, experiential quality).
- Performance awareness (latency, load, scalability).
- Design fidelity enforcement (consistency with platform conventions).
- AI-assisted code review and tooling workflows.

## Architecture Overview

This site is a small, intentional surface area designed to demonstrate principles rather than scale. The end state includes documentation-first architecture, explicit testing strategy, and quality gates that reflect senior ownership.

Planned structure:

- `docs/architecture.md`
- `docs/quality-strategy.md`
- `docs/testing-pyramid.md`
- `src/`
- `tests/`
- `e2e/`
- `observability/dashboards.md`
- `observability/metrics.md`
- `decisions/adr-001-contract-testing.md`
- `decisions/adr-002-quality-gates.md`
- `README.md`

## Testing Strategy

This repo follows a risk-based strategy with contract-first boundaries, acceptance tests for key workflows, and E2E coverage for integration points. The intent is to make test ownership explicit and to keep testing close to the design decisions it validates.

## Quality Gates

Quality gates are treated as product requirements, not engineering preferences. Expect automated checks for:

- Type safety and linting
- Unit and integration tests
- E2E tests
- Accessibility checks where applicable
- Performance budgets for latency and bundle size

## Observability

The site and its future examples are designed to show how observability is part of correctness. Dashboards, metrics definitions, and incident-driven learning will live under `observability/`.

## Known Risks (Current Iteration)

- No automated quality gates yet
- No tests implemented yet
- Documentation structure not yet populated
- Accessibility and performance checks not yet enforced

## What I Will Improve Next

- Add documentation under `docs/` and `decisions/` to make architecture and quality intent explicit
- Add test suites across unit, integration, and E2E layers
- Add CI quality gates for linting, tests, and build verification
- Add observability definitions and metrics to document quality signals

## Technologies

- React / TypeScript
- Next.js (planned)
- GraphQL (urql / Apollo)
- Node.js
- Contract testing concepts
- Jest (unit), Playwright or Cypress (E2E)
- Sentry (observability)
- Datadog concepts (SLOs, latency, p95/p99)
- Microfrontend architecture
- AI-assisted dev tooling (Codex, Claude, Copilot)

## Selected Work (In Progress)

- GraphQL Interceptor & Teacher App Quality RFC (refactored, generalized)
- Interview Practice App
- 2Do App

## Contribution Guidelines

This is a personal portfolio repo, but contributions are welcome if they align with the quality-first intent.

- Keep changes small and intentional.
- Preserve quality gates and add tests for behavior changes.
- Use clear, explicit ownership in code boundaries.
- Document tradeoffs in ADRs when decisions impact quality.

## Definition of Done

- Requirements and contracts are explicit
- Tests cover the intended behavior and risks
- Quality gates pass locally and in CI
- Observability hooks exist for key workflows
- Documentation updated for architecture or workflow changes

## PR Review Principles

- Does this change improve or degrade system correctness?
- Are ownership boundaries explicit and test responsibilities clear?
- Are contracts validated in code and tests?
- Is the user experience consistent and resilient?
- Does observability improve or regress?
