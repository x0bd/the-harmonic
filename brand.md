# The Harmonic --- Brand Specification

## Brand Overview

**The Harmonic** is a modern editorial platform dedicated to
experimental electronic music, underground scenes, and sonic culture.

The publication explores the deeper structures of sound: artists,
movements, philosophy, production techniques, and the cultural
environments that shape experimental music.

The tone is analytical but atmospheric --- a hybrid of a music journal,
cultural archive, and sonic research institute.

The platform focuses on:

-   experimental electronic music
-   industrial / darkwave / ambient
-   sonic theory and production techniques
-   underground music scenes
-   artist interviews
-   critical essays on sound culture

The experience should feel closer to a **curated research publication**
than a casual music blog.

------------------------------------------------------------------------

# Brand Identity

## Brand Archetype

Archivist × Curator × Signal Analyst

The Harmonic acts as:

-   a cultural archive of sound
-   a listening laboratory
-   a curated observatory of underground music

------------------------------------------------------------------------

## Visual Direction

The aesthetic should be **minimalist, cinematic, and editorial**.

Influences:

-   Resident Advisor
-   NTS Radio
-   avant‑garde art magazines
-   modern digital editorials

Design principles:

-   large editorial typography
-   immersive media
-   dark interface
-   structured layouts
-   minimal color accents

------------------------------------------------------------------------

## Color Palette

### Base

-   #0A0A0A (black)
-   #121212 (deep charcoal)

### Accent

-   #4C6FFF (harmonic blue)
-   #7A5FFF (spectral violet)

### Neutral

-   #B4B4B4 (soft grey)
-   #F5F5F5 (off white)

Accent colors should be used sparingly for:

-   highlights
-   hover states
-   waveform visuals
-   tags

------------------------------------------------------------------------

## Typography

### Headline Font

Editorial serif examples:

-   Canela
-   Editorial New
-   Tiempos Headline

Used for:

-   article titles
-   hero headlines
-   section titles

### Body Font

Clean modern sans serif examples:

-   Inter
-   Geist
-   Söhne

Used for:

-   paragraphs
-   UI elements
-   navigation

### Data / Metadata Font

Monospace examples:

-   Geist Mono
-   IBM Plex Mono

Used for:

-   metadata
-   tags
-   timestamps
-   structured information

Example:

ARTIST: Boy Harsher\
SCENE: Berlin\
YEAR: 2024

------------------------------------------------------------------------

# Global Navigation

Primary navigation:

-   Home
-   Essays
-   Interviews
-   Releases
-   Artists
-   Scenes
-   Archive

Utility navigation:

-   Search
-   Listening Mode
-   Menu

Search should be prominent because discovery is central to the platform.

------------------------------------------------------------------------

# Global Header

Layout:

THE HARMONIC

Essays \| Interviews \| Releases \| Artists \| Scenes

Search \| Listening Mode

Behavior:

-   header shrinks on scroll
-   subtle divider line appears
-   background becomes slightly translucent

------------------------------------------------------------------------

# Page Architecture

## Homepage

Curated editorial front page.

### Hero Feature

Featured article with:

-   massive headline
-   cinematic image
-   short excerpt
-   read article CTA

### Featured Grid

-   2 large editorial cards
-   3 medium cards

Content mix:

-   essays
-   interviews
-   releases

### Latest Essays

List layout showing:

-   title
-   author
-   reading time
-   excerpt

### Latest Releases

Grid showing:

-   album cover
-   artist
-   release title
-   genre tags

### Scenes

Examples:

-   Berlin
-   Detroit
-   Tokyo
-   London

### Newsletter

Stay in Frequency

Email input\
Subscribe

------------------------------------------------------------------------

# Essay Page

## Article Hero

-   category
-   title
-   subtitle
-   author
-   date
-   reading time

Large hero image below.

## Article Body

Allowed elements:

-   paragraphs
-   pull quotes
-   images
-   embedded audio
-   album embeds
-   section headings

## Related Content

-   Related Essays
-   Related Artists
-   Related Releases

------------------------------------------------------------------------

# Artist Page

## Artist Hero

-   artist name
-   location
-   genres

## Sections

-   biography
-   discography
-   interviews
-   related artists

Discography card example:

-   album cover
-   year
-   label

------------------------------------------------------------------------

# Release Page

## Release Hero

-   album cover
-   artist
-   release title
-   year
-   label

## Tracklist

1.  Track Name
2.  Track Name
3.  Track Name

## Embedded Player

Bandcamp / SoundCloud / Spotify

## Editorial Write-up

Short critical essay about the release.

## Related Releases

Discovery grid.

------------------------------------------------------------------------

# Scene Page

Example: Berlin

## Scene Hero

BERLIN

Short editorial introduction.

## Sections

-   key artists
-   influential venues
-   scene articles

------------------------------------------------------------------------

# Archive Page

Filtering system:

-   content type
-   artist
-   scene
-   genre
-   year

Results:

-   article cards
-   release cards
-   artist cards

------------------------------------------------------------------------

# Listening Mode

Immersive reading mode:

-   UI fades to black
-   album art becomes focal
-   essay text fades in
-   subtle waveform animation background

Inspired by digital liner notes.

------------------------------------------------------------------------

# CMS Content Model (Strapi)

Content types:

-   Artist
-   Release
-   Track
-   Article
-   Interview
-   Scene
-   Tag
-   Playlist

Relationships:

-   Artist -\> Releases
-   Artist -\> Interviews
-   Release -\> Tracks
-   Article -\> Artists
-   Article -\> Releases
-   Scene -\> Artists
-   Scene -\> Articles

------------------------------------------------------------------------

# Suggested Tech Stack

-   Astro
-   Strapi
-   Vercel
-   PostgreSQL (Neon)
-   Cloudinary
-   Algolia / Meilisearch

------------------------------------------------------------------------

# Project Goal

The Harmonic demonstrates:

-   complex CMS modeling
-   editorial design systems
-   modern headless architecture
-   media-rich performance optimized websites
-   production-grade content platforms
