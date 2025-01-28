"use client";
import { useRef, useEffect, useState } from "react";
import styles from "./Slide.module.css"; // Import CSS module for scoped styling
import { Play } from "lucide-react";

interface SlideData {
  title: string;
  button: string;
  src: string;
  youtubeUrl: string;
}
interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

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

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const { src, button, title, youtubeUrl } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-[400px] bg-[#1D1F2F] rounded-3xl overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[500px] object-cover opacity-100 transition-opacity duration-600 ease-in-out rounded-3xl"
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
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000 rounded-3xl h-[500px]" />
          )}
        </div>
        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out flex flex-col justify-center items-center ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative mt-44">
            {title}
          </h2>
          <div className="flex justify-center items-center">
            <button
              className="p-2 mx-auto sm:text-sm text-black bg-[#ff9800] text-lg flex justify-center items-center rounded-xl transition duration-200"
              onClick={handleButtonClick}
            >
             <span className="mr-2"><Play/></span> {button}
            </button>
          </div>
        </article>
      </li>
      {isPopupOpen && (
        <div className={`${styles.popupBackground} fixed top-0 left-0 w-full h-[400px] bg-black/50 flex items-center justify-center z-10`}>
          <div className={`${styles.popupContainer} ${styles.popupAnimation} rounded-3xl max-w-[80vw] max-h-screen overflow-hidden relative mt-5`}>
            <button
              className="absolute top-1 right-3 text-[45px] font-bold text-[#ff9800]"
              onClick={closePopup}
            >
              &times;
            </button>
            <iframe
              width="100%"
              className="rounded-2xl"
              height="500vh"
              src={youtubeUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slide;