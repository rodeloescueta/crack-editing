"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import React from "react"

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  return (
    <div
      className={cn(
        "relative h-full w-full",
        containerClassName
      )}
    >
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  )
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      whileInView={{
        backgroundSize: "100% 100%",
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
        delay: 0.3,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-2 rounded-lg bg-gradient-to-r from-orange-500/40 via-purple-500/40 to-orange-500/40`,
        className
      )}
    >
      {children}
    </motion.span>
  )
}
