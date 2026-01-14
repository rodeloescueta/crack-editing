"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { useInView } from "framer-motion"

interface UseCountUpOptions {
  end: number
  duration?: number
  startOnView?: boolean
}

export function useCountUp({ end, duration = 2000, startOnView = true }: UseCountUpOptions) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  const animate = useCallback(() => {
    const startTime = performance.now()
    const startValue = 0

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(startValue + (end - startValue) * easeOut)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setCount(end)
        setHasAnimated(true)
      }
    }

    requestAnimationFrame(tick)
  }, [end, duration])

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      setCount(end)
      setHasAnimated(true)
      return
    }

    if (startOnView && inView && !hasAnimated) {
      animate()
    } else if (!startOnView && !hasAnimated) {
      animate()
    }
  }, [inView, startOnView, hasAnimated, animate, end])

  return { count, ref, hasAnimated }
}
