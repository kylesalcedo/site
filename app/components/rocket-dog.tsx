"use client"

import React, { useEffect, useState, useRef } from "react"
// import { motion } from "framer-motion"
import Link from "next/link"

interface CocoRocketProps {
  onComplete: () => void
}

export default function CocoRocket({ onComplete }: CocoRocketProps) {
  const [yPosition, setYPosition] = useState(0)
  const [xPosition, setXPosition] = useState(-120)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const imageHeight = 200 // Estimated height of the image at w-72
      const topBuffer = 100
      const bottomBuffer = 100

      const minY = topBuffer
      const maxY = window.innerHeight - imageHeight - bottomBuffer

      if (minY >= maxY) {
        setYPosition(window.innerHeight / 2 - imageHeight / 2)
      } else {
        setYPosition(Math.floor(Math.random() * (maxY - minY + 1)) + minY)
      }

      const startX = -200
      const endX = window.innerWidth + 200
      const durationMs = 10000
      let startTime: number | null = null

      const step = (timestamp: number) => {
        if (startTime === null) startTime = timestamp
        const elapsed = timestamp - startTime
        const t = Math.min(elapsed / durationMs, 1)
        const currentX = startX + (endX - startX) * t
        setXPosition(currentX)
        if (t < 1) {
          animationFrameRef.current = requestAnimationFrame(step)
        } else {
          onComplete()
        }
      }

      animationFrameRef.current = requestAnimationFrame(step)

      return () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [onComplete])

  return (
    <Link href="/coco" passHref>
      <img
        src="/cocotennis.png"
        alt="Rocket Dog"
        className="fixed z-50 w-72 h-auto select-none cursor-pointer"
        style={{ top: yPosition, left: xPosition }}
      />
    </Link>
  )
} 