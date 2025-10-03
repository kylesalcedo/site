"use client"
import NetworkBackground from "../components/network-background"
import PixelCharacter from "../components/pixel-character"
import Terminal from "../components/terminal"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
// import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#1a4b6d]">
      <NetworkBackground />

      {/* Back button */}
      <div
        className="absolute top-4 left-4 z-50"
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </Link>
      </div>

      {/* Pixel Character and Terminal */}
      <div className="relative z-10 mt-16 mb-12 flex flex-col items-center space-y-8">
        <PixelCharacter currentAnimation="idle" />
        <Terminal />
      </div>

      {/* About Content */}
      <div
        className="relative z-10 w-full max-w-4xl px-4 text-center"
      >
        <p className="text-white text-lg leading-relaxed">
          This is the about page content.
        </p>
      </div>
    </main>
  )
}
