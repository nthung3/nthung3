"use server";

import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";

import { getPost, getRelatedPosts } from "@/lib/notion/client";

import BackButtonClient from "./back-button-client";
import BlogPost from "./blog-post";

// Post content data fetching server component
async function PostContentData({ slug }: { slug: string }) {
  const post = await getPost(slug);
  
  if (!post) {
    return <div>Post not found</div>;
  }
  
  // Fetch related posts based on tags
  const relatedPosts = await getRelatedPosts(post.tags, slug);
  
  return <BlogPost post={post} relatedPosts={relatedPosts} />;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // First await params then access its properties
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  return (
    <main className="min-h-screen py-10">
      <Container>
        <div className="mb-8">
          <BackButtonClient />
        </div>
        
        <Suspense fallback={<BlogLoadingSkeleton />}>
          <PostContentData slug={slug} />
        </Suspense>
      </Container>
    </main>
  );
}

// Loading skeleton for the blog post
function BlogLoadingSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 animate-pulse">
      <div className="h-8 bg-gray-200 w-1/4 mb-4"></div>
      <div className="h-12 bg-gray-200 w-3/4 mb-6"></div>
      <div className="h-6 bg-gray-200 w-1/2 mb-12"></div>
      
      <div className="h-80 bg-gray-200 mb-10"></div>
      
      <div className="space-y-4 mb-12">
        <div className="h-4 bg-gray-200"></div>
        <div className="h-4 bg-gray-200"></div>
        <div className="h-4 bg-gray-200 w-3/4"></div>
      </div>
      
      <div className="h-40 bg-gray-200 mb-12"></div>
      
      <div className="h-10 bg-gray-200 w-1/3 mb-6"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-60 bg-gray-200"></div>
        <div className="h-60 bg-gray-200"></div>
        <div className="h-60 bg-gray-200"></div>
      </div>
    </div>
  );
}
