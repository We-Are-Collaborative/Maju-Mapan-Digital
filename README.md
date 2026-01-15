# Maju Mapan Digital - Enterprise CMS & Marketing Platform

A Next.js 16 (Turbopack) application for managing digital marketing assets, SEO, and client campaigns.

## Features
- **Page Builder**: Dynamic block-based content editing.
- **SEO & GEO Auditor**: Real-time auditing and geographic targeting.
- **Global Settings**: Manage `robots.txt`, Analytics, and Server configurations via Admin dashboard.
- **Media Library**: Integrated asset management.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Database**: Prisma (SQLite/Postgres compatible)
- **Styling**: Tailwind CSS 4
- **Auth**: NextAuth.js

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Copy `.env.example` to `.env` and configure your keys.

3. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   node scripts/seed.js # Optional: Seed initial data
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

## Admin Access
- **URL**: `/admin`
- **Default Creds**: (Configured in seeded DB)

## License
Private Property of Maju Mapan Digital.
