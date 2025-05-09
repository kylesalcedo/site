"use client"

import { motion } from "framer-motion"
import { Hand, Linkedin, Instagram, HandHeart, ClipboardList, BriefcaseMedical, Handshake, MessageCircleMore, Github, Youtube, CuboidIcon as Cube } from "lucide-react"
import XLogo from "./x-logo"
import TikTokLogo from "./tiktok-logo"
// import TikTokLogo from "./tiktok-logo" // temporarily disabled
import React from "react"

interface SocialIconsProps {
  onHover: (text: string) => void
  onHoverEnd: () => void
}

export default function SocialIcons({ onHover, onHoverEnd }: SocialIconsProps) {
  const icons = [
    {
      icon: Hand,
      href: "https://kyleshands.notion.site/kyle_hand_portfolio-85e9b8c9147c42ea8b062988bb1b5516?pvs=4",
      label: "Hand Portfolio",
      hoverText: "[hand portfolio]",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kylesalcedo",
      label: "LinkedIn",
      hoverText: "[linkedin]",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/3rd/",
      label: "Instagram",
      hoverText: "[insta]",
    },
    {
      icon: HandHeart,
      href: "https://www.myodetox.com/us/therapists/kyle-salcedo/",
      label: "Myodetox",
      hoverText: "[myo]",
    },
    {
      icon: BriefcaseMedical,
      href: "https://www.eluve.com/",
      label: "Eluve",
      hoverText: "[eluve]",
    },
    {
      icon: XLogo,
      href: "http://x.com/kylesalcedodpt",
      label: "X (formerly Twitter)",
      hoverText: "[x]",
    },
    {
      icon: MessageCircleMore,
      href: "https://discord.gg/eMMPBbZ",
      label: "Discord",
      hoverText: "[the official physical therapy discord]",
    },
    {
      icon: Cube,
      href: "https://www.printables.com/@frog",
      label: "3D Printing",
      hoverText: "[printables]",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@%C4%A7ands",
      label: "YouTube",
      hoverText: "[youtube]",
    },
    {
      icon: Github,
      href: "https://github.com/kylesalcedo",
      label: "GitHub",
      hoverText: "[github]",
    },
    {
      icon: TikTokLogo,
      href: "https://www.tiktok.com/@hand",
      label: "TikTok",
      hoverText: "[tiktok]",
    },
    {
      icon: Handshake,
      href: "https://www.homehands.lol/",
      label: "HomeHands",
      hoverText: "[homehands]",
    },
  ]

  const [isDesktop, setIsDesktop] = React.useState(false)
  const [positions, setPositions] = React.useState<{ x: number; y: number }[]>([])

  // Determine screen size and compute positions for desktop
  React.useEffect(() => {
    const calc = () => {
      const desktop = window.innerWidth >= 640 // Tailwind sm breakpoint
      setIsDesktop(desktop)

      if (desktop) {
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2 - 80 // lift a bit above bottom area
        const minR = 260
        const maxR = Math.min(window.innerWidth, window.innerHeight) / 2 + 60

        setPositions(
          icons.map(() => {
            const theta = Math.random() * Math.PI * 2
            const r = Math.random() * (maxR - minR) + minR
            return {
              x: centerX + r * Math.cos(theta),
              y: centerY + r * Math.sin(theta),
            }
          })
        )
      }
    }

    if (typeof window !== "undefined") {
      calc()
      window.addEventListener("resize", calc)
      return () => window.removeEventListener("resize", calc)
    }
  }, [])

  if (!isDesktop) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 max-w-md mx-auto">
        {icons.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-500/70 text-white hover:bg-gray-400/70 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => onHover(item.hoverText)}
            onHoverEnd={onHoverEnd}
            aria-label={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <item.icon size={24} />
          </motion.a>
        ))}
      </div>
    )
  }

  // Desktop scattered layout
  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      {icons.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute flex items-center justify-center w-16 h-16 rounded-full bg-gray-500/70 text-white hover:bg-gray-400/70 transition-colors pointer-events-auto"
          style={{ left: positions[index]?.x ?? 0 - 32, top: positions[index]?.y ?? 0 - 32 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => onHover(item.hoverText)}
          onHoverEnd={onHoverEnd}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }}
          aria-label={item.label}
        >
          <item.icon size={24} />
        </motion.a>
      ))}
    </div>
  )
}
