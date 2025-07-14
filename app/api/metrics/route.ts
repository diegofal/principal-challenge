import { NextResponse, NextRequest } from 'next/server';

/**
 * 🚧 Placeholder endpoint for Web Vitals or custom metrics.
 * TODO (candidate):
 *   • Accept POSTed metrics in request body.
 *   • Forward to monitoring backend (e.g., Datadog/New Relic) or log to DB.
 */
export async function POST(_req: NextRequest) {
  return NextResponse.json({ ok: true, message: 'TODO: implement /api/metrics' });
} 