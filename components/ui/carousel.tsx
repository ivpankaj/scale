"use client";
import { useState, useEffect, useId } from "react";
import Slide from "../hero 6 component/Slide";
import { useSwipeable } from 'react-swipeable';

interface SlideData {
  title: string;
  button: string;
  src: string;
  youtubeUrl: string;
}

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true after the component has mounted
    setIsLoaded(true);
  }, []);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextClick(),
    onSwipedRight: () => handlePreviousClick(),
    trackMouse: true,
  });

  return (
    <div>
      <style jsx>{`
        .carousel-container {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .carousel-container.loaded {
          opacity: 1;
        }

        .slides-container {
          display: flex;
          transition: transform 1s ease-in-out;
        }
      `}</style>

      <div
        className={`relative w-[70vmin] h-[70vmin] mx-auto md:mt-0 sm:mt-10 carousel-container ${isLoaded ? 'loaded' : ''}`}
        aria-labelledby={`carousel-heading-${id}`}
        {...handlers}
      >
        <ul
          className="absolute flex mx-[-4vmin] slides-container"
          style={{
            transform: `translateX(-${current * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
``