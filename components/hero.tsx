"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { AnimatedSection } from "./Animated";

export function Hero() {
  return (
    <AnimatedSection>
      <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
            One Stop
            <br />
            Solution
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-4">
            For All Your Influencer
            <br />
            Marketing Needs.
          </h2>
          <p className="text-gray-500 text-lg md:text-xl mb-8">
            We help brands with Strategy Led Influencer
            <br />
            Marketing Campaigns.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 right-8"
        >
          <span className="text-gray-400 text-lg">Home</span>
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
    </AnimatedSection>
  );
}
