"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center relative px-4">
      {/* Animated Content Container */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Start slightly above
        animate={{ opacity: 1, y: 0 }} // End at normal position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth easing
        className="text-center"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold mb-6 text-gradient"
        >
          Find Next
          <br />
          Job Here !
        </motion.h1>
        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-2xl md:text-3xl text-gray-400"
        >
          Mployee.me Job Search
          <br />
          Plan assists you,
        </motion.h2>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-2xl md:text-3xl text-gray-400 mb-4"
        >
          till you find the Job
          <br />
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-8 h-8 text-social-pink" />
      </motion.div>
    </div>
  );
}
