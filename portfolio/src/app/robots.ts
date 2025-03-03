import { MetadataRoute } from 'next';

// Ensure URL has proper protocol
const getSiteUrl = () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-example.com';
  // Make sure URL has protocol
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
};

// For static export
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/admin/*'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
