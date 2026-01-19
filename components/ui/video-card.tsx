"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface VideoCardProps {
  type: "before" | "after"
  label: string
  views: string
  thumbnail?: string
  videoUrl?: string
  className?: string
}

export function VideoCard({ type, label, views, thumbnail, videoUrl, className }: VideoCardProps) {
  const isBefore = type === "before"
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (videoUrl) {
      window.open(videoUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden aspect-[9/16] w-[200px] sm:w-[240px] md:w-[280px]",
        "border-2 transition-all duration-300 cursor-pointer",
        isBefore
          ? "border-red-500/50 bg-gradient-to-b from-red-500/10 to-red-900/20"
          : "border-accent/50 bg-gradient-to-b from-accent/10 to-accent/20",
        isHovered && "scale-[1.02] shadow-xl",
        isHovered && (isBefore ? "border-red-500" : "border-accent"),
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role={videoUrl ? "button" : undefined}
      tabIndex={videoUrl ? 0 : undefined}
      onKeyDown={(e) => {
        if (videoUrl && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      {/* Background Thumbnail Image */}
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={`${type} video thumbnail`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, 280px"
        />
      )}

      {/* Overlay for better contrast */}
      <div className={cn(
        "absolute inset-0",
        thumbnail ? "bg-black/30" : ""
      )} />

      {/* Dashed Progress Indicator at Top */}
      <div className="absolute top-3 left-3 right-3 flex gap-1 z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-[3px] flex-1 rounded-full",
              isBefore ? "bg-red-500/60" : "bg-accent/60"
            )}
          />
        ))}
      </div>

      {/* Video Placeholder - Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className={cn(
            "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
            isBefore ? "bg-red-500" : "bg-accent",
            isHovered && "scale-110"
          )}
        >
          <Play
            className={cn(
              "w-7 h-7 md:w-8 md:h-8 ml-1",
              "text-black"
            )}
            fill="currentColor"
          />
        </div>
      </div>

      {/* Hover Overlay - Watch Video */}
      <div
        className={cn(
          "absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm",
            isBefore ? "bg-red-500 text-white" : "bg-accent text-black"
          )}
        >
          <ExternalLink className="w-4 h-4" />
          <span>Watch Video</span>
        </div>
        {!videoUrl && (
          <span className="text-white/60 text-xs mt-2">Coming soon</span>
        )}
      </div>

      {/* Bottom Section - Progress Bar, Label, Views */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent pt-8 z-10">
        {/* Progress Bar */}
        <div className="w-full h-1 rounded-full bg-[oklch(0.50_0.02_210)] mb-2 overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full",
              isBefore
                ? "w-1/4 bg-red-500"
                : "w-full bg-gradient-to-r from-accent via-purple-400 to-accent"
            )}
          />
        </div>

        {/* Label - Animated */}
        <motion.p
          key={label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-sm text-[oklch(0.85_0.02_210)] mb-1"
        >
          {label}
        </motion.p>

        {/* Views - Animated */}
        <motion.p
          key={views}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className={cn(
            "text-lg font-bold",
            isBefore ? "text-red-400" : "text-accent"
          )}
        >
          {views}
        </motion.p>
      </div>

      {/* Label Badge - BEFORE/AFTER is now handled outside in parent */}
    </div>
  )
}
