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
        "relative rounded-xl overflow-hidden aspect-[9/16] min-w-[140px] max-w-[180px]",
        "border-2",
        isBefore
          ? "border-red-500/50 bg-red-500/5"
          : "border-accent/50 bg-accent/5",
        className
      )}
    >
      {/* Video Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-black/50">
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center",
            isBefore ? "bg-red-500/20" : "bg-accent/20"
          )}
        >
          <Play
            className={cn(
              "w-5 h-5 ml-1",
              isBefore ? "text-red-400" : "text-accent"
            )}
          />
        </div>
      </div>

      {/* Label Badge */}
      <div className="absolute top-3 left-3">
        <span
          className={cn(
            "px-2 py-1 rounded-md text-xs font-medium",
            isBefore
              ? "bg-red-500/20 text-red-400"
              : "bg-accent/20 text-accent"
          )}
        >
          {label}
        </span>
      </div>

      {/* Views Counter */}
      <div className="absolute bottom-3 left-3 right-3">
        <div className="flex items-center gap-1">
          <svg
            className={cn(
              "w-4 h-4",
              isBefore ? "text-red-400" : "text-accent"
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
          <span
            className={cn(
              "text-sm font-semibold",
              isBefore ? "text-red-400" : "text-accent"
            )}
          >
            {views}
          </span>
        </div>
      </div>
    </div>
  )
}
