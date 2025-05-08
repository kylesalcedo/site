"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

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

      // Choose a baselineY so that end Y stays within viewport bounds
      const baselineMin = 50
      const baselineMax = h - 150 // leave some padding
      const baselineY = Math.max(baselineMin, Math.floor(Math.random() * baselineMax))

      setStartPos({ x: -200, y: baselineY })
      setEndPos({ x: w + 200, y: baselineY - 0.29 * w })
    }
  }, [])

  return (
    <motion.img
      src="/flyingpunk.png"
      alt="Flying Punk"
      className="fixed z-50 w-60 h-auto select-none pointer-events-none"
      initial={{ left: startPos.x, top: startPos.y }}
      animate={{ left: endPos.x, top: endPos.y }}
      transition={{ duration: 10, ease: "linear" }}
      onAnimationComplete={onComplete}
    />
  )
} 