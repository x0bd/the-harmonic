# The Harmonic CMS (Strapi)

This directory contains the Phase 4 CMS setup for The Harmonic using Strapi v5.

## Implemented in Phase 4

- Strapi app scaffolded in `apps/cms`.
- Content models created:
  - `Article`
  - `Interview`
  - `Artist`
  - `Release`
  - `Track`
  - `Scene`
  - `Tag`
- Core API files added per model:
  - controller
  - service
  - router
- Seed fixture added:
  - `src/seed-data/initial-content.json`

## Run locally

Install dependencies (if needed):

```bash
npm install
```

Start development server:

```bash
npm run develop
```

The admin UI will be shown in the terminal output (usually `http://localhost:1337/admin`).

## Verify models were loaded

Run:

```bash
npm run strapi -- content-types:list
```

You should see `api::article.article`, `api::interview.interview`, `api::artist.artist`, `api::release.release`, `api::track.track`, `api::scene.scene`, and `api::tag.tag`.

## Seed fixture usage

The fixture file is intentionally seed-ready, not auto-seeded:

- `src/seed-data/initial-content.json`

Recommended load order in admin UI:

1. `Tag`
2. `Artist`
3. `Scene`
4. `Release` (then `Track`)
5. `Article`
6. `Interview`

This order keeps relations simple when entering records.

## Notes

- Media fields are configured but media assets are not preloaded.
- Slugs are configured using `uid` fields generated from names/titles.
- Draft/publish is enabled on all collection types.
