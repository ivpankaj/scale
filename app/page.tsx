"use client";
import { GridWrapper } from "@/components/grid-wrapper";
import { Hero } from "@/components/hero";
import { Hero2 } from "@/components/hero2";
import { Hero3 } from "@/components/hero3";
import { Hero4 } from "@/components/hero4";
import { Hero5 } from "@/components/hero5";
import { Navbar } from "@/components/navbar";
import useVh from "@/hooks/useVh";
import useVw from "@/hooks/useVw";
import React, { useState, useEffect, useCallback, useMemo } from "react";

interface Section {
  id: number;
  Component: React.ComponentType<any>;
}

const PageScroll: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [renderHero3, setRenderHero3] = useState<boolean>(false);
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedJobRole, setSelectedJobRole] = useState<string>("");
  const [validationTriggered, setValidationTriggered] = useState<boolean>(false);
  const [sectionKey, setSectionKey] = useState<number>(0);
  useVh();
  useVw(); 
  const sections: Section[] = useMemo(() => [
    { id: 0, Component: Hero },
    { id: 1, Component: Hero2 },
    { id: 2, Component: renderHero3 ? Hero4 : Hero3 },
    { id: 3, Component: Hero5 },
  ], [renderHero3]);

  const handleScroll = useCallback((e: WheelEvent | TouchEvent): void => {
    if (isScrolling) return;

    // Prevent scrolling if already at the last section
    if (activeSection === sections.length - 1 && e instanceof WheelEvent && e.deltaY > 0) {
      return;
    }
    if (activeSection === 0 && e instanceof WheelEvent && e.deltaY < 0) {
      return;
    }

    let direction: number;
    if (e instanceof WheelEvent) {
      direction = e.deltaY > 0 ? 1 : -1;
    } else if (e instanceof TouchEvent) {
      const touchEnd = e.changedTouches[0]?.clientY;
      if (!touchEnd || !touchStart || touchStart.y === 0) return;
      direction = touchEnd - touchStart.y > 0 ? -1 : 1;
    } else {
      return;
    }

    const newSection = activeSection + direction;

    if ((newSection === 2 || newSection === 3) && !(
      selectedCountry && selectedExperience && selectedJobRole 
    )) {
      alert("Please select all fields including a valid phone number before proceeding.");
      return;
    }

    if (newSection >= 0 && newSection < sections.length) {
      setIsScrolling(true);
      setSectionKey(prev => prev + 1);
      setActiveSection(newSection);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  }, [isScrolling, touchStart, activeSection, sections, selectedCountry, selectedExperience, selectedJobRole]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touchStartPosition = e.changedTouches[0];
    setTouchStart({ x: touchStartPosition.clientX, y: touchStartPosition.clientY });
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0];
    const deltaX = touchEnd.clientX - touchStart.x;
    const deltaY = touchEnd.clientY - touchStart.y;
    // Only consider the touch event if it's more vertical than horizontal
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      handleScroll(e);
    }
    setTouchStart({ x: touchEnd.clientX, y: touchEnd.clientY });
  }, [touchStart, handleScroll]);

  const handleCountrySelect = useCallback((country: string) => {
    setSelectedCountry(country);
    if (country === "India") {
      setRenderHero3(true);
    } else {
      setRenderHero3(false);
    }
  }, []);

  const handleExperienceSelect = useCallback((experience: string) => {
    setSelectedExperience(experience);
  }, []);

  const handleJobRoleSelect = useCallback((jobRole: string) => {
    setSelectedJobRole(jobRole);
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
    <div className="fixed inset-0 w-full h-[calc(var(--vh,1vh)*100)] overflow-hidden">
      <GridWrapper />
      <nav className="fixed top-0 left-0 z-50">
        <Navbar />
      </nav>
      <div className="relative w-full h-full">
        {sections.map(({ id, Component }) => (
          <div
            key={`section-${id}-${sectionKey}`}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out-cubic ${
              id === activeSection
                ? "scale-100 opacity-100"
                : "scale-50 opacity-0 pointer-events-none"
            }`}
            style={{
              visibility: id === activeSection ? "visible" : "hidden",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {id === activeSection && (
              <Component 
                onCountrySelect={id === 1 ? handleCountrySelect : undefined} 
                onExperienceSelect={id === 1 ? handleExperienceSelect : undefined}
                onJobRoleSelect={id === 1 ? handleJobRoleSelect : undefined}
                selectedExperience={selectedExperience}
                selectedCountry={selectedCountry}
                selectedJobRole={selectedJobRole}
                validationTriggered={id === 1 ? validationTriggered : false}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageScroll;