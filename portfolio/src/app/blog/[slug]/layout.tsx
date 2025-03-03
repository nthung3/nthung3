import type { Metadata, ResolvingMetadata } from "next";
import { blogPosts } from "@/lib/blog-data";

// Generate metadata for blog post
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  
  // Find the post in our static data
  const post = blogPosts.find(post => post.slug === slug);
  
  // If post not found, return basic metadata
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found."
    };
  }
  
  // Get parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  
  // Return metadata for this post
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: previousImages,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    }
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
