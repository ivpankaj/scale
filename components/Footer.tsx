"use client"

import { motion } from "framer-motion"


export function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-2">
      <div className="container mx-auto flex justify-between items-center">
      <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-[#ff9800] text-[#ff9800] border-dashed hover:bg-[#ff9800]  hover:text-black px-4 py-3 rounded-lg text-2xl font-bold hover:bg-social-pink/10 transition-colors"
        >
          No More
        </motion.button>
      </div>
    </nav>
  )
}

