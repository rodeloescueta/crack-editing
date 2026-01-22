"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion"
import { cn } from "@/lib/utils"

interface CustomScrollbarProps {
  className?: string
}

export function CustomScrollbar({ className }: CustomScrollbarProps) {
  const [isActive, setIsActive] = useState(false) // Active = scrolling or hovering
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [thumbHeight, setThumbHeight] = useState(100)
  const [trackHeight, setTrackHeight] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  const trackRef = useRef<HTMLDivElement>(null)
  const inactiveTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const thumbY = useMotionValue(0)

  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  })

  // Transform scroll progress to thumb position
  const thumbTop = useTransform(
    smoothProgress,
    [0, 1],
    [0, Math.max(0, trackHeight - thumbHeight)]
  )

  // Calculate dimensions
  const calculateDimensions = useCallback(() => {
    if (typeof window === "undefined") return

    const viewportHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    // Track height with padding
    const trackPadding = 16
    const availableTrackHeight = viewportHeight - trackPadding

    // Thumb height based on viewport/document ratio (min 40px, max 50%)
    const ratio = viewportHeight / documentHeight
    const calculatedThumbHeight = Math.max(
      40,
      Math.min(availableTrackHeight * 0.5, availableTrackHeight * ratio)
    )

    setTrackHeight(availableTrackHeight)
    setThumbHeight(calculatedThumbHeight)
  }, [])

  // Activate scrollbar (more prominent)
  const activateScrollbar = useCallback(() => {
    setIsActive(true)
    if (inactiveTimeoutRef.current) {
      clearTimeout(inactiveTimeoutRef.current)
    }
  }, [])

  // Schedule deactivation (return to subtle state)
  const scheduleDeactivation = useCallback(() => {
    if (inactiveTimeoutRef.current) {
      clearTimeout(inactiveTimeoutRef.current)
    }
    inactiveTimeoutRef.current = setTimeout(() => {
      setIsActive(false)
    }, 1500)
  }, [])

  // Handle track click to jump to position
  const handleTrackClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!trackRef.current || isDragging) return

      const trackRect = trackRef.current.getBoundingClientRect()
      const clickY = e.clientY - trackRect.top - thumbHeight / 2
      const maxScroll = trackHeight - thumbHeight
      const scrollPercent = Math.max(0, Math.min(1, clickY / maxScroll))

      const documentHeight = document.documentElement.scrollHeight
      const viewportHeight = window.innerHeight
      const scrollableHeight = documentHeight - viewportHeight

      window.scrollTo({
        top: scrollPercent * scrollableHeight,
        behavior: "smooth",
      })
    },
    [thumbHeight, trackHeight, isDragging]
  )

  // Handle thumb drag
  const handleDrag = useCallback(
    (_: unknown, info: { point: { y: number }; delta: { y: number } }) => {
      if (!trackRef.current) return

      const maxScroll = trackHeight - thumbHeight
      const newY = Math.max(0, Math.min(maxScroll, thumbY.get() + info.delta.y))

      thumbY.set(newY)

      const scrollPercent = newY / maxScroll
      const documentHeight = document.documentElement.scrollHeight
      const viewportHeight = window.innerHeight
      const scrollableHeight = documentHeight - viewportHeight

      window.scrollTo({
        top: scrollPercent * scrollableHeight,
        behavior: "auto",
      })
    },
    [thumbHeight, trackHeight, thumbY]
  )

  // Sync thumb position with scroll
  useEffect(() => {
    const unsubscribe = thumbTop.on("change", (latest) => {
      if (!isDragging) {
        thumbY.set(latest)
      }
    })
    return () => unsubscribe()
  }, [thumbTop, thumbY, isDragging])

  // Mount check and mobile detection
  useEffect(() => {
    setIsMounted(true)
    calculateDimensions()

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    // Check if mobile
    const isMobile = window.innerWidth < 768

    if (isMobile || prefersReducedMotion) {
      setIsMounted(false)
    }
  }, [calculateDimensions])

  // Setup scroll listener
  useEffect(() => {
    if (!isMounted) return

    const handleScroll = () => {
      activateScrollbar()
      scheduleDeactivation()
    }

    const handleResize = () => {
      calculateDimensions()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      if (inactiveTimeoutRef.current) {
        clearTimeout(inactiveTimeoutRef.current)
      }
    }
  }, [isMounted, calculateDimensions, activateScrollbar, scheduleDeactivation])

  // Keep active while hovered or dragging
  useEffect(() => {
    if (isHovered || isDragging) {
      activateScrollbar()
    } else {
      scheduleDeactivation()
    }
  }, [isHovered, isDragging, activateScrollbar, scheduleDeactivation])

  // Don't render on mobile or before mount
  if (!isMounted) {
    return null
  }

  // Determine visual state
  const isProminent = isActive || isHovered || isDragging

  return (
    <motion.div
      ref={trackRef}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isProminent ? 1 : 0.4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed right-1 top-4 bottom-4 z-50",
        "rounded-full transition-[width,background-color] duration-300",
        isProminent ? "w-1.5 bg-foreground/5" : "w-1 bg-transparent",
        className
      )}
      onClick={handleTrackClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumb */}
      <motion.div
        drag="y"
        dragConstraints={trackRef}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onDrag={handleDrag}
        style={{
          y: thumbY,
          height: thumbHeight,
        }}
        className={cn(
          "absolute left-0 right-0 rounded-full",
          "cursor-grab active:cursor-grabbing",
          "transition-all duration-300 will-change-transform",
          // Base gradient - always visible
          "bg-gradient-to-b from-primary via-primary to-primary/70",
          // Glow effect - subtle
          isProminent
            ? "shadow-[0_0_8px_var(--primary-glow-medium)]"
            : "shadow-[0_0_4px_var(--primary-glow-soft)]"
        )}
      >
        {/* Inner highlight for depth */}
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-b from-white/30 via-transparent to-black/10"
          )}
        />
      </motion.div>
    </motion.div>
  )
}
