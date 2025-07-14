import { NextResponse } from 'next/server';

/**
 * 🚧 Placeholder endpoint.
 * TODO (candidate):
 *   • Return real games data (array of { title, imageUrl }).
 *   • Set appropriate Cache-Control headers (s-maxage & stale-while-revalidate).
 *   • Secure the route via API key header or rate-limiting.
 */
export async function GET() {
  return NextResponse.json({ message: 'TODO: implement /api/games endpoint' });
} 