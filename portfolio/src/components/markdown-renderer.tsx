"use client";

import { FC } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { motion } from 'framer-motion';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  if (!content) return null;
  
  // Parse the markdown content
  const parsedContent = marked.parse(content, { breaks: true });
  
  // Sanitize the HTML to prevent XSS attacks
  const sanitizedContent = DOMPurify.sanitize(parsedContent, {
    ADD_ATTR: ['target', 'rel'],
    ADD_TAGS: ['iframe'],
  });
  
  return (
    <motion.div
      className={`markdown-content ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

export default MarkdownRenderer;
