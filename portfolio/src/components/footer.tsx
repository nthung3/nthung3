'use client'
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 150
      }
    })
  };

  return (
    <footer className="bg-black text-white py-10 border-t-4 border-neo-yellow overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          variants={footerVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={childVariants}>
            <h3 className="text-2xl font-bold mb-4 font-mono">THANH HUNG</h3>
            <p>Frontend Developer specializing in modern web technologies.</p>
          </motion.div>
          
          <motion.div variants={childVariants}>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <nav>
              <ul className="space-y-2">
                <motion.li 
                  variants={childVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="#about">About</Link>
                </motion.li>
                <motion.li 
                  variants={childVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="#skills">Skills</Link>
                </motion.li>
                <motion.li 
                  variants={childVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="#projects">Projects</Link>
                </motion.li>
                <motion.li 
                  variants={childVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="#contact">Contact</Link>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
          
          <motion.div variants={childVariants}>
            <h3 className="text-xl font-bold mb-4">Social</h3>
            <div className="flex gap-4">
              <motion.a 
                href="https://github.com/nthung3" 
                className="p-2 border-2 border-white"
                custom={0}
                variants={socialVariants}
                whileHover={{ y: -5, backgroundColor: "white", color: "black" }}
              >
                GH
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/thanhhunq2k" 
                className="p-2 border-2 border-white"
                custom={1}
                variants={socialVariants}
                whileHover={{ y: -5, backgroundColor: "white", color: "black" }}
              >
                LI
              </motion.a>
              <motion.a 
                href="https://twitter.com/" 
                className="p-2 border-2 border-white"
                custom={2}
                variants={socialVariants}
                whileHover={{ y: -5, backgroundColor: "white", color: "black" }}
              >
                TW
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-10 pt-6 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Thanh Hung. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}