"use client"

import { cn } from "@/lib/utils"
import { AnimatedCounter } from "@/components/ui/animated-counter"

interface StatCardProps {
  value: string
  label: string
  attribution?: string
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
  className,
  animated = true,
}: StatCardProps) {
  const { number, suffix } = parseValue(value)

  return (
    <div
      className={cn(
        "rounded-xl border border-border/50 bg-card/30 p-5",
        className
      )}
    >
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
        <div className="text-xs text-muted-foreground mt-1">
          {attribution}
        </div>
      )}
    </div>
  )
}
