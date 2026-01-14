"use client"

import { motion } from "framer-motion"
import { X, Check, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { cardHover } from "@/lib/animations"

interface ComparisonCardProps {
  type: "positive" | "negative"
  title: string
  subtitle: string
  items: string[]
  className?: string
}

export function ComparisonCard({
  type,
  title,
  subtitle,
  items,
  className,
}: ComparisonCardProps) {
  const isPositive = type === "positive"
  const Icon: LucideIcon = isPositive ? Check : X

  return (
    <motion.div
      className={cn(
        "rounded-2xl border p-6 md:p-8 bg-card/50 backdrop-blur-sm",
        isPositive
          ? "border-green-500/30 hover:border-green-500/50"
          : "border-red-500/30 hover:border-red-500/50",
        className
      )}
      variants={cardHover}
      initial="rest"
      whileHover="hover"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full",
            isPositive ? "bg-green-500/20" : "bg-red-500/20"
          )}
        >
          <Icon
            className={cn(
              "w-5 h-5",
              isPositive ? "text-green-500" : "text-red-500"
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      {/* Items List */}
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={cn(
                "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                isPositive ? "bg-green-500/20" : "bg-red-500/20"
              )}
            >
              <Icon
                className={cn(
                  "w-3 h-3",
                  isPositive ? "text-green-500" : "text-red-500"
                )}
              />
            </div>
            <span className="text-sm text-muted-foreground leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
