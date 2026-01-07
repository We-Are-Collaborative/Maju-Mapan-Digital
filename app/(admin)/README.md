# Admin Panel Module

This directory contains the Admin Panel for the Maju Mapan Digital project. It has been refactored to be as self-contained as possible, but it relies on specific shared resources from the main project.

## 📦 Dependencies

If you are moving this folder to a different project, ensure you also copy or implement the following dependencies:

### 1. Shared Components (`@/components`)
The admin panel uses ShadCN UI components and some shared layout elements.
- `components/ui/*` (Button, Input, Card, etc.)
- `components/providers/*` (SessionProvider, GlobalErrorProvider)
- `components/sections/SplitFeatureSection.tsx` (Used in Content Editor)

### 2. Shared Libraries (`@/lib`)
- `lib/db.ts`: Prisma Client instance (`prisma`).
- `lib/theme.ts`: Theme generation utilities.
- `lib/utils.ts`: CLSX/Tailwind merge helpers.

### 3. Shared Actions (`@/app/actions`)
Some server actions are shared between the Site and Admin:
- `app/actions/settings.ts` (Global Settings)
- `app/actions/check-db-content.ts`
- `app/actions/pages.ts` (Page content management)
- `app/actions/seo.ts` (SEO metadata)

## 🛠 Database Schema

Ensure your `schema.prisma` includes the following models required by the Admin Panel:
- `User` (Authentication)
- `GlobalSettings`
- `Theme`
- `PageContent` / `PageSection` / `SplitFeatureSection`
- `SEO` / `SeoOgVariant` / `SeoAnalysisSnapshot`
- `Script`
- `Backup`

## 🚀 Installation / Integration

1. Copy `app/(admin)` to your Next.js `app/` directory.
2. Ensure `app/(admin)/layout.tsx` imports are valid.
3. Verify `NextAuth` is set up (`app/api/auth/[...nextauth]`) if using the built-in auth.

## 📁 Internal Structure

- `_actions/`: Admin-specific Server Actions (Dashboard stats, Database tools, Network, Backups).
- `admin/`: The main admin pages.
- `api/`: Admin API routes (if any).
