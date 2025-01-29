"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import youtube from "../public/unnamed-1579084115lpc48.webp"
import instagram from "../public/unnamed.png"
import x from "../public/images.png"
import linkedin from "../public/images (2).png"

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* YouTube Icon */}
      <motion.div
        className="absolute top-[20%] left-[0%]"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Image src={youtube} alt="YouTube" width={60} height={60} className="drop-shadow-2xl" />
      </motion.div>

      {/* Instagram Icon */}
      <motion.div
        className="absolute top-[20%] right-[0%]"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 0.5,
        }}
      >
        <Image src={instagram} alt="YouTube" width={60} height={60} className="drop-shadow-2xl rounded-2xl" />
      </motion.div>

      {/* Twitter Icon */}
      <motion.div
        className="absolute bottom-[15%] left-[0%]"
        animate={{
          x: [0, -20, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      >
     <Image src={x} alt="YouTube" width={60} height={60} className="drop-shadow-2xl rounded-xl" />
      </motion.div>

      {/* LinkedIn Icon */}
      <motion.div
        className="absolute bottom-[15%] right-[0%]"
        animate={{
          x: [0, 20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1.5,
        }}
      >
        <Image src={linkedin  } alt="LinkedIn" width={60} height={60} className="drop-shadow-2xl rounded-xl" />
      </motion.div>
    </div>
  )
}

