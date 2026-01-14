"use client"

import { useCountUp } from "@/lib/hooks/use-count-up"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
  className,
}: AnimatedCounterProps) {
  const { count, ref } = useCountUp({ end, duration })

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={cn(className)}>
      {count}
      {suffix}
    </span>
  )
}
