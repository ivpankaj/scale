// hero5.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ServiceButton } from "./service-button";
import { CheckBadge } from "./check-badge";
import { AnimatedSection } from "./Animated";
import React from "react";

interface Hero5Props {
  selectedExperience: string; // Experience string to map price
}

// Define the price mapping explicitly with types
const prices: Record<string, string> = {
  "0 - less than 1": "Price : Rs. 1099 /-",
  "1 - less than 2": "Price : Rs. 1499 /-",
  "2 - less than 4": "Price : Rs. 1899 /-",
  "4 - less than 7": "Price : Rs. 2399 /-",
  "7 - less than 10": "Price : Rs. 2999 /-",
  "10 - less than 15": "Price : Rs. 3499 /-",
  "15 plus": "Price : Rs. 4999 /-",
};

export const Hero5: React.FC<Hero5Props> = ({ selectedExperience }) => {
  // Safely retrieve the price, fallback for unknown experience
  const selectedPrice =
    prices[selectedExperience] || "Price : Rs. 999 - Rs. 4499/-";

  return (
    <AnimatedSection>
      <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <CheckBadge />
            <motion.h1
              className="text-2xl md:text-5xl sm:text-xl font-bold text-[#ff2868]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              The Package Costs
            </motion.h1>
            <CheckBadge />
          </div>

          <motion.div
            className="space-y-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <ServiceButton>{selectedPrice}</ServiceButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="w-full bg-[#ff2868] backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-lg text-white transition-colors">
              Get Rs 200 Discount
            </button>
          </motion.div>

          <motion.div
            className="space-y-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="w-full bg-[#ff2868] backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-lg text-white transition-colors">
              Talk to an Expert
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-8 h-8 text-social-pink" />
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
