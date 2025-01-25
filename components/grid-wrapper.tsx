"use client"

import { useEffect, useState } from "react"
import { InteractiveGrid } from "./interactive-grid"


export function GridWrapper() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <InteractiveGrid />
}

