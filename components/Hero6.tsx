import { motion } from "framer-motion";
import Carousel from "./ui/carousel";
import { ArrowLeft } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
interface Hero7Props {
  onGoBack: () => void; // Callback to notify parent to navigate back
}


export function Hero6({onGoBack}:Hero7Props) {

  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  
    // Disable scrolling on mount and enable it on unmount
    useEffect(() => {
      document.body.style.overflow = "hidden"; // Disable scrolling
      return () => {
        document.body.style.overflow = ""; // Re-enable scrolling
      };
    }, []);
  
    const handleTouchStart = useCallback((e: TouchEvent) => {
      const touchStartPosition = e.changedTouches[0];
      setTouchStart({ x: touchStartPosition.clientX, y: touchStartPosition.clientY });
    }, []);
  
    const handleTouchMove = useCallback(
      (e: TouchEvent) => {
        if (!touchStart) return;
        const touchEnd = e.changedTouches[0];
        const deltaY = touchEnd.clientY - touchStart.y;
        if (Math.abs(deltaY) > 50) {
          onGoBack(); // Trigger go back on swipe down
        }
      },
      [touchStart, onGoBack]
    );
  
    useEffect(() => {
      window.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      return () => {
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
      };
    }, [handleTouchStart, handleTouchMove]);
  
  const slideData = [
    {
      title: "Will you apply on my behalf?",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/VoFn_tICyas",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Why diff price for international resume?",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/v0Yv4WegE2o",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "How can we help you?",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/MjWtDgQwcJc",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Can I filter jobs based on salary?",
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
      <button
        onClick={onGoBack}
        className="absolute top-20 left-4 bg-[#ff9800] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#f57c00]"
      >
        <ArrowLeft />
      </button>
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
