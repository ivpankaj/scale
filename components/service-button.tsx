"use client";

import { motion } from "framer-motion";

interface ServiceButtonProps {
  children: React.ReactNode;
}

export function ServiceButton({ children }: ServiceButtonProps) {
  return (
    <motion.button
      className="w-full bg-[#202020] backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-white transition-colors"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="flex justify-start text-left w-full">{children}</span>
    </motion.button>
  );
}
