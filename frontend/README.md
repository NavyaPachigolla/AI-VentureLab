# AI VentureLab

Multi-Agent AI Startup Research, Validation & Product Planning Platform.

## Technology Stack

- **Next.js** 16 (App Router)
- **React** 19
- **TypeScript** 5
- **Tailwind CSS** 4
- **shadcn/ui** (base-nova)
- **Supabase** (PostgreSQL persistence)

## Current Phase

**Phase 5 — Supabase Database Integration** — project briefs are persisted via Supabase and exposed through `/api/projects`.

## Environment Variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Use only the Supabase publishable key in the frontend. Never commit real credentials.

## Database Migrations

SQL migrations live in `supabase/migrations/`. Apply them to your Supabase project before using project persistence.

## Local Development

From the `frontend` directory:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
