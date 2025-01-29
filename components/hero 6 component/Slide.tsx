

// Slide.tsx
import { useRef, useEffect, useState } from "react";
import { Play } from "lucide-react";
import Popup from "./Popup";
import { SlideProps } from "./type";

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isPopupOpen) return;
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title, youtubeUrl } = slide;

  return (
    <>
      <div className={`[perspective:1200px] [transform-style:preserve-3d] ${isPopupOpen ? 'blur-sm' : ''}`}>
        <li
          ref={slideRef}
          className={`flex flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out 
          w-[55vw] sm:w-[70vmin] aspect-[3/4.5] mx-[2vmin] sm:mx-[4vmin] ${isPopupOpen ? 'pointer-events-none' : 'z-10'}`}
          onClick={() => !isPopupOpen && handleSlideClick(index)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform:
              current !== index
                ? "scale(0.98) rotateX(8deg)"
                : "scale(1) rotateX(0deg)",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            transformOrigin: "bottom",
            filter: isPopupOpen ? 'blur(4px)' : 'none',
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-3xl overflow-hidden transition-all duration-150 ease-out"
            style={{
              transform:
                current === index && !isPopupOpen
                  ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                  : "none",
            }}
          >
            <img
              className="absolute inset-0 w-[120%] h-full object-cover opacity-100 transition-opacity duration-600 ease-in-out rounded-3xl"
              style={{
                opacity: current === index ? 1 : 0.5,
              }}
              alt={title}
              src={src}
              onLoad={imageLoaded}
              loading="eager"
              decoding="sync"
            />
            {current === index && (
              <div className="absolute inset-0 bg-black/30 transition-all duration-1000 rounded-3xl" />
            )}
          </div>
          <article
            className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out flex flex-col justify-center items-center ${
              current === index ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative">
              {title}
            </h2>
            <div className="flex justify-center items-center">
              <button
                className="p-2 mx-auto sm:text-sm text-black bg-[#ff9800] text-lg flex justify-center items-center rounded-xl transition duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPopupOpen(true);
                }}
              >
                <span className="">
                  <Play />
                </span>{" "}
                {button}
              </button>
            </div>
          </article>
        </li>
      </div>
      <Popup
        isOpen={isPopupOpen}
        youtubeUrl={youtubeUrl}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
};

export default Slide;