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
  const [hasPositions, setHasPositions] = React.useState(false)

  let resizeTimer: ReturnType<typeof setTimeout>

  const calcPositions = () => {
    const desktop = window.innerWidth >= 640 // Tailwind sm breakpoint
    setIsDesktop(desktop)

    if (desktop) {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2 - 80
      const minR = 260
      const maxR = Math.min(window.innerWidth, window.innerHeight) / 2 + 60

      // Use a circular exclusion zone in the center
      const exclusionRadius = 320 // px, generous radius to avoid terminal and center

      const margin = 40 // keep away from edges
      const minDist = 110 // ~ icon diameter + gap

      const pos: { x: number; y: number }[] = []

      icons.forEach(() => {
        let attempt = 0
        while (attempt < 200) { // allow more attempts for better spread
          const theta = Math.random() * Math.PI * 2
          const r = Math.random() * (maxR - minR) + minR
          const x = centerX + r * Math.cos(theta)
          const y = centerY + r * Math.sin(theta)

          // Check margins
          if (x < margin || x > window.innerWidth - margin || y < margin || y > window.innerHeight - margin) {
            attempt++
            continue
          }

          // Avoid circular exclusion zone in the center
          if (Math.hypot(x - centerX, y - centerY) < exclusionRadius) {
            attempt++
            continue
          }

          // Check overlap with existing icons
          if (pos.every(p => Math.hypot(p.x - x, p.y - y) >= minDist)) {
            pos.push({ x, y })
            break
          }
          attempt++
        }
        if (attempt >= 200) {
          // fallback: place at edge of exclusion zone
          const angle = Math.random() * Math.PI * 2
          pos.push({ x: centerX + Math.cos(angle) * (exclusionRadius + minDist), y: centerY + Math.sin(angle) * (exclusionRadius + minDist) })
        }
      })

      setPositions(pos)
      setHasPositions(true)
    }
  }

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      calcPositions()
      const handleResize = () => {
        clearTimeout(resizeTimer)
        resizeTimer = setTimeout(calcPositions, 150) // debounce 150ms
      }
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Always render icons, fallback to grid if positions not ready
  if (!isDesktop || !hasPositions) {
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
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            onHoverStart={() => onHover(item.hoverText)}
            onHoverEnd={onHoverEnd}
            aria-label={item.label}
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
          style={{ left: (positions[index]?.x ?? 0) - 32, top: (positions[index]?.y ?? 0) - 32 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => onHover(item.hoverText)}
          onHoverEnd={onHoverEnd}
          aria-label={item.label}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <item.icon size={24} />
        </motion.a>
      ))}
    </div>
  )
}
