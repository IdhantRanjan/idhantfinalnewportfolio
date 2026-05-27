# Page Topology — adit.email

## URL
https://www.adit.email/

## Overall Structure
```
body
  .layout (maxWidth: 748px, margin: 0 auto with 106px side margins on desktop, padding: 21.25px 12.75px 42.5px)
    header.site-header (flex, justify-between, align-items: baseline, border-bottom: 1px solid rgba(26,26,26,0.14), padding-bottom: 21.25px)
    main
    footer.site-footer
```

## Sections (top to bottom)
1. **Header** — sticky nav bar with logo `/a` and nav links
2. **Hero** — h1 with avatar image + "Adit" text in Instrument Serif
3. **Intro Stack** — 4 mono-font lines (age, location, accomplishments, soft/muted line)
4. **Body Paragraphs** — serif paragraph about interests
5. **Links section** — "A few links..." paragraph + bulleted list
6. **Divider** — hr with margin 8.5px 0
7. **About site** — paragraph + contact info
8. **Footer** — X and LinkedIn links, year

## Interaction Model
- Fully static — no scroll-driven animations, no tabs, no dynamic content
- Nav links have underline decoration (semi-transparent)
- Body links have underline decoration

## Responsive Behavior
- Desktop (1440px): `.layout` maxWidth 748px, centered with auto margins
- Mobile (390px): `.layout` fills full width, padding stays same; nav wraps to second line (flex-wrap)
