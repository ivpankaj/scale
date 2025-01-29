import { motion } from "framer-motion";
import Carousel from "./ui/carousel";

export function Hero6() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/_Fcqvg_xg94",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/_Fcqvg_xg94",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/_Fcqvg_xg94",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/_Fcqvg_xg94",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 relative overflow-hidden h-[80vh] py-36 w-[100vw]">
        <Carousel slides={slideData} />
      </div>
      
      <div className="sticky bottom-0 w-full">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button className="w-full p-4 bg-[#ff9800] hover:bg-[#f57c00] transition-colors font-medium">
            Proceed To Pay
          </button>
        </motion.div>
      </div>
    </div>
  );
}