'use client'

import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    { name: "TypeScript", level: "Advanced", color: "!bg-neo-blue" },
    { name: "JavaScript", level: "Advanced", color: "!bg-neo-yellow" },
    { name: "React", level: "Advanced", color: "!bg-neo-purple" },
    { name: "Next.js", level: "Intermediate", color: "!bg-black" },
    { name: "Node.js", level: "Intermediate", color: "!bg-neo-green" },
    { name: "Express", level: "Intermediate", color: "!bg-neo-red" },
    { name: "Git", level: "Advanced", color: "!bg-orange-500" },
    { name: "Docker", level: "Beginner", color: "!bg-blue-500" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };



  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-10 font-mono"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          SKILLS
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`neo-container p-6 ${skill.color} ${skill.color === '!bg-neo-yellow' || skill.color === '!bg-neo-green' ? 'text-black' : 'text-white'}`}
              style={{ 
                transform: `rotate(${Math.random() * 6 - 3}deg)`,
              }}
            >
              <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
              <p className="font-mono">{skill.level}</p>
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 neo-container bg-neo-yellow p-6 inline-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 50, 
            delay: 0.5 
          }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.03,
            rotate: 2,
            transition: { duration: 0.3 }
          }}
        >
          <h3 className="text-2xl font-bold mb-4">Languages</h3>
          <div className="flex gap-4">
            <motion.div 
              className="font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="font-bold">TypeScript</p>
              <p>42.3%</p>
            </motion.div>
            <motion.div 
              className="font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="font-bold">JavaScript</p>
              <p>47.7%</p>
            </motion.div>
            <motion.div 
              className="font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
            >
              <p className="font-bold">Other</p>
              <p>10%</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}