"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Star } from "lucide-react";
import { useParams } from "next/navigation";
import data from "../../data/categories.json";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price?: number;
  prepTime?: string;
  popular?: boolean;
}

interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
  items: MenuItem[];
  featured: boolean;
}

const CategoryPage: React.FC = () => {
  const params = useParams();
  const categoryId = params.id as string;

  // Find the category from imported JSON data
  const category = data.find((cat) => String(cat.id) === categoryId) as
    | Category
    | undefined;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-[#FFF1F2] flex items-center justify-center p-4">
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-[#FCE4E7] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-[#D4919E]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-serif font-bold text-gray-800 mb-2">
            Category Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The menu category you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Menu
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF1F2] py-4 md:py-20  ">
      <div className="container mx-auto px-4 max-w-4xl mb-6 md:mb-8">
        <Link
          href="/menu"
          className="inline-flex items-center px-5 py-3 bg-[#D4919E] text-white rounded-full font-serif font-medium shadow hover:bg-[#b86a7c] transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Menu
        </Link>
      </div>
      <motion.div
        className="container mx-auto px-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Category Header Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6 md:mb-8"
          variants={itemVariants}
        >
          <div className="md:flex">
            {/* Image Section */}
            <div className="relative h-48 md:h-64 md:w-1/2">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {category.featured && (
                <div className="absolute top-4 left-4">
                  <div className="bg-[#D4919E] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Featured
                  </div>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-6 md:w-1/2 md:flex md:flex-col md:justify-center">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3">
                {category.name}
              </h1>

              <p className="text-gray-600 leading-relaxed mb-4">
                {category.description}
              </p>
              <div className="flex items-center text-[#D4919E] font-medium">
                <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
                <span className="text-sm">
                  {category.items.length} items available
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-6 px-2">
            Our Selection
          </h2>
          <div className="grid gap-4 md:gap-6">
            {category.items.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -2 }}
                custom={index}
              >
                <div className="p-4 md:p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="font-serif font-semibold text-gray-800 text-lg group-hover:text-[#D4919E] transition-colors duration-300">
                          {item.name}
                        </h3>

                        {item.popular && (
                          <span className="ml-2 bg-[#FCE4E7] text-[#D4919E] text-xs px-2 py-1 rounded-full font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Additional item details */}
                      {item.prepTime && (
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{item.prepTime}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Price or decorative element */}
                    <div className="ml-4">
                      {item.price ? (
                        <div className="text-right">
                          <div className="text-xl font-bold text-[#D4919E]">
                            ₹{item.price}
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-10 h-10 bg-[#FCE4E7] rounded-full group-hover:bg-[#D4919E] transition-colors duration-300">
                          <svg
                            className="w-5 h-5 text-[#D4919E] group-hover:text-white transition-colors duration-300"
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
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="h-1 bg-gradient-to-r from-[#D4919E] to-[#FCE4E7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-8 md:mt-12"
          variants={itemVariants}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-[#FCE4E7] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[#D4919E]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.8 1.8M7 13h10M9 19a2 2 0 11-4 0 2 2 0 014 0zM20 19a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-gray-800 text-lg mb-2">
              Ready to Order?
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Visit us in-store or call ahead for pickup
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Order Now
              </motion.button>
              <motion.button
                className="px-6 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call Store
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        className="fixed bottom-10 right-10 w-12 h-12 bg-[#FCE4E7] rounded-full opacity-60 hidden lg:block"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed top-1/4 left-8 w-8 h-8 bg-[#D4919E] rounded-full opacity-20 hidden lg:block"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </div>
  );
};

export default CategoryPage;
