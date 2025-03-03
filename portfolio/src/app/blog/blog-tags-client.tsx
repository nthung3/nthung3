"use client";

import { motion } from "framer-motion";

interface BlogTagsClientProps {
  tags: string[];
}

export default function BlogTagsClient({ tags }: BlogTagsClientProps) {
  return (
    <motion.div 
      className="flex flex-wrap gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {tags.map((tag, index) => (
        <motion.button
          key={index}
          className="px-3 py-1 border-2 border-black text-sm font-mono"
          whileHover={{ scale: 1.05, rotate: Math.random() * 2 - 1 }}
          whileTap={{ scale: 0.95 }}
        >
          {tag}
        </motion.button>
      ))}
    </motion.div>
  );
}
