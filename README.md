# Morrow — Fictional SaaS Frontend

A premium, responsive SaaS marketing website and interactive product dashboard for **Morrow**, an imagined creative-work management platform. This is a **frontend-only portfolio project** built with React, Vite, Tailwind CSS 4, and Lucide React. Its editorial visual language combines warm paper, deep forest green, and soft citrus accents.

> **Demonstration only.** Morrow is fictional. Studio names, projects, data, statistics, prices, and testimonial quotes are illustrative. There is no backend, account system, API integration, payment, analytics service, or database.

## Requirements

- Node.js **20.19+ or 22.12+**
- npm

## Get started

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (typically `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The static site builds to `dist/`. Deploy the repository to Vercel using the **Vite** framework preset, Build Command `npm run build`, and Output Directory `dist`. `vercel.json` handles client-side route refreshes (`/demo`, `/legal/privacy`, `/legal/terms`). No secrets or environment variables are required.

## Pages

- `/` — landing page: navigation, hero product preview, fictional studio logos, interactive features, product showcase, how-it-works, sample testimonials, illustrative pricing, FAQ accordion, expandable resources, CTA, and footer.
- `/demo` — interactive mock workspace with sidebar views, project search and filters, mock notifications, profile menu, activity charts, team data, a timeline, and report panels.
- `/legal/privacy` and `/legal/terms` — visibly labeled sample text pages.

Query parameters on `/demo` open demonstration modals: `?mode=start`, `?mode=signin`, or `?plan=starter|pro|business`.

## What works

- Responsive navbar, keyboard-accessible mobile menu, and real internal routes
- Feature workflow tabs and scroll-reveal animations (reduced motion respected)
- Monthly/yearly pricing toggle with illustrative prices
- Accessible single-open FAQ accordion
- Expandable resource notes
- Dashboard sidebar tabs (Overview, Projects, Timeline, Team, Reports)
- Project search, status filtering, and empty-state/clear-filter interaction
- Demo project creation with input validation, temporary React state, and success toast
- Demo task completion, chart period controls, read/clearable notifications, and profile dropdown
- Frontend-only signup/plan preview form validation with explicit **no data sent** messages
- Responsive mobile dashboard with accessible slide-out navigation

**Important:** Project and form changes are stored only in React component state. Reloading clears all changes. `localStorage` is **not** used. A backend could be added later through a separate data layer without restructuring the visual components.

## Structure

```text
src/
  components/
    ui/                 Brand, Reveal, Toast
    Navbar.jsx          Header/mobile navigation
    Hero.jsx            Marketing hero
    Mockup.jsx          Product interface illustration + chart
    LogoCloud.jsx       Fictional studios
    Features.jsx        Clickable workflow tabs + feature panels
    HowItWorks.jsx      Onboarding sequence
    ProductShowcase.jsx Dashboard mockup
    Testimonials.jsx    Fictional sample personas
    Pricing.jsx         Billing toggle
    FAQ.jsx             Accessible accordion
    Resources.jsx       Expandable editorial notes
    FinalCTA.jsx        Conversion section
    Footer.jsx          Navigation and placeholder socials
  data/site.js          Illustrative content and demo projects
  hooks/useToast.js     Toast state/auto-dismiss
  pages/
    Home.jsx            Landing composition
    Dashboard.jsx       Interactive demo screens
    Legal.jsx           Sample legal pages
  utils/navigation.js   Hash scrolling
  App.jsx               React Router and route effects
  main.jsx              App entry
  index.css             Tailwind v4 CSS import, theme, responsive styles
vite.config.js          React + Tailwind v4 Vite plugins
vercel.json             SPA history fallback
```

## Styling and dependencies

Tailwind CSS **v4** is configured using the official `@tailwindcss/vite` plugin and `@import "tailwindcss"` in `src/index.css`. This version does **not** require `tailwind.config.js` or an explicit class content array. The project uses Tailwind utilities when appropriate and a cohesive custom component stylesheet for bespoke layouts. Icons come from `lucide-react`. Animation uses CSS plus a lightweight IntersectionObserver hook; no heavy animation or chart packages are needed. The charts are inline SVG and CSS using mock data.

Typefaces are loaded via Google Fonts (`DM Sans`, `Instrument Serif`) with system and Georgia fallbacks. If the fonts request is blocked, the site remains usable.

## Accessibility / responsiveness

Semantic headings and landmarks, input labels, status messages, visible focus rings, `aria-expanded` for dropdowns/accordions, native buttons for state changes, a page-level reduced-motion fallback, descriptive sample-data disclaimers, and breakpoints for desktop/tablet/mobile. Popup dialogs support Escape and backdrop dismissal; all native form actions have validation feedback.

## Customizing

Edit fictional copy and content in `src/data/site.js`. Edit the product identity/theme in `src/index.css`, `src/components/ui/Brand.jsx`, and `public/favicon.svg`. Replace sample action handlers in `src/pages/Dashboard.jsx` with async functions for a future real backend. Nothing in the current site claims to persist or transmit data.

## Acknowledgements

React, Vite, Tailwind CSS, and Lucide icons are their respective open-source tools. The website, studio names, mock content, and interface illustrations are for a fictional demonstration project.
