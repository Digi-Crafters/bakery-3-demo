"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Mock data - In real app, this would be imported from categories.json
const categoriesData = {
  "categories": [
    {
      "id": 1,
      "name": "Artisan Breads",
      "image": "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "description": "Handcrafted daily using traditional sourdough starters and organic flour. Our signature loaves are fermented for 24 hours to develop complex flavors.",
      "items": ["Sourdough Classic", "Multigrain Seeded", "French Baguette", "Rustic Country"],
      "featured": true
    },
    {
      "id": 2,
      "name": "French Pastries",
      "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1989&q=80",
      "description": "Delicate layers of buttery perfection. Each croissant is rolled by hand and laminated with premium French butter for an authentic Parisian experience.",
      "items": ["Classic Croissant", "Pain au Chocolat", "Almond Croissant", "Seasonal Fruit Danish"],
      "featured": false
    },
    {
      "id": 3,
      "name": "Artisan Cakes",
      "image": "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
      "description": "Celebration-worthy creations made from scratch with premium ingredients. Custom designs available for special occasions and memorable moments.",
      "items": ["Chocolate Decadence", "Vanilla Bean Layer", "Red Velvet Classic", "Seasonal Fruit Tart"],
      "featured": true
    },
    {
      "id": 4,
      "name": "Fresh Cookies",
      "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      "description": "Baked fresh throughout the day with real butter and premium chocolate chips. Perfect for sharing or treating yourself to a moment of pure joy.",
      "items": ["Chocolate Chip Classic", "Oatmeal Raisin", "Double Chocolate", "Sugar Cookie"],
      "featured": false
    },
    {
      "id": 5,
      "name": "Morning Muffins",
      "image": "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "description": "Start your day right with our wholesome muffins made with fresh fruits and natural ingredients. Perfectly moist and bursting with flavor.",
      "items": ["Blueberry Burst", "Banana Walnut", "Chocolate Chip", "Lemon Poppy Seed"],
      "featured": false
    },
    {
      "id": 6,
      "name": "Coffee & Beverages",
      "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "description": "Perfectly roasted artisan coffee beans sourced directly from sustainable farms. Each cup is crafted to complement our baked goods beautifully.",
      "items": ["House Blend Espresso", "French Press Coffee", "Seasonal Lattes", "Fresh Herbal Teas"],
      "featured": true
    }
  ]
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
        ease: "easeOut"
      }
    }
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
  const filteredCategories = categoriesData.categories.filter(category => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return category.featured;
    return false;
  });

  const filterButtons = [
    { id: "all", label: "All Categories" },
    { id: "featured", label: "Featured" }
  ];

  return (
    <div className="relative w-full py-16 lg:py-24 bg-[#FFF1F2] overflow-hidden" id="menu">
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
              <span className="text-sm text-gray-600">Our Delicious Selection</span>
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
            Discover our carefully curated selection of handcrafted baked goods, made fresh daily with love and the finest ingredients
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
                  transition: { duration: 0.3 }
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
                        opacity: hoveredCard === category.id ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm mb-2">Popular Items:</p>
                      <div className="space-y-1">
                        {category.items.slice(0, 2).map((item, idx) => (
                          <p key={idx} className="text-xs opacity-90">• {item}</p>
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

                  {/* Items List */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-[#D4919E] rounded-full mr-2 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full px-6 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View {category.name}
                  </motion.button>
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