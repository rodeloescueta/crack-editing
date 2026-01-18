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
        "group relative flex overflow-hidden [--gap:2rem]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-[var(--gap)]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center gap-[var(--gap)]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
        aria-hidden="true"
      >
        {children}
        {children}
      </div>
    </div>
  )
}
