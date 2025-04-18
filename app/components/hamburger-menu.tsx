"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

interface HamburgerMenuProps {
  onAboutClick: () => void
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onAboutClick }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleAboutClick = () => {
    onAboutClick()
    setIsOpen(false)
  }

  return (
    <div className="absolute top-4 right-4 z-50">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-full bg-gray-500/70 text-white hover:bg-gray-400/70 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 right-0 bg-gray-800 rounded-lg shadow-lg p-4 w-48"
          >
            <nav>
              <ul className="space-y-2">
                <li>
                  <button onClick={handleAboutClick} className="text-white hover:text-gray-300 block w-full text-left">
                    About
                  </button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HamburgerMenu
