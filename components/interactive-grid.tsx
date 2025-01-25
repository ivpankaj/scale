"use client"

import { motion } from "framer-motion"
import { useTileEffect } from "@/hooks/use-tile-effect"
import { useCallback, useMemo } from "react"

interface GridTileProps {
  x: number
  y: number
  delay: number
}

function GridTile({ x, y, delay }: GridTileProps) {
  return (
    <motion.div
      className="w-[60px] h-[60px] border-[#333] relative"
      initial={{ opacity: 0.3 }}
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [1, 1.2, 1],
        rotateZ: [0, 90, 0],
      }}
      transition={{
        duration: 1.5,
        delay,
        ease: "easeInOut",
      }}
      style={{
        borderRight: "0.5px solid gray",
        borderBottom: "0.5px solid gray",
      }}
    />
  )
}

export function InteractiveGrid() {
  const { activePosition, setActivePosition, getAnimationDelay } = useTileEffect()

  const handleTileClick = useCallback(
    (x: number, y: number) => {
      setActivePosition({ x, y })
    },
    [setActivePosition],
  )

  const gridSize = useMemo(() => {
    const width = Math.ceil(window.innerWidth / 60)
    const height = Math.ceil(window.innerHeight / 60)
    return { width, height }
  }, [])

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <div className="absolute inset-0 flex flex-wrap">
        {Array.from({ length: gridSize.height }).map((_, y) =>
          Array.from({ length: gridSize.width }).map((_, x) => (
            <div key={`${x}-${y}`} onClick={() => handleTileClick(x, y)} className="cursor-pointer">
              <GridTile x={x} y={y} delay={activePosition ? getAnimationDelay(x, y) : 0} />
            </div>
          )),
        )}
      </div>
    </div>
  )
}

