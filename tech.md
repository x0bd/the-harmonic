# The Harmonic --- Technical Architecture

This document describes the technical architecture for **The Harmonic**,
including the frontend structure, CMS integration, and infrastructure.

The goal is to build a modern headless editorial platform optimized for
performance, content modeling, and maintainability.

------------------------------------------------------------------------

# Core Stack

## Frontend

-   Astro
-   React (interactive components)
-   TailwindCSS
-   shadcn/ui
-   TypeScript

## Backend / CMS

-   Strapi (Headless CMS)

## Infrastructure

-   Vercel (deployment + edge functions)
-   Neon (PostgreSQL database)
-   Cloudinary (media storage and optimization)

## Search

-   Meilisearch or Algolia

## Optional Enhancements

-   Resend (newsletter)
-   Upstash Redis (caching)
-   Vercel OG for dynamic social images

------------------------------------------------------------------------

# High Level Architecture

Editor → Strapi CMS → API\
↓\
Astro Frontend → Vercel Edge\
↓\
Users

Content flow:

1.  Editors create content in Strapi
2.  Strapi exposes content via REST or GraphQL API
3.  Astro fetches content during build or server rendering
4.  Pages are deployed to Vercel

------------------------------------------------------------------------

# Project Structure

the-harmonic/

apps/\
web/ \# Astro frontend\
cms/ \# Strapi instance

packages/\
ui/ \# shared UI components\
config/ \# shared configs

docs/\
brand.md\
tech.md\
content-model.md

package.json

------------------------------------------------------------------------

# Astro Frontend Structure

apps/web/

public/

src/

components/ ui/ \# shadcn components layout/ article/ artist/ release/
audio/

layouts/ BaseLayout.astro ArticleLayout.astro ArtistLayout.astro

pages/ index.astro

essays/ \[slug\].astro

interviews/ \[slug\].astro

artists/ \[slug\].astro

releases/ \[slug\].astro

scenes/ \[slug\].astro

archive.astro search.astro

lib/ api/ strapi.ts

queries/ articles.ts artists.ts releases.ts

utils/

styles/ globals.css

types/ article.ts artist.ts release.ts

astro.config.mjs

------------------------------------------------------------------------

# UI Component Architecture

Components should follow feature-based grouping.

components/

article/ ArticleCard.tsx ArticleHero.tsx ArticleBody.tsx
RelatedArticles.tsx

artist/ ArtistHero.tsx ArtistBio.tsx ArtistDiscography.tsx

release/ ReleaseHero.tsx TrackList.tsx ReleasePlayer.tsx

audio/ Waveform.tsx AudioPlayer.tsx

layout/ Header.tsx Footer.tsx Navigation.tsx

------------------------------------------------------------------------

# Data Fetching Strategy

## Static Generation

Used for:

-   articles
-   artist pages
-   releases

Example:

getStaticPaths()

------------------------------------------------------------------------

## Server Rendering

Used for:

-   search
-   archive filters

Example:

export const prerender = false

------------------------------------------------------------------------

# Strapi Integration

Strapi endpoints:

/api/articles /api/artists /api/releases /api/scenes

Example API utility:

export async function fetchAPI(path) { const response = await
fetch(`${STRAPI_URL}/api/${path}`) return response.json() }

------------------------------------------------------------------------

# Media Handling

Media is stored in Cloudinary.

Advantages:

-   image optimization
-   CDN delivery
-   responsive images

------------------------------------------------------------------------

# Search System

Search index built from CMS data.

Options:

## Meilisearch

Pros: - open source - fast - easy to self-host

## Algolia

Pros: - powerful relevance - production-ready

Indexed content:

-   articles
-   artists
-   releases

------------------------------------------------------------------------

# Listening Mode (Special Feature)

Listening Mode is a unique UX feature.

Implementation ideas:

-   React state toggle
-   CSS transitions
-   background waveform animation

Possible tech:

-   Three.js shader
-   canvas sine waves

Behavior:

-   UI fades darker
-   album art becomes focal
-   article typography enlarges

------------------------------------------------------------------------

# Performance Strategy

Astro advantages:

-   minimal JavaScript
-   partial hydration
-   static HTML

Performance practices:

-   lazy load images
-   hydrate only interactive components
-   use edge caching

------------------------------------------------------------------------

# Deployment

Hosted on Vercel.

Deployment flow:

GitHub Push\
↓\
Vercel Build\
↓\
Astro Build\
↓\
Deployment

Environment variables:

STRAPI_URL\
STRAPI_API_TOKEN\
CLOUDINARY_CLOUD_NAME

------------------------------------------------------------------------

# Future Features

Potential extensions:

-   playlist curation
-   audio waveform visualizations
-   editorial collections
-   generative visual backgrounds
-   AI-assisted tagging

------------------------------------------------------------------------

# Development Goals

The Harmonic should demonstrate:

-   modern headless CMS architecture
-   scalable content modeling
-   editorial-grade frontend design
-   high performance static delivery
-   modular component architecture
