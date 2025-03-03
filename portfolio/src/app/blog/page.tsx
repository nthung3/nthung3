"use server";

import { Container } from "@/components/ui/container";
import { Suspense } from "react";
import { getPosts, getTags } from "@/lib/notion/client";

import BlogPostsClient from "./blog-posts-client";
import BlogTagsClient from "./blog-tags-client";
import SearchInputClient from "./search-input-client";
import NewsletterButtonClient from "./newsletter-button-client";
import BlogTitleClient from "./blog-title-client";

// Loader component for blog posts
function BlogPostsLoading() {
  return (
    <div className="space-y-10">
      {[1, 2, 3].map((i) => (
        <div 
          key={i} 
          className="neo-container p-6 animate-pulse"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-2 md:mb-0"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
          <div className="my-4 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {[1, 2, 3].map((j) => (
              <div key={j} className="h-6 w-16 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-10 w-32 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
}

// Server component to fetch blog posts
async function BlogPostsData() {
  const posts = await getPosts();
  
  if (!posts.length) {
    return (
      <div className="text-center p-10 neo-container">
        <h3 className="text-xl font-mono">No blog posts found</h3>
        <p className="mt-4">Check back later for new content!</p>
      </div>
    );
  }
  
  return <BlogPostsClient posts={posts} />;
}

// Server component to fetch tags
async function BlogTagsData() {
  const allTags = await getTags();
  return <BlogTagsClient tags={allTags} />;
}

export default async function BlogPage() {
  return (
    <main className="min-h-screen py-10">
      <Container>
        <BlogTitleClient />
        
        <div className="flex justify-between items-start mb-12">
          <Suspense fallback={
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          }>
            <BlogTagsData />
          </Suspense>
          
          <SearchInputClient />
        </div>
        
        <Suspense fallback={<BlogPostsLoading />}>
          <BlogPostsData />
        </Suspense>
        
        <div className="mt-16">
          <NewsletterButtonClient />
        </div>
      </Container>
    </main>
  );
}
