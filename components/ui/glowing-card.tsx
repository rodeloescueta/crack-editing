"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlowingEffect } from "@/components/ui/glowing-effect"

interface GlowingCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  area?: string
  index?: number
}

// Animation variants for staggered reveal
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
}

// Icon hover animation
const iconVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
}

export function GlowingCard({
  icon: Icon,
  title,
  description,
  className,
  index = 0,
}: GlowingCardProps) {
  return (
    <motion.li
      className={cn("min-h-[14rem] list-none h-full", className)}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        className="relative h-full rounded-2xl border border-white/10 p-2 group"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-[#10131a] p-6 backdrop-blur-sm border border-white/5">
          {/* Icon - Larger with background circle */}
          <motion.div
            className="w-14 h-14 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <Icon className="h-7 w-7 text-primary" />
          </motion.div>

          {/* Content */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-200">
              {title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.li>
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
