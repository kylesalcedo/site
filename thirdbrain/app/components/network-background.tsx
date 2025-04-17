"use client"

import { useEffect, useRef } from "react"

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create nodes with better initial distribution
    const nodeCount = 50
    const nodes: { x: number; y: number; vx: number; vy: number }[] = []

    // Create a grid-based distribution for more even coverage
    const gridCols = Math.ceil(Math.sqrt(nodeCount))
    const gridRows = Math.ceil(nodeCount / gridCols)
    const cellWidth = canvas.width / gridCols
    const cellHeight = canvas.height / gridRows

    for (let i = 0; i < nodeCount; i++) {
      // Calculate grid position
      const col = i % gridCols
      const row = Math.floor(i / gridCols)

      // Add some randomness within each grid cell
      const x = col * cellWidth + Math.random() * cellWidth
      const y = row * cellHeight + Math.random() * cellHeight

      // Smaller, more consistent velocities
      const vx = (Math.random() - 0.5) * 0.2
      const vy = (Math.random() - 0.5) * 0.2

      nodes.push({ x, y, vx, vy })
    }

    // Pre-render connections to establish initial network appearance
    const renderConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw nodes
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)"

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j]
          const dx = otherNode.x - node.x
          const dy = otherNode.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        }
      }
    }

    // Initial render
    renderConnections()

    // Animation loop with smoother movement
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)"

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        // Update position with smoother movement
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges with slight dampening
        if (node.x < 0 || node.x > canvas.width) {
          node.vx *= -0.95
          node.x = node.x < 0 ? 0 : canvas.width
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.vy *= -0.95
          node.y = node.y < 0 ? 0 : canvas.height
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections with slightly increased range for better connectivity
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j]
          const dx = otherNode.x - node.x
          const dy = otherNode.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 160) {
            // Slightly increased connection range
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 160)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    // Start animation after a brief delay to ensure initial rendering is complete
    setTimeout(() => {
      animate()
    }, 50)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
