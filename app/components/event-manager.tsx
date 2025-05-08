"use client"

import React, { useEffect, useRef, useState } from "react"
import ErrorPopup from "./error-popup"
import CocoRocket from "./rocket-dog"
import { getRandomError } from "../data/errors"

export type EventId = "errorPopup" | "rocketDog"

interface BaseEvent {
  id: EventId
}

// Registry of available events (extendable)
const availableEvents: BaseEvent[] = [
  { id: "errorPopup" },
  { id: "rocketDog" },
]

export default function EventManager() {
  const [activeEvent, setActiveEvent] = useState<EventId | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const scheduleRef = useRef<ReturnType<typeof setTimeout>>()

  // Generate random position for popup
  const generateRandomPosition = () => {
    const maxX = typeof window !== "undefined" ? window.innerWidth - 320 : 500
    const maxY = typeof window !== "undefined" ? window.innerHeight - 200 : 500

    return {
      x: Math.max(50, Math.floor(Math.random() * maxX)),
      y: Math.max(50, Math.floor(Math.random() * maxY)),
    }
  }

  // Schedule next event with random delay
  const scheduleNextEvent = () => {
    if (scheduleRef.current) clearTimeout(scheduleRef.current)

    const delay = Math.random() * 20000 + 10000 // 10-30 seconds
    scheduleRef.current = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * availableEvents.length)
      triggerEvent(availableEvents[randomIndex].id)
    }, delay)
  }

  // Trigger specific event
  const triggerEvent = (id: EventId) => {
    switch (id) {
      case "errorPopup": {
        setPosition(generateRandomPosition())
        setActiveEvent("errorPopup")
        // Auto-hide after 5s then schedule next
        setTimeout(() => {
          setActiveEvent(null)
          scheduleNextEvent()
        }, 5000)
        break
      }
      case "rocketDog": {
        setActiveEvent("rocketDog")
        // Completion handled via CocoRocket onComplete
        break
      }
      default:
        break
    }
  }

  // Kick-off first event
  useEffect(() => {
    const initialDelay = Math.random() * 10000 + 5000 // 5-15 seconds
    scheduleRef.current = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * availableEvents.length)
      triggerEvent(availableEvents[randomIndex].id)
    }, initialDelay)

    return () => {
      if (scheduleRef.current) clearTimeout(scheduleRef.current)
    }
  }, [])

  return (
    <>
      {activeEvent === "errorPopup" && (
        <ErrorPopup
          errorMessage={getRandomError()}
          position={position}
          onClose={() => {
            setActiveEvent(null)
            scheduleNextEvent()
          }}
        />
      )}
      {activeEvent === "rocketDog" && (
        <CocoRocket
          onComplete={() => {
            setActiveEvent(null)
            scheduleNextEvent()
          }}
        />
      )}
    </>
  )
} 