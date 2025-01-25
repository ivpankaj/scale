"use client"

import { motion } from "framer-motion"
import check from "../public/verified-check-pink.webp"
import Image from "next/image"

export function CheckBadge() {
  return (
    <motion.div
      className="w-12 h-12 rounded-full bg-social-pink flex items-center justify-center shadow-lg shadow-social-pink/20"
      whileHover={{ scale: 1.1, rotate: 10 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
       <Image src={ check } alt="check" width={80} height={80} className="drop-shadow-2xl" />
    </motion.div>
  )
}

