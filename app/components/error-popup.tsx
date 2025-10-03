"use client"

import React from "react"
// import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ErrorPopupProps {
  errorMessage: string
  position: { x: number; y: number }
  onClose: () => void
}

export default function ErrorPopup({ errorMessage, position, onClose }: Partial<ErrorPopupProps>) {
  if (!errorMessage || !position || !onClose) {
    return null
  }

  return (
    <div>
      <div
        className="fixed z-50 bg-white rounded-md shadow-lg w-80 overflow-hidden"
        style={{ left: position.x, top: position.y }}
      >
        <div className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm font-semibold">Mindfulness Alert</span>
          </div>
          <button onClick={onClose} className="text-white hover:bg-blue-700 rounded-full p-1">
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
              <button onClick={onClose} className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
