"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
  color: string;
  textColor: string;
}

interface BlogPostGridProps {
  posts: BlogPost[];
}

export function BlogPostGrid({ posts }: BlogPostGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.slug}>
          <Card className={`h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg ${post.color} ${post.textColor}`}>
            <CardHeader>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-sm opacity-80">{post.date}</p>
            </CardHeader>
            <CardContent>
              <p className="opacity-90">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-black/10">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center mt-2 font-medium">
                Read more <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
