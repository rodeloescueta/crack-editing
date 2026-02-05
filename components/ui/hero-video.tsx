"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeroVideoProps {
  src?: string
  className?: string
}

// Production VSL video (12min, compressed to 57MB)
const DEFAULT_VIDEO_URL = "https://res.cloudinary.com/dpeonf20f/video/upload/v1769980877/VSL-compressed_bf17o0.mp4"

// Generate thumbnail URL from video URL (Cloudinary auto-generates .jpg from video)
function getThumbnailUrl(videoUrl: string): string {
  return videoUrl.replace(/\.(mp4|webm|mov)$/i, ".jpg")
}

// Format time in MM:SS
function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, "0")}`
}

export function HeroVideo({
  src = DEFAULT_VIDEO_URL,
  className
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasEnded, setHasEnded] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const thumbnailUrl = getThumbnailUrl(src)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => {
      setIsPlaying(false)
      setHasEnded(true)
    }
    const handleLoadedMetadata = () => {
      setDuration(video.duration)
    }
    const handleTimeUpdate = () => {
      if (!isDragging) {
        setCurrentTime(video.currentTime)
      }
    }

    // Check if metadata is already loaded (e.g., from cache)
    if (video.readyState >= 1 && video.duration) {
      setDuration(video.duration)
    }

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("ended", handleEnded)
    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("timeupdate", handleTimeUpdate)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("ended", handleEnded)
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [isDragging])

  const togglePlayPause = () => {
    const video = videoRef.current
    if (!video) return

    if (hasEnded) {
      video.currentTime = 0
      setHasEnded(false)
    }

    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  // Calculate seek position from mouse/touch event
  const getSeekPosition = useCallback((clientX: number): number => {
    const progressBar = progressRef.current
    if (!progressBar || !duration) return 0

    const rect = progressBar.getBoundingClientRect()
    const position = (clientX - rect.left) / rect.width
    return Math.max(0, Math.min(1, position)) * duration
  }, [duration])

  // Handle click on progress bar
  const handleProgressClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return

    const newTime = getSeekPosition(e.clientX)
    video.currentTime = newTime
    setCurrentTime(newTime)
  }

  // Handle drag start
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()
    setIsDragging(true)

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const newTime = getSeekPosition(clientX)
    setCurrentTime(newTime)
  }

  // Handle drag move
  useEffect(() => {
    if (!isDragging) return

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
      const newTime = getSeekPosition(clientX)
      setCurrentTime(newTime)
    }

    const handleEnd = () => {
      const video = videoRef.current
      if (video) {
        video.currentTime = currentTime
      }
      setIsDragging(false)
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseup", handleEnd)
    window.addEventListener("touchmove", handleMove)
    window.addEventListener("touchend", handleEnd)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseup", handleEnd)
      window.removeEventListener("touchmove", handleMove)
      window.removeEventListener("touchend", handleEnd)
    }
  }, [isDragging, currentTime, getSeekPosition])

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div
      className={cn(
        "relative w-full max-w-[800px] mx-auto cursor-pointer group",
        className
      )}
      onClick={togglePlayPause}
    >
      {/* Video container with aspect ratio */}
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_40px_rgba(var(--primary-rgb),0.15)] bg-[#0a1628]">
        <video
          ref={videoRef}
          src={src}
          poster={thumbnailUrl}
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />

        {/* Play/Pause overlay - shows on hover or when paused */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300",
            isPlaying && !hasEnded ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          )}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm transition-transform duration-200 hover:scale-110">
            {isPlaying && !hasEnded ? (
              <Pause className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            ) : (
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
            )}
          </div>
        </div>

        {/* Progress bar - only show when video has started */}
        {duration > 0 && (
          <div
            className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-4 pt-8 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ opacity: !isPlaying || isDragging ? 1 : undefined }}
          >
            {/* Time labels */}
            <div className="flex justify-between text-xs text-white/80 mb-1.5 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Progress bar track */}
            <div
              ref={progressRef}
              className="relative h-1 bg-white/20 rounded-full cursor-pointer group/progress hover:h-1.5 transition-all duration-150"
              onClick={handleProgressClick}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              {/* Progress fill */}
              <div
                className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />

              {/* Drag handle */}
              <div
                className={cn(
                  "absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md transition-transform duration-150",
                  isDragging ? "scale-125" : "scale-0 group-hover/progress:scale-100"
                )}
                style={{ left: `calc(${progress}% - 6px)` }}
              />
            </div>
          </div>
        )}

        {/* Mute/Unmute button */}
        <button
          onClick={toggleMute}
          className={cn(
            "absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-black/70 hover:scale-110 z-10",
            duration > 0 && "bottom-16"
          )}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
    </div>
  )
}
