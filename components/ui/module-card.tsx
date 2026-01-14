"use client"

import { motion } from "framer-motion"
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { cardHoverGlow } from "@/lib/animations"

interface ModuleCardProps {
  moduleNumber: number
  title: string
  description: string
  bullets: string[]
  icon: LucideIcon
  className?: string
}

export function ModuleCard({
  moduleNumber,
  title,
  description,
  bullets,
  icon: Icon,
  className,
}: ModuleCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl border border-border/50 p-6 bg-card/50 backdrop-blur-sm",
        "hover:border-accent/50 transition-colors duration-300",
        className
      )}
      variants={cardHoverGlow}
      initial="rest"
      whileHover="hover"
    >
      {/* Icon and Module Number */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Module {moduleNumber}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {/* Bullet Points */}
      <ul className="space-y-2">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
