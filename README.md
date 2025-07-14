# Content Site Challenge (Next.js 15)

Welcome! This repository contains the **starting point** for a 60-minute live coding assessment.
Your goal is to turn this scaffold into a mini content-oriented web app that demonstrates strong
layout, data-fetching, SEO and performance fundamentals using **Next.js 15 (canary)**.

---

## 🖼️  Suggested UI Layout

A reference spec so you don't waste interview time guessing designs. Feel free to style it however you like as long as these structural cues exist.

1. **Root Layout (`app/layout.tsx`)**
   • Sticky header at the top with site name/logo on the left and two links on the right: **Home** and **Games**.  
   • Header background: light-gray or any neutral color.  
   • The header (or a burger menu) should remember its open / scroll state when navigating.

2. **Home Page (`/`)**
   • Simple welcome hero message is enough.  
   • Demonstrate that navigation back from Games preserves scroll or menu state.

3. **Games Page (`/games`)**
   • Display your 2-3 games as *cards* (grid or flex).  
   • Each card uses `background-image` for the artwork; no `<img>` or `next/image>`.  
   • Overlay the game title on top of the image.  
   • Cards should be responsive (stack or resize on small screens).

4. **Responsiveness**
   • Works on mobile (320 px) and desktop.  
   • No major layout shifts (CLS) when images load.

5. **Accessibility** (expected at Principal level)  
   • Keyboard-navigable links, sufficient color contrast, `role="navigation"` on the header.

This description is purposely lightweight—focus on functionality and performance rather than pixel-perfect styling.

---

## 🚨 Objectives First

**Core Deliverables**
1. **Layout + Navigation** – persistent header, state retention.
2. **Games Page** – static games list rendered with CSS `background-image`.
3. **SEO Metadata** – dynamic `generateMetadata()` per page.
4. **Performance Pass** – Lighthouse 2-point uplift (fonts, code-split, etc.).

**Principal-Level Requirements** (placeholders ready)
• API route: `app/api/games/route.ts`  
• Integration test: `tests/api-games.test.ts`  
• Dockerfile build + `.dockerignore`  
• Monitoring via `app/reportWebVitals.ts` + `/api/metrics` route

Jump to "🎯 The Brief" and "🆕 Principal Requirements" below for full details.

---

## 🚀 Getting Started

1. **Install dependencies** (Node ≥ 18 recommended):

   ```bash
   npm install
   ```

2. **Run the dev server**:

   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 in your browser. Every file save instantly refreshes the page.

---

## ⏱️ Session Flow & Milestones

| Time | Milestone |
|------|-----------|
| 0-5 min  | **Project setup** (already done) |
| 5-25 min | Implement **Layout + Navigation** with state persistence |
| 25-40 min | Build **Games** page + fetch static data |
| 40-50 min | Add **SEO metadata** with `generateMetadata()` |
| 50-60 min | Run **Lighthouse**, apply 2 quick performance wins |
| 60-90 min | **Principal Requirements**: API, Docker, Tests, Monitoring |

> You do **not** have to follow these timings exactly—they're guard-rails to help you prioritise.

---

## 📂 Current Structure

```
principal-challenge/
├─ app/               # Next.js App Router directory (already created)
│  ├─ layout.tsx      # Root layout – feel free to extend
│  ├─ page.tsx        # Home page stub
│  └─ games/
│     └─ page.tsx     # Games page stub
├─ public/            # Static assets (optional)
├─ styles/            # Global CSS (imported in layout)
├─ tsconfig.json      # TypeScript config (strict-mode enabled)
└─ ...
```

Feel free to add any folders (e.g. `components/`, `lib/`, `hooks/`) as you see fit.

---

## 🎯 The Brief (What You Need To Build)

### 1. Layout + Navigation (20 min)

* Build a **persistent layout** (e.g. header + nav) inside `app/layout.tsx`.
* **Preserve UI state** between page transitions (e.g. scroll position or a burger-menu open state).
* Use **client-side navigation** (`next/link` or `useRouter()`) to avoid full page reloads.

### 2. Games Page + Data (15 min)

