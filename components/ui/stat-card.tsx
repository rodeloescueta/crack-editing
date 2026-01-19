"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { AnimatedCounter } from "@/components/ui/animated-counter"

interface StatCardProps {
  value: string
  label: string
  attribution?: string
  avatar?: string | null
  className?: string
  animated?: boolean
}

// Parse value like "15+", "3B+", "100+" into number and suffix
function parseValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (match) {
    return {
      number: parseInt(match[1], 10),
      suffix: match[2] || "",
    }
  }
  return { number: 0, suffix: value }
}

export function StatCard({
  value,
  label,
  attribution,
  avatar,
  className,
  animated = true,
}: StatCardProps) {
  const { number, suffix } = parseValue(value)

  return (
    <div
      className={cn(
        "rounded-xl border border-border/50 bg-card/30 p-5 relative overflow-hidden",
        className
      )}
    >
      {/* Avatar in corner */}
      {avatar && (
        <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 opacity-60">
          <Image
            src={avatar}
            alt=""
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Value */}
      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
        {animated ? (
          <AnimatedCounter end={number} suffix={suffix} duration={2000} />
        ) : (
          value
        )}
      </div>

      {/* Label */}
      <div className="text-sm font-medium text-foreground">
        {label}
      </div>

      {/* Attribution */}
      {attribution && (
        <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
          {attribution}
        </div>
      )}
    </div>
  )
}
