"use client"

import { GridWrapper } from '@/components/grid-wrapper'
import { Hero } from '@/components/hero'
import { Hero2 } from '@/components/hero2'
import { Hero3 } from '@/components/hero3'
import { Navbar } from '@/components/navbar'
import React, { useState, useEffect } from 'react'

interface Section {
  id: number
  Component: React.ComponentType
}


const PageScroll: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      const scrollPosition = window.scrollY
      const newSection = Math.round(scrollPosition / windowHeight) // Changed from Math.floor to Math.round

      setLastScrollY(currentScrollY)

      if (newSection !== activeSection && newSection >= 0 && newSection <= 2) {
        setActiveSection(newSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, activeSection])

  const sections: Section[] = [
    { id: 0, Component: Hero },
    { id: 1, Component: Hero2 },
    { id: 2, Component: Hero3 }
  ]

  return (
    <div className="relative w-full">
      <GridWrapper />
      <nav className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </nav>
      
      {sections.map(({ id, Component }) => (
        <div
          key={id}
          className={`
            fixed top-0 left-0 w-full h-screen 
            transition-all duration-700 ease-in-out
            ${id === activeSection 
              ? 'scale-100 opacity-100' 
              : 'scale-50 opacity-0'
            }
          `}
        >
          <Component />
        </div>
      ))}
      
      <div className="h-[300vh]" />
    </div>
  )
}

export default PageScroll