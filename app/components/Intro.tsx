"use client";
import React, { FC } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const IntroSection: FC = () => {
  // Animation variants matching Hero section exactly
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
    <div className="relative w-full py-16 lg:py-24 bg-[#FFF1F2] overflow-hidden">
      {/* Background pattern matching Hero */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full h-full bg-[url('/pattern.png')] bg-repeat opacity-20" />
      </motion.div>

      {/* Subtle gradient overlay matching Hero */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF1F2] via-transparent to-transparent opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#FFF1F2] via-transparent to-transparent opacity-30" />

      {/* Floating decorative elements matching Hero style */}
      <motion.div
        className="absolute top-20 left-10 hidden lg:block"
        variants={floatingVariants}
        animate="animate"
      >
        <div className="w-20 h-20 rounded-full bg-[#FCE4E7] opacity-80" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-20 hidden lg:block"
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Content Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            variants={itemVariants}
          >
            {/* Section Label matching Hero trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center md:justify-start mb-6"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
                <span className="text-sm text-gray-600">Our Story</span>
              </div>
            </motion.div>

            {/* Main Heading matching Hero style */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-6 leading-tight"
              variants={itemVariants}
            >
              Crafted with{" "}
              <span className="text-[#D4919E] relative">
                Love
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4919E] opacity-50 rounded-full" />
              </span>
              ,<br />
              Baked with{" "}
              <span className="text-[#D4919E] relative">
                Passion
              </span>
            </motion.h2>

            {/* Description matching Hero typography */}
            <motion.div variants={itemVariants} className="space-y-6 mb-10">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
                For over three generations, our family bakery has been the heart of the community, 
                where time-honored recipes meet artisanal craftsmanship. Every loaf, pastry, and 
                sweet treat tells a story of dedication, quality, and the simple joy of sharing 
                something beautiful.
              </p>
              
              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                Using only the finest locally-sourced ingredients and traditional techniques 
                passed down through generations, we create more than just baked goods – we craft 
                moments of pure happiness, one bite at a time.
              </p>
            </motion.div>

            {/* Key Features Grid */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#D4919E] rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Fresh Daily</h4>
                  <p className="text-sm text-gray-600">Baked fresh every morning before dawn</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#D4919E] rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Local Ingredients</h4>
                  <p className="text-sm text-gray-600">Sourced from trusted local farms</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#D4919E] rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Family Recipes</h4>
                  <p className="text-sm text-gray-600">Three generations of baking wisdom</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#D4919E] rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Artisan Craft</h4>
                  <p className="text-sm text-gray-600">Hand-crafted with attention to detail</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button matching Hero style */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-black/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 block relative z-10 shadow-md hover:shadow-lg">
                  Learn Our Story
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <button className="px-8 py-4 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 block relative z-10 shadow-md hover:shadow-lg">
                  Visit Bakery
                </button>
              </motion.div>
            </motion.div>

            {/* Trust indicators matching Hero */}
            <motion.div
              className="flex items-center justify-center md:justify-start mt-12 gap-6 text-gray-600"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
                <span className="text-sm">50+ Years</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
                <span className="text-sm">1000+ Customers</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
                <span className="text-sm">Family Owned</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 relative"
            variants={itemVariants}
          >
            <motion.div
              className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Artisan baker kneading dough with flour-dusted hands in a warm bakery kitchen"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
                priority
              />
              {/* Image overlay gradient matching Hero */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>

            {/* Floating Info Cards matching Hero style */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white p-5 rounded-xl shadow-xl hidden md:flex flex-col items-center"
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
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
              <p className="text-black font-semibold">50+ Years</p>
              <p className="text-[#D4919E] font-medium">Excellence</p>
            </motion.div>

            {/* Floating review badge matching Hero */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl hidden md:flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
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
              <p className="text-xs text-gray-600">1000+ Reviews</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSection;