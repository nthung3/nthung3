export const NOTION_API_KEY = process.env.NOTION_API_KEY || '';
export const NOTION_BLOG_DATABASE_ID = process.env.NOTION_BLOG_DATABASE_ID || '';

// Cache durations in seconds
export const REVALIDATE_TIME = 60; // 1 minute for ISR

// API route paths
export const API_ROUTES = {
  getAllPosts: '/api/notion/posts',
  getPostBySlug: '/api/notion/posts/',
  revalidate: '/api/revalidate',
};

// A fallback post data for development if Notion API is not configured
export const FALLBACK_POST = {
  id: 'fallback-post',
  title: 'Getting Started with Next.js 13 App Router',
  date: 'March 1, 2025',
  excerpt: 'Learn how to use the new app router in Next.js 13 with this comprehensive guide.',
  slug: 'getting-started-nextjs-13',
  tags: ['Next.js', 'React', 'Tutorial'],
  color: '!bg-neo-purple',
  textColor: 'text-white',
  content: [
    'Next.js 13 introduced the App Router, a new paradigm for building React applications that embraces React Server Components and offers improved routing capabilities.',
    'Server Components are a new React feature that allows you to render components on the server and stream them to the client. This can significantly improve performance by reducing the JavaScript bundle size and enabling better streaming and partial rendering.',
  ],
};
