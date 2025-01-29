// Popup.tsx
import { useEffect } from "react";
import { CircleX } from "lucide-react";
import ReactDOM from "react-dom";

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

  // Create portal content
  const popupContent = (
    <div 
      className="fixed top-0 left-0 w-full h-full z-[9999]"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div 
        className="relative w-full max-w-6xl mx-4"
        style={{
          position: 'relative',
          maxHeight: '90vh',
        }}
      >
        <button
          className="absolute -top-12 right-0 text-[#ff9800] hover:text-[#ffac33] 
          z-[10000] transition-colors p-2"
          onClick={onClose}
          aria-label="Close video"
        >
          <CircleX className="w-8 h-8 sm:w-10 sm:h-10" />
        </button>
        
        <div className="relative w-full h-[70vh] bg-black rounded-xl overflow-hidden shadow-2xl">
          <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
            <iframe
              className="absolute top-0 left-0 w-screen h-screen"
              src={youtubeUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );

  // Render using portal
  return ReactDOM.createPortal(
    popupContent,
    document.body
  );
};

export default Popup;