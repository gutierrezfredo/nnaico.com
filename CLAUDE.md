# Website Prototype

**Purpose:** Quick prototyping for websites (blogs, portfolios, e-commerce, landing pages). No backend, no deployment.

**Not for:** SaaS, dashboards, admin panels → use `app-prototype` template.

## Design Rules (MANDATORY)
ALWAYS read `DESIGN_RULES.md` before creating or modifying any UI.

## Tech Stack

- Vite + React + Tailwind CSS v4
- Plain divs (no component library)

## Common Sections

- Hero — headline, subtext, CTA buttons
- Features — grid of feature cards
- Testimonials — customer quotes
- Pricing — pricing tiers
- CTA — call-to-action banner
- Footer — links, social, copyright

## File Structure

```
src/
├── components/
│   ├── Hero.jsx
│   ├── Features.jsx
│   └── Footer.jsx
├── index.css
├── App.jsx
└── main.jsx
```

Focus on UX validation. Rebuild with `site-production` when ready for production.
