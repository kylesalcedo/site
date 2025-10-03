"use client"

import { motion } from "framer-motion"
import { Hand, Linkedin, Instagram, HandHeart, ClipboardList, BriefcaseMedical, Handshake, MessageCircleMore, Github, Youtube, CuboidIcon as Cube, Puzzle, Music, Gamepad2 } from "lucide-react"
import { XLogo } from "./x-logo"
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
    {
      icon: Puzzle,
      href: "https://www.chess.com/member/hand",
      label: "Chess.com",
      hoverText: "[chess]",
    },
    {
      icon: Music,
      href: "https://open.spotify.com/user/kylesalcedo",
      label: "Spotify",
      hoverText: "[spotify]",
    },
    {
      icon: Gamepad2,
      href: "https://steamcommunity.com/id/0hms",
      label: "Steam",
      hoverText: "[steam]",
    },
  ]

  // Arrange icons into rows: 5-5-5
  const rows = [
    icons.slice(0, 5),
    icons.slice(5, 10),
    icons.slice(10, 15),
  ]

  return (
    <div className="flex flex-col items-center space-y-4">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row justify-center space-x-4">
          {row.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-500/70 text-white hover:bg-gray-400/70 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => onHover(item.hoverText)}
              onHoverEnd={onHoverEnd}
              aria-label={item.label}
            >
              <item.icon size={24} />
            </motion.a>
          ))}
        </div>
      ))}
    </div>
  )
}
