'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


export default function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store built with Next.js and Stripe",
      image: "/images/project1.jpg",
      color: "!bg-neo-purple",
      textColor: "text-white"
    },
    {
      title: "Task Management App",
      description: "A responsive task manager with drag-and-drop functionality",
      image: "/images/project2.webp",
      color: "!bg-neo-yellow",
      textColor: "text-black"
    },
    {
      title: "Recipe Finder",
      description: "Search and save recipes using a public API",
      image: "/images/project3.webp",
      color: "!bg-neo-blue",
      textColor: "text-white"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const router = useRouter();


  return (
    <section id="projects" className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-10 font-mono"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          PROJECTS
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`neo-container ${project.color} ${project.textColor} overflow-hidden`}
              style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
            >
              <div className="h-48 relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover border-b-4 border-black"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <motion.button 
                  className="neo-button bg-white text-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  VIEW PROJECT
                </motion.button>
              </div>
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="neo-button bg-neo-red text-white text-xl px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {router.push("/projects")}}
          >
            SEE ALL PROJECTS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}