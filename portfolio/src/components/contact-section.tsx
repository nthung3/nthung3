'use client'
import { motion } from "framer-motion";

export default function ContactSection() {
  const formFields = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5
      }
    })
  };

  const contactItems = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="contact" className="py-20 overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="neo-container p-8 bg-neo-green max-w-3xl mx-auto rotate-1"
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
            GET IN TOUCH
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Contact Info
              </motion.h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-center gap-2"
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  variants={contactItems}
                  viewport={{ once: true }}
                >
                  <span className="font-bold">Email:</span> 
                  <a href="mailto:thanhhunq2k@gmail.com" className="underline">thanhhunq2k@gmail.com</a>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  variants={contactItems}
                  viewport={{ once: true }}
                >
                  <span className="font-bold">LinkedIn:</span> 
                  <a href="https://www.linkedin.com/in/thanhhunq2k" className="underline">thanhhunq2k</a>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  variants={contactItems}
                  viewport={{ once: true }}
                >
                  <span className="font-bold">Portfolio:</span> 
                  <a href="https://www.nthung-portfolio.net" className="underline">nthung-portfolio.net</a>
                </motion.li>
              </ul>
            </div>
            
            <motion.form 
              className="neo-container bg-white p-6 -rotate-2"
              initial={{ opacity: 0, x: 30, rotate: 0 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="mb-4"
                custom={0}
                initial="hidden"
                whileInView="visible"
                variants={formFields}
                viewport={{ once: true }}
              >
                <label className="block font-bold mb-2" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full border-4 border-black p-2" 
                  placeholder="Your name"
                />
              </motion.div>
              <motion.div 
                className="mb-4"
                custom={1}
                initial="hidden"
                whileInView="visible"
                variants={formFields}
                viewport={{ once: true }}
              >
                <label className="block font-bold mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full border-4 border-black p-2" 
                  placeholder="Your email"
                />
              </motion.div>
              <motion.div 
                className="mb-4"
                custom={2}
                initial="hidden"
                whileInView="visible"
                variants={formFields}
                viewport={{ once: true }}
              >
                <label className="block font-bold mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  className="w-full border-4 border-black p-2 h-32" 
                  placeholder="Your message"
                ></textarea>
              </motion.div>
              <motion.button 
                type="submit" 
                className="neo-button bg-neo-purple text-white"
                custom={3}
                initial="hidden"
                whileInView="visible"
                variants={formFields}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SEND MESSAGE
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}