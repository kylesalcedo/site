import { type NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'; // Optional: Use edge runtime for potentially faster responses

export function GET(request: NextRequest) {
  // Try common headers for IP address, prioritizing x-forwarded-for
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const ip = forwarded ? forwarded.split(/, /)[0] : realIp || request.ip;

  return NextResponse.json({ ip: ip || 'unknown' });
} 