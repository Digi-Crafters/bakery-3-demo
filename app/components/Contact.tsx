"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Contact = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FFF1F2] overflow-hidden" id="contact">
      {/* Background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full h-full bg-[url('/pattern.png')] bg-repeat opacity-20" />
      </motion.div>
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF1F2] via-transparent to-transparent opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#FFF1F2] via-transparent to-transparent opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto bg-white/80 rounded-2xl shadow-xl p-8 md:p-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-black mb-6 text-center"
            variants={itemVariants}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-lg text-black mb-8 text-center"
            variants={itemVariants}
          >
            We&#39;d love to hear from you! Whether you have a question, feedback, or just want to say hello, fill out the form below or reach us directly.
          </motion.p>
          <motion.form
            className="space-y-6"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <label className="block text-black font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4919E] bg-[#FFF1F2] text-black"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4919E] bg-[#FFF1F2] text-black"
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4919E] bg-[#FFF1F2] text-black"
                id="message"
                name="message"
                rows={4}
                placeholder="Type your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-black text-white font-semibold hover:bg-[#D4919E] transition-colors"
            >
              Send Message
            </button>
          </motion.form>
          <motion.div
            className="mt-10 text-center text-black"
            variants={itemVariants}
          >
            <div>Or email us at <a href="mailto:hello@yourbakery.com" className="text-[#D4919E] underline">hello@yourbakery.com</a></div>
            <div className="mt-2">Visit us: 123 Sweet St, Pastry City</div>
            <div className="mt-2">Call: (123) 456-7890</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;