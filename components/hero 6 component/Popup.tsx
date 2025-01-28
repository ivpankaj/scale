"use client";
import { useEffect } from "react";
import styles from "./Slide.module.css"; 

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
      className={`${styles.popupBackground} fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-50`}
    >
      <div
        className={`${styles.popupContainer} rounded-3xl w-[90vw] max-w-[800px] h-[80vh] overflow-hidden relative`}
      >
        <button
          className="absolute top-3 right-4 text-[45px] font-bold text-[#ff9800]"
          onClick={onClose}
        >
          &times;
        </button>
        <iframe
          width="100%" 
          className="rounded-2xl h-full"
          src={youtubeUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Popup;