"use client"

import React, { useEffect, useState } from "react"
// import { motion } from "framer-motion"

interface FlyingPunkProps {
  onComplete: () => void
}

// Sprite flies L→R at 16° upward (slope ≈ 0.29)
export default function FlyingPunk({ onComplete }: FlyingPunkProps) {
  const [startPos, setStartPos] = useState<{ x: number; y: number }>({ x: -200, y: 0 })
  const [endPos, setEndPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [viewport, setViewport] = useState<{ w: number; h: number }>({ w: 0, h: 0 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const w = window.innerWidth
      const h = window.innerHeight
      setViewport({ w, h })

      const imageHeight = 150 // Estimated height of the image at w-60
      const bottomScreenBuffer = 50 // Keep some space from the absolute bottom

      // Start punk in the bottom half of the screen
      const minY = h / 2
      const maxY = h - imageHeight - bottomScreenBuffer
      
      let baselineY;
      // If viewport is too small for the desired range, place it at the bottom with buffer
      if (minY >= maxY) {
        baselineY = h - imageHeight - bottomScreenBuffer
      } else {
        baselineY = Math.floor(Math.random() * (maxY - minY + 1)) + minY
      }

      setStartPos({ x: -200, y: baselineY })
      setEndPos({ x: w + 200, y: baselineY - 0.29 * (w + 400) }) // Adjust end Y based on full travel distance
    }
  }, [])

  return (
    <img
      src="/flyingpunk.png"
      alt="Flying Punk"
      className="fixed z-50 w-60 h-auto select-none pointer-events-none"
      style={{ left: startPos.x, top: startPos.y }}
      onLoad={onComplete} 
    />
  )
} 