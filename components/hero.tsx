"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
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
          One Stop
          <br />
          Solution
        </motion.h1>
        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-2xl md:text-3xl text-gray-400 mb-4"
        >
          For All Your Influencer
          <br />
          Marketing Needs.
        </motion.h2>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-gray-500 text-lg md:text-xl mb-8"
        >
          We help brands with Strategy Led Influencer
          <br />
          Marketing Campaigns.
        </motion.p>
      </motion.div>

      {/* Home Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 right-8"
      >
        <span className="text-gray-400 text-lg">Home</span>
      </motion.div>

      {/* Arrow Indicator */}
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
