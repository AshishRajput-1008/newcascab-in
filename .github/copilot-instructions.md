# Copilot / AI Agent Instructions — Frontend Next.js App

Summary
- This repository is a Next.js 13+ TypeScript app using the App Router (folder app/). UI is component-driven under app/components and app/components/Home.

Quick facts
- Framework: Next.js v16, React 19, TypeScript (tsconfig.json uses `strict: true`).
- Styling: Tailwind CSS (see app/globals.css) and custom CSS in app/.
- Icons: lucide-react is used throughout.
- Images: static imports live in app/assets/ and are imported into pages/components via the @/ path alias.

How to run
- Dev: `npm run dev` (runs `next dev`).
- Build: `npm run build` then `npm run start` for production.

Project structure & patterns agents should know
- App Router: Pages live in app/ (e.g., the main entry is app/page.tsx which assembles Home sections). Treat files in app/ as the primary routing and layout surface.
- Layout & fonts: app/layout.tsx wraps pages and loads Google fonts via next/font/google. Avoid changing layout markup without checking global style implications.
- Client vs Server components: Files that include "use-client" are client components. Keep heavy DOM, stateful behavior, or event handlers in client components; prefer server components for pure rendering.
- Import alias: @/* maps to project root (configured in tsconfig.json). Use @/app/assets/... for asset imports instead of deep relative paths.
- Component location convention: Reusable UI for the home view is in app/components/Home/* (examples: Hero, AboutUs, OurServices). Follow PascalCase file names and default-export components.

Editing guidelines for AI agents
- When modifying UI: preserve existing Tailwind utility classes and responsive breakpoints — many layouts rely on explicit classes in the JSX.
- When adding images: prefer static imports from app/assets/ and next/image for optimization. Check existing imports in app/page.tsx for examples.
- When converting files between client/server: add or remove the top-line directive exactly as "use-client".
- Keep TypeScript strictness: follow current typing patterns and add minimal any only when necessary and justified in a comment.

Build and debugging tips
- Use `npm run dev` locally to reproduce issues (Next dev server provides fast refresh and helpful overlay errors).
- Linting: run `npm run lint` (project uses ESLint). Fix obvious lint issues but avoid large stylistic rewrites.

Integration points and external deps
- lucide-react for icons — prefer its named exports as used across the app.
- Fonts via next/font/google in app/layout.tsx.
- No server/API folder present — this is a frontend-only app; avoid adding backend assumptions.

Files to inspect for context (examples)
- app/layout.tsx — global layout and fonts
- app/page.tsx — main page composition, imports app/components/Home/*
- package.json — scripts and dependency versions
- app/globals.css — Tailwind and global styles

When in doubt
- Run the dev server and reproduce UI before proposing structural changes.
- Ask for clarification if a change touches layout, global styles, or TypeScript config.

If you update this file
- Keep the file concise and reference concrete files or snippets that justify instructions.

— End
