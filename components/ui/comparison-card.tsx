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

// Animation variants for staggered checkmarks
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 15,
    },
  },
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
        "rounded-2xl border p-8 md:p-10 bg-white/90 backdrop-blur-sm transition-all duration-300",
        isPositive
          ? "border-green-500/30 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
          : "border-red-500/30 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
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
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <p className="text-base text-slate-500">{subtitle}</p>
        </div>
      </div>

      {/* Items List */}
      <motion.ul
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {items.map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className={cn(
              "flex items-start gap-3 p-2 -mx-2 rounded-lg transition-colors duration-200",
              isPositive ? "hover:bg-green-500/5" : "hover:bg-red-500/5"
            )}
          >
            <motion.div
              variants={iconVariants}
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
            </motion.div>
            <span className="text-base text-slate-700 leading-relaxed">
              {item}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}
