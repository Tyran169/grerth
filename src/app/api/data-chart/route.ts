import { NextRequest, NextResponse } from 'next/server';
import data from './data.json';

export async function GET(_request: NextRequest) {
  try {
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
