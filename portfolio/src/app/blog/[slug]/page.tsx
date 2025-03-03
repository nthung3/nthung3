import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { blogPosts } from "@/lib/blog-data";
import BackButtonClient from "./back-button-client";
import BlogPost from "./blog-post";

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Post content data component
function PostContentData({ slug }: { slug: string }) {
  // For static export, use the local blog data
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    notFound();
  }
  
  // Get posts with matching tags
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);
  
  return <BlogPost post={post} relatedPosts={relatedPosts} />;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
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
