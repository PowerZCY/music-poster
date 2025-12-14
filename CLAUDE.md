# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `pnpm dev` - Start development server with Turbopack (includes pre-lint check)
- `pnpm build` - Production build (generates blog index and builds Next.js)
- `pnpm build:dev` - Development build (generates blog index and builds Next.js)
- `pnpm build:prod` - Production build only (no blog index generation)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint checks

### Maintenance Commands
- `pnpm d8` / `pnpm deep-clean` - Deep clean project (removes node_modules, .next, etc.)
- `pnpm generate-blog-index` - Generate blog index from MDX files
- `pnpm check-translations` - Check translation completeness
- `pnpm clean-translations` - Clean unused translations
- `pnpm remove-translations` - Remove unused translations
- `pnpm whoareyou` - Generate Next.js architecture documentation
- `pnpm windrun` - Update all @windrun-huaiin packages to latest

### Changeset Management
- `pnpm dj` / `pnpm easy-changeset` + status - Create changeset and check status
- `pnpm djv` - Version changesets

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15.3.2 with React 19.1.0
- **Authentication**: Clerk with multi-theme support
- **Documentation**: Fumadocs (with custom patch at 15.3.3)
- **Internationalization**: next-intl with en/zh support  
- **Styling**: Tailwind CSS 4.x with custom UI components
- **Content**: MDX with math (KaTeX) and Mermaid diagrams
- **Build Tool**: Turbopack for development

### Key Directory Structure
- `src/app/` - Next.js App Router structure
  - `[locale]/` - Internationalized routes
  - `(clerk)/` - Authentication pages (sign-in, sign-up, waitlist)
  - `(home)/` - Public pages (blog, legal, home, **poster gallery**, **categories**)
    - `category/[slug]` - Music poster category pages
    - `poster/[id]` - Individual poster detail pages
  - `api/` - API routes for LLM content generation
- `src/lib/` - Shared utilities and configurations
- `src/mdx/` - MDX content (blog and legal documents)
- `src/components/` - React components
  - `posters/` - Poster-specific components (PosterCard, CategoryFilter, PosterGrid)
  - `hero.tsx` - **Modified to display poster grid instead of marketing hero**
- `src/data/` - **Poster metadata and helper functions**
- `src/types/` - **TypeScript type definitions including poster types**
- `messages/` - i18n translation files (includes poster translations)

### Configuration Files
- `dev-scripts.config.json` - Development tooling configuration (i18n, blog generation, architecture scanning)
- `source.config.ts` - Fumadocs MDX configuration with custom code transformers
- `next.config.ts` - Next.js configuration with monorepo support for @windrun-huaiin packages

### Content Management
- Blog content in `src/mdx/blog/` with auto-generated index
- Legal documents in `src/mdx/legal/`
- API endpoints at `/api/blog/llm-content` and `/api/legal/llm-content` for dynamic content generation
- Custom Shiki code highlighting with Catppuccin themes

### Monorepo Integration
- Transpiles @windrun-huaiin packages: base-ui, third-ui, lib, dev-scripts
- Uses patches for fumadocs-ui compatibility
- Custom dev-scripts for blog index generation and i18n management

### Development Notes
- Pre-development lint checks are enforced
- Turbopack is used for fast development builds  
- Image optimization disabled for static export compatibility
- Custom code transformers for notation handling and language detection

### Music Poster Feature
- **Data Management**: Poster metadata stored in `/src/data/posters.ts` with Cloudflare R2 bucket URL
- **Categories**: 12 music categories across diverse genres and themes
  - **Main Categories (First Row)**: Earphone, Music Class, Country Music, Music Poster Wall, Music Store, Classical Music
  - **Extended Categories (Second Row)**: Jazz, Folk Music, Festival Music, Street Music, Seasonal Music, World Music
- **Components**: 
  - PosterGrid with infinite scroll and category filtering
  - CategoryFilter with two-row layout (main categories + extended categories)
  - PosterCard with hover effects and download functionality
- **Routes**: 
  - Home page shows all posters with category filter
  - `/category/[slug]` for filtered category views  
  - `/poster/[id]` for individual poster details with download
- **Performance**: Pagination (20 posters per load), lazy loading images, responsive grid (4 cols desktop, 2 cols mobile)
- **Content Library**: 184+ high-quality music posters with detailed descriptions and comprehensive tagging

### Image Processing Workflow
- **Source Location**: `/music_poster/` directory with multiple subfolders (music_class, earphone, music_store, all)
- **Processing Strategy**: Systematic batch processing of images with descriptive renaming
- **File Naming Convention**: Convert chaotic AI-generated names to descriptive English names (e.g., `u5338527161_earphone_music_poster_--chaos_25.webp` → `Cute-Anime-Girl-Earphones.webp`)
- **Content Analysis**: Visual examination of each image to generate accurate 300-500 word descriptions
- **Categorization System**: Smart categorization based on visual content, musical instruments, themes, and styles
- **Quality Control**: All processed images include comprehensive metadata, tags, and SEO-optimized descriptions

## Recent Updates (2025-01-09)

### Content Processing - Sixth Round
- **Processed Images**: 10 high-quality posters from `/music_poster/all/` directory
- **File Renaming**: Converted chaotic AI-generated filenames to descriptive English names
  - Example: `0_0 (17).webp` → `Retro-Bass-Player-Studio-Art.webp`
- **New Poster Categories Added**:
  - **Jazz** 🎺 - Added `Blue-Saxophone-Floral-Design` poster
  - **Folk Music** 🪕 - Added `Folk-Music-Band-City-Birds` and `Desert-Sunset-Banjo-Player` posters
- **Category Distribution**: Music Poster Wall (4), Classical Music (3), Country Music (1), Music Class (1), Jazz (1), Folk Music (1)

### Technical Enhancements
- **Type System**: Updated `PosterCategory` type to include 'jazz' and 'folk-music'
- **Data Structure**: Added 2 new categories to `CATEGORIES` array in `/src/data/posters.ts`
- **Internationalization**: Updated `/messages/en.json` with translations for new categories
- **UI Layout**: Modified `CategoryFilter` component for two-row display:
  - **Row 1**: All Posters + 6 main categories
  - **Row 2**: Jazz + Folk Music (new categories) + other extended categories

### Content Library Status
- **Total Posters**: 184 high-quality music posters
- **Total Categories**: 12 diverse music categories
- **Processing Progress**: Completed 6 rounds of systematic image processing
- **Remaining Content**: Large volume of unprocessed images in `/music_poster/all/` directory awaiting future processing

### Quality Standards Maintained
- ✅ All code passes ESLint checks
- ✅ Comprehensive 300-500 word descriptions for each poster
- ✅ Detailed tagging system for improved searchability
- ✅ Consistent file naming and organization
- ✅ SEO-optimized content structure