"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

interface HamburgerMenuProps {
  onAboutClick: () => void
  onHoverAbout: () => void
  onHoverBiz: () => void
  onHoverEnd: () => void
  onBizClick: () => void
}

export default function HamburgerMenu({ onAboutClick, onHoverAbout, onHoverBiz, onHoverEnd, onBizClick }: HamburgerMenuProps) {
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
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="absolute top-16 right-0 bg-gray-800 rounded-lg shadow-lg p-4 w-48"
          >
            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { pointerEvents: "auto" },
                closed: { pointerEvents: "none" }
              }}
            >
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={handleAboutClick}
                    onMouseEnter={onHoverAbout}
                    onMouseLeave={onHoverEnd}
                    className="text-white hover:text-gray-300 active:text-white block w-full text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onBizClick(); setIsOpen(false) }}
                    onMouseEnter={onHoverBiz}
                    onMouseLeave={onHoverEnd}
                    className="text-white hover:text-gray-300 active:text-white block w-full text-left"
                  >
                    $$$
                  </button>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
