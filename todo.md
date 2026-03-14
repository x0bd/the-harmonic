# The Harmonic - Implementation Plan

> **Note:** We are taking a strict "UI-First" approach. All frontend layouts, components, and pages will be built using hardcoded mock data to perfect the aesthetic and interactions. We will only introduce the Strapi CMS backend, API fetching, and Search integrations after the UI is completely finished and polished.

## Phase 1: Project Restructuring & Global Foundation
- [x] Initialize Astro project with React, TailwindCSS 4, and shadcn/ui.
- [ ] **Folder Architecture:** Ensure the Astro frontend matches the `tech.md` specification:
  - `src/components/ui/` (shadcn components)
  - `src/components/layout/`
  - `src/components/article/`
  - `src/components/artist/`
  - `src/components/release/`
  - `src/components/audio/`
  - `src/layouts/`
  - `src/lib/` (api, queries, utils)
  - `src/types/`
- [ ] **Design System (CSS):** Update `src/styles/globals.css` with the "Void & Spectral" color palette.
- [ ] **Typography Configuration:** Integrate fonts (Serif for headings, Sans for body, Monospace for metadata).
- [ ] **TypeScript Types:** Define mock types in `src/types/` for `article.ts`, `artist.ts`, and `release.ts` to type our mock data.

## Phase 2: Global Layouts & Base UI
- [ ] **BaseLayout (`src/layouts/BaseLayout.astro`):** Global HTML shell, meta tags, and the crosshair cursor style.
- [ ] **Header (`src/components/layout/Header.tsx`):** Fixed navigation with shrinking on scroll and micro-typography.
- [ ] **Footer (`src/components/layout/Footer.tsx`):** Minimal footer.
- [ ] **Navigation (`src/components/layout/Navigation.tsx`):** Underline animations and interactive states.
- [ ] **Audio Utilities (`src/components/audio/`):**
  - `Waveform.tsx`: Micro-interaction animated wave bars.
  - `AudioPlayer.tsx`: Basic structure for the embedded player.

## Phase 3: Feature-Based UI Components (Mock Data)
- [ ] **Article Components (`src/components/article/`):**
  - `ArticleCard.tsx`: Directory-style list item or grid card.
  - `ArticleHero.tsx`: Cinematic hero section for essays.
  - `ArticleBody.tsx`: Rich text formatting, pull quotes, embeds.
  - `RelatedArticles.tsx`: Grid of recommended content.
- [ ] **Artist Components (`src/components/artist/`):**
  - `ArtistHero.tsx`: Profile header with genres and location.
  - `ArtistBio.tsx`: Text section for background.
  - `ArtistDiscography.tsx`: Grid layout for releases.
- [ ] **Release Components (`src/components/release/`):**
  - `ReleaseHero.tsx`: Album cover focus layout.
  - `TrackList.tsx`: Numbered list of tracks.
  - `ReleasePlayer.tsx`: Integration of the AudioPlayer for the specific release.

## Phase 4: Page Assembly (Static Routes)
*Assemble these pages inside `src/pages/` using the layouts and components built in Phase 2 & 3.*
- [ ] **Homepage (`src/pages/index.astro`):**
  - Hero Feature
  - Featured Grid
  - Latest Essays list
  - Latest Releases grid
  - Scenes teaser
- [ ] **Essays (`src/pages/essays/[slug].astro`):** Use `getStaticPaths()` with mock data.
- [ ] **Interviews (`src/pages/interviews/[slug].astro`):** Similar to essays, tailored for Q&A formats.
- [ ] **Artists (`src/pages/artists/[slug].astro`):** Use `getStaticPaths()` with mock data.
- [ ] **Releases (`src/pages/releases/[slug].astro`):** Use `getStaticPaths()` with mock data.
- [ ] **Scenes (`src/pages/scenes/[slug].astro`):** Scene Hero, key artists, influential venues.

## Phase 5: Dynamic UI Features
- [ ] **Archive Page (`src/pages/archive.astro`):** Build the brutalist filtering system UI (Server Rendering target: `export const prerender = false`).
- [ ] **Search Page (`src/pages/search.astro`):** Build the UI for the search interface (Server Rendering target).
- [ ] **Listening Mode Toggle:** Implement global React state to handle mode switching.
- [ ] **Listening Mode Experience:** Add CSS transitions, fade UI to darker mode, enlarge typography, and integrate background waveform animations (potentially using Canvas or Three.js).

## Phase 6: CMS Integration (Backend)
*Begin only after UI is approved.*
- [ ] **Strapi Setup:** Initialize Strapi project (e.g., in `apps/cms/` or a separate repo).
- [ ] **Content Modeling in Strapi:** Replicate types (`Artist`, `Release`, `Track`, `Article`, `Interview`, `Scene`, `Tag`).
- [ ] **API Library:** Implement `src/lib/api/strapi.ts` (`fetchAPI` utility).
- [ ] **Data Queries:** Implement `src/lib/queries/` (`articles.ts`, `artists.ts`, `releases.ts`).
- [ ] **Data Replacement:** Swap `getStaticPaths()` mock arrays with actual Strapi API calls across all dynamic Astro routes.

## Phase 7: Infrastructure & Final Polish
- [ ] **Search Engine Backend:** Setup Meilisearch/Algolia, index CMS content, and connect the `search.astro` UI.
- [ ] **Media Optimization:** Configure Cloudinary integration for all image rendering.
- [ ] **Performance Pass:** Ensure lazy loading on images, partial hydration (`client:load`, `client:visible`), and check Astro build output.
- [ ] **Deployment:** Setup Vercel project, configure Edge functions if needed, and set environment variables (`STRAPI_URL`, `STRAPI_API_TOKEN`, `CLOUDINARY_CLOUD_NAME`).
