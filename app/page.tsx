"use client"
import { Footer } from '@/components/Footer'
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
  const [isScrolling, setIsScrolling] = useState<boolean>(false)

  const sections: Section[] = [
    { id: 0, Component: Hero },
    { id: 1, Component: Hero2 },
    { id: 2, Component: Hero3 }
  ]

  const handleScroll = (e: WheelEvent): void => {
    if (isScrolling) return // Prevent multiple transitions at the same time

    const direction = e.deltaY > 0 ? 1 : -1 // Determine scroll direction
    const newSection = activeSection + direction

    // Ensure the new section index is within bounds
    if (newSection >= 0 && newSection < sections.length) {
      setIsScrolling(true)
      setActiveSection(newSection)

      // Wait for the animation to finish before allowing the next scroll
      setTimeout(() => setIsScrolling(false), 1000) // Match transition duration
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false })

    return () => window.removeEventListener('wheel', handleScroll)
  }, [activeSection, isScrolling])

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
              ? 'scale-100 opacity-100'
              : 'scale-50 opacity-0'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', // Smooth scaling
          }}
        >
          <Component />
        </div>
      ))}

      <nav className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </nav>
    </div>
  )
}

export default PageScroll
