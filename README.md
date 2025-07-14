# Content Site Challenge (Next.js 15)

**Goal:** Build a full-stack content site demonstrating layout, data-fetching, SEO, performance, and production deployment skills.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000 and start coding!

---

## 📋 Requirements

**Frontend:**
1. **Persistent Layout** – header with Home/Games nav that retains state across pages
2. **Games Page** – fetch from `/api/games` and render cards with CSS `background-image`
3. **SEO Metadata** – unique `generateMetadata()` per page with Open Graph tags
4. **Performance** – improve Lighthouse score by 2+ points

**Backend & Infrastructure:**
5. **API Route** – `/api/games` with caching headers and basic security
6. **Tests** – integration test for API endpoint (`npm test`)
7. **Docker** – multi-stage build that runs on port 3000
8. **Monitoring** – Web Vitals sent to `/api/metrics`

> ⚠️ **No static data** – Games must come from your API route.

---

## 🖼️ UI Guidelines

- **Header:** Sticky with logo/title + Home/Games links
- **Games Cards:** CSS background-image (not `<img>`), responsive grid/flex
- **Mobile-friendly:** Works on 320px+ screens
- **Accessible:** Keyboard nav, proper contrast, semantic HTML

---

## 📂 Project Structure

```
├─ app/
│  ├─ layout.tsx              # Root layout (extend me)
│  ├─ page.tsx                # Home page
│  ├─ games/page.tsx          # Games page (🚧 placeholder)
│  ├─ api/
│  │  ├─ games/route.ts       # 🚧 API endpoint
│  │  └─ metrics/route.ts     # 🚧 Monitoring
│  ├─ reportWebVitals.ts      # 🚧 Web Vitals
│  └─ globals.css
├─ tests/api-games.test.ts    # 🚧 Integration test
├─ vitest.config.ts           # 🚧 Test config
├─ Dockerfile                 # 🚧 Container config
├─ .dockerignore              # 🚧 Docker ignore
└─ package.json
```

**🚧 = Placeholder files** with TODOs for you to implement.

---

## ✅ Done When

- [ ] Navigation works without page reloads
- [ ] Games fetch from `/api/games` with CSS backgrounds
- [ ] Unique SEO metadata per page
- [ ] Lighthouse improved by 2+ points
- [ ] API returns JSON with cache headers
- [ ] `npm test` passes
- [ ] `docker build . && docker run -p 3000:3000` works
- [ ] Web Vitals logged to `/api/metrics`

---

## 📚 Resources

- [Next.js App Router](https://nextjs.org/docs/app)
- [Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse)