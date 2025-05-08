"use client"

import { useState, useCallback, useEffect } from "react"
import NetworkBackground from "./components/network-background"
import SocialIcons from "./components/social-icons"
import PixelCharacter from "./components/pixel-character"
import Terminal from "./components/terminal"
import HamburgerMenu from "./components/hamburger-menu"
import { getRandomQuote, quotes } from "./data/quotes"

export default function Home() {
  const [terminalText, setTerminalText] = useState<string | undefined>(undefined)
  const [isAboutMode, setIsAboutMode] = useState(false)
  const [userIp, setUserIp] = useState<string | null>(null)
  const [headerText, setHeaderText] = useState<string | undefined>(undefined)

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
    setHeaderText("about.txt")
    setIsAboutMode(true)

    setTimeout(() => {
      setTerminalText(getRandomQuote())
      setIsAboutMode(false)
    }, 10000)
  }, [])

  const showBizText = useCallback(() => {
    const bizText = "Always verify with at least 3 of the following:"
    setTerminalText(bizText)
    setHeaderText("biz.exe")
    setIsAboutMode(false)

    setTimeout(() => {
      setTerminalText(getRandomQuote())
      setHeaderText(undefined)
    }, 10000)
  }, [])

  const handleMenuHoverAbout = () => {
    setTerminalText(`Full Stack Doctor of Physical Therapy
programmed in Los Angeles, California
made from imported parts and inartificial intelligence`)
    setHeaderText("about.txt")
    setIsAboutMode(false)
  }

  const handleMenuHoverBiz = () => {
    setTerminalText("Always verify with at least 3 of the following:")
    setHeaderText("biz.exe")
    setIsAboutMode(false)
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#1a4b6d]">
      <NetworkBackground />

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
