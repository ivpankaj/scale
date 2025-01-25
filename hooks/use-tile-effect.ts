"use client"

import { useState } from "react"

export function useTileEffect() {
  const [activePosition, setActivePosition] = useState<{ x: number; y: number } | null>(null)

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }

  const getAnimationDelay = (x: number, y: number) => {
    if (!activePosition) return 0
    const distance = calculateDistance(activePosition.x, activePosition.y, x, y)
    return distance * 0.1 // 0.1 seconds per unit of distance
  }

  return {
    activePosition,
    setActivePosition,
    getAnimationDelay,
  }
}

