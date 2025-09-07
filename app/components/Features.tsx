"use client";
import React, { FC } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const Features: FC = () => {
  // Animation variants matching Hero section
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

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Fresh Daily",
      description: "Every item is baked fresh before dawn using time-honored techniques passed down through generations.",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      stats: "Baked at 4AM"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Made with Love",
      description: "Our family recipes combine premium ingredients with the care and attention that only comes from generations of baking passion.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      stats: "3 Generations"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Premium Quality",
      description: "We source only the finest organic ingredients from trusted local farms to ensure every bite meets our exacting standards.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      stats: "Organic Only"
    }
  ];

  return (
    <div className="relative w-full py-16 lg:py-24 bg-[#FFF1F2] overflow-hidden" id="features">
      {/* Background pattern matching Hero */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full h-full bg-[url('/pattern.png')] bg-repeat opacity-20" />
      </motion.div>

      {/* Floating decorative elements matching Hero style */}
      <motion.div
        className="absolute top-20 left-10 hidden lg:block"
        variants={floatingVariants}
        animate="animate"
      >
        <div className="w-16 h-16 rounded-full bg-[#FCE4E7] opacity-80" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-20 hidden lg:block"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <div className="w-12 h-12 rounded-full bg-[#D4919E] opacity-30" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-5 hidden md:block"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.8 }}
      >
        <div className="w-8 h-8 rounded-full bg-[#FCE4E7] opacity-60" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mb-6"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
              <span className="text-sm text-gray-600">What Makes Us Special</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-6 leading-tight"
            variants={itemVariants}
          >
            Our Artisan{" "}
            <span className="text-[#D4919E] relative">
              Promise
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4919E] opacity-50 rounded-full" />
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Three pillars of excellence that define everything we create, from our signature sourdough to our delicate pastries
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="space-y-20 lg:space-y-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-16`}
            >
              {/* Content Side */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-[#D4919E]">
                    {feature.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-black mb-6 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <motion.div
                  className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-md"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="w-3 h-3 bg-[#D4919E] rounded-full mr-3" />
                  <span className="text-black font-medium">{feature.stats}</span>
                </motion.div>
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <motion.div
                  className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={feature.image}
                    alt={`${feature.title} - artisan bakery process`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                  {/* Image overlay gradient matching Hero */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </motion.div>

                {/* Floating quality badge - similar to Hero cards */}
                <motion.div
                  className={`absolute ${
                    index % 2 === 0 ? '-right-4 bottom-8' : '-left-4 bottom-8'
                  } bg-white p-5 rounded-xl shadow-xl hidden lg:flex flex-col items-center`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px -5px rgba(0,0,0,0.15)",
                  }}
                >
                  <div className="flex items-center text-yellow-400 mb-2">
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
                  <p className="text-black font-semibold text-sm">Premium</p>
                  <p className="text-[#D4919E] font-medium text-xs">Quality</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-20 lg:mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-black/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 block relative z-10 shadow-md hover:shadow-lg">
                Taste the Difference
              </button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <button className="px-8 py-4 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 block relative z-10 shadow-md hover:shadow-lg">
                Visit Our Bakery
              </button>
            </motion.div>
          </motion.div>

          {/* Trust indicators matching Hero */}
          <motion.div
            className="flex items-center justify-center mt-12 gap-6 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
              <span className="text-sm">Award Winning</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
              <span className="text-sm">Local Favorite</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
              <span className="text-sm">Certified Organic</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;