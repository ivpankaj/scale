"use client"
import { GridWrapper } from '@/components/grid-wrapper';
import { Hero } from '@/components/hero';
import { Hero2 } from '@/components/hero2';
import { Hero3 } from '@/components/hero3';
import { Navbar } from '@/components/navbar';
import React, { useState, useEffect } from 'react';

const PageScroll = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      setScrollDirection(direction);
      setLastScrollY(currentScrollY);

      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const newSection = Math.floor(scrollPosition / windowHeight);
      
      if (newSection !== activeSection) {
        setActiveSection(newSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, activeSection]);

  const sections = [
    { id: 0, Component: Hero},
    { id: 1, Component: Hero2 },
    { id: 2, Component: Hero3 }
  ];

  return (
    <div className="relative w-full">
      <GridWrapper/>
      <Navbar className="fixed top-0 left-0 w-full z-50" />
      
      {sections.map(({ id, Component }) => (
        <div
          key={id}
          className={`fixed top-0 left-0 w-full h-screen transition-transform duration-700 ease-in-out
            ${id === activeSection ? 'translate-y-0 opacity-100' : 
              id < activeSection ? '-translate-y-full opacity-0' : 
              'translate-y-full opacity-0'}`}
        >
          <Component />
        </div>
      ))}
      
      <div className="h-[300vh]" /> {/* Spacer to allow scrolling */}
    </div>
  );
};

export default PageScroll;