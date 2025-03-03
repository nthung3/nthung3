import { Client } from '@notionhq/client';
import { cache } from 'react';
import { NOTION_API_KEY, NOTION_BLOG_DATABASE_ID, FALLBACK_POST } from './config';
import { NotionToMarkdown } from './notion-to-markdown';
import { BlogPost, BlogPostDetail, BlogPostSummary } from './types';

// Color mapping from Notion to our design system
const colorMap = {
  blue: '!bg-neo-blue text-white',
  red: '!bg-neo-red text-white',
  yellow: '!bg-neo-yellow text-black',
  green: '!bg-neo-green text-black',
  purple: '!bg-neo-purple text-white',
  default: '!bg-neo-purple text-white',
};

// Initialize the Notion client
const notion = new Client({
  auth: NOTION_API_KEY,
});

// Convert Notion page to blog post structure
function formatBlogPost(page: any): BlogPostSummary {
  const properties = page.properties;
  
  const colorProp = properties?.Color?.select?.name || 'default';
  const colorClass = colorMap[colorProp.toLowerCase()] || colorMap.default;
  
  const post: BlogPostSummary = {
    id: page.id,
    title: properties?.Title?.title?.[0]?.plain_text || 'Untitled',
    date: properties?.Date?.date?.start 
      ? new Date(properties.Date.date.start).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      : 'No date',
    excerpt: properties?.Excerpt?.rich_text?.[0]?.plain_text || '',
    slug: properties?.Slug?.rich_text?.[0]?.plain_text || page.id,
    tags: properties?.Tags?.multi_select?.map((tag: any) => tag.name) || [],
    color: colorClass.split(' ')[0],
    textColor: colorClass.split(' ')[1],
  };
  
  return post;
}

// Get all blog posts from Notion database
export const getAllBlogPosts = cache(async (): Promise<BlogPostSummary[]> => {
  try {
    if (!NOTION_API_KEY || !NOTION_BLOG_DATABASE_ID) {
      console.warn('Notion API credentials missing. Using fallback data.');
      return [FALLBACK_POST];
    }
    
    const response = await notion.databases.query({
      database_id: NOTION_BLOG_DATABASE_ID,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
    });
    
    return response.results.map(formatBlogPost);
  } catch (error) {
    console.error('Error fetching blog posts from Notion:', error);
    return [FALLBACK_POST];
  }
});

// Get a single blog post by slug
export const getBlogPostBySlug = cache(async (slug: string): Promise<BlogPostDetail | null> => {
  try {
    if (!NOTION_API_KEY || !NOTION_BLOG_DATABASE_ID) {
      console.warn('Notion API credentials missing. Using fallback data.');
      return slug === FALLBACK_POST.slug ? { ...FALLBACK_POST, content: FALLBACK_POST.content.join('\n\n') } : null;
    }
    
    const response = await notion.databases.query({
      database_id: NOTION_BLOG_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Slug',
            rich_text: {
              equals: slug,
            },
          },
          {
            property: 'Published',
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    });
    
    if (!response.results.length) {
      return null;
    }
    
    const page = response.results[0];
    const postSummary = formatBlogPost(page);
    
    // Get page content using Notion API
    const notionToMarkdown = new NotionToMarkdown();
    const blocks = await notionToMarkdown.pageToMarkdown(page.id);
    const markdown = notionToMarkdown.toMarkdownString(blocks);
    
    return {
      ...postSummary,
      content: markdown,
    };
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}" from Notion:`, error);
    return null;
  }
});

// Get all tags from blog posts
export const getAllTags = cache(async (): Promise<string[]> => {
  const posts = await getAllBlogPosts();
  const allTags = posts.flatMap(post => post.tags);
  return [...new Set(allTags)];
});

// Helper functions to be used in components
export async function getPosts(): Promise<BlogPostSummary[]> {
  return getAllBlogPosts();
}

export async function getPost(slug: string): Promise<BlogPostDetail | null> {
  return getBlogPostBySlug(slug);
}

export async function getTags(): Promise<string[]> {
  return getAllTags();
}

// Get related posts by tags (excluding the current post)
export async function getRelatedPosts(tags: string[], currentSlug: string) {
  if (!tags.length) return [];
  
  try {
    const allPosts = await getPosts();
    
    // Filter posts that share at least one tag with the current post
    // and exclude the current post itself
    return allPosts
      .filter(post => 
        post.slug !== currentSlug && 
        post.tags.some(tag => tags.includes(tag))
      )
      .slice(0, 3); // Limit to 3 related posts
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}
