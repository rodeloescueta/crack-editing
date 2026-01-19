"use client"

import { motion } from "framer-motion"
import { X, Check, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

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
        "rounded-2xl border p-8 md:p-10 bg-white/90 backdrop-blur-sm",
        isPositive
          ? "border-green-500/30"
          : "border-[#f87171]/30",
        className
      )}
      initial={{ y: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
      whileHover={{
        y: -8,
        boxShadow: isPositive
          ? "0 20px 40px rgba(34,197,94,0.2), 0 0 30px rgba(34,197,94,0.15)"
          : "0 20px 40px rgba(248,113,113,0.2), 0 0 30px rgba(248,113,113,0.15)",
        borderColor: isPositive ? "rgba(34,197,94,0.5)" : "rgba(248,113,113,0.5)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full",
            isPositive ? "bg-green-500/20" : "bg-[#f87171]/15"
          )}
        >
          <Icon
            className={cn(
              "w-5 h-5",
              isPositive ? "text-green-500" : "text-[#f87171]"
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
              isPositive ? "hover:bg-green-500/5" : "hover:bg-[#f87171]/5"
            )}
          >
            <motion.div
              variants={iconVariants}
              className={cn(
                "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                isPositive ? "bg-green-500/20" : "bg-[#f87171]/15"
              )}
            >
              <Icon
                className={cn(
                  "w-3 h-3",
                  isPositive ? "text-green-500" : "text-[#f87171]"
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
