"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store built with Next.js and Stripe. Includes product listings, cart functionality, checkout process, and payment integration.",
      image: "/images/project1.jpg",
      color: "!bg-neo-purple",
      textColor: "text-white",
      technologies: ["Next.js", "React", "Stripe", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A responsive task manager with drag-and-drop functionality. Users can create, organize, and track their tasks across different boards.",
      image: "/images/project2.jpg",
      color: "!bg-neo-yellow",
      textColor: "text-black",
      technologies: ["React", "TypeScript", "React DnD", "Firebase"],
      link: "#"
    },
    {
      title: "Recipe Finder",
      description: "Search and save recipes using a public API. Features include ingredient-based search, saving favorites, and creating shopping lists.",
      image: "/images/project3.jpg",
      color: "!bg-neo-blue",
      textColor: "text-white",
      technologies: ["JavaScript", "API Integration", "LocalStorage", "CSS Grid"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A neo-brutalist personal portfolio website built with Next.js and Framer Motion animations.",
      image: "/images/project4.jpg",
      color: "!bg-neo-red",
      textColor: "text-white",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information dashboard with location search and 5-day forecast.",
      image: "/images/project5.jpg",
      color: "!bg-neo-green",
      textColor: "text-black",
      technologies: ["React", "Weather API", "Recharts", "CSS Modules"],
      link: "#"
    },
    {
      title: "Blog CMS",
      description: "A custom content management system for blogs with markdown support and image uploads.",
      image: "/images/project6.jpg",
      color: "!bg-black",
      textColor: "text-white",
      technologies: ["Node.js", "Express", "MongoDB", "AWS S3"],
      link: "#"
    },
  ];

  return (
    <main className="min-h-screen py-10">
      <Container>
        <motion.h1 
          className="text-5xl font-bold mb-6 font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          PROJECTS
        </motion.h1>
        
        <motion.p
          className="text-xl mb-12 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here&apos;s a collection of my featured projects. Each project demonstrates different aspects of my technical skills and problem-solving approach.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`neo-container ${project.color} ${project.textColor} overflow-hidden`}
              style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                rotate: 0,
                transition: { duration: 0.3 }
              }}
            >
              <div className="h-56 relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover border-b-4 border-black"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-mono">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 border-2 border-current text-sm font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link href={project.link}>
                  <motion.button 
                    className="neo-button bg-white text-black"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    VIEW PROJECT
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </main>
  );
}
