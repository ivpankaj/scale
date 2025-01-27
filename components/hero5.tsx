"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ServiceButton } from "./service-button";
import { CheckBadge } from "./check-badge";
import { AnimatedSection } from "./Animated";

export function Hero5() {
  const services = ["Price : Rs. 999 - Rs. 4499 /-"];

  return (
    <AnimatedSection>
      <div className="min-h-screen  flex flex-col items-center justify-center relative px-4">
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
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <ServiceButton>{service}</ServiceButton>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="space-y-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
          <button className="w-full bg-[#ff2868] backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-lg text-white transition-colors">Get Rs 200 Discount
          </button>
          </motion.div>
          <motion.div
            className="space-y-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
          <button className="w-full bg-[#ff2868] backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-lg text-white transition-colors">Talk to an Expert
          </button>
          </motion.div>
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
