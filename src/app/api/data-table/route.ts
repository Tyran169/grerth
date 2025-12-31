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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Handle POST logic here
    return NextResponse.json(
      { message: 'Data created successfully', data: body },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Failed to create data' },
      { status: 400 }
    );
  }
}
