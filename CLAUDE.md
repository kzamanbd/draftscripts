# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`draftscripts` is a **pnpm + Turborepo monorepo** containing Next.js apps, publishable React/Vue component libraries, shared configs, and dev playgrounds. Requires pnpm `10.11.0`+ and Node 18+.

> Note: `README.md` and `.github/copilot-instructions.md` have drifted from the code. Trust the actual `package.json` files over the docs. Known drift: there is **no `apps/saas`** (removed — the root `pnpm saas` script is dead), apps are on **Next.js 16 / React 19.2** (docs say 15/19.0), portfolio uses **Firebase** (not EmailJS), and showcase uses **shadcn/radix-ui** (the JWT auth + `/api` routes described in the docs no longer exist).

## Workspaces

`pnpm-workspace.yaml` globs `apps/*`, `packages/*`, `playgrounds/*`:

| Path | Package name | What it is |
|------|--------------|-----------|
| `apps/portfolio` | `portfolio` | Next.js 16 personal portfolio. Firebase-backed; routes for `login`, `resume`, `resume-classic`, `shorturl`, `plugins`, plus `api/`. Supports HTTPS dev. |
| `apps/showcase` | `showcase` | Next.js 16 marketing/showcase site. shadcn + radix-ui + CVA components, EmailJS contact, `nextjs-toploader`. Routes: `blog`, `checkout`, `payment`, `portfolio`, `privacy-policy`, `terms`. |
| `packages/shared` | `@repo/shared` | Internal React component lib consumed by **both** apps. Ships raw `src/*.tsx` (no build step). |
| `packages/react` | `@draftscripts/react` | Standalone publishable React lib (Vite build). Dialog system + `useConfirm` hook. Developed via `playgrounds/react`. |
| `packages/vue` | `@draftscripts/vue` | Published Vue 3 lib (Vite + Vitest). TipTap rich-text editor + dialog system. Developed via `playgrounds/vue`. |
| `packages/eslint-config` | `@repo/eslint-config` | Flat ESLint configs. Exports: `./base`, `./next-js`, `./react-internal`. |
| `packages/typescript-config` | `@repo/typescript-config` | Shared tsconfigs: `base.json`, `nextjs.json`, `react-library.json`. |
| `playgrounds/{react,vue}` | `react-playground`, `vue-playground` | Vite harnesses for iterating on the publishable packages. |

## Commands

All run from the repo root unless noted. Turbo respects the task graph in `turbo.json` (`build` waits on `^build`).

```bash
pnpm install              # bootstrap all workspaces

pnpm dev                  # turbo dev — every app/playground in parallel
pnpm portfolio            # just apps/portfolio  (turbo dev --filter=portfolio)
pnpm showcase             # just apps/showcase   (turbo dev --filter=showcase)
cd apps/portfolio && pnpm dev:https   # portfolio over HTTPS (next --experimental-https)

pnpm build                # turbo build (dependency-ordered)
pnpm lint                 # turbo lint (apps use `next lint`)
turbo check-types         # type-check (no root script; run via turbo)
pnpm format               # prettier --write across the repo
```

Scope any turbo task to one workspace with `--filter`, e.g. `turbo build --filter=showcase`, `turbo lint --filter=@draftscripts/vue`.

**Vue package tests** (Vitest — the only test suite in the repo):

```bash
cd packages/vue
pnpm test:unit                       # watch mode
pnpm test:unit run                   # single pass (CI)
pnpm test:unit run path/to/file.spec.ts   # one file
pnpm test:unit -t "test name"        # filter by name
```

**Generate a shared component** (Turbo generator, scaffolds into `packages/shared/src`):

```bash
cd packages/shared && pnpm generate:component
```

## Architecture notes

- **`@repo/shared` ships source, not a bundle.** Its `exports` map routes `@repo/shared` → `src/index.ts` and `@repo/shared/Foo` → `src/Foo.tsx` (via the `./*` subpath), with dedicated `./utils`, `./metadata`, `./icons` entries. There is no build step — apps compile the TSX directly. Add new top-level components as `src/<Name>.tsx` to make them importable as `@repo/shared/<Name>`.
- **Config is centralized in `workspace:*` packages.** Each app/package extends `@repo/typescript-config/*` and imports an `@repo/eslint-config/*` flat config rather than redefining rules. Change lint/TS behavior at the source package, not per-app.
- **Playgrounds are the dev loop for publishable packages.** `@draftscripts/react` and `@draftscripts/vue` have no app consuming them in-repo; iterate inside `playgrounds/react` / `playgrounds/vue`, which depend on them via `workspace:*`.
- **Vue package build is staged**: `pnpm build` runs `type-check` (vue-tsc) and `build-only` (Vite) in parallel via `run-p`. Publish with `pnpm publish` (`--access public`).

## Conventions

- **Prettier** (config in root `package.json`): 4-space tabs, single quotes, **no trailing commas**, `printWidth` 100, `bracketSameLine: true`, semicolons, and **`endOfLine: crlf`** — keep CRLF or every line shows as changed. `prettier-plugin-tailwindcss` auto-sorts class names.
- File naming: kebab-case for component files, camelCase for utilities.
- Apps are Next.js **App Router**; portfolio dev uses `--turbopack`, showcase uses `--turbo`.
