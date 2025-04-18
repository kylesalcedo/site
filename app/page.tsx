"use client"

import { useState, useCallback } from "react"
import NetworkBackground from "./components/network-background"
import SocialIcons from "./components/social-icons"
import PixelCharacter from "./components/pixel-character"
import Terminal from "./components/terminal"
import ErrorPopup from "./components/error-popup"
import HamburgerMenu from "./components/hamburger-menu"
import { getRandomQuote } from "./data/quotes"

export default function Home() {
  const [terminalText, setTerminalText] = useState<string | undefined>(undefined)
  const [isAboutMode, setIsAboutMode] = useState(false)

  const handleIconHover = (text: string) => {
    if (!isAboutMode) {
      setTerminalText(text)
    }
  }

  const handleIconHoverEnd = () => {
    if (!isAboutMode) {
      setTerminalText(getRandomQuote())
    }
  }

  const showAboutText = useCallback(() => {
    const aboutText = `Full Stack Doctor of Physical Therapy
programmed in Los Angeles, California
made from imported parts and inartificial intelligence`

    setTerminalText(aboutText)
    setIsAboutMode(true)

    // Reset to random quotes after 10 seconds
    setTimeout(() => {
      setTerminalText(getRandomQuote())
      setIsAboutMode(false)
    }, 10000)
  }, [])

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#1a4b6d]">
      <NetworkBackground />
      <ErrorPopup />

      <HamburgerMenu onAboutClick={showAboutText} />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center space-y-8 mb-12">
        <PixelCharacter currentAnimation="idle" />
        <Terminal text={terminalText} isAboutMode={isAboutMode} />
      </div>

      <div className="relative z-10 w-full max-w-4xl mb-16">
        <SocialIcons onHover={handleIconHover} onHoverEnd={handleIconHoverEnd} />
      </div>
    </main>
  )
}
