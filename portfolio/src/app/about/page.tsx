"use client";

import { Container } from "@/components/ui/container";
import { AboutSection, WorkExperience } from "@/components";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Container>
        <motion.h1 
          className="text-5xl font-bold py-10 font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          NGUYEN THANH HUNG
        </motion.h1>
      </Container>
      
      <AboutSection />
      <WorkExperience />
    </main>
  );
}
