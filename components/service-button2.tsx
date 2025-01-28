"use client";
import { motion } from "framer-motion";

interface ServiceButtonProps {
  children: React.ReactNode;
  onClick?: () => void; // Make onClick optional
  expanded: boolean;
  staticData?: React.ReactNode; // Optional static data to show when expanded
}

export function ServiceButton2({ children, onClick, expanded, staticData }: ServiceButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full bg-[#202020] backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-lg text-white transition-colors ${
        expanded ? "h-20" : "h-16"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{ height: expanded ? "9rem" : "" }} // Adjust these values as needed
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {expanded && staticData ? staticData : children}
    </motion.button>
  );
}