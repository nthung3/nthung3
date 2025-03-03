"use client";

import { Container } from "@/components/ui/container";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen py-20">
      <Container>
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-7xl font-bold font-mono mb-6 !bg-neo-red text-white inline-block px-6 py-3" 
            style={{ transform: "rotate(-1deg)" }}>
            404
          </h1>
          
          <h2 className="text-3xl font-bold mb-8">Page Not Found</h2>
          
          <p className="text-xl mb-10">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link 
              href="/"
              className="!bg-neo-blue text-white font-bold px-8 py-4 rounded-sm border-2 border-black shadow-neo hover:shadow-neo-hover transition-shadow duration-200"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
}
