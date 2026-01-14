"use client"

import { motion } from "framer-motion"
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { cardHoverLift } from "@/lib/animations"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center text-center p-6",
        className
      )}
      variants={cardHoverLift}
      initial="rest"
      whileHover="hover"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-4">
        <Icon className="w-8 h-8 text-accent" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-foreground mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
