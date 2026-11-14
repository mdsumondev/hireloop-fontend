# HireLoop Frontend

Next.js 16 (App Router) + React 19 + Tailwind v4 + shadcn/ui. No tests, no CI — verification is `npm run lint` and `npm run typecheck`.

## Commands

- `npm run dev` — dev server (also regenerates the managed Next.js block below)
- `npm run lint` / `npm run typecheck` — run both after changes; there is no test suite
- `npm run format` — Prettier on `**/*.{ts,tsx}` only
- `npx shadcn@latest add <component>` — add UI components; they land in `components/ui/`

## Conventions

- **shadcn "base-nova" style** — components are built on `@base-ui/react` (Base UI), not Radix. Don't hand-write Radix imports; use `npx shadcn@latest add` or follow `components/ui/button.tsx` as the pattern.
- **Prettier rules differ from defaults**: no semicolons, double quotes, LF line endings, and `prettier-plugin-tailwindcss` sorts classes inside `cn()`/`cva()` calls (see `.prettierrc`).
- Path aliases (`@/components`, `@/lib`, `@/hooks`) are defined in `components.json` + `tsconfig.json`.
- Theme is dark-mode via `next-themes` with `ThemeProvider` in `app/layout.tsx`; Tailwind theme tokens live in `app/globals.css` (no `tailwind.config` file).

## Auth & Env

- `lib/auth.ts` is the better-auth entrypoint (still a stub). Requires `BETTER_AUTH_SECRET` and `BETTER_AUTH_URL` from `.env` (not committed).

## Related files

- `CLAUDE.md` just imports this file (`@AGENTS.md`) — update this one, not CLAUDE.md.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
