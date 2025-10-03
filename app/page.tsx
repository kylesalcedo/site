"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import NetworkBackground from "./components/network-background"
import SocialIcons from "./components/social-icons"
import PixelCharacter from "./components/pixel-character"
import Terminal from "./components/terminal"
import HamburgerMenu from "./components/hamburger-menu"
import { getRandomQuote, quotes } from "./data/quotes"
import CocoRocket from "./components/rocket-dog"
import ErrorPopup from "./components/error-popup"

export default function Home() {
  const [terminalText, setTerminalText] = useState<string | undefined>(undefined)
  const [isAboutMode, setIsAboutMode] = useState(false)
  const [userIp, setUserIp] = useState<string | null>(null)
  const [headerText, setHeaderText] = useState<string | undefined>(undefined)
  const [isSticky, setIsSticky] = useState(false)
  const stickyRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const stickyFlag = useRef(false)
  const [showRocket, setShowRocket] = useState(true)

  useEffect(() => {
    fetch('/api/ip')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (data.ip) {
          setUserIp(data.ip);
        }
      })
      .catch(error => {
        console.error("Failed to fetch IP:", error);
        setUserIp("error");
      });

    setTerminalText(getRandomQuote());

  }, []);

  const setStickyMessage = (msg: string, title: string) => {
    if (stickyRef.current) clearTimeout(stickyRef.current)
    setTerminalText(msg)
    setHeaderText(title)
    setIsSticky(true)
    stickyFlag.current = true

    stickyRef.current = setTimeout(() => {
      setTerminalText(getRandomQuote())
      setHeaderText(undefined)
      setIsSticky(false)
      stickyFlag.current = false
    }, 10000)
  }

  const handleIconHover = (text: string) => {
    if (!stickyFlag.current) {
      setTerminalText(text)
    }
  }

  const handleIconHoverEnd = () => {
    if (!stickyFlag.current) {
      setTerminalText(getRandomQuote())
      setHeaderText(undefined)
    }
  }

  const aboutMessage = `Full Stack Doctor of Physical Therapy
programmed in Los Angeles, California
made from imported parts and inartificial intelligence`

  const showAboutText = useCallback(() => {
    setStickyMessage(aboutMessage, "about.txt")
    setIsAboutMode(true)
  }, [])

  const bizText = "Always verify with at least 3 of the following:"

  const showBizText = useCallback(() => {
    setStickyMessage(bizText, "biz.exe")
    setIsAboutMode(false)
  }, [])

  const handleMenuHoverAbout = () => {
    if (!stickyFlag.current) {
      setTerminalText(aboutMessage)
      setHeaderText("about.txt")
    }
    setIsAboutMode(false)
  }

  const handleMenuHoverBiz = () => {
    if (!stickyFlag.current) {
      setTerminalText(bizText)
      setHeaderText("biz.exe")
    }
    setIsAboutMode(false)
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#1a4b6d]">
      <NetworkBackground />

      {showRocket && (
        <CocoRocket onComplete={() => setShowRocket(false)} />
      )}

      <ErrorPopup />

      <HamburgerMenu
        onAboutClick={showAboutText}
        onBizClick={showBizText}
        onHoverAbout={handleMenuHoverAbout}
        onHoverBiz={handleMenuHoverBiz}
        onHoverEnd={handleIconHoverEnd}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center space-y-8 mb-12">
        <PixelCharacter currentAnimation="idle" />
        <Terminal text={terminalText} isAboutMode={isAboutMode} userIp={userIp} headerText={headerText} />
      </div>

      <div className="relative z-10 w-full max-w-4xl mb-16">
        <SocialIcons onHover={handleIconHover} onHoverEnd={handleIconHoverEnd} />
      </div>
    </main>
  )
}
