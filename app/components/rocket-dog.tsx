"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CocoRocketProps {
  onComplete: () => void
}

export default function CocoRocket({ onComplete }: CocoRocketProps) {
  const [yPosition, setYPosition] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth)
      // Pick a random y between 20 and viewport height - 100
      const maxY = window.innerHeight - 100
      setYPosition(Math.max(20, Math.floor(Math.random() * maxY)))
    }
  }, [])

  // Width of image assumed 100px; start -120; end viewportWidth + 120
  return (
    <motion.img
      src="/cocotennis.png"
      alt="Rocket Dog"
      className="fixed z-50 w-24 h-auto select-none pointer-events-none"
      style={{ top: yPosition, left: -120 }}
      initial={{ x: -120 }}
      animate={{ x: viewportWidth + 120 }}
      transition={{ duration: 8, ease: "linear" }}
      onAnimationComplete={onComplete}
    />
  )
} 