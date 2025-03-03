// Type declarations for blog data
export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
  color: string;
  textColor: string;
  content: string[];
}

export const blogPosts: BlogPost[];
