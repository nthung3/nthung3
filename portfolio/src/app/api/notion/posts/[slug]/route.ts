import { NextRequest, NextResponse } from 'next/server';
import { getBlogPostBySlug } from '@/lib/notion/client';
import { REVALIDATE_TIME } from '@/lib/notion/config';

// Add static export configuration
export const dynamic = 'force-static';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  try {
    const post = await getBlogPostBySlug(slug);
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { post },
      {
        status: 200,
        headers: {
          'Cache-Control': `s-maxage=${REVALIDATE_TIME}, stale-while-revalidate`,
        },
      }
    );
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}
