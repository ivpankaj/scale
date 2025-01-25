"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function CheckBadge() {
  return (
    <motion.div
      className="w-12 h-12 rounded-full bg-social-pink flex items-center justify-center shadow-lg shadow-social-pink/20"
      whileHover={{ scale: 1.1, rotate: 10 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <Check className="w-6 h-6 text-white" />
    </motion.div>
  )
}

