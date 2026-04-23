# Design System Strategy: The Digital Architect

## 1. Overview & Creative North Star
The "Digital Architect" is the Creative North Star for this design system. It is a philosophy that bridges the unwavering stability of civic institutions with the agile, visionary spirit of a high-end tech laboratory. 

To move beyond the "generic SaaS" look, this system rejects the standard boxy grid in favor of **Structural Transparency**. We achieve this through intentional asymmetry, dramatic shifts in typographic scale, and a "layered-glass" approach to depth. The interface should feel like an architectural blueprint come to life: precise, professional, and sophisticated. It doesn't just present data; it curates an experience of trust.

---

## 2. Colors & Tonal Depth
Our palette is rooted in the authority of `primary` (#041627) and the energetic precision of `secondary` (#006b5f). 

### The "No-Line" Rule
To achieve a premium, editorial feel, **1px solid borders are prohibited for sectioning.** We define boundaries through background color shifts. 
- Use `surface_container_low` for secondary sections sitting on a `surface` background.
- Use `surface_container_highest` for sidebars or navigation drawers to create a structural anchor without "cutting" the layout with lines.

### Surface Hierarchy & Nesting
Think of the UI as physical layers of fine paper and frosted glass. 
1. **Base Layer:** `surface` (#f7f9fe) — The foundation of the layout.
2. **Sectional Layer:** `surface_container_low` — For subtle grouping of content.
3. **Elevated Content:** `surface_container_lowest` (#ffffff) — Reserved for cards or interactive modules to make them "pop" against the gray base.

### The "Glass & Gradient" Rule
To avoid a flat, "budget" appearance, incorporate Glassmorphism for floating elements (like top navigation bars or popovers). Use `surface` with a 70% opacity and a `24px` backdrop-blur. 
- **Signature Texture:** Apply a subtle linear gradient to primary CTAs: `primary` (#041627) to `primary_container` (#1a2b3c) at a 135-degree angle. This adds a "lithographic" soul to the button that a flat hex code cannot.

---

## 3. Typography
We use a dual-typeface system to balance "Civic Weight" with "Tech Innovation."

- **The Voice (Display & Headline):** *Plus Jakarta Sans*. This typeface is used for `display-lg` through `headline-sm`. Its geometric nature feels like "IT entrepreneurship"—modern, clean, and optimistic. 
- **The Information (Title, Body, & Label):** *Inter*. Used for `title-lg` down to `label-sm`. Inter provides the "Civic Trust"—it is high-utility, serious, and exceptionally legible for complex data.

**Editorial Hierarchy:** Don't be afraid of white space. Pair a `display-md` headline with a `body-md` description, leaving significant "breathing room" (at least 48px) between the two to suggest an expensive, curated feel.

---

## 4. Elevation & Depth
In this system, depth is a function of light and tone, not shadows and lines.

- **The Layering Principle:** Stack your containers. Place a `surface_container_lowest` card inside a `surface_container_high` section. The contrast in light creates a natural lift.
- **Ambient Shadows:** When an element must float (e.g., a Modal), use a shadow tinted with `on_surface`. 
    - *Example:* `box-shadow: 0 12px 32px rgba(24, 28, 32, 0.06);` 
    - Never use pure black or high-opacity shadows; they look "muddy" and dated.
- **The "Ghost Border" Fallback:** If a divider is required for structural clarity (like in a dense data table), use a "Ghost Border": `outline_variant` at 20% opacity. It should be barely visible—a suggestion of a line, not a barrier.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `on_primary` text, `md` (0.75rem) corner radius.
- **Secondary:** `secondary_container` fill with `on_secondary_container` text. This is your "Innovation Teal" moment—use it for tech-forward actions.
- **Tertiary:** No fill. `primary` text. Use for low-emphasis actions like "Cancel" or "Learn More."

### Cards & Lists
- **Rule:** **No Divider Lines.** Use `surface_container_low` for the card background and `surface_container_lowest` for the inner content area. 
- **Architectural Grid:** Use a very faint 24px x 24px grid pattern (using `outline_variant` at 5% opacity) as a background texture for hero sections to nod to the "IT/Architect" structure.

### Input Fields
- **Default State:** `surface_container_highest` background with no border. 
- **Focus State:** `secondary` "Ghost Border" (2px) and a subtle `secondary_container` glow (blur 8px).
- **Labeling:** Always use `label-md` in `on_surface_variant` for field labels.

### Architectural Breadcrumbs
Move away from standard `Home > Category > Page`. Use a "Technical Breadcrumb" style: Bold `title-sm` for the current page, separated by a thin vertical "Ghost Border" rather than a chevron.

---

## 6. Do's and Don'ts

### Do
- **Use Intentional Asymmetry:** Align text to the left but place supporting imagery or data slightly off-center to create a bespoke, non-template feel.
- **Leverage Tonal Transitions:** Use background shifts to guide the eye through the hierarchy of information.
- **Respect the "Teal":** Use `secondary` (#006b5f) sparingly. It is a precision tool for highlighting technical success, active states, and innovation.

### Don't
- **Don't Use 1px Solid Lines:** They break the "Glass & Paper" illusion and make the site look like an old government portal.
- **Don't Use High-Contrast Dark Modes:** This system is built on "Approachability." Avoid pure black backgrounds; use `primary` if a dark section is absolutely necessary.
- **Don't Crowd the Interface:** If a screen feels busy, increase the padding. A "well-funded" feel comes from the luxury of space.