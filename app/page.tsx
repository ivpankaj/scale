// page-scroll.tsx
"use client";
import { Footer } from "@/components/Footer";
import { GridWrapper } from "@/components/grid-wrapper";
import { Hero } from "@/components/hero";
import { Hero2 } from "@/components/hero2";
import { Hero3 } from "@/components/hero3";
import { Hero4 } from "@/components/hero4";
import { Navbar } from "@/components/navbar";
import React, { useState, useEffect } from "react";

interface Section {
  id: number;
  Component: React.ComponentType<any>;
}

const PageScroll: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [renderHero3, setRenderHero3] = useState<boolean>(false);

  const sections: Section[] = [
    { id: 0, Component: Hero },
    { id: 1, Component: Hero2 },
    { id: 2, Component: renderHero3 ? Hero4 : Hero3 },
  ];

  const handleScroll = (e: WheelEvent | TouchEvent): void => {
    if (isScrolling) return;
    let direction: number;
    if (e instanceof WheelEvent) {
      direction = e.deltaY > 0 ? 1 : -1;
    } else if (e instanceof TouchEvent) {
      const touchEnd = e.changedTouches[0]?.clientY;
      if (!touchEnd || touchStart === 0) return;
      direction = touchEnd - touchStart > 0 ? -1 : 1;
    } else {
      return;
    }
    const newSection = activeSection + direction;
    if (newSection >= 0 && newSection < sections.length) {
      setIsScrolling(true);
      setActiveSection(newSection);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    const touchStartPosition = e.changedTouches[0].clientY;
    setTouchStart(touchStartPosition);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleScroll(e);
  };

  const handleCountrySelect = (country: string) => {
    if (country === "India") {
      setRenderHero3(true);
    } else {
      setRenderHero3(false);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll as any, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove as any, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleScroll as any);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove as any);
    };
  }, [activeSection, isScrolling, touchStart, renderHero3]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <GridWrapper />
      <nav className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </nav>
      {sections.map(({ id, Component }) => (
        <div
          key={id}
          className={`absolute top-0 left-0 w-full h-screen flex justify-center items-center transition-all duration-1000 ease-out-cubic ${
            id === activeSection
              ? "scale-100 opacity-100"
              : "scale-50 opacity-0"
          }`}
          style={{
            visibility: id === activeSection ? "visible" : "hidden",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Component onCountrySelect={handleCountrySelect} />
        </div>
      ))}
      <nav className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </nav>
    </div>
  );
};

export default PageScroll;