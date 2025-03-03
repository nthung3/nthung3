import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/notion/client';

// Force static generation for static export
export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Site URL from env variable or fallback
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thanhhung.dev';

  try {
    // Get all blog posts
    const posts = await getAllBlogPosts();
    
    // Generate blog post URLs
    const blogUrls = posts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}/`,
      lastModified: new Date(post.date || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

    // Static routes
    const routes = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1.0,
      },
      {
        url: `${baseUrl}/about/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/projects/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/contact/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
    ];

    return [...routes, ...blogUrls];
  } catch (error) {
    // Fallback to static routes only in case of error
    console.error('Error generating dynamic sitemap:', error);
    
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1.0,
      },
      {
        url: `${baseUrl}/about/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/projects/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/contact/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
    ];
  }
}
