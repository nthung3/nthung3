"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    // Here you would typically send the form data to your backend or a service like Formspree
    // This is a simulated API call
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <main className="min-h-screen py-10">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-10 font-mono">CONTACT ME</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <motion.div 
                className="bg-neo-yellow neo-container p-6 rotate-1 mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <p className="mb-6">
                  Have a project in mind? Want to collaborate? Or just want to say hello?
                  Fill out the form or reach out through any of the channels below.
                </p>
                
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-center gap-3"
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={formFields}
                  >
                    <span className="bg-black text-white p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <a href="mailto:contact@example.com" className="hover:underline">contact@example.com</a>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-center gap-3"
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={formFields}
                  >
                    <span className="bg-black text-white p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span>Based in Vietnam</span>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-center gap-3"
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={formFields}
                  >
                    <span className="bg-black text-white p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div className="flex gap-3">
                      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-neo-purple">
                        GitHub
                      </a>
                      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-neo-purple">
                        LinkedIn
                      </a>
                      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-neo-purple">
                        Twitter
                      </a>
                    </div>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
            
            <div>
              <motion.form 
                onSubmit={handleSubmit}
                className="bg-white neo-container p-6 rotate-neg-1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {submitSuccess ? (
                  <motion.div 
                    className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <p>Your message has been sent successfully! I will get back to you soon.</p>
                  </motion.div>
                ) : null}
                
                {submitError ? (
                  <motion.div 
                    className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <p>{submitError}</p>
                  </motion.div>
                ) : null}
                
                <div className="mb-4">
                  <motion.input
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={formFields}
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-3 border-2 border-black focus:!bg-neo-yellow focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="mb-4">
                  <motion.input
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={formFields}
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full p-3 border-2 border-black focus:!bg-neo-yellow focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="mb-4">
                  <motion.input
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={formFields}
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full p-3 border-2 border-black focus:!bg-neo-yellow focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="mb-6">
                  <motion.textarea
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={formFields}
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={6}
                    className="w-full p-3 border-2 border-black focus:!bg-neo-yellow focus:outline-none transition-colors"
                  ></motion.textarea>
                </div>
                
                <motion.button
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  variants={formFields}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="!bg-neo-blue text-white font-bold py-3 px-8 border-2 border-black shadow-neo hover:shadow-neo-hover transition-shadow duration-200 disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
