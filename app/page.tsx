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
      const newSection = Math.round(currentScrollY / windowHeight)

      // Only update if the new section is different and within bounds
      if (newSection !== activeSection && newSection >= 0 && newSection <= sections.length - 1) {
        setActiveSection(newSection)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

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
            fixed top-0 left-0 w-full 
            transition-all duration-1000 ease-out-cubic  // Increased duration for smoother animation
            ${id === activeSection 
              ? 'scale-100 opacity-100 translate-y-0' 
              : 'scale-90 opacity-0 translate-y-10'  // Adjust scale and translation for better effect
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