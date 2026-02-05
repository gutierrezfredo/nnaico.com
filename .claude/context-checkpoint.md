# Nnaico.com Context Checkpoint

**Date:** 2026-02-04
**Last Updated:** 2026-02-04 22:30 (latest session)
**Project:** Nnaico marketing website

---

## Session Summary

Built a complete marketing website for Nnaico, an AI assistant platform for businesses. The website is a React/Vite prototype with Tailwind CSS v4, featuring 13 components that showcase the product's value proposition, features, pricing, and capabilities.

The site positions Nnaico as "AI That Actually Knows Your Business" - targeting SMBs (10-100 employees) who need private, company-specific AI assistants trained on their own documents.

**Latest Session Updates:**
- Hero section: Static headline with line break ("Every Answer Your Team\nNeeds, Instantly"), smaller buttons (py-3 px-6), rotating chat demos with prev/next arrows, pause on interaction
- Navbar: Transparent with backdrop blur (bg-white/30 backdrop-blur-xl), centered nav links (absolute positioned), smaller height (h-14)
- ValueProps ("Why Teams Choose Nnaico"): 3-column grid with icons, no chat mockups
- UseCases ("Built for How You Actually Work"): 2-column layout (selection cards left, chat right), 4 use cases with action-oriented conversations (not tech-focused), green outcome box
- CapabilitiesShowcase ("See What Nnaico Can Do"): 2-column layout with 2x4 grid of capability cards, ChatMockup component with hasChart/hasDownload support
- Testimonials: Single card with rotating quotes, logo selector at bottom, light blue background
- Pricing: Cards use flex layout to push buttons to bottom, increased header gap (mb-20)
- HowItWorks: Increased header gap (mb-20)
- Button standardization: All buttons use py-3 px-6 font-semibold rounded-full (navbar uses smaller py-2 px-4)
- Non-tech focus: Removed dev environment examples, using expense reports/general business examples instead

---

## Deployment

| Item | Value |
|------|-------|
| GitHub Repository | https://github.com/gutierrezfredo/nnaico.com |
| Cloudflare Pages | https://nnaico.pages.dev |
| Deploy Command | `npm run build && npx wrangler pages deploy dist --project-name=nnaico --branch=main` |
| Uncommitted Changes | Yes, several styling and content updates since initial commit |

---

## Key Decisions Made

| Decision | Value |
|----------|-------|
| Pricing - Starter | $150/month (3 assistants, 10 users, 1GB) |
| Pricing - Growth | $250/month (10 assistants, 50 users, 10GB) - marked as "Most Popular" |
| Pricing - Enterprise | Custom (unlimited, self-hosted option) |
| Target market | SMBs with 10-100 employees (e-commerce, SaaS, agencies, course creators) |
| Positioning | "AI That Actually Knows Your Business" - NOT a chatbot |
| Hero headline | "Every Answer Your Team\nNeeds, Instantly" (static with line break) |
| Product URL | https://insight.nnaico.com |
| Testimonial companies | Racing Force Group, SeedTrust Escrow |
| Trial offer | 14-day free trial, no credit card required |
| Hero chat demos | Rotating with prev/next arrows, pause on interaction |

---

## Current State

### Working Components (13 total)

1. **Navbar** - Transparent with backdrop blur (bg-white/30 backdrop-blur-xl), centered nav links, h-14 height, smaller button sizing (py-2 px-4)
2. **Hero** - Static headline with line break, smaller buttons (py-3 px-6), rotating chat demos with prev/next arrows, pause on interaction
3. **ChatMockup** - Reusable component with support for hasChart and hasDownload props for interactive capabilities
4. **ValueProps** - "Why Teams Choose Nnaico" - 3-column grid with icons, no chat mockups
5. **UseCases** - "Built for How You Actually Work" - 2-column layout (selection cards left, chat right), 4 use cases with action-oriented conversations, green outcome box
6. **HowItWorks** - 3-step process with increased header gap (mb-20)
7. **Features** - 8-feature grid
8. **CapabilitiesShowcase** - "See What Nnaico Can Do" - 2-column layout with 2x4 capability cards grid, ChatMockup with hasChart/hasDownload
9. **Testimonials** - Single card with rotating quotes, logo selector at bottom, light blue background
10. **Pricing** - 3-tier cards with flex layout pushing buttons to bottom, increased header gap (mb-20)
11. **FAQ** - 6 expandable FAQ items with accordion behavior
12. **FinalCTA** - Gradient background with final call-to-action
13. **Footer** - Brand description, Product links, Company links, social icons

