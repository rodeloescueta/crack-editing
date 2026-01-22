"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BackgroundVideoCardProps {
  src: string
  position: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
  size?: "sm" | "md" | "lg"
  opacity?: number
  rotation?: number
  delay?: number
  className?: string
  hideOnMobile?: boolean
  hideOnTablet?: boolean
}

const sizeClasses = {
  sm: "w-28 h-44 sm:w-36 sm:h-56",
  md: "w-36 h-56 sm:w-48 sm:h-76",
  lg: "w-44 h-72 sm:w-56 sm:h-88",
}

export function BackgroundVideoCard({
  src,
  position,
  size = "md",
  opacity = 0.15,
  rotation = 0,
  delay = 0,
  className,
  hideOnMobile = false,
  hideOnTablet = false,
}: BackgroundVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Intersection Observer to pause/play video based on visibility
  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            video.play().catch(() => {
              // Autoplay may be blocked, that's ok
            })
          } else {
            setIsVisible(false)
            video.pause()
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "absolute overflow-hidden rounded-xl",
        "border border-white/10",
        "shadow-lg shadow-black/20",
        sizeClasses[size],
        hideOnMobile && "hidden sm:block",
        hideOnTablet && "hidden lg:block",
        className
      )}
      style={{
        ...position,
        opacity,
        transform: `rotate(${rotation}deg)`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? opacity : 0,
        scale: isVisible ? 1 : 0.9
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut"
      }}
    >
      {/* Gradient overlay for better blending */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-[#0a1628]/30 pointer-events-none" />

      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Subtle glow effect */}
      <div className="absolute inset-0 z-20 rounded-xl ring-1 ring-inset ring-white/5 pointer-events-none" />
    </motion.div>
  )
}

// Pre-configured video cards for the hero section
// Spread across the entire hero area, including behind content
export const heroVideoCards = [
  // Top-left area
  {
    src: "/videos/hero/hero-bg-1.mp4",
    position: { top: "5%", left: "8%" },
    size: "md" as const,
    opacity: 0.2,
    rotation: -6,
    delay: 0.2,
    hideOnMobile: false,
    hideOnTablet: false,
  },
  // Top-center-right (behind headline area)
  {
    src: "/videos/hero/hero-bg-2.mp4",
    position: { top: "8%", left: "35%" },
    size: "sm" as const,
    opacity: 0.12,
    rotation: 3,
    delay: 0.4,
    hideOnMobile: true,
    hideOnTablet: false,
  },
  // Top-right area
  {
    src: "/videos/hero/hero-bg-3.mp4",
    position: { top: "15%", right: "10%" },
    size: "lg" as const,
    opacity: 0.18,
    rotation: 5,
    delay: 0.3,
    hideOnMobile: true,
    hideOnTablet: false,
  },
  // Center-left (beside content)
  {
    src: "/videos/hero/hero-bg-4.mp4",
    position: { top: "40%", left: "3%" },
    size: "sm" as const,
    opacity: 0.15,
    rotation: -8,
    delay: 0.6,
    hideOnMobile: true,
    hideOnTablet: true,
  },
  // Bottom-right area (visible on mobile too)
  {
    src: "/videos/hero/hero-bg-5.mp4",
    position: { bottom: "8%", right: "5%" },
    size: "sm" as const,
    opacity: 0.18,
    rotation: -4,
    delay: 0.8,
    hideOnMobile: false,
    hideOnTablet: false,
  },
]
