"use client"

import { motion } from "framer-motion"


export function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-[#ff2868] text-[#ff2868] border-dashed hover:bg-[#ff2868]  hover:text-black px-8 py-3 rounded-lg text-lg hover:bg-social-pink/10 transition-colors"
        >
          Let&apos;s Talk
        </motion.button>
      </div>
    </nav>
  )
}

