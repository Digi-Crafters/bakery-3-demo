"use client";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const Hero: FC = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-[#FFF1F2] overflow-hidden flex items-center">
      {/* Background pattern with subtle animation */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full h-full bg-[url('/pattern.png')] bg-repeat opacity-20" />
      </motion.div>

      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF1F2] via-transparent to-transparent opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#FFF1F2] via-transparent to-transparent opacity-30" />

      <motion.div
        className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between h-full relative z-10 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            Freshly Baked{" "}
            <motion.span
              className="text-[#D4919E] relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Happiness
              {/* Underline decoration for emphasis */}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4919E] opacity-50 rounded-full" />
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-700 text-lg md:text-xl mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Indulge in our handcrafted pastries and breads made from the finest
            ingredients, baked with love every morning.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-black/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <Link
                href="/menu"
                className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 block relative z-10 shadow-md hover:shadow-lg"
              >
                View Menu
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 block relative z-10 shadow-md hover:shadow-lg"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex items-center justify-center md:justify-start mt-12 gap-6 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
              <span className="text-sm">Since 1998</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
              <span className="text-sm">Organic Ingredients</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
              <span className="text-sm">Family Owned</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Image section */}
        <motion.div
          className="w-full md:w-1/2 relative"
          variants={itemVariants}
        >
          <motion.div
            className="relative h-[350px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Freshly baked pastries"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl"
              priority
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 bg-white p-5 rounded-xl shadow-xl hidden md:flex flex-col items-center"
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px -5px rgba(0,0,0,0.15)",
            }}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-[#FFF1F2] rounded-full mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#D4919E]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-black font-semibold">Open Daily</p>
            <p className="text-[#D4919E] font-medium">7am - 7pm</p>
          </motion.div>

          {/* Floating review badge */}
          <motion.div
            className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl hidden md:flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center text-yellow-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xs text-gray-600">200+ Reviews</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements with floating animation */}
      <motion.div
        className="absolute bottom-10 left-10 hidden lg:block"
        variants={floatingVariants}
        animate="animate"
      >
        <div className="w-20 h-20 rounded-full bg-[#FCE4E7] opacity-80" />
      </motion.div>
      <motion.div
        className="absolute top-20 right-20 hidden lg:block"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <div className="w-12 h-12 rounded-full bg-[#FCE4E7] opacity-80" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-5 hidden md:block"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.8 }}
      >
        <div className="w-8 h-8 rounded-full bg-[#D4919E] opacity-30" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-12 hidden md:block"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1.2 }}
      >
        <div className="w-10 h-10 rounded-full bg-[#D4919E] opacity-20" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-gray-600 text-sm mb-2">Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
