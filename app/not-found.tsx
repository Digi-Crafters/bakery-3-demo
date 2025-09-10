"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Error = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#FFF1F2] overflow-hidden flex items-center justify-center">
      {/* Background pattern with subtle animation */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full h-full bg-[url('/pattern.png')] bg-repeat opacity-20" />
      </motion.div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF1F2] via-transparent to-[#FCE4E7] opacity-70" />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 rounded-full bg-[#FCE4E7] opacity-60"
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-12 h-12 rounded-full bg-[#D4919E] opacity-40"
        animate={{ y: [0, -15, 0], x: [0, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-32 w-8 h-8 rounded-full bg-[#D4919E] opacity-30"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Error Icon */}
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
        >
          <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-[#D4919E]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-6 leading-tight">
            Oops! Something went{" "}
            <span className="text-[#D4919E] relative">
              wrong
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4919E] opacity-50 rounded-full" />
            </span>
          </h1>

          <motion.p
            className="text-gray-700 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Don&apos;t worry, even our best bakers sometimes drop the dough!
            Let&apos;s get you back to our delicious selection of freshly baked
            goods.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-black/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <Link
                href="/"
                className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 block relative z-10 shadow-md hover:shadow-lg"
              >
                Back to Home
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <Link
                href="/menu"
                className="px-8 py-4 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 block relative z-10 shadow-md hover:shadow-lg"
              >
                View Menu
              </Link>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="flex items-center justify-center gap-6 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
              <span className="text-sm">Fresh Daily</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
              <span className="text-sm">Always Delicious</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#D4919E] rounded-full mr-2" />
              <span className="text-sm">Made with Love</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Decorative Card */}
        <motion.div
          className="mt-16 inline-block bg-white p-6 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 15px 30px -5px rgba(0,0,0,0.15)",
          }}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-[#FFF1F2] rounded-full mb-3 mx-auto">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <p className="text-black font-semibold mb-1">Still Baking Fresh</p>
          <p className="text-[#D4919E] font-medium text-sm">
            Every Day, Just for You
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Error;
