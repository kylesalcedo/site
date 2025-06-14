"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface CocoRocketProps {
  onComplete: () => void
}

export default function CocoRocket({ onComplete }: CocoRocketProps) {
  const [yPosition, setYPosition] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth)
      const imageHeight = 200 // Estimated height of the image at w-72
      const topBuffer = 100
      const bottomBuffer = 100
      
      // Ensure yPosition allows full image visibility
      const minY = topBuffer
      const maxY = window.innerHeight - imageHeight - bottomBuffer
      
      // If viewport is too small, default to a centered position
      if (minY >= maxY) {
        setYPosition(window.innerHeight / 2 - imageHeight / 2)
      } else {
        setYPosition(Math.floor(Math.random() * (maxY - minY + 1)) + minY)
      }
    }
  }, [])

  // Width of image assumed 100px; start -120; end viewportWidth + 120
  return (
    <Link href="/coco" passHref>
      <motion.img
        src="/cocotennis.png"
        alt="Rocket Dog"
        className="fixed z-50 w-72 h-auto select-none cursor-pointer"
        style={{ top: yPosition, left: -120 }}
        initial={{ x: -120 }}
        animate={{ x: viewportWidth + 120 }}
        transition={{ duration: 8, ease: "linear" }}
        onAnimationComplete={onComplete}
      />
    </Link>
  )
} 