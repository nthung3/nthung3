"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NewsletterButtonClient() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <Link href="/subscribe">
        <motion.button 
          className="neo-button bg-neo-green text-black text-xl px-8 py-4"
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          SUBSCRIBE TO NEWSLETTER
        </motion.button>
      </Link>
    </motion.div>
  );
}
