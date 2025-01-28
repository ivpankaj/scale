"use client";
import { CheckBadge } from "./check-badge";
import Carousel from "./ui/carousel";
import { motion } from "framer-motion";
export function Hero6() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/z3OKd5b2Rlw", // Updated embed URL
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/MtB4HG1kXsU", // Updated embed URL
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/_bCsyYMuy-E", // Updated embed URL
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/7FW0Re82it0", // Updated embed URL
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-52 md:py-20">
      <div className="flex items-center justify-center gap-4 mb-2">
        <CheckBadge />
        <motion.h1
          className="text-2xl md:text-5xl sm:text-xl font-bold text-[#ff9800]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Videos which will help you!!
        </motion.h1>
      </div>
      <Carousel slides={slideData} />
    </div>
  );
}
