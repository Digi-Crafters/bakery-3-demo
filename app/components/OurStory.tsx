"use client";
import React, { FC } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const OurStory: FC = () => {
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

  const milestones = [
    {
      year: "1998",
      title: "The Beginning",
      description: "Founded by Maria and Giuseppe with a small wood-fired oven and a big dream.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      year: "2005",
      title: "Community Heart",
      description: "Became the neighborhood's beloved gathering place for coffee and conversation.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      year: "2012",
      title: "Next Generation",
      description: "Our children joined the business, bringing fresh ideas while honoring tradition.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      year: "2025",
      title: "Looking Forward",
      description: "Today, we continue crafting memories with every loaf, pastry, and smile.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const values = [
    {
      title: "Authenticity",
      description: "Every recipe tells a story of tradition and genuine craftsmanship passed down through generations.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Quality",
      description: "We source the finest ingredients and never compromise on the standards that made us who we are.",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Community",
      description: "More than a bakery, we're a place where neighbors become family and every visit feels like coming home.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="relative w-full py-16 lg:py-24 bg-[#FFF1F2] overflow-hidden" id="story">
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
        className="absolute top-1/3 right-5 hidden md:block"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.8 }}
      >
        <div className="w-8 h-8 rounded-full bg-[#D4919E] opacity-30" />
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
              <span className="text-sm text-gray-600">Three Generations Strong</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-6 leading-tight"
            variants={itemVariants}
          >
            Our{" "}
            <span className="text-[#D4919E] relative">
              Story
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4919E] opacity-50 rounded-full" />
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            From humble beginnings to becoming the heart of our community, every chapter of our journey has been baked with love, seasoned with tradition, and shared with those who matter most.
          </motion.p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          className="mb-20 lg:mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-serif font-bold text-black text-center mb-12"
            variants={itemVariants}
          >
            Our Journey Through Time
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-[#D4919E] opacity-30 hidden lg:block" />
            
            <div className="space-y-12 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D4919E] rounded-full text-white mb-4">
                        {milestone.icon}
                      </div>
                      <h4 className="text-xl md:text-2xl font-serif font-bold text-black mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <motion.div
                    className="flex-shrink-0 relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#D4919E] relative z-10">
                      <span className="text-lg font-bold text-[#D4919E]">{milestone.year}</span>
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 w-20 h-20 bg-[#D4919E] rounded-full opacity-20 animate-pulse" />
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-serif font-bold text-black text-center mb-12"
            variants={itemVariants}
          >
            What We Stand For
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={value.image}
                    alt={`${value.title} - our bakery values`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h4 className="text-xl lg:text-2xl font-serif font-bold text-black mb-3 group-hover:text-[#D4919E] transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#FCE4E7]/30 to-transparent" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Family Photo Section */}
        <motion.div
          className="mt-20 lg:mt-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Our bakery family - three generations working together"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Family Quote Overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-center text-white">
                <blockquote className="text-lg md:text-xl lg:text-2xl font-serif italic mb-4">
                  &quot;Every loaf we bake carries the love of three generations&quot;
                </blockquote>
                <p className="text-sm md:text-base opacity-90">— The Artisan Family</p>
              </div>
            </motion.div>

            {/* Floating stat cards matching Hero style */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white p-5 rounded-xl shadow-xl hidden md:flex flex-col items-center"
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px -5px rgba(0,0,0,0.15)",
              }}
            >
              <div className="text-3xl font-bold text-[#D4919E] mb-1">27</div>
              <div className="text-sm text-gray-600">Years Strong</div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 bg-white p-5 rounded-xl shadow-xl hidden md:flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold text-[#D4919E] mb-1">3</div>
              <div className="text-sm text-gray-600">Generations</div>
            </motion.div>
          </div>
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
              <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg">
                Visit Our Bakery
              </button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <button className="px-8 py-4 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                Meet the Family
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
              <span className="text-sm">Family Legacy</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
              <span className="text-sm">Community Rooted</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
              <span className="text-sm">Tradition Honored</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;