import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";
import Script from "next/script";
import { BlogPostDetail } from "@/lib/notion/types";
import { socialLinks } from "@/constants";
import ShareButtons from "./share-buttons";

interface BlogPostProps {
  post: BlogPostDetail;
  relatedPosts: BlogPostDetail[];
}

export default function BlogPost({ post, relatedPosts }: BlogPostProps) {
  const formattedDate = format(new Date(post.date), "MMMM dd, yyyy");
  
  // Sanitize and parse markdown content
  const sanitizedContent = DOMPurify.sanitize(post.content);
  const htmlContent = marked(sanitizedContent);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Blog Header */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center text-sm mb-4 gap-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-neo-yellow px-3 py-1 border-2 border-black shadow-neo-sm font-mono text-xs"
            >
              {tag.toUpperCase()}
            </span>
          ))}
          <time className="text-gray-600 ml-auto">
            {formattedDate}
          </time>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black mr-4">
              <Image
                src="/images/author.webp" 
                alt="Author"
                width={48} 
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-lg">Thanh Hung</p>
              <p className="text-sm text-gray-600">
                {post.readingTime} min read
              </p>
            </div>
          </div>
          
          <ShareButtons url={`https://example.com/blog/${post.slug}`} title={post.title} />
        </div>
      </header>
      
      {/* Cover Image */}
      {post.coverImage && (
        <div className="mb-10 border-2 border-black shadow-neo overflow-hidden">
          <Image 
            src={post.coverImage} 
            alt={post.title}
            width={1200} 
            height={630}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      )}
      
      {/* Blog Content */}
      <div 
        className="prose prose-lg max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      
      {/* Author Bio */}
      <div className="border-t-2 border-b-2 border-black py-8 mb-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-black mb-4 sm:mb-0 sm:mr-6">
            <Image
              src="/images/author.webp" 
              alt="Author Photo"
              width={96} 
              height={96}
              className="object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-2">About the Author</h3>
            <p className="text-gray-700 mb-4">
              Passionate web developer and designer with a focus on creating intuitive, 
              performance-driven digital experiences. Currently exploring the intersection 
              of design systems and frontend architecture.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {Object.entries(socialLinks).map(([platform, url]) => (
                <a 
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label={`Visit ${platform}`}
                >
                  {platform === 'twitter' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  )}
                  {platform === 'github' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  )}
                  {platform === 'linkedin' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">
            Related Posts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link 
                href={`/blog/${relatedPost.slug}`} 
                key={relatedPost.slug}
                className="border-2 border-black p-4 shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all duration-300"
              >
                {relatedPost.coverImage && (
                  <div className="mb-3 border border-black overflow-hidden">
                    <Image 
                      src={relatedPost.coverImage} 
                      alt={relatedPost.title}
                      width={400}
                      height={225}
                      className="w-full h-40 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex items-center text-xs mb-2 text-gray-600">
                  <time>{format(new Date(relatedPost.date), "MMM dd, yyyy")}</time>
                  <span className="mx-2">•</span>
                  <span>{relatedPost.readingTime} min read</span>
                </div>
                <h4 className="font-bold text-lg mb-2 line-clamp-2">{relatedPost.title}</h4>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{relatedPost.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {relatedPost.tags.slice(0, 2).map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-mono px-2 py-1 bg-gray-100 border border-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {relatedPost.tags.length > 2 && (
                    <span className="text-xs font-mono px-2 py-1 bg-gray-100 border border-gray-300">
                      +{relatedPost.tags.length - 2}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Newsletter */}
      <div className="bg-neo-yellow border-2 border-black p-6 md:p-8 mb-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Subscribe to my newsletter</h3>
          <p className="text-gray-800 mb-6">
            Get the latest articles, tutorials, and updates straight to your inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 border-2 border-black shadow-neo-sm focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 bg-black text-white font-bold border-2 border-black shadow-neo hover:shadow-neo-lg transition-shadow"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Structured data script */}
      <Script id="blog-post-ld-json" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${post.title}",
            "description": "${post.excerpt}",
            "datePublished": "${new Date(post.date).toISOString()}",
            "dateModified": "${new Date(post.date).toISOString()}",
            "author": {
              "@type": "Person",
              "name": "Thanh Hung"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Portfolio Blog",
              "logo": {
                "@type": "ImageObject",
                "url": "https://example.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://example.com/blog/${post.slug}"
            }
          }
        `}
      </Script>
    </article>
  );
}
