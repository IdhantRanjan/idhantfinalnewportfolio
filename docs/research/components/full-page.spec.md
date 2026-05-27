# Full Page Specification — adit.email

## Overview
- **Target file:** `src/app/page.tsx` + `src/app/layout.tsx` + `src/app/globals.css`
- **Interaction model:** static

## Design Tokens
- Background: `rgb(244, 240, 232)` = `#f4f0e8` (warm cream)
- Foreground: `rgb(26, 26, 26)` = `#1a1a1a` (near-black)
- Muted: `rgb(90, 90, 90)` = `#5a5a5a` (gray)
- Header border: `1px solid rgba(26, 26, 26, 0.14)`
- Footer border: `1px solid rgba(26, 26, 26, 0.12)`
- Nav link underline: `underline 1.275px rgba(26, 26, 26, 0.35)`
- Body link underline: `underline 1.36px` (solid, same color as text)

## Fonts
- **Body/main text:** Newsreader (serif), 17px, lineHeight 28.05px
- **Mono (nav, intro, footer):** JetBrains Mono, various sizes
- **Display (hero):** Instrument Serif, 44.2px

## Layout Wrapper (.layout)
- maxWidth: 748px
- margin: 0 auto (desktop has effective 106px side margins)
- padding: 21.25px 12.75px 42.5px

## Header (.site-header)
- display: flex, justify-content: space-between, align-items: baseline
- padding-bottom: 21.25px
- border-bottom: 1px solid rgba(26, 26, 26, 0.14)

### Site Title (.site-title > a)
- Text: `/a`, href: `/`
- Font: JetBrains Mono 17px, weight 500
- Color: rgb(26, 26, 26)
- No underline

### Nav (.nav)
- display: flex, flex-wrap: wrap, gap: 5.95px 21.25px (mobile wraps)
- Links: JetBrains Mono 15.9375px, weight 400
- text-decoration: underline 1.275px rgba(26,26,26,0.35)
- Separator: `<span class="nav-sep">|</span>` between "Thoughts" and "Reading"
- Nav items: About (/about/), Thoughts (/thoughts/), | , Reading (/reading/), Listening (/listening/), Photos (/photos/), Experiments (/experiments/)

## Main Content

### Hero (h1.hero)
- display: flex, align-items: flex-end, gap: 10.2px
- margin-bottom: 12.75px
- Font: Instrument Serif 44.2px, weight 400, letter-spacing: -0.884px, lineHeight: 50.83px
- Contains: `<img class="hero-avatar">` + text node "Adit"

### Hero Avatar (img.hero-avatar)
- src: `/images/avatar.png` (local copy of https://www.adit.email/avatar.png)
- alt: "Pixel avatar of Adit"
- Computed width: ~29px, height: 76.5px
- Natural size: 354×932 (tall pixel character)
- margin-bottom: 1.7px

### Intro Stack (.intro-stack)
- div, margin: 21.25px 0 42.5px
- Font: JetBrains Mono 15.9375px, weight 400, letter-spacing: -0.159375px, lineHeight: 24.7031px

#### Lines:
- `<p class="intro-line">17</p>` — color: rgb(26,26,26), margin-bottom: 5.95px
- `<p class="intro-line">Akola → everywhere.</p>` — same
- `<p class="intro-line">rejected a scholarship. built a residency.</p>` — same
- `<p class="intro-line intro-line--soft">still figuring out what i'm doing.</p>` — color: rgb(90,90,90), margin-bottom: 0

### Body Paragraphs (p)
- Font: Newsreader 17px, weight 400, lineHeight 28.05px
- Color: rgb(26, 26, 26)
- margin-bottom: 21.25px

#### Paragraph 1:
"I'm interested in ideas that feel delusional, irrational and somehow inevitable in hindsight; especially around AI, consumer behavior, and the weird edges of the internet."

#### Paragraph 2:
"A few of links to get started with some stuff I do:"

### Links List (ul)
- padding-left: 21.25px, margin-bottom: 21.25px
- Font: Newsreader 17px (inherits from body)
- li margin-bottom: 5.95px, list-style: disc
- Links: underline, color: rgb(26,26,26)
  - `<a href="https://forgeresidency.com/">forgeresidency.com</a>`
  - `<a href="https://www.linkedin.com/in/adit-patil/">linkedin.com/in/adit-patil</a>`

### HR
- margin: 8.5px 0
- Standard hr, inherits border color

### About paragraphs
"This site is a living notebook more than a finished product. Some things are polished, some are experiments."

"reach me at <a href="mailto:me@adit.email">me@adit.email</a> for free ice cream :)"

## Footer (.site-footer)
- border-top: 1px solid rgba(26, 26, 26, 0.12)
- padding-top: 21.25px
- margin-top: 42.5px
- Font: JetBrains Mono 14.875px, weight 400, lineHeight 24.5438px
- Color: rgb(90, 90, 90)

### Socials (.socials ul)
- display: flex, flex-direction: row, gap: 21.25px
- margin-bottom: 12.75px
- list-style: none, padding: 0
- Links: X (https://x.com/aditnotfound), LinkedIn (https://www.linkedin.com/in/adit-patil/)
- target="_blank" rel="noopener noreferrer"

### Year (.year p)
- Text: "2026"
- Color: rgb(90, 90, 90)

## Responsive
- Desktop: layout centered, maxWidth 748px
- Mobile: layout fills width, nav flex-wraps to second line
