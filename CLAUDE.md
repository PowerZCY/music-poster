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
- **Data Management**: Poster metadata stored in `/src/data/posters.ts` (replace R2_BASE_URL with actual Cloudflare R2 bucket URL)
- **Categories**: Earphone, Music Class, Country Music, Music Poster Wall
- **Components**: PosterGrid with infinite scroll, CategoryFilter, PosterCard with hover effects
- **Routes**: 
  - Home page shows all posters with category filter
  - `/category/[slug]` for filtered category views
  - `/poster/[id]` for individual poster details with download
- **Performance**: Pagination (20 posters per load), lazy loading images, responsive grid (4 cols desktop, 2 cols mobile)
- **Important**: Add actual poster data to `POSTERS` array in `/src/data/posters.ts` with correct Cloudflare R2 URLs