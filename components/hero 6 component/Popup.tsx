import { useEffect } from "react";
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
      className="fixed inset-0 w-screen h-[100vh] bg-black/70 backdrop-blur-lg z-[9999] flex items-center justify-center p-4 sm:p-4"
      style={{ position: 'fixed', top: 0, left: 0 }}
    >
      <div className="relative w-full h-full max-w-6xl aspect-video">
        <button
          className="absolute right-0 text-[#ff9800] hover:text-[#ffac33] 
          z-[10000] transition-colors p-2"
          onClick={onClose}
          aria-label="Close video"
        >
          <CircleX className="w-8 h-8 sm:w-10 sm:h-10" />
        </button>
        
        <div className="relative w-full h-full bg-black rounded-xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
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