import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/lib/notion/client';
import { REVALIDATE_TIME } from '@/lib/notion/config';

// Add static export configuration
export const dynamic = 'force-static';

export async function GET() {
  try {
    const posts = await getAllBlogPosts();
    
    return NextResponse.json(
      { posts },
      {
        status: 200,
        headers: {
          'Cache-Control': `s-maxage=${REVALIDATE_TIME}, stale-while-revalidate`,
        },
      }
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}
