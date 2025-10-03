"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { getRandomError } from "../data/errors"

export default function ErrorPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [errorMessage, setErrorMessage] = useState("")

  // Function to generate random position within viewport
  const generateRandomPosition = () => {
    // Get viewport dimensions with some padding
    const maxX = typeof window !== "undefined" ? window.innerWidth - 320 : 500
    const maxY = typeof window !== "undefined" ? window.innerHeight - 200 : 500

    // Generate random position
    return {
      x: Math.max(50, Math.floor(Math.random() * maxX)),
      y: Math.max(50, Math.floor(Math.random() * maxY)),
    }
  }

  // Show error popup randomly
  useEffect(() => {
    // Initial delay before first popup
    const initialDelay = Math.random() * 10000 + 5000 // 5-15 seconds

    const initialTimer = setTimeout(() => {
      setErrorMessage(getRandomError())
      setPosition(generateRandomPosition())
      setIsVisible(true)
    }, initialDelay)

    return () => clearTimeout(initialTimer)
  }, [])

  // Set up recurring popups
  useEffect(() => {
    if (!isVisible) {
      const interval = Math.random() * 20000 + 10000 // 10-30 seconds

      const timer = setTimeout(() => {
        setErrorMessage(getRandomError())
        setPosition(generateRandomPosition())
        setIsVisible(true)
      }, interval)

      return () => clearTimeout(timer)
    }
  }, [isVisible])

  // Auto-hide after some time
  useEffect(() => {
    if (isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false)
      }, 5000) // Hide after 5 seconds

      return () => clearTimeout(hideTimer)
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-50 bg-white rounded-md shadow-lg w-80 overflow-hidden"
          style={{
            left: position.x,
            top: position.y,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <div className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm font-semibold">Mindfulness Alert</span>
            </div>
            <button onClick={() => setIsVisible(false)} className="text-white hover:bg-blue-700 rounded-full p-1">
              <X size={16} />
            </button>
          </div>
          <div className="p-4 flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-700">{errorMessage}</p>
              <div className="mt-3 flex justify-end space-x-2">
                <button
                  onClick={() => setIsVisible(false)}
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
