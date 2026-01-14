"use client"

import { type ReactNode } from "react"
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlowingEffect } from "@/components/ui/glowing-effect"

interface GlowingCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  area?: string
}

export function GlowingCard({
  icon: Icon,
  title,
  description,
  className,
}: GlowingCardProps) {
  return (
    <li
      className={cn("min-h-[14rem] list-none h-full", className)}
    >
      <div className="relative h-full rounded-2xl border border-border/50 p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-card/80 p-6 backdrop-blur-sm">
          {/* Icon */}
          <div className="w-fit rounded-lg border border-border/50 bg-background/50 p-2">
            <Icon className="h-5 w-5 text-accent" />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

// Wrapper component for the grid
interface GlowingGridProps {
  children: ReactNode
  className?: string
}

export function GlowingGrid({ children, className }: GlowingGridProps) {
  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2",
        className
      )}
    >
      {children}
    </ul>
  )
}
