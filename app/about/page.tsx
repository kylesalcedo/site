"use client"
import NetworkBackground from "../components/network-background"
import PixelCharacter from "../components/pixel-character"
import Terminal from "../components/terminal"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#1a4b6d]">
      <NetworkBackground />

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-4 left-4 z-50"
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </Link>
      </motion.div>

      {/* Pixel Character and Terminal */}
      <div className="relative z-10 mt-16 mb-12 flex flex-col items-center space-y-8">
        <PixelCharacter currentAnimation="idle" />
        <Terminal />
      </div>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 max-w-2xl mx-auto bg-[#1a4b6d]/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/10 mb-16"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 tracking-tight">About Me</h1>

          <div className="space-y-6">
            <p className="text-2xl">
              name is <span className="font-bold">Kyle Salcedo</span>
            </p>

            <p className="text-xl">a Doctor of Physical Therapy molded by other godly clinicians</p>

            <p className="text-xl">assembled in Los Angeles, California</p>

            <p className="text-xl">made from imported parts and inartificial intelligence</p>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
