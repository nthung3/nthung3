"use client";

import { motion } from "framer-motion";

export default function BlogTitleClient() {
  return (
    <>
      <motion.h1 
        className="text-5xl font-bold mb-6 font-mono"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        BLOG
      </motion.h1>
      
      <motion.p
        className="text-xl mb-12 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Thoughts, ideas, and tutorials on web development, design, and technology.
      </motion.p>
    </>
  );
}
