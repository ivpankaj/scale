"use client";
import { useEffect } from "react";
import styles from "./Slide.module.css";
import { CircleX } from "lucide-react";

interface PopupProps {
  isOpen: boolean;
  youtubeUrl: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, youtubeUrl, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-lg z-50"
    >
      <div className="relative w-full h-full">
        <button
          className="absolute top-6 right-6 text-5xl font-bold text-[#ff9800] z-50 hover:text-[#ffac33] transition-colors"
          onClick={onClose}
          aria-label="Close video"
        >
          <CircleX/>
        </button>
        <div className="flex items-center justify-center w-full h-[1200px] p-4">
          <iframe
            className="w-full h-full max-w-[1600px] max-h-[1200px] rounded-xl"
            src={youtubeUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;