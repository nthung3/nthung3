"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function SearchInputClient() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // We can implement search functionality later
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <input 
        type="text" 
        placeholder="Search articles..." 
        className="neo-container border-black p-2 font-mono"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </motion.div>
  );
}
