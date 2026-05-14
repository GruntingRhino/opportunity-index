# Opportunity Index

Opportunity Index is a web-first opportunity marketplace for students, young professionals, schools, nonprofits, startups, and recruiting organizations. The current implementation is a polished Next.js 16 foundation with production-oriented UI architecture, mock marketplace data, and a Supabase-ready relational schema.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui primitives
- Framer Motion
- next-themes
- Supabase-ready schema in [`supabase/schema.sql`](/Users/abhay/RTB/projects/SOI/supabase/schema.sql)

## Included product surfaces

- Landing page
- Login, signup, forgot-password
- Multi-step onboarding shell
- Discovery feed with search/filter/map/list concepts
- Opportunity detail page
- Student dashboard with application tracker and gamification
- Organization dashboard with applicant management
- Messaging
- Admin panel
- Settings, privacy, terms, help center, support, tutorials, walkthroughs, maintenance, 404

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and fill in values when you wire in Supabase.

## Design direction

The implementation follows a few direct design constraints:

- strong typography hierarchy over ornamental clutter
- restrained, purposeful motion instead of constant animation
- glassmorphism only on selected high-value surfaces
- dense but readable dashboards
- light and dark mode parity
- modern rounded card system with consistent spacing

## Design research references

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines?lang=en)
- [Apple Motion guidance](https://developer.apple.com/design/Human-Interface-Guidelines/motion)
- [web.dev typography guidance](https://web.dev/learn/design/typography/)
- [web.dev responsive design guidance](https://web.dev/learn/design/)

## Next implementation steps

1. Add Supabase auth and SSR session handling.
2. Replace mock data with typed queries and server actions.
3. Add role-aware route protection and onboarding completion guards.
4. Implement uploads for resumes, logos, banners, and attachments.
5. Add full moderation workflows, search indexing, and recommendation services.
