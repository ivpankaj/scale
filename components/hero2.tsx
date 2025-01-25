"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FloatingIcons } from "./floating-icons";
import { AnimatedSection } from "./Animated";

export function Hero2() {
  return (
 <AnimatedSection>
     <div className="min-h-screen flex flex-col items-center justify-center relative px-6 md:px-10 lg:px-16">
      {/* Floating Icons */}
      <FloatingIcons />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="inline-block text-stroke">
            Expand the <span className="text-white">reach</span> of
            <br />
            your brand across
            <br />
            various <span className="text-white">social media</span>
            <br />
            platforms.
          </span>
        </h1>

      </motion.div>

      {/* Arrow Down Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-social-pink" />
      </motion.div>
    </div>
 </AnimatedSection>
  );
}
