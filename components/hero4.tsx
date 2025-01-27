"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { ServiceButton } from "./service-button" 
import { CheckBadge } from "./check-badge"
import { AnimatedSection } from "./Animated"

export function Hero4() {
  const services = [
    "5 Jobs Daily till you get a job",
    "Resume for Each Job (Total 100 Downloadable Resume)",
    "Master Resume with 80% ATS Score on Naukri.com",
  ]

  return (
 <AnimatedSection>
     <div className="min-h-screen  flex flex-col items-center justify-center relative px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="flex items-center justify-center gap-4 mb-2">
          <CheckBadge />
          <motion.h1
            className="text-2xl md:text-5xl sm:text-xl font-bold text-[#ff2868]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            How we help!!

          </motion.h1>
          <CheckBadge />
        </div>
        <motion.div
          className="space-y-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <ServiceButton>{service}</ServiceButton>
            </motion.div>
          ))}
        </motion.div>
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
 </AnimatedSection>
  )
}

