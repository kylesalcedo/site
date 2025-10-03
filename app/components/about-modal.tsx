"use client"

// import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const router = useRouter()
  
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className="relative bg-gray-800 rounded-lg shadow-xl p-6 w-11/12 max-w-md border border-gray-700 text-white"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          aria-label="Close about modal"
        >
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="mb-2">Full Stack Doctor of Physical Therapy</p>
        <p className="mb-2">Programmed in Los Angeles, California</p>
        <p className="mb-4">Made from imported parts and inartificial intelligence</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
