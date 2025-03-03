"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export default function WorkExperience() {
  const experiences = [
    {
      company: "Tech Innovations",
      position: "Senior Frontend Developer",
      period: "Jan 2023 - Present",
      description: "Leading frontend development for enterprise-level applications with React, TypeScript, and Next.js. Implemented performance optimizations that improved page load times by 40%.",
      technologies: ["React", "TypeScript", "Next.js", "Redux", "Styled Components"],
      color: "!bg-neo-blue"
    },
    {
      company: "Digital Solutions Inc.",
      position: "Frontend Developer",
      period: "Mar 2021 - Dec 2022",
      description: "Developed and maintained multiple client-facing web applications. Collaborated with UX designers to implement responsive designs and animations.",
      technologies: ["JavaScript", "React", "CSS/SCSS", "RESTful APIs", "Git"],
      color: "!bg-neo-yellow"
    },
    {
      company: "Creative Agency",
      position: "Web Developer",
      period: "Jun 2019 - Feb 2021",
      description: "Built interactive websites for various clients across different industries. Focused on creating engaging user experiences with modern web technologies.",
      technologies: ["HTML/CSS", "JavaScript", "jQuery", "WordPress", "PHP"],
      color: "!bg-neo-purple"
    },
    {
      company: "Startup Hub",
      position: "Junior Developer (Internship)",
      period: "Jan 2019 - May 2019",
      description: "Assisted in the development of web applications for early-stage startups. Gained hands-on experience with frontend frameworks and version control.",
      technologies: ["HTML/CSS", "JavaScript", "Bootstrap", "Git"],
      color: "!bg-neo-red"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <motion.h2 
          className="text-4xl font-bold mb-12 font-mono"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          WORK EXPERIENCE
        </motion.h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`neo-container ${exp.color} p-8 ${exp.color === '!bg-neo-yellow' ? 'text-black' : 'text-white'}`}
              style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
         
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <motion.h3 
                  className="text-2xl font-bold font-mono mb-2 md:mb-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {exp.position}
                </motion.h3>
                <motion.span 
                  className="font-mono text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {exp.period}
                </motion.span>
              </div>
              
              <motion.h4 
                className="text-xl font-bold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {exp.company}
              </motion.h4>
              
              <motion.p 
                className="mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {exp.description}
              </motion.p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className={`px-3 py-1 border-2 ${exp.color === '!bg-neo-yellow' ? 'border-black' : 'border-white'} text-sm font-mono inline-block`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.6 + i * 0.05 + index * 0.1,
                      type: "spring"
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: Math.random() * 4 - 2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
