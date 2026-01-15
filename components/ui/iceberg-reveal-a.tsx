"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface IcebergRevealProps {
  className?: string
}

/**
 * Option A: Enhanced SVG with realistic geometry
 * - Separate tip and underwater elements
 * - More realistic irregular shapes
 * - Large hexagonal facets with visible edges
 * - Glow effects
 */
export function IcebergRevealA({ className }: IcebergRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax transforms
  const waterY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const icebergTopY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const icebergBottomY = useTransform(scrollYProgress, [0, 1], [100, -30])
  const labelsY = useTransform(scrollYProgress, [0, 1], [150, -20])

  // Reveal animation
  const underwaterOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.6],
    ["inset(40% 0 60% 0)", "inset(0% 0 0% 0)"]
  )

  // Label opacities
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
      aria-label="Iceberg visualization showing viral video complexity"
    >
      {/* Background gradient - deep ocean */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0c2445] to-[#051525]" />

      {/* Water surface layer with glow */}
      <motion.div
        className="absolute inset-x-0 top-[35%] h-2 z-20"
        style={{ y: waterY }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        <div className="absolute inset-0 bg-cyan-400/30 blur-md" />
        <div className="absolute -top-1 inset-x-0 h-4 bg-gradient-to-b from-cyan-400/20 to-transparent blur-sm" />
      </motion.div>

      {/* Iceberg tip (above water) - irregular realistic shape */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-[12%] z-10"
        style={{ y: icebergTopY }}
      >
        <svg
          width="240"
          height="200"
          viewBox="0 0 240 200"
          className="drop-shadow-lg"
        >
          {/* Glow filter */}
          <defs>
            <filter id="tipGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="tipGradientA" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#e8f4f8" />
              <stop offset="70%" stopColor="#b8e0ec" />
              <stop offset="100%" stopColor="#7ec8e3" />
            </linearGradient>
          </defs>

          {/* Main irregular tip shape */}
          <g filter="url(#tipGlow)">
            {/* Back faces (darker) */}
            <polygon points="120,8 85,45 70,90 90,130 120,140" fill="#a8d4e6" />
            <polygon points="120,8 155,45 170,90 150,130 120,140" fill="#8ec5d6" />

            {/* Front faces (lighter) */}
            <polygon points="120,8 85,45 95,75 120,60" fill="#ffffff" opacity="0.9" />
            <polygon points="120,8 155,45 145,75 120,60" fill="#e8f4f8" opacity="0.85" />
            <polygon points="85,45 70,90 95,100 95,75" fill="#d0eaf2" opacity="0.8" />
            <polygon points="155,45 170,90 145,100 145,75" fill="#b8e0ec" opacity="0.75" />
            <polygon points="95,75 95,100 120,115 120,60" fill="#e0f0f5" opacity="0.85" />
            <polygon points="145,75 145,100 120,115 120,60" fill="#c8e5ee" opacity="0.8" />
            <polygon points="70,90 90,130 105,120 95,100" fill="#a8d4e6" opacity="0.7" />
            <polygon points="170,90 150,130 135,120 145,100" fill="#98c8db" opacity="0.65" />
            <polygon points="95,100 105,120 120,115" fill="#b8e0ec" opacity="0.75" />
            <polygon points="145,100 135,120 120,115" fill="#a8d4e6" opacity="0.7" />
            <polygon points="90,130 120,140 105,120" fill="#7ec8e3" opacity="0.6" />
            <polygon points="150,130 120,140 135,120" fill="#6ebdd8" opacity="0.55" />

            {/* Edge highlights */}
            <polyline points="120,8 85,45 70,90 90,130 120,140 150,130 170,90 155,45 120,8"
              fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.4" />
          </g>

          {/* Water line fade at bottom */}
          <polygon
            points="60,170 90,130 120,140 150,130 180,170"
            fill="url(#waterFadeA)"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="waterFadeA" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4db8d6" />
              <stop offset="100%" stopColor="#0c2445" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* "VIRAL VIDEO" label */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
          <span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
            VIRAL VIDEO
          </span>
          <div className="text-xs text-cyan-300 mt-1">What people see</div>
        </div>
      </motion.div>

      {/* Iceberg underwater body - hexagonal facets */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-[36%] z-5"
        style={{
          y: icebergBottomY,
          opacity: underwaterOpacity,
          clipPath,
        }}
      >
        <svg
          width="420"
          height="420"
          viewBox="0 0 420 420"
          className="drop-shadow-2xl"
        >
          <defs>
            {/* Underwater glow */}
            <filter id="underwaterGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="underwaterGradA" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a5a7a" />
              <stop offset="50%" stopColor="#0d3d5c" />
              <stop offset="100%" stopColor="#082a42" />
            </linearGradient>
          </defs>

          <g filter="url(#underwaterGlow)">
            {/* Main body outline - flat top connecting to tip */}
            <polygon
              points="150,0 270,0 310,40 340,120 330,220 290,310 210,380 130,310 90,220 80,120 110,40"
              fill="url(#underwaterGradA)"
              opacity="0.9"
            />

            {/* Large hexagonal facets with edges */}
            {/* Top row */}
            <polygon points="150,0 210,0 210,50 170,60 130,40" fill="#1e6a8a" stroke="#2a8ab0" strokeWidth="1" opacity="0.85" />
            <polygon points="210,0 270,0 290,40 250,60 210,50" fill="#176078" stroke="#2a8ab0" strokeWidth="1" opacity="0.8" />

            {/* Second row - large hexagons */}
            <polygon points="130,40 170,60 160,120 110,100 80,60" fill="#145570" stroke="#1e7a9a" strokeWidth="1" opacity="0.75" />
            <polygon points="170,60 210,50 250,60 240,120 200,130 160,120" fill="#1a6585" stroke="#2088a8" strokeWidth="1" opacity="0.8" />
            <polygon points="250,60 290,40 320,80 300,130 240,120" fill="#12506a" stroke="#1e7a9a" strokeWidth="1" opacity="0.7" />

            {/* Middle row - largest hexagons */}
            <polygon points="80,60 110,100 100,180 70,160 60,100" fill="#0d4560" stroke="#1a6a88" strokeWidth="1" opacity="0.65" />
            <polygon points="110,100 160,120 150,190 100,180" fill="#145068" stroke="#1e7590" strokeWidth="1" opacity="0.7" />
            <polygon points="160,120 200,130 210,200 150,190" fill="#186080" stroke="#2288a5" strokeWidth="1" opacity="0.75" />
            <polygon points="200,130 240,120 260,190 210,200" fill="#145575" stroke="#1e8098" strokeWidth="1" opacity="0.7" />
            <polygon points="240,120 300,130 290,190 260,190" fill="#0f4a62" stroke="#1a6a85" strokeWidth="1" opacity="0.65" />
            <polygon points="300,130 320,80 350,140 330,200 290,190" fill="#0a3d55" stroke="#156075" strokeWidth="1" opacity="0.6" />

            {/* Lower section */}
            <polygon points="70,160 100,180 90,260 60,230" fill="#0a3a50" stroke="#145568" strokeWidth="1" opacity="0.55" />
            <polygon points="100,180 150,190 140,270 90,260" fill="#0d4058" stroke="#186578" strokeWidth="1" opacity="0.6" />
            <polygon points="150,190 210,200 200,280 140,270" fill="#115570" stroke="#1a7590" strokeWidth="1" opacity="0.65" />
            <polygon points="210,200 260,190 260,280 200,280" fill="#0f4d65" stroke="#187088" strokeWidth="1" opacity="0.6" />
            <polygon points="260,190 290,190 300,260 260,280" fill="#0a4055" stroke="#155a70" strokeWidth="1" opacity="0.55" />
            <polygon points="290,190 330,200 320,250 300,260" fill="#083548" stroke="#124a5d" strokeWidth="1" opacity="0.5" />

            {/* Bottom point */}
            <polygon points="90,260 140,270 130,330 100,310" fill="#083045" stroke="#104050" strokeWidth="1" opacity="0.5" />
            <polygon points="140,270 200,280 180,350 130,330" fill="#0a3850" stroke="#125060" strokeWidth="1" opacity="0.55" />
            <polygon points="200,280 260,280 240,350 180,350" fill="#0c4058" stroke="#145568" strokeWidth="1" opacity="0.5" />
            <polygon points="260,280 300,260 280,320 240,350" fill="#072838" stroke="#0e3a48" strokeWidth="1" opacity="0.45" />

            {/* Final point */}
            <polygon points="130,330 180,350 210,390 160,360" fill="#062530" stroke="#0a3040" strokeWidth="1" opacity="0.4" />
            <polygon points="180,350 240,350 210,390" fill="#083040" stroke="#0c4050" strokeWidth="1" opacity="0.45" />
            <polygon points="240,350 280,320 250,360 210,390" fill="#052028" stroke="#082830" strokeWidth="1" opacity="0.35" />

            {/* Ambient glow spots */}
            <circle cx="180" cy="150" r="40" fill="#2090b0" opacity="0.1" />
            <circle cx="250" cy="250" r="30" fill="#1a80a0" opacity="0.08" />
          </g>
        </svg>
      </motion.div>

      {/* Labels layer - Desktop */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none hidden md:block"
        style={{ y: labelsY }}
      >
        <motion.div className="absolute left-[15%] top-[45%]" style={{ opacity: label1Opacity }}>
          <div className="text-right">
            <div className="text-base font-bold text-cyan-400">ATTENTION SCIENCE</div>
            <div className="text-xs text-slate-400 max-w-[180px]">
              Using motion, contrast, & sound to guide the eye
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute left-[12%] top-[62%]" style={{ opacity: label3Opacity }}>
          <div className="text-right">
            <div className="text-base font-bold text-cyan-400">STORY STRUCTURE</div>
            <div className="text-xs text-slate-400 max-w-[180px]">
              Clear hook, tension, payoff
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute right-[15%] top-[50%]" style={{ opacity: label2Opacity }}>
          <div className="text-left">
            <div className="text-base font-bold text-cyan-400">EMOTIONAL PACING</div>
            <div className="text-xs text-slate-400 max-w-[180px]">
              Building tension, releasing it, creating the arc
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute right-[12%] top-[67%]" style={{ opacity: label4Opacity }}>
          <div className="text-left">
            <div className="text-base font-bold text-cyan-400">SENSORY CUES</div>
            <div className="text-xs text-slate-400 max-w-[180px]">
              Intentional sound design, color grading
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute left-1/2 -translate-x-1/2 top-[82%]" style={{ opacity: label5Opacity }}>
          <div className="text-center">
            <div className="text-base font-bold text-cyan-400">TASTE & DESIGN</div>
            <div className="text-xs text-slate-400">Typography, visual identity, polish</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Labels layer - Mobile */}
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

      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${15 + i * 7}%`,
              top: `${45 + (i % 4) * 12}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
