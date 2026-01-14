"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollProgressProps {
  className?: string
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  if (prefersReducedMotion) {
    return null
  }

  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 right-0 h-1 z-50 origin-left",
        "bg-gradient-to-r from-primary via-primary to-accent",
        className
      )}
      style={{ scaleX }}
    />
  )
}
