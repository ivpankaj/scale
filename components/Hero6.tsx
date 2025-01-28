"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Video {
  id: number
  title: string
  url: string
  thumbnail: string
}

const videos: Video[] = [
  {
    id: 1,
    title: "Campaign Highlight 2023",
    url: "https://example.com/video1.mp4",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    id: 2,
    title: "Brand Success Story",
    url: "https://example.com/video2.mp4",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    id: 3,
    title: "Influencer Collaboration",
    url: "https://example.com/video3.mp4",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
]

export function Hero6() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = videos.length - 1
      if (nextIndex >= videos.length) nextIndex = 0
      return nextIndex
    })
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[100vh] flex items-center justify-center px-4">
      <div className="relative w-full aspect-video">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-[90vw] md:max-w-[60vw] lg:max-w-[50vw] h-[40vh] bg-[#ff9800] rounded-2xl overflow-hidden">
              <img
                src={videos[currentIndex].thumbnail || "/placeholder.svg"}
                alt={videos[currentIndex].title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">{videos[currentIndex].title}</h3>
              </div>
              <div className="absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-social-pink/90 rounded-full flex items-center justify-center"
                >
                  <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        {/* Progress Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#ff9800]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}