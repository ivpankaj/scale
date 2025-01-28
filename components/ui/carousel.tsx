"use client";
import { useState, useId } from "react";
import Slide from "../hero 6 component/Slide";
import CarouselControl from "../hero 6 component/CarouselControl";
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
    trackMouse: true, // Optional: Allows swiping with mouse
  });

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto md:mt-0 sm:mt-10"
      aria-labelledby={`carousel-heading-${id}`}
      {...handlers} 
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
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
      {/* <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div> */}
    </div>
  );
}