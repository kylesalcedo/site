"use client"

import React from "react"

interface SocialIconsProps {
  onHover: (text: string) => void
  onHoverEnd: () => void
}

export default function SocialIcons({ onHover, onHoverEnd }: SocialIconsProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <a href="#" className="text-white" onMouseEnter={() => onHover("Test 1")} onMouseLeave={onHoverEnd}>Test 1</a>
      <a href="#" className="text-white" onMouseEnter={() => onHover("Test 2")} onMouseLeave={onHoverEnd}>Test 2</a>
      <a href="#" className="text-white" onMouseEnter={() => onHover("Test 3")} onMouseLeave={onHoverEnd}>Test 3</a>
    </div>
  )
}
