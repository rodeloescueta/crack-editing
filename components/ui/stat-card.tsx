"use client"

import { cn } from "@/lib/utils"

interface StatCardProps {
  value: string
  label: string
  attribution?: string
  className?: string
}

export function StatCard({
  value,
  label,
  attribution,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border/50 bg-card/30 p-5",
        className
      )}
    >
      {/* Value */}
      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
        {value}
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
