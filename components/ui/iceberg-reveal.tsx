"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface IcebergRevealProps {
  className?: string
}

export function IcebergReveal({ className }: IcebergRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax transforms - different speeds for depth effect
  const waterY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const icebergTopY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const icebergBottomY = useTransform(scrollYProgress, [0, 1], [100, -30])
  const labelsY = useTransform(scrollYProgress, [0, 1], [150, -20])

  // Reveal animation - underwater fades in
  const underwaterOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.6],
    ["inset(40% 0 60% 0)", "inset(0% 0 0% 0)"]
  )

  // Individual label opacity based on scroll
  const label1Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1])
  const label2Opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1])
  const label3Opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1])
  const label4Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1])
  const label5Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-[600px] md:h-[700px] overflow-hidden",
        className
      )}
      role="img"
      aria-label="Iceberg visualization: viral videos look simple on the surface, but require attention science, emotional pacing, story structure, sensory cues, and taste & design underneath"
    >
      {/* Background gradient - ocean */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950" />

      {/* Water surface layer */}
      <motion.div
        className="absolute inset-x-0 top-[35%] h-1 z-20"
        style={{ y: waterY }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="absolute inset-0 bg-cyan-400/20 blur-sm" />
      </motion.div>

      {/* Iceberg tip (above water) */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-[15%] z-10"
        style={{ y: icebergTopY }}
      >
        <svg
          width="200"
          height="180"
          viewBox="0 0 200 180"
          className="drop-shadow-lg"
        >
          {/* Main tip shape */}
          <polygon
            points="100,10 60,100 80,110 120,110 140,100"
            fill="url(#tipGradient)"
            className="drop-shadow-md"
          />
          {/* Faceted highlights */}
          <polygon points="100,10 80,60 100,70" fill="#e0f7fa" opacity="0.8" />
          <polygon points="100,10 120,60 100,70" fill="#b2ebf2" opacity="0.6" />
          <polygon points="80,60 60,100 80,110 100,70" fill="#80deea" opacity="0.5" />
          <polygon points="120,60 140,100 120,110 100,70" fill="#4dd0e1" opacity="0.4" />

          {/* Water line intersection */}
          <polygon
            points="50,160 60,100 80,110 120,110 140,100 150,160"
            fill="url(#waterlineGradient)"
            opacity="0.6"
          />

          <defs>
            <linearGradient id="tipGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#e0f7fa" />
              <stop offset="100%" stopColor="#80deea" />
            </linearGradient>
            <linearGradient id="waterlineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#164e63" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* "VIRAL VIDEO" label */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
          <span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
            VIRAL VIDEO
          </span>
          <div className="text-xs text-cyan-300 mt-1">What people see</div>
        </div>
      </motion.div>

      {/* Iceberg underwater body */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-[38%] z-5"
        style={{
          y: icebergBottomY,
          opacity: underwaterOpacity,
          clipPath,
        }}
      >
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className="drop-shadow-2xl"
        >
          {/* Main underwater body - flat top to connect with tip */}
          <polygon
            points="140,0 260,0 300,60 320,150 300,280 250,350 200,380 150,350 100,280 80,150 100,60"
            fill="url(#underwaterGradient)"
          />

          {/* Faceted faces for low-poly look - flat top */}
          <polygon points="140,0 200,0 200,40 160,50" fill="#1e3a5f" opacity="0.9" />
          <polygon points="200,0 260,0 240,50 200,40" fill="#0c4a6e" opacity="0.8" />
          <polygon points="140,0 160,50 100,60" fill="#164e63" opacity="0.85" />
          <polygon points="260,0 240,50 300,60" fill="#155e75" opacity="0.75" />
          <polygon points="160,50 200,40 200,100 140,120 100,60" fill="#1e3a5f" opacity="0.8" />
          <polygon points="240,50 200,40 200,100 260,120 300,60" fill="#0e7490" opacity="0.6" />
          <polygon points="100,60 140,120 80,150" fill="#164e63" opacity="0.7" />
          <polygon points="300,60 260,120 320,150" fill="#155e75" opacity="0.6" />
          <polygon points="140,120 200,100 200,180 140,200 80,150" fill="#134e4a" opacity="0.7" />
          <polygon points="260,120 200,100 200,180 260,200 320,150" fill="#115e59" opacity="0.55" />
          <polygon points="80,150 140,200 100,280" fill="#134e4a" opacity="0.6" />
          <polygon points="320,150 260,200 300,280" fill="#115e59" opacity="0.5" />
          <polygon points="140,200 200,180 200,280 150,300 100,280" fill="#0f766e" opacity="0.65" />
          <polygon points="260,200 200,180 200,280 250,300 300,280" fill="#14b8a6" opacity="0.45" />
          <polygon points="100,280 150,300 150,350" fill="#0d9488" opacity="0.5" />
          <polygon points="300,280 250,300 250,350" fill="#2dd4bf" opacity="0.35" />
          <polygon points="150,300 200,280 200,350 150,350" fill="#0f766e" opacity="0.55" />
          <polygon points="250,300 200,280 200,350 250,350" fill="#14b8a6" opacity="0.4" />
          <polygon points="150,350 200,350 200,380" fill="#5eead4" opacity="0.45" />
          <polygon points="250,350 200,350 200,380" fill="#2dd4bf" opacity="0.4" />

          <defs>
            <linearGradient id="underwaterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0c4a6e" />
              <stop offset="50%" stopColor="#164e63" />
              <stop offset="100%" stopColor="#134e4a" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Labels layer - Desktop: positioned around iceberg */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none hidden md:block"
        style={{ y: labelsY }}
      >
        {/* Left labels */}
        <motion.div
          className="absolute left-[15%] top-[45%]"
          style={{ opacity: label1Opacity }}
        >
          <div className="text-right">
            <div className="text-base font-bold text-cyan-400">ATTENTION SCIENCE</div>
            <div className="text-xs text-slate-400 max-w-[180px]">
              Using motion, contrast, & sound to guide the eye
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute left-[12%] top-[62%]"
          style={{ opacity: label3Opacity }}
        >
          <div className="text-right">
            <div className="text-base font-bold text-cyan-400">STORY STRUCTURE</div>
            <div className="text-xs text-slate-400 max-w-[180px]">
              Clear hook, tension, payoff
            </div>
          </div>
        </motion.div>

        {/* Right labels */}
        <motion.div
          className="absolute right-[15%] top-[50%]"
          style={{ opacity: label2Opacity }}
        >
          <div className="text-left">
            <div className="text-base font-bold text-cyan-400">EMOTIONAL PACING</div>
            <div className="text-xs text-slate-400 max-w-[180px]">
              Building tension, releasing it, creating the arc
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute right-[12%] top-[67%]"
          style={{ opacity: label4Opacity }}
        >
          <div className="text-left">
            <div className="text-base font-bold text-cyan-400">SENSORY CUES</div>
            <div className="text-xs text-slate-400 max-w-[180px]">
              Intentional sound design, color grading
            </div>
          </div>
        </motion.div>

        {/* Bottom label */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-[82%]"
          style={{ opacity: label5Opacity }}
        >
          <div className="text-center">
            <div className="text-base font-bold text-cyan-400">TASTE & DESIGN</div>
            <div className="text-xs text-slate-400">
              Typography, visual identity, polish
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Labels layer - Mobile: stacked grid below iceberg */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-30 pointer-events-none md:hidden px-4 pb-4"
        style={{ opacity: underwaterOpacity }}
      >
        <div className="grid grid-cols-2 gap-3">
          <motion.div style={{ opacity: label1Opacity }}>
            <div className="text-center p-2 bg-slate-900/50 rounded-lg backdrop-blur-sm">
              <div className="text-xs font-bold text-cyan-400">ATTENTION SCIENCE</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Motion & contrast</div>
            </div>
          </motion.div>

          <motion.div style={{ opacity: label2Opacity }}>
            <div className="text-center p-2 bg-slate-900/50 rounded-lg backdrop-blur-sm">
              <div className="text-xs font-bold text-cyan-400">EMOTIONAL PACING</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Tension & release</div>
            </div>
          </motion.div>

          <motion.div style={{ opacity: label3Opacity }}>
            <div className="text-center p-2 bg-slate-900/50 rounded-lg backdrop-blur-sm">
              <div className="text-xs font-bold text-cyan-400">STORY STRUCTURE</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Hook & payoff</div>
            </div>
          </motion.div>

          <motion.div style={{ opacity: label4Opacity }}>
            <div className="text-center p-2 bg-slate-900/50 rounded-lg backdrop-blur-sm">
              <div className="text-xs font-bold text-cyan-400">SENSORY CUES</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Sound & color</div>
            </div>
          </motion.div>

          <motion.div className="col-span-2" style={{ opacity: label5Opacity }}>
            <div className="text-center p-2 bg-slate-900/50 rounded-lg backdrop-blur-sm">
              <div className="text-xs font-bold text-cyan-400">TASTE & DESIGN</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Typography & polish</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Ambient particles/bubbles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${50 + (i % 3) * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  )
}
