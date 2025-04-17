"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Animation states and their corresponding GIFs
const animations = {
  idle: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FloatingKylex4-OjSJjKcs5lW1DTeqKfLEg830yp8alR.gif",
  // Commented out animations for future use
  /*
  darkFlame: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20March%2012%2C%202025%20-%208_32PM.png-x2zPbWBVJtdqqk619qoJ9rwGMRAwLO.jpeg",
  whiteFlame: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20March%2012%2C%202025%20-%208_42PM.png-sF1vbJ6ovtRQMtJJ3NtZEbhiT2Ru58.jpeg",
  withDog: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20March%2012%2C%202025%20-%208_45PM.png-a8jCOnXUHoZQH30ntrlZPJqIOa0EeI.jpeg",
  ridingDog: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20March%2012%2C%202025%20-%208_48PM.png%20%282%29-KFlMaZh0c55boEwzKPoUeRKzblMcXr.jpeg",
  mechSuit: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20March%2012%2C%202025%20-%208_57PM.png-Zt6QqZP74LbhnoNS8WJiACRmmODI37.jpeg",
  lightsaber: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20March%2012%2C%202025%20-%209_22PM.png%20%281%29-zlIxHG0RpOclbzc98HyXwsD7KzDxIb.jpeg",
  blaster: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20March%2012%2C%202025%20-%208_36PM.png-moT9Y6UOTC4YqiGi2leDFUv0fYFxHS.jpeg"
  */
}

export type AnimationState = keyof typeof animations

export default function PixelCharacter({ currentAnimation = "idle" }: { currentAnimation?: AnimationState }) {
  // Always use idle animation for now
  const animation = "idle"

  return (
    <div className="relative">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Image
          src={animations[animation] || "/placeholder.svg"}
          alt="Pixel Art Character"
          width={150}
          height={200}
          className="pixelated"
          style={{
            imageRendering: "pixelated",
          }}
          priority
        />
      </motion.div>

      {/* Shadow effect */}
      <motion.div
        className="w-16 h-2 bg-black/20 rounded-full mx-auto -mt-2"
        animate={{
          width: [64, 56, 64],
          opacity: [0.2, 0.15, 0.2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
