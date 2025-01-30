import { motion } from "framer-motion";
import Carousel from "./ui/carousel";
import { ArrowLeft } from "lucide-react";

interface Hero7Props {
  onGoBack: () => void;
  handleProceedToPay: () => void;
}

export function Hero6({ onGoBack, handleProceedToPay }: Hero7Props) {
  const slideData = [
    {
      title: "",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/VoFn_tICyas",
      src: "https://img.youtube.com/vi/VoFn_tICyas/maxresdefault.jpg", // Thumbnail from YouTube
    },
    {
      title: "",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/v0Yv4WegE2o",
      src: "https://img.youtube.com/vi/v0Yv4WegE2o/maxresdefault.jpg",
    },
    {
      title: "",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/MjWtDgQwcJc",
      src: "https://img.youtube.com/vi/MjWtDgQwcJc/maxresdefault.jpg",
    },
    {
      title: "",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/MWMeAK-nHrI",
      src: "https://img.youtube.com/vi/MWMeAK-nHrI/maxresdefault.jpg",
    },
    {
      title: "",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/HKsm3IorP3Y",
      src: "https://img.youtube.com/vi/HKsm3IorP3Y/maxresdefault.jpg",
    },
    {
      title: "",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/AZ8GeXemgVc",
      src: "https://img.youtube.com/vi/AZ8GeXemgVc/maxresdefault.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-[80vh]">
      <button
        onClick={() => {
          console.log("Back button clicked in Hero6");
          onGoBack();
        }}
        className="absolute top-20 left-4  text-[#ff9800] px-4 py-2 rounded-lg font-semibold hover:bg-[#f57c00] z-50"
      >
        ← Go Back
      </button>
      <div className="flex-1 relative overflow-hidden h-[80vh] py-40 w-[100vw]">
        <Carousel slides={slideData} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-[#ff9800]">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={handleProceedToPay}
            className="w-full p-4 bg-[#ff9800] transition-colors font-medium flex items-center justify-center gap-2 border-[2px] border-solid border-[#ff9800] cursor-pointer rounded-lg text-white hover:bg-opacity-95"
          >
            I am interested
          </button>
        </motion.div>
      </div>
    </div>
  );
}
