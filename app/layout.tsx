import type React from "react"
import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import EventManager from "./components/event-manager"
import TitleManager from "./components/title-manager"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export async function generateMetadata() {
  return {
    title: "digital sidequests",
    description: "Full Stack Doctor of Physical Therapy",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", type: "image/png" },
      ],
    },
    generator: 'v0.dev'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} font-sans`}>
      <head>
        {/* Title will be managed by TitleManager and Next.js metadata */}
      </head>
      <body className="bg-[#1a4b6d] min-h-screen">
        <TitleManager />
        <EventManager />
        {children}
      </body>
    </html>
  )
}
