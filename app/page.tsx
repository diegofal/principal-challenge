import React from 'react';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: 720, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome 👋</h1>
      <p style={{ lineHeight: 1.5 }}>
        Below is a quick checklist of deliverables. Pages and files marked with 🚧 are empty
        placeholders waiting for your implementation.
      </p>

      <ul style={{ marginTop: '1.5rem', lineHeight: 1.6 }}>
        <li>🏠 Core UI&nbsp;– Layout & Navigation (edit <code>app/layout.tsx</code>)</li>
        <li>🎮 Games page data (edit <code>app/games/page.tsx</code>)</li>
        <li>🔗 SEO metadata via <code>generateMetadata</code></li>
        <li>⚡ Performance tweaks (fonts, code-split, etc.)</li>
        <li>🚧 API route → <code>app/api/games/route.ts</code></li>
        <li>🚧 Integration test → <code>tests/api-games.test.ts</code></li>
        <li>🚧 Dockerfile &amp; .dockerignore</li>
        <li>🚧 Monitoring stubs → <code>app/reportWebVitals.ts</code>, <code>app/api/metrics/route.ts</code></li>
      </ul>
    </main>
  );
} 