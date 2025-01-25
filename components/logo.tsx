"use client"

import { motion } from "framer-motion"

export function Logo() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-64 h-32"
    >
      <motion.svg viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <motion.path
          d="M20 50 C20 30, 40 20, 60 20 S100 30, 100 50 S80 80, 60 80 S20 70, 20 50"
          stroke="var(--social-pink)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-[var(--social-pink)] text-4xl font-bold"
          style={{ fill: "var(--social-pink)" }}
        >
          social tag
        </text>
      </motion.svg>
    </motion.div>
  )
}

