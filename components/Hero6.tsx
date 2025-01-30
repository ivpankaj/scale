import { motion } from "framer-motion";
import Carousel from "./ui/carousel";

export function Hero6() {
  const slideData = [
    {
      title: "Will you apply on my behalf",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/VoFn_tICyas",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Why diff price for international resume",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/v0Yv4WegE2o",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "How can we help you",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/MjWtDgQwcJc",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Can I filter jobs based on salary",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/MWMeAK-nHrI",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Will you manually write the resume?",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/HKsm3IorP3Y",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Is this a one time payment plan (India)?",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/AZ8GeXemgVc",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="flex flex-col min-h-[80vh]">
      <div className="flex-1 relative overflow-hidden h-[80vh] py-40 w-[100vw]">
        <Carousel slides={slideData} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10 bg-white">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button className="w-full p-4 bg-[#ff9800] hover:bg-[#f57c00] transition-colors text-black font-medium flex items-center justify-center gap-2">
            Proceed To Pay
       
          </button>
        </motion.div>
      </div>
    </div>
  );
}