* Create an array of **2-3 game items** — each with `title` + image `url`.
* Render them on `/games` using **CSS `background-image`** (no `<img>` or `next/image`).
* Fetch data with the recommended pattern for Next 15 (e.g. **Server Components** + `generateMetadata`).

### 3. SEO Metadata (10 min)

* Implement `export function generateMetadata()` in each page to output:
  * Dynamic `<title>`
  * `<meta name="description">`
  * **Open Graph** tags (`og:title`, `og:description`, `og:image`, etc.)

### 4. Performance Audit (10 min)

* Run **Lighthouse** (Chrome DevTools → ⚡ Performance → Lighthouse).
* Identify **≥ 2 quick wins** (e.g. font preloading, code splitting, critical CSS extraction).
* Apply fixes, re-run Lighthouse and check score improvement.

---

## 🧑‍⚖️ Evaluation Rubric

| Area | Expectations |
|------|--------------|
| **App Structure & Code** | Clear component separation, idiomatic React + TypeScript, clean folder structure. |
| **Navigation & Layout** | Fluid client routing, persistent layout state (scroll/menu). |
| **Data Handling** | Correct static/dynamic fetch strategy, uses CSS backgrounds correctly. |
| **SEO / Metadata** | Unique titles + descriptions, Open Graph tags present. |
| **Performance** | Demonstrates optimisation mindset via Lighthouse improvements. |
| **Communication** | Explains trade-offs (e.g. why `background-image` over `<img>`). |

---

## 🆕 Principal Requirements

These requirements are essential for a Principal-level assessment. They demonstrate architectural,
deployment and reliability skills. All placeholder files are ready for implementation.

> ℹ️  **Placeholders already exist** for each task so you can jump straight into coding:
> • `app/api/games/route.ts`
> • `tests/api-games.test.ts` & `vitest.config.ts` – commented‐out Vitest scaffolding  
> • `Dockerfile` & `.dockerignore` – empty shells for containerisation  
> • `app/reportWebVitals.ts` & `app/api/metrics/route.ts` – monitoring stubs  
> Replace the TODOs in those files with your implementation.

| # | Topic | What to Deliver |
|---|-------|-----------------|
| 5 | **API Route** | Create `app/api/games/route.ts` that returns the same games JSON.<br/>• Must set proper caching headers (`Cache-Control: public, s-maxage=60, stale-while-revalidate=300`).<br/>• Implement a very simple security check (ex: `x-api-key` header or rate-limiter). |
| 6 | **Integration Test** | Add Vitest (or Jest) + Supertest. Write an integration test for the `/api/games` endpoint that asserts 200 status, JSON shape, and cache headers. Script: `npm test`. |
| 7 | **Docker** | Supply a `Dockerfile` (multi-stage build) that can `docker build` and `docker run -p 3000:3000` the prod image. Include `.dockerignore`. |
| 8 | **Monitoring** | Export `reportWebVitals` (or similar) to POST Web Vitals (CLS, LCP, FID) to `/api/metrics` (stub route is fine). Explain in code comments how you’d pipe this to Datadog/New Relic. |

This description is purposely lightweight—focus on functionality and performance rather than pixel-perfect styling.

---

## 📚 Helpful Resources

* Next.js App Router docs – https://nextjs.org/docs/app
* Metadata API – https://nextjs.org/docs/app/api-reference/functions/generate-metadata  
* Lighthouse – https://developer.chrome.com/docs/lighthouse
* Web Vitals – https://web.dev/vitals/

## ✅ Definition of Done

**Core Deliverables (Required)**
- [ ] Header navigation works without page reload
- [ ] Games page displays 2+ items with CSS background-image  
- [ ] Each page has unique `<title>` and meta description
- [ ] Lighthouse performance score improved by 2+ points

**Principal-Level Requirements (Required)**
- [ ] `/api/games` returns JSON with proper cache headers
- [ ] Integration test suite runs successfully (`npm test`)
- [ ] Docker image builds and runs (`docker build . && docker run -p 3000:3000`)
- [ ] Web Vitals monitoring implemented via `/api/metrics`

Good luck — we're excited to see your approach! 🎉