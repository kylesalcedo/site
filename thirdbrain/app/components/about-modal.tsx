"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const router = useRouter()

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      router.push("/")
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-2xl mx-auto bg-[#1a4b6d]/90 backdrop-blur-md p-8 rounded-xl shadow-2xl z-50 border border-white/10"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="text-center">
              <h1 className="text-4xl font-bold mb-8 tracking-tight">About Me</h1>

              <div className="space-y-6">
                <p className="text-2xl">
                  name is <span className="font-bold">Kyle Salcedo</span>
                </p>

                <p className="text-xl">a Doctor of Physical Therapy molded by other godly clinicians</p>

                <p className="text-xl">assembled in Los Angeles, California</p>

                <p className="text-xl">made from imported parts and inartificial intelligence</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
