// Base type for blog post
export interface BlogPostBase {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
  color: string;
  textColor: string;
}

// Summary type used for blog listing
export interface BlogPostSummary extends BlogPostBase {}

// Detailed type with content for single post page
export interface BlogPostDetail extends BlogPostBase {
  content: string;
}

// Type for the full blog post with parsed content
export interface BlogPost extends BlogPostBase {
  content: string[];
}
