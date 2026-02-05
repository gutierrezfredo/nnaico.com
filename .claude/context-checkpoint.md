# Nnaico.com Context Checkpoint

**Date:** 2026-02-04
**Last Updated:** 2026-02-04 20:49 (most recent file modification)
**Project:** Nnaico marketing website

---

## Session Summary

Built a complete marketing website for Nnaico, an AI assistant platform for businesses. The website is a React/Vite prototype with Tailwind CSS v4, featuring 13 components that showcase the product's value proposition, features, pricing, and capabilities.

The site positions Nnaico as "AI That Actually Knows Your Business" - targeting SMBs (10-100 employees) who need private, company-specific AI assistants trained on their own documents.

**Major Updates This Session:**
- Hero section completely redesigned with animated chat mockup that cycles through 4 conversation scenarios
- New ChatMockup component created for reusable chat UI across ValueProps and UseCases
- ValueProps redesigned with gradient cards and embedded chat mockups
- UseCases now has interactive card selection with dynamic chat preview
- Consistent visual language with AI avatar, message bubbles, and input field styling

---

## Key Decisions Made

| Decision | Value |
|----------|-------|
| Pricing - Starter | $150/month (3 assistants, 10 users, 1GB) |
| Pricing - Growth | $250/month (10 assistants, 50 users, 10GB) - marked as "Most Popular" |
| Pricing - Enterprise | Custom (unlimited, self-hosted option) |
| Target market | SMBs with 10-100 employees (e-commerce, SaaS, agencies, course creators) |
| Positioning | "AI That Actually Knows Your Business" - NOT a chatbot |
| Hero headline | "Every Answer Your Team Needs, Instantly" |
| Product URL | https://insight.nnaico.com |
| Testimonial companies | Racing Force Group, SeedTrust Escrow |
| Trial offer | 14-day free trial, no credit card required |
| Hero animation | Typing effect with 4 rotating scenarios (Knowledge Bottleneck, New Employee Onboarding, Sales Enablement, Instant Support) |

---

## Current State

### Working Components (13 total)

1. **Navbar** - Fixed nav with logo, links (Features, How It Works, Pricing), Sign In, Start Free Trial CTA
2. **Hero** - Animated chat mockup with:
   - Typing effect for user questions
   - Message "sending" animation
   - AI response typing with cursor
   - 4 rotating conversation scenarios
   - Floating stat cards (2,847 questions answered, 1.2s avg response)
   - 3D perspective tilt effect
   - Dot indicators for scenario navigation
3. **ChatMockup** - Reusable component with two modes:
   - `minimal`: Clean floating messages for ValueProps/UseCases (AI avatar, source citations)
   - Full: Window chrome style (not currently used)
4. **ValueProps** - "Why Teams Choose Nnaico" section with:
   - 1 large featured card + 2 side-by-side cards
   - Gradient backgrounds (primary-100 to cyan-100)
   - Embedded ChatMockup components with real conversation examples
   - Source citations in AI responses
5. **UseCases** - "Built for How You Actually Work" with:
   - 4 clickable cards in 2x2 grid (Customer Support, Employee Onboarding, Sales Enablement, Internal Knowledge Base)
   - Active state with ring highlight and shadow
   - Dynamic chat preview below that updates on selection
   - Problem/outcome messaging
6. **HowItWorks** - 3-step process: Upload Knowledge, Create Assistants, Start Asking
7. **Features** - 8-feature grid: Multiple Assistants, Knowledge Base, Memory, Flexible LLMs, Built-in Tools, Contact Collector, Admin Dashboard, Website Embedding
8. **CapabilitiesShowcase** - Interactive tabbed demo showing: Memory, Charts, File Export, Contact Collector, Web Search, Reports, Code Execution
9. **Testimonials** - 2 testimonials from Racing Force Group and SeedTrust Escrow
10. **Pricing** - 3-tier pricing cards (Starter, Growth, Enterprise)
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

### Visual Design Patterns

