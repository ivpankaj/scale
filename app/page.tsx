// page-scroll.tsx
"use client";
import { Footer } from "@/components/Footer";
import { GridWrapper } from "@/components/grid-wrapper";
import { Hero } from "@/components/hero";
import { Hero2 } from "@/components/hero2";
import { Hero3 } from "@/components/hero3";
import { Hero4 } from "@/components/hero4";
import { Hero5 } from "@/components/hero5";
import { Navbar } from "@/components/navbar";
import React, { useState, useEffect, useCallback } from "react";

interface Section {
  id: number;
  Component: React.ComponentType<any>;
}

const PageScroll: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [renderHero3, setRenderHero3] = useState<boolean>(false);
  const [selectedExperience, setSelectedExperience] = useState<string>("");

  // Memoized sections array
  const sections: Section[] = React.useMemo(() => [
    { id: 0, Component: Hero },
    { id: 1, Component: Hero2 },
    { id: 2, Component: renderHero3 ? Hero3 : Hero4 },
    { id: 3, Component: Hero5 },
  ], [renderHero3]);

  // Memoized scroll handler
  const handleScroll = useCallback((e: WheelEvent | TouchEvent): void => {
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
  }, [isScrolling, touchStart, activeSection, sections]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touchStartPosition = e.changedTouches[0].clientY;
    setTouchStart(touchStartPosition);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    handleScroll(e);
  }, [handleScroll]);

  const handleCountrySelect = useCallback((country: string) => {
    if (country === "India") {
      setRenderHero3(true);
    } else {
      setRenderHero3(false);
    }
  }, []);

  const handleExperienceSelect = useCallback((experience: string) => {
    setSelectedExperience(experience);
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll as any, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove as any, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll as any);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove as any);
    };
  }, [handleScroll, handleTouchStart, handleTouchMove]);

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
          <Component 
            onCountrySelect={id === 1 ? handleCountrySelect : undefined} 
            onExperienceSelect={id === 1 ? handleExperienceSelect : undefined}
            selectedExperience={id === 3 ? selectedExperience : undefined}
          />
        </div>
      ))}
      <nav className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </nav>
    </div>
  );
};

export default PageScroll;