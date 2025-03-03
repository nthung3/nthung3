"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 container mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div 
            className="neo-container p-6 inline-block bg-neo-yellow rotate-2 mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold">THANH HUNG</h1>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            FRONTEND DEVELOPER
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Building modern web experiences with React, Next.js, and cutting-edge technologies.
          </motion.p>
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/projects">
              <motion.button 
                className="neo-button bg-neo-purple text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                MY WORK
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button 
                className="neo-button bg-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT ME
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <motion.div 
          className="neo-container p-4 -rotate-3"
          initial={{ opacity: 0, x: 50, rotate: 0 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image 
            src="/images/profile.webp" 
            alt="Thanh Hung" 
            width={500} 
            height={500} 
            className="border-4 border-black"
          />
        </motion.div>
      </div>
    </section>
  );
}