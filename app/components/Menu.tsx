"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import data from "../data/categories.json";
import Link from "next/link";

// Mock data - In real app, this would be imported from categories.json
const categoriesData = {
  categories: data,
};

const Menu: FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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

  // Filter categories
  const filteredCategories = categoriesData.categories.filter((category) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return category.featured;
    return false;
  });

  const filterButtons = [
    { id: "all", label: "All Categories" },
    { id: "featured", label: "Featured" },
  ];

  return (
    <div
      className="relative w-full py-16 lg:py-24 bg-[#FFF1F2] overflow-hidden"
      id="menu"
    >
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
              <span className="text-sm text-gray-600">
                Our Delicious Selection
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-6 leading-tight"
            variants={itemVariants}
          >
            Artisan{" "}
            <span className="text-[#D4919E] relative">
              Menu
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4919E] opacity-50 rounded-full" />
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
            variants={itemVariants}
          >
            Discover our carefully curated selection of handcrafted baked goods,
            made fresh daily with love and the finest ingredients
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            className="flex items-center justify-center gap-4"
            variants={itemVariants}
          >
            {filterButtons.map((button) => (
              <motion.button
                key={button.id}
                onClick={() => setActiveFilter(button.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === button.id
                    ? "bg-black text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {button.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Menu Categories Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                onHoverStart={() => setHoveredCard(category.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Featured Badge */}
                {category.featured && (
                  <motion.div
                    className="absolute top-4 right-4 z-20 bg-[#D4919E] text-white px-3 py-1 rounded-full text-sm font-medium"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    Featured
                  </motion.div>
                )}

                {/* Image Section */}
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={`${category.name} - artisan bakery category`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Image overlay gradient matching Hero */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/30 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === category.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="text-white text-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: hoveredCard === category.id ? 0 : 20,
                        opacity: hoveredCard === category.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm mb-2">Popular Items:</p>
                      <div className="space-y-1">
                        {category.items.slice(0, 2).map((item, idx) => (
                          <p key={idx} className="text-xs opacity-90">
                            • {}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-black mb-3 group-hover:text-[#D4919E] transition-colors duration-300">
                    {category.name}
                  </h3>

                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* CTA Button */}
                  <Link href={`/menu/${category.id}`}>
                    <motion.button
                      className="w-full px-6 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View {category.name}
                    </motion.button>
                  </Link>
                </div>

                {/* Decorative corner element */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#FCE4E7]/30 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

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
                View Full Menu
              </button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <button className="px-8 py-4 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                Order Online
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
              <span className="text-sm">Fresh Daily</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
              <span className="text-sm">Made to Order</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
              <span className="text-sm">Premium Ingredients</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
