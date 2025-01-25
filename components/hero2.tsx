"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { FloatingIcons } from "./floating-icons"

export function Hero2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <FloatingIcons />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-[#ff2868] text-[#ff2868] border-dashed hover:bg-[#ff2868]  hover:text-black px-8 py-3 rounded-lg text-lg hover:bg-social-pink/10 transition-colors"
        >
          Let&apos;s Talk
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-8 h-8 text-social-pink" />
      </motion.div>
    </div>
  )
}

