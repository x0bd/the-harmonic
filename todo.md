# The Harmonic - Step-by-Step Implementation TODO

This checklist is updated for the current state of the repo:
- UI foundation is mostly in place.
- Pages are present for home, essays, interviews, releases, hardware, and archive.
- Essays use `astro:content`; most other sections still use inline mock arrays.
- CMS/API/search/deployment layers are not implemented yet.

Rule: do not start Phase 4+ until Phases 1-3 are approved.

## Phase 0 - Baseline and Guardrails
- [x] Confirm stack: Astro + React + TypeScript + Tailwind v4 + shadcn/ui + MDX.
- [ ] Add `README` section called "Current Status" and keep it updated after each phase.
- [ ] Add script aliases for quality checks in `package.json`:
  - `check`: `astro check`
  - `typecheck`: `astro check`
  - `lint` (if linter is introduced)
- [ ] Define branch strategy:
  - `master` stays stable
  - feature branches `codex/<phase>-<topic>`

## Phase 1 - Frontend Architecture Cleanup (UI-Only)
- [ ] Create missing planned directories:
  - `src/components/artist/`
  - `src/components/release/`
  - `src/types/`
  - `src/data/`
  - `src/lib/api/` (placeholder only)
  - `src/lib/queries/` (placeholder only)
- [ ] Move page-level inline mock arrays into reusable data modules:
  - `src/data/interviews.ts`
  - `src/data/releases.ts`
  - `src/data/hardware.ts`
  - `src/data/archive.ts`
- [ ] Add TypeScript types:
  - `src/types/article.ts`
  - `src/types/interview.ts`
  - `src/types/release.ts`
  - `src/types/hardware.ts`
  - `src/types/archive.ts`
- [ ] Type all data imports in pages and eliminate `any` usage.
- [ ] Confirm global style tokens and fonts are consistent in `src/styles/global.css`.

Definition of done:
- No route defines large inline data arrays.
- All mock content is typed and imported from `src/data`.

## Phase 2 - Complete Missing UI Routes and Components
- [ ] Keep existing routes but complete missing planned dynamic pages:
  - `src/pages/interviews/[slug].astro`
  - `src/pages/releases/[slug].astro`
  - `src/pages/hardware/[slug].astro` or `src/pages/artists/[slug].astro` (final IA decision)
  - `src/pages/scenes/[slug].astro`
- [ ] Add section components still missing from plan:
  - `src/components/article/ArticleHero.tsx`
  - `src/components/article/ArticleBody.tsx`
  - `src/components/article/RelatedArticles.tsx`
  - `src/components/release/ReleaseHero.tsx`
  - `src/components/release/TrackList.tsx`
  - `src/components/release/ReleasePlayer.tsx`
  - `src/components/artist/ArtistHero.tsx`
  - `src/components/artist/ArtistBio.tsx`
  - `src/components/artist/ArtistDiscography.tsx`
- [ ] Wire pages to these components using mock data only.
- [ ] Add empty-state and not-found UX for each dynamic route.

Definition of done:
- Every nav section has list and detail route coverage.
- Shared UI components are reused instead of duplicated markup.

## Phase 3 - Dynamic Frontend Behavior (Still Mock Data)
- [ ] Implement working filter/sort state on:
  - `src/pages/archive/index.astro`
  - `src/pages/interviews/index.astro`
  - `src/pages/releases/index.astro`
  - `src/pages/hardware/index.astro`
- [ ] Add real search UI page:
  - `src/pages/search.astro`
  - keyboard shortcut support (`/` and `Ctrl/Cmd+K`)
- [ ] Implement Listening Mode:
  - global store/context in `src/lib/` (frontend only)
  - toggle in navbar
  - visual mode changes (color, typography scale, waveform emphasis)
- [ ] Improve accessibility:
  - keyboard nav for filter controls
  - aria labels for icon buttons
  - visible focus rings

Definition of done:
- Filters/search/listening mode are interactive without backend.
- Lighthouse accessibility score is acceptable on core pages.

## Phase 4 - Strapi CMS Bootstrap
- [ ] Create CMS app (recommended: `apps/cms` in monorepo, or separate repo if preferred).
- [ ] Add content models in Strapi:
  - Article
  - Interview
  - Artist
  - Release
  - Track
  - Scene
  - Tag
- [ ] Set relationships and required fields.
- [ ] Configure media fields and slug uniqueness.
- [ ] Seed initial content matching current mock UI.

Definition of done:
- Strapi admin can create and publish all required content types.
- API returns valid data for list and detail views.

## Phase 5 - Frontend Data Layer and CMS Integration
- [ ] Build API client:
  - `src/lib/api/strapi.ts`
  - env-based URL/token handling
  - error and timeout handling
- [ ] Build query modules:
  - `src/lib/queries/articles.ts`
  - `src/lib/queries/interviews.ts`
  - `src/lib/queries/artists.ts`
  - `src/lib/queries/releases.ts`
  - `src/lib/queries/scenes.ts`
- [ ] Replace page mock data incrementally:
  1. Essays list/detail
  2. Interviews list/detail
  3. Releases list/detail
  4. Hardware/Artists and scenes
  5. Archive source aggregation
- [ ] Keep feature flags or fallback mock mode until parity is confirmed.

Definition of done:
- All primary routes render from Strapi data.
- Mock imports are removed from production paths.

## Phase 6 - Search Integration
- [ ] Choose engine: Meilisearch or Algolia.
- [ ] Add indexing pipeline from Strapi content.
- [ ] Normalize searchable schema (`type`, `title`, `slug`, `tags`, `excerpt`, `date`).
- [ ] Connect `src/pages/search.astro` to live search API.
- [ ] Add filtering and ranking tuned for editorial relevance.

Definition of done:
- Search returns cross-content results with working filters and deep links.

## Phase 7 - Media and Performance
- [ ] Integrate Cloudinary (or equivalent) for image delivery.
- [ ] Replace remote hardcoded image URLs with managed assets.
- [ ] Add responsive image strategy (`srcset`, sizes, modern formats).
- [ ] Audit hydration and reduce `client:load` usage where possible.
- [ ] Run build/perf checks:
  - `npm run build`
  - `npm run preview`
  - Astro bundle analysis

Definition of done:
- No broken media references.
- Performance and hydration are within agreed targets.

## Phase 8 - Deployment and Operations
- [ ] Setup Vercel project for frontend.
- [ ] Configure env vars:
  - `STRAPI_URL`
  - `STRAPI_API_TOKEN`
  - search keys
  - Cloudinary vars
- [ ] Configure CMS hosting and backups.
- [ ] Add basic observability:
  - error tracking
  - uptime checks
- [ ] Publish launch checklist and rollback notes.

Definition of done:
- Production deployment is live, repeatable, and monitored.

## Phase 9 - Post-Launch Hardening
- [ ] Add automated tests for critical routes and data queries.
- [ ] Add content validation rules and editorial QA checklist.
- [ ] Add caching strategy for heavy list pages and search.
- [ ] Triage UX refinements from first real user feedback.

Definition of done:
- Core flows are stable under real content and traffic.

---

## Immediate Next 5 Tasks (Execution Order)
1. [ ] Create `src/types/` and `src/data/` and move all inline page arrays into typed data modules.
2. [ ] Build missing dynamic detail routes: interviews, releases, and scenes.
3. [ ] Add `src/pages/search.astro` with mock local index and keyboard shortcut.
4. [ ] Implement Listening Mode store and wire toggle in navbar.
5. [ ] Start Strapi bootstrap with minimal models (Article, Interview, Release) and seed data.
