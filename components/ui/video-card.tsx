"use client"

import { Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoCardProps {
  type: "before" | "after"
  label: string
  views: string
  className?: string
}

export function VideoCard({ type, label, views, className }: VideoCardProps) {
  const isBefore = type === "before"

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden aspect-[9/16] w-[200px] sm:w-[240px] md:w-[280px]",
        "border-2",
        isBefore
          ? "border-red-500/50 bg-gradient-to-b from-red-500/10 to-red-900/20"
          : "border-accent/50 bg-gradient-to-b from-accent/10 to-accent/20",
        className
      )}
    >
      {/* Dashed Progress Indicator at Top */}
      <div className="absolute top-3 left-3 right-3 flex gap-1">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-[3px] flex-1 rounded-full",
              isBefore ? "bg-red-500/40" : "bg-accent/40"
            )}
          />
        ))}
      </div>

      {/* Video Placeholder - Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={cn(
            "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center",
            isBefore ? "bg-red-500" : "bg-accent"
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

      {/* Bottom Section - Progress Bar, Label, Views */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent pt-8">
        {/* Progress Bar */}
        <div className="w-full h-1 rounded-full bg-gray-700 mb-2 overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full",
              isBefore
                ? "w-1/4 bg-red-500"
                : "w-full bg-gradient-to-r from-accent via-purple-400 to-accent"
            )}
          />
        </div>

        {/* Label */}
        <p className="text-sm text-gray-300 mb-1">{label}</p>

        {/* Views */}
        <p
          className={cn(
            "text-lg font-bold",
            isBefore ? "text-red-400" : "text-accent"
          )}
        >
          {views}
        </p>
      </div>

      {/* Label Badge - BEFORE/AFTER is now handled outside in parent */}
    </div>
  )
}
