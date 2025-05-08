"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { getRandomQuote } from "../data/quotes"

interface TerminalProps {
  text?: string
  isAboutMode?: boolean
  userIp: string | null
  headerText?: string
}

export default function Terminal({ text, isAboutMode = false, userIp, headerText }: TerminalProps) {
  const [displayText, setDisplayText] = useState<string>("")
  const ipTemplate = "[your IP address is ___]";

  // Set initial random quote or provided text
  useEffect(() => {
    const initialText = text || getRandomQuote();
    setDisplayText(initialText);
  }, [text]); // Update only when text prop changes (or initially)

  // Determine the final text to display, handling the IP template
  let finalDisplay = displayText;
  if (displayText === ipTemplate) {
    if (userIp && userIp !== 'unknown') {
      finalDisplay = `[your IP address is ${userIp}]`;
    } else {
      finalDisplay = "[fetching your IP...]"
    }
  }

  return (
    <motion.div
      className="w-full max-w-md h-36 bg-black border border-gray-700 rounded-md overflow-hidden font-mono text-sm text-green-400 p-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      // Fixed width and height to prevent resizing
      style={{
        width: "400px", // Fixed width
        minHeight: "144px", // Fixed height (36 * 4)
      }}
    >
      <div className="flex items-center mb-2 border-b border-gray-700 pb-1">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400 mx-auto">{headerText ? headerText : isAboutMode ? "about.txt" : "kyle.exe"}</div>
      </div>

      <div className="h-full overflow-y-auto">
        <div className="flex">
          <span className="text-blue-400 mr-2">$</span>
          <motion.span
            key={finalDisplay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`whitespace-pre-line ${isAboutMode ? "text-yellow-300" : ""}`}
          >
            {isAboutMode ? finalDisplay : finalDisplay}
          </motion.span>
        </div>
        <div className="h-4 w-2 bg-green-400 inline-block animate-pulse ml-1"></div>
      </div>
    </motion.div>
  )
}
