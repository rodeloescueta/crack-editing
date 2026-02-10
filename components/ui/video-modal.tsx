"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Dialog as DialogPrimitive } from "radix-ui"
import { motion, AnimatePresence } from "framer-motion"
import { X, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  videoUrl: string
  title?: string
  type?: "before" | "after"
  creatorName?: string
  creatorHandle?: string
  views?: string
}

export function VideoModal({
  open,
  onOpenChange,
  videoUrl,
  title,
  type,
  creatorName,
  creatorHandle,
  views,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isBefore = type === "before"
  const isAfter = type === "after"

  // Reset loading state when modal opens or video changes
  useEffect(() => {
    if (open) {
      setIsLoading(true)
    }
  }, [open, videoUrl])

  // Pause video when modal closes
  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause()
    }
  }, [open])

  const handleOpenAutoplay = useCallback(
    (node: HTMLVideoElement | null) => {
      videoRef.current = node
      if (node && open) {
        node.play().catch(() => {
          // Autoplay blocked by browser — user can click play manually
        })
      }
    },
    [open]
  )

  const handleLoadedData = useCallback(() => {
    setIsLoading(false)
  }, [])

  // Border glow color based on type
  const glowColor = isBefore
    ? "shadow-[0_0_25px_rgba(239,68,68,0.3)]"
    : isAfter
      ? "shadow-[0_0_25px_rgba(34,197,94,0.3)]"
      : "shadow-2xl"

  const borderColor = isBefore
    ? "border-red-500/40"
    : isAfter
      ? "border-green-500/40"
      : "border-white/10"

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            {/* Overlay */}
            <DialogPrimitive.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </DialogPrimitive.Overlay>

            {/* Content */}
            <DialogPrimitive.Content
              asChild
              onPointerDownOutside={() => onOpenChange(false)}
              onEscapeKeyDown={() => onOpenChange(false)}
            >
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Hidden title for accessibility */}
                <DialogPrimitive.Title className="sr-only">
                  {title || "Video"}
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="sr-only">
                  Playing video{title ? `: ${title}` : ""}
                </DialogPrimitive.Description>

                {/* Video container with glow */}
                <motion.div
                  className={cn(
                    "relative w-full max-w-sm sm:max-w-md md:max-w-lg max-h-[85vh] rounded-xl overflow-hidden bg-black border",
                    borderColor,
                    glowColor
                  )}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button — top-right of video container */}
                  <DialogPrimitive.Close asChild>
                    <button
                      className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/80 hover:text-white"
                      aria-label="Close video"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </DialogPrimitive.Close>

                  {/* Before/After badge — top-left */}
                  {type && (
                    <div
                      className={cn(
                        "absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide",
                        isBefore
                          ? "bg-red-500/90 text-white"
                          : "bg-green-500/90 text-white"
                      )}
                    >
                      {isBefore ? "Before" : "After"}
                    </div>
                  )}

                  {/* Loading spinner overlay */}
                  <AnimatePresence>
                    {isLoading && (
                      <motion.div
                        className="absolute inset-0 z-10 flex items-center justify-center bg-black/40"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Loader2
                          className={cn(
                            "h-10 w-10 animate-spin",
                            isBefore
                              ? "text-red-400"
                              : isAfter
                                ? "text-green-400"
                                : "text-white/70"
                          )}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Video */}
                  <video
                    ref={handleOpenAutoplay}
                    src={videoUrl}
                    controls
                    playsInline
                    preload="metadata"
                    onLoadedData={handleLoadedData}
                    className="w-full h-full max-h-[calc(85vh-48px)] object-contain"
                  />

                  {/* Creator info bar */}
                  {(creatorName || views) && (
                    <div className="flex items-center justify-between px-4 py-2.5 bg-black/90 border-t border-white/5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        {creatorName && (
                          <span className="text-sm text-white/90 font-medium truncate">
                            {creatorName}
                          </span>
                        )}
                        {creatorHandle && (
                          <span className="text-sm text-white/50 truncate">
                            · {creatorHandle}
                          </span>
                        )}
                      </div>
                      {views && (
                        <span
                          className={cn(
                            "text-sm font-semibold flex-shrink-0 ml-3",
                            isBefore
                              ? "text-red-400"
                              : isAfter
                                ? "text-green-400"
                                : "text-white/70"
                          )}
                        >
                          {views}
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  )
}
