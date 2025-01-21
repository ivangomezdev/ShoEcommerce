import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello from Next.js API!' });
}

export function POST(request: NextRequest) {
    return NextResponse.json({ message: 'Hello from POST!' });
  }