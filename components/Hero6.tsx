"use client";

import { Footer } from "./hero 6 component/Footer";
import Carousel from "./ui/carousel";


export function Hero6() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/_Fcqvg_xg94", // Updated embed URL
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/_Fcqvg_xg94", // Updated embed URL
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/_Fcqvg_xg94", // Updated embed URL
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Play",
      youtubeUrl: "https://www.youtube.com/embed/_Fcqvg_xg94", // Updated embed URL
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-36 md:py-20">
      <Carousel slides={slideData} />
<div className="flex justify-center w-full">
<Footer/>
</div>
    </div>
  );
}
