import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// Add static export configuration
export const dynamic = 'force-static';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path, token } = body;
    
    // Validate the request
    const secret = process.env.REVALIDATION_TOKEN;
    
    if (!secret) {
      return NextResponse.json(
        { error: 'Revalidation token not configured' },
        { status: 500 }
      );
    }
    
    if (token !== secret) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }
    
    if (!path) {
      return NextResponse.json(
        { error: 'Path parameter is required' },
        { status: 400 }
      );
    }
    
    // Revalidate the path
    revalidatePath(path);
    
    return NextResponse.json({ revalidated: true, path });
  } catch (error) {
    console.error('Error revalidating:', error);
    return NextResponse.json(
      { error: 'Failed to revalidate' },
      { status: 500 }
    );
  }
}