### Tech Stack

- Vite + React 19.2.0 + Tailwind CSS v4
- No component library (plain divs)
- Custom CSS with brand colors (primary blue #1E3A8A to #3B82F6, cyan accents)
- React hooks: useState, useEffect for animations

### Brand Colors (defined in index.css)

- Primary: Blue scale (#1E3A8A to #EFF6FF)
- Accent: Cyan (#0EA5E9, #22D3EE)
- Surface: #F8FAFC
- Mockup BG: #F5F3EF
- Text: #1E293B
- Muted: #64748B
- Base font size: 18px

### Button Standardization

- Standard buttons: py-3 px-6 font-semibold rounded-full
- Navbar buttons: py-2 px-4 (smaller)
- Consistent sizing across Hero, Pricing, FinalCTA sections

---

## Files Modified This Session

### Source Files
- `/Users/alfredo/Developer/github.com/gutierrezfredo/nnaico.com/src/App.jsx`
- `/Users/alfredo/Developer/github.com/gutierrezfredo/nnaico.com/src/index.css`

### Components (all in /src/components/)
| File | Key Changes |
|------|-------------|
| `Hero.jsx` | Static headline with line break, smaller buttons, rotating chat with arrows, pause on interaction |
| `Navbar.jsx` | Transparent with backdrop blur, centered nav, h-14, smaller buttons |
| `ValueProps.jsx` | 3-column grid with icons, removed chat mockups |
| `UseCases.jsx` | 2-column layout, action-oriented conversations, green outcome box |
| `CapabilitiesShowcase.jsx` | 2-column layout, 2x4 grid, hasChart/hasDownload support |
| `ChatMockup.jsx` | Added hasChart and hasDownload props |
| `Testimonials.jsx` | Single rotating card, logo selector, light blue background |
| `Pricing.jsx` | Flex layout for button alignment, mb-20 header gap |
| `HowItWorks.jsx` | Increased header gap (mb-20) |
| `FinalCTA.jsx` | Button sizing standardization |

### Assets (in /public/)
- `logo.png` - Nnaico logo
- `screenshots/chat.png` - Main chat interface
- `screenshots/assistants.png` - Assistants list
- `screenshots/capabilities.png` - Capabilities view
- `screenshots/admin.png` - Admin dashboard
- `screenshots/behavior.png` - Behavior settings

---

## Next Steps

### Immediate
- [ ] Commit and push latest changes to GitHub
- [ ] Deploy to Cloudflare Pages
- [ ] Review and adjust copy if needed
- [ ] Get SeedTrust permission for testimonial/case study

### Future Enhancements
- [ ] Add mobile hamburger menu to Navbar
- [ ] Add actual customer logos to testimonials
- [ ] Create demo video section
- [ ] Add contact form or Calendly integration for Enterprise tier
- [ ] Set up analytics tracking
- [ ] Build target company list (50 companies for cold outreach)

---

## Important Context

### Business Context
- Nnaico is a side project with Max (partner)
- Alfredo's involvement is hidden due to green card constraints
- SeedTrust Escrow is an actual customer (need permission for case study)
- Racing Force Group is also referenced as a customer

### UseCases Content (Action-Oriented)
The use cases now focus on business outcomes rather than technical examples:
1. Customer Support - handling order cancellation policies
2. Employee Onboarding - expense report submissions
3. Sales Enablement - proposal generation
4. Internal Knowledge Base - team documentation

### Related Documents
- Session log: `Docs/Session Logs/nnaico.md` (Obsidian vault)
- Marketing strategy docs in Obsidian vault

### Key URLs
- Product: https://insight.nnaico.com
- Website: https://nnaico.pages.dev (Cloudflare Pages)
- GitHub: https://github.com/gutierrezfredo/nnaico.com
- Contact: hello@nnaico.com

### Design Principles
- Follow DESIGN_RULES.md for consistent spacing
- Use responsive typography (text-4xl md:text-5xl lg:text-6xl for hero)
- Section padding: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Feature grids: gap-8 md:gap-12
- Cards: rounded-3xl with gradient backgrounds
- Shadows: Large, dramatic shadows for depth
