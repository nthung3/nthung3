"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import MarkdownRenderer from "@/components/markdown-renderer";
import { BlogPostDetailed, BlogPostSummary } from "@/lib/notion/types";
import { useState, useEffect } from "react";

// Fancy animated heading component
const AnimatedHeading = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.h1
    className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono mb-8 leading-tight"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.h1>
);

// Tag component with hover effect
const BlogTag = ({ tag, isDark }: { tag: string; isDark: boolean }) => (
  <motion.span 
    className={cn(
      "px-3 py-1 border-2", 
      isDark ? 'border-white' : 'border-black',
      "text-sm font-mono inline-block"
    )}
    whileHover={{ 
      scale: 1.05, 
      rotate: Math.random() * 3 - 1.5,
      transition: { duration: 0.2 }
    }}
  >
    {tag}
  </motion.span>
);

// Enhanced share button component
const ShareButton = ({ 
  platform, 
  url, 
  title,
  isDark 
}: { 
  platform: string; 
  url: string;
  title: string;
  isDark: boolean;
}) => {
  // Generate proper share URLs
  const getShareUrl = () => {
    switch(platform.toLowerCase()) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      default:
        return '#';
    }
  };

  // Get platform icon
  const getIcon = () => {
    switch(platform.toLowerCase()) {
      case 'twitter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
        );
      case 'facebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>
        );
      default:
        return platform.charAt(0).toUpperCase();
    }
  };

  return (
    <motion.a
      href={getShareUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "w-10 h-10 flex items-center justify-center border-2",
        isDark ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'
      )}
      whileHover={{ scale: 1.1, rotate: Math.random() * 5 - 2.5 }}
      whileTap={{ scale: 0.9 }}
    >
      {getIcon()}
    </motion.a>
  );
};

// Table of contents component
const TableOfContents = ({ headings }: { headings: {id: string, text: string, level: number}[] }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -70% 0px', // Start highlighting a bit before the heading reaches the top
        threshold: 0
      }
    );

    // Observe all section headings
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [headings]);

  return (
    <motion.div 
      className="neo-container p-6 mb-8 sticky top-4 max-h-[calc(100vh-2rem)] overflow-auto"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="font-mono font-bold text-lg mb-4 border-b-2 border-black pb-2">TABLE OF CONTENTS</h3>
      <nav>
        <ul className="space-y-1">
          {headings.map((heading, index) => (
            <li 
              key={index}
              style={{ marginLeft: `${(heading.level - 2) * 12}px` }}
            >
              <a 
                href={`#${heading.id}`}
                className={`toc-link text-sm font-mono ${activeId === heading.id ? 'active' : ''}`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

// Reading time estimator
const getReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

// Back to Top button component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.button
      onClick={scrollToTop}
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </motion.button>
  );
};

interface BlogPostClientProps {
  post: BlogPostDetailed;
  relatedPosts: BlogPostSummary[];
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const [headings, setHeadings] = useState<{id: string, text: string, level: number}[]>([]);
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const isDarkBackground = post.color !== '!bg-neo-yellow';
  const readingTime = getReadingTime(post.content);
  
  // Extract headings from post content on mount
  useEffect(() => {
    // Extract headings from markdown content
    const extractHeadings = () => {
      const headingRegex = /^(#{2,4})\s+(.+)$/gm;
      const matches = [...post.content.matchAll(headingRegex)];
      
      return matches.map(match => {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
        return { id, text, level };
      });
    };
    
    setHeadings(extractHeadings());
    setCurrentUrl(window.location.href);
  }, [post.content]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.article 
          className={cn(
            "neo-container p-8 md:p-12 lg:col-span-8", 
            post.color, 
            post.textColor
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <header className="mb-12">
            <AnimatedHeading>{post.title}</AnimatedHeading>
            
            <motion.div 
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {post.tags.map((tag, i) => (
                <BlogTag key={i} tag={tag} isDark={isDarkBackground} />
              ))}
            </motion.div>
            
            <motion.div 
              className="flex justify-between items-center font-mono text-sm mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div>Published on {post.date}</div>
              <div className="px-3 py-1 border-2 border-dashed border-opacity-50">
                {readingTime} min read
              </div>
            </motion.div>
          </header>
          
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Share buttons */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-sm">SHARE:</span>
              {['twitter', 'facebook', 'linkedin'].map((platform) => (
                <ShareButton 
                  key={platform}
                  platform={platform}
                  url={currentUrl}
                  title={post.title}
                  isDark={isDarkBackground}
                />
              ))}
            </div>
            
            {/* Content */}
            <div className="blog-content space-y-6 markdown-content">
              <MarkdownRenderer content={post.content} className="prose prose-lg max-w-none" />
            </div>
          </motion.div>
          
          <motion.div
            className="mt-16 pt-8 border-t-2 border-opacity-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="font-mono font-bold text-xl mb-4">AUTHOR</div>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4 neo-container bg-white">
                {/* Placeholder for author image */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-mono font-bold">John Doe</h3>
                <p className="text-sm">Frontend Developer & UI/UX Enthusiast</p>
              </div>
            </div>
          </motion.div>
        </motion.article>
        
        <aside className="lg:col-span-4">
          {headings.length > 0 && (
            <TableOfContents headings={headings} />
          )}
          
          {/* Related posts preview */}
          {relatedPosts.length > 0 && (
            <motion.div
              className="neo-container p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-4 font-mono">RELATED POSTS</h2>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={index}
                    className="border-b border-gray-200 last:border-0 pb-4 last:pb-0"
                    whileHover={{ x: 5 }}
                  >
                    <h3 className="text-lg font-bold mb-1 font-mono">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:underline">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-sm mb-2">{relatedPost.date}</p>
                    <div className="flex flex-wrap gap-2">
                      {relatedPost.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 border border-current">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Link href="/blog">
                <motion.button
                  className="neo-button bg-black text-white mt-4 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  VIEW ALL POSTS
                </motion.button>
              </Link>
            </motion.div>
          )}
        </aside>
      </div>
      
      {/* Newsletter signup */}
      <motion.div
        className="mt-20 neo-container !bg-neo-green p-8 md:p-12 text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{ transform: `rotate(${Math.random() * 1 - 0.5}deg)` }}
      >
        <h2 className="text-3xl font-bold mb-4 font-mono">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p className="mb-6">Get notified about new articles and updates. No spam, ever.</p>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="neo-container !bg-white border-black p-3 font-mono flex-grow"
          />
          <motion.button
            className="neo-button bg-black text-white px-6 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SUBSCRIBE
          </motion.button>
        </div>
      </motion.div>
      
      {/* Back to top button */}
      <BackToTopButton />
    </>
  );
}
