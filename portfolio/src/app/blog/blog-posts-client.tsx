"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPostSummary } from "@/lib/notion/types";

interface BlogPostsClientProps {
  posts: BlogPostSummary[];
}

export default function BlogPostsClient({ posts }: BlogPostsClientProps) {
  return (
    <div className="space-y-10">
      {posts.map((post, index) => (
        <motion.article 
          key={post.id}
          className={`p-6 ${post.color} neo-container ${post.textColor}`}
          style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0 font-mono">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <span className="text-sm font-mono">{post.date}</span>
          </div>
          
          <p className="my-4">{post.excerpt}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, i) => (
              <span key={i} className={`px-2 py-1 border-2 ${post.color === '!bg-neo-yellow' ? 'border-black' : 'border-white'} text-sm font-mono`}>
                {tag}
              </span>
            ))}
          </div>
          
          <Link href={`/blog/${post.slug}`}>
            <motion.button 
              className="neo-button bg-white text-black mt-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              READ MORE
            </motion.button>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
