"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  duration?: number
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  duration = 30,
}: MarqueeProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  if (prefersReducedMotion) {
    // Static display for reduced motion preference
    return (
      <div className={cn("flex flex-wrap justify-center gap-8", className)}>
        {children}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        pauseOnHover && "[--pause-on-hover:paused]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 animate-marquee items-center gap-8",
          "group-hover:[animation-play-state:var(--pause-on-hover,running)]",
          reverse && "[animation-direction:reverse]"
        )}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {children}
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 animate-marquee items-center gap-8",
          "group-hover:[animation-play-state:var(--pause-on-hover,running)]",
          reverse && "[animation-direction:reverse]"
        )}
        style={{
          animationDuration: `${duration}s`,
        }}
        aria-hidden="true"
      >
        {children}
        {children}
      </div>
    </div>
  )
}
