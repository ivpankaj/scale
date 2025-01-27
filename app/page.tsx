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
  const [touchStart, setTouchStart] = useState<number>(0)

  const sections: Section[] = [
    { id: 0, Component: Hero },
    { id: 1, Component: Hero2 },
    { id: 2, Component: Hero3 }
  ]

  const handleScroll = (e: WheelEvent | TouchEvent): void => {
    if (isScrolling) return

    let direction: number
    if (e instanceof WheelEvent) {
      direction = e.deltaY > 0 ? 1 : -1
    } else if (e instanceof TouchEvent) {
      const touchEnd = e.changedTouches[0]?.clientY
      if (!touchEnd || touchStart === 0) return

      direction = touchEnd - touchStart > 0 ? -1 : 1
    } else {
      return
    }

    const newSection = activeSection + direction
    if (newSection >= 0 && newSection < sections.length) {
      setIsScrolling(true)
      setActiveSection(newSection)

      setTimeout(() => setIsScrolling(false), 1000)
    }
  }

  const handleTouchStart = (e: TouchEvent) => {
    const touchStartPosition = e.changedTouches[0].clientY
    setTouchStart(touchStartPosition)
  }

  const handleTouchMove = (e: TouchEvent) => {
    handleScroll(e)
  }

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [activeSection, isScrolling, touchStart])

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
