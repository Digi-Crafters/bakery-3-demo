"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import data from "../data/categories.json";

const MenuPage = () => {
  const featuredCategories = data.filter((category) => category.featured);

  return (
    <div className="relative w-full min-h-screen bg-[#FFF1F2]">
      {/* Home Link */}
      <Link href="/">
        <motion.div
          className="fixed top-6 left-6 z-50 bg-white p-3 rounded-full shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#D4919E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </motion.div>
      </Link>

      {/* Background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full h-full bg-[url('/pattern.png')] bg-repeat opacity-20" />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF1F2] via-transparent to-[#FCE4E7] opacity-50" />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-32 left-16 w-20 h-20 rounded-full bg-[#FCE4E7] opacity-60"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-16 h-16 rounded-full bg-[#D4919E] opacity-40"
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-6 leading-tight">
            Our Delicious{" "}
            <span className="text-[#D4919E] relative">
              Menu
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4919E] opacity-50 rounded-full" />
            </span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our carefully crafted selection of artisan baked goods, made
            fresh daily with the finest ingredients and traditional techniques
            passed down through generations.
          </p>
        </motion.div>

        {/* Featured Categories */}
        {featuredCategories.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#D4919E] rounded-full mr-3" />
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-black">
                  Featured Selections
                </h2>
                <div className="w-3 h-3 bg-[#D4919E] rounded-full ml-3" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCategories.map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Link href={`/menu/${category.id}`}>
                    <motion.div
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4 z-10 bg-[#D4919E] text-white px-3 py-1 rounded-full text-xs font-medium">
                        Chef&apos;s Choice
                      </div>

                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-serif font-bold text-black mb-3 group-hover:text-[#D4919E] transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {category.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-[#D4919E] font-medium text-sm">
                            {category.items.length} items available
                          </span>
                          <div className="flex items-center text-[#D4919E] group-hover:translate-x-1 transition-transform">
                            <span className="text-sm font-medium mr-1">
                              Explore
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-3" />
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-black">
                Complete Menu
              </h2>
              <div className="w-2 h-2 bg-[#D4919E] rounded-full ml-3" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Link href={`/menu/${category.id}`}>
                  <motion.div
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative"
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                      {category.featured && (
                        <div className="absolute top-3 right-3 w-6 h-6 bg-[#D4919E] rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-serif font-bold text-black mb-2 group-hover:text-[#D4919E] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
                        {category.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-[#D4919E] font-medium text-xs">
                          {category.items.length} items
                        </span>
                        <div className="flex items-center text-gray-400 group-hover:text-[#D4919E] transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center w-16 h-16 bg-[#FFF1F2] rounded-full mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#D4919E]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-black mb-2">
              Made Fresh Daily
            </h3>
            <p className="text-gray-600 text-sm">
              Every item is crafted with care using traditional recipes and
              premium ingredients
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPage;
