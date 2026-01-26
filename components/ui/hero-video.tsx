"use client"

import { useRef, useState, useEffect } from "react"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeroVideoProps {
  src?: string
  className?: string
}

// Cloudinary video URL (temporary - replace with production video)
const DEFAULT_VIDEO_URL = "https://res.cloudinary.com/dpeonf20f/video/upload/temp-compressed_iurtpw.mp4"

export function HeroVideo({
  src = DEFAULT_VIDEO_URL,
  className
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [hasEnded, setHasEnded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => {
      setIsPlaying(false)
      setHasEnded(true)
    }

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

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
          autoPlay
          muted
          playsInline
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

        {/* Mute/Unmute button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-black/70 hover:scale-110 z-10"
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
