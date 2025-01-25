"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import youtube from "../public/youtube.webp"
import instagram from "../public/instagram.webp"
import x from "../public/twitter.webp"
import linkedin from "../public/linkedin.webp"

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* YouTube Icon */}
      <motion.div
        className="absolute top-[20%] left-[20%]"
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
        <Image src={youtube} alt="YouTube" width={100} height={100} className="drop-shadow-2xl" />
      </motion.div>

      {/* Instagram Icon */}
      <motion.div
        className="absolute top-[20%] right-[20%]"
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
        <Image src={instagram} alt="Instagram" width={100} height={100} className="drop-shadow-2xl" />
      </motion.div>

      {/* Twitter Icon */}
      <motion.div
        className="absolute bottom-[20%] left-[25%]"
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
        <Image src={x} alt="Twitter" width={80} height={80} className="drop-shadow-2xl" />
      </motion.div>

      {/* LinkedIn Icon */}
      <motion.div
        className="absolute bottom-[25%] right-[25%]"
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
        <Image src={linkedin  } alt="LinkedIn" width={80} height={80} className="drop-shadow-2xl" />
      </motion.div>
    </div>
  )
}

