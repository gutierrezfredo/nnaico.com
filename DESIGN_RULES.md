# Design System Rules

**Purpose:** Guidelines for building consistent website layouts with Tailwind CSS.

---

## Spacing

Use Tailwind's spacing scale. Never hardcode pixel values.

**Section Layout:**
| Context | Tailwind Class |
|---------|---------------|
| Section vertical padding | `py-16 md:py-24 lg:py-32` |
| Section spacing (stacked) | `space-y-16` or `space-y-24` |
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| Narrow container (text) | `max-w-3xl mx-auto px-4 sm:px-6` |

**Content Spacing:**
| Context | Tailwind Class |
|---------|---------------|
| Hero headline to subtext | `mt-4` or `mt-6` |
| Section heading to content | `mt-8` or `mt-12` |
| Paragraph spacing | `space-y-4` or `space-y-6` |
| Feature grid | `gap-8 md:gap-12` |
| Card grid | `gap-6 md:gap-8` |
| CTA buttons | `gap-4` |
| Icon + text | `gap-2` or `gap-3` |
| Footer columns | `gap-8` |

---

## Typography

**Headings:**
| Context | Tailwind Class |
|---------|---------------|
| Hero headline | `text-4xl md:text-5xl lg:text-6xl font-bold` |
| Section heading | `text-3xl md:text-4xl font-bold` |
| Card/feature heading | `text-xl md:text-2xl font-semibold` |

**Body:**
| Context | Tailwind Class |
|---------|---------------|
| Hero subtext | `text-lg md:text-xl text-muted-foreground` |
| Body copy | `text-lg` or `text-xl` |
| Small/caption | `text-sm text-muted-foreground` |

---

## Common Patterns

**Section wrapper:**
```jsx
<section className="py-16 md:py-24 lg:py-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* content */}
  </div>
</section>
```

**Centered text block:**
```jsx
<div className="max-w-3xl mx-auto text-center">
  <h2 className="text-3xl md:text-4xl font-bold">Heading</h2>
  <p className="mt-4 text-lg text-muted-foreground">Subtext</p>
</div>
```

**Feature grid:**
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
  {/* feature cards */}
</div>
```

---

## Self-Check

Before delivering:
- Sections use `py-16 md:py-24 lg:py-32`?
- Container uses `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`?
- Feature grids use `gap-8 md:gap-12`?
- Typography uses responsive sizes?