- AI Avatar: Gradient circle (primary-500 to cyan-500) with lightning bolt icon
- User messages: Blue gradient bubble, right-aligned
- AI messages: White bubble with shadow, left-aligned, optional source citation
- Input field: Gray-50 background with chat icon and send button
- Cards: Rounded-3xl with gradient backgrounds
- Shadows: Large, soft shadows (0_8px_40px)

---

## Files Modified/Created

### Root Files
- `/Users/alfredo/Developer/github.com/gutierrezfredo/nnaico.com/CLAUDE.md` - Project template instructions
- `/Users/alfredo/Developer/github.com/gutierrezfredo/nnaico.com/DESIGN_RULES.md` - Spacing and typography guidelines
- `/Users/alfredo/Developer/github.com/gutierrezfredo/nnaico.com/package.json` - Dependencies

### Source Files
- `/Users/alfredo/Developer/github.com/gutierrezfredo/nnaico.com/src/App.jsx` - Main app with all component imports
- `/Users/alfredo/Developer/github.com/gutierrezfredo/nnaico.com/src/index.css` - Brand colors and global styles
- `/Users/alfredo/Developer/github.com/gutierrezfredo/nnaico.com/src/main.jsx` - React entry point

### Components (all in /src/components/)
| File | Last Modified | Notes |
|------|---------------|-------|
| `Hero.jsx` | 20:49 | Animated chat with 4 scenarios, typing effects |
| `ValueProps.jsx` | 20:33 | Gradient cards with ChatMockup |
| `ChatMockup.jsx` | 20:22 | New - reusable chat UI component |
| `UseCases.jsx` | 20:18 | Interactive card selection |
| `Navbar.jsx` | 20:14 | Fixed nav |
| `HowItWorks.jsx` | 20:14 | 3-step process |
| `CapabilitiesShowcase.jsx` | 20:14 | Interactive tabs |
| `Pricing.jsx` | 20:14 | 3-tier cards |
| `FAQ.jsx` | 19:36 | Accordion |
| `FinalCTA.jsx` | 19:36 | Final CTA |
| `Footer.jsx` | 19:36 | Footer |
| `Features.jsx` | 19:34 | 8-feature grid |
| `Testimonials.jsx` | 19:35 | 2 testimonials |

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
- [ ] Initialize git repo (currently not a git repository)
- [ ] Test website locally (`npm run dev`)
- [ ] Review and adjust copy if needed
- [ ] Get SeedTrust permission for testimonial/case study
- [ ] Deploy to production (when ready)

### Future Enhancements
- [ ] Add mobile hamburger menu to Navbar
- [ ] Add actual customer logos to testimonials
- [ ] Create demo video section (currently #demo links to CapabilitiesShowcase)
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

### Hero Animation Details
The Hero section cycles through 4 conversation scenarios:
1. **Knowledge Bottleneck**: "Who handles vendor contracts?" → Sarah Chen + approval process
2. **New Employee Onboarding**: "How do I set up my dev environment?" → Step-by-step setup guide
3. **Sales Enablement**: "Why we're better than CompetitorX?" → Key differentiators list
4. **Instant Support**: "What's our refund policy?" → Enterprise refund policy details

Animation phases:
- `typing-input`: Types user question in input field (18ms per char)
- `sent`: Message moves to chat area
- `typing-response`: AI response types out (8ms per char)
- `done`: Wait 3s, then cycle to next scenario

### Related Documents
- Marketing strategy: `Docs/Projects/Nnaico/Marketing Strategy.md` (Obsidian vault)
- Website copy: `Docs/Projects/Nnaico/Website Copy.md` (Obsidian vault)
- Cold emails: `Docs/Projects/Nnaico/Cold Emails.md` (Obsidian vault)
- Session log: `Docs/Session Logs/nnaico.md` (Obsidian vault)

### Key URLs
- Product: https://insight.nnaico.com
- Website (to deploy): nnaico.com
- Contact: hello@nnaico.com

### Design Principles
- Follow DESIGN_RULES.md for consistent spacing
- Use responsive typography (text-4xl md:text-5xl lg:text-6xl for hero)
- Section padding: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Feature grids: gap-8 md:gap-12
- Cards: rounded-3xl with gradient backgrounds
- Shadows: Large, dramatic shadows for depth
