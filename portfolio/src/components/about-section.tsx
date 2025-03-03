'use client'
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neo-blue overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="neo-container bg-neo-blue border-white p-8 rotate-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-10 font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ABOUT ME
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <motion.p 
                className="text-xl mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                I am a skilled junior frontend developer with proficiency in HTML, CSS, and JavaScript, 
                as well as popular frontend frameworks like React.
              </motion.p>
              <motion.p 
                className="text-xl mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                My goal is to further enhance my skills and knowledge to become a proficient 
                senior frontend or fullstack developer. I actively seek opportunities to apply 
                my problem-solving skills and contribute to real-world projects.
              </motion.p>
            </div>
            
            <motion.div 
              className="neo-container bg-white text-black p-6 -rotate-2"
              initial={{ opacity: 0, x: 30, rotate: 0 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Current Role
              </motion.h3>
              <motion.p 
                className="text-xl mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Frontend Developer
              </motion.p>
              
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Education
              </motion.h3>
              <motion.p 
                className="text-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Computer Science, 2018-2022
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}