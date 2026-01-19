"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface IcebergRevealProps {
  className?: string
}

/**
 * Option C: Single connected SVG iceberg
 * - One continuous shape (tip + underwater connected)
 * - Water line is just a visual overlay
 * - Zoom effect: starts zoomed in on tip, zooms out to reveal full iceberg
 * - Large hexagonal facets with visible edges
 */
export function IcebergRevealC({ className }: IcebergRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end start"],
  })

  // ZOOM EFFECT - Start zoomed in on the tip, zoom out to reveal full iceberg
  // Scale from 2.2 (zoomed in) to 1 (normal view)
  const icebergScale = useTransform(scrollYProgress, [0, 0.4], [2.2, 1])

  // Y position - moves down as it zooms out to keep tip visible, then settles
  const icebergY = useTransform(scrollYProgress, [0, 0.4, 1], [180, 0, -30])

  // Labels parallax
  const labelsY = useTransform(scrollYProgress, [0, 1], [60, -20])

  // Reveal animation - clip from bottom to reveal underwater as you scroll
  // Initially shows only top portion (tip), gradually reveals full iceberg
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5],
    ["inset(0% 0% 60% 0%)", "inset(0% 0% 40% 0%)", "inset(0% 0% 0% 0%)"]
  )

  // Iceberg opacity - subtle fade in
  const icebergOpacity = useTransform(scrollYProgress, [0, 0.15], [0.85, 1])

  // Label opacities - staggered reveal
  const label1Opacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1])
  const label2Opacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1])
  const label3Opacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1])
  const label4Opacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1])
  const label5Opacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1])

  // Connector line opacities - appear with labels (slight delay)
  const line1Opacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1])
  const line2Opacity = useTransform(scrollYProgress, [0.30, 0.45], [0, 1])
  const line3Opacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1])
  const line4Opacity = useTransform(scrollYProgress, [0.40, 0.55], [0, 1])
  const line5Opacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1])

  // Scroll indicator - fades out as user starts scrolling
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-[650px] md:h-[750px] overflow-hidden",
        className
      )}
      role="img"
      aria-label="Iceberg visualization showing viral video complexity"
    >
      {/* Background inherited from parent section */}

      {/* Single connected iceberg SVG */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-[5%] z-10 origin-top"
        style={{
          y: icebergY,
          scale: icebergScale,
          clipPath,
          opacity: icebergOpacity
        }}
      >
        <svg
          width="380"
          height="580"
          viewBox="0 0 380 580"
          className="drop-shadow-2xl"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Glow filters */}
            <filter id="iceGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Water line glow filter */}
            <filter id="waterGlow" x="-50%" y="-200%" width="200%" height="500%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gradients */}
            <linearGradient id="tipGradC" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#d4eef5" />
              <stop offset="100%" stopColor="#8dcce0" />
            </linearGradient>
            <linearGradient id="underwaterGradC" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2a7a9a" />
              <stop offset="30%" stopColor="#1a5a78" />
              <stop offset="60%" stopColor="#0d4058" />
              <stop offset="100%" stopColor="#062535" />
            </linearGradient>

            {/* Water line gradient - extends full width */}
            <linearGradient id="waterLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="20%" stopColor="#22d3ee" stopOpacity="0.3" />
              <stop offset="40%" stopColor="#67e8f9" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#a5f3fc" stopOpacity="1" />
              <stop offset="60%" stopColor="#67e8f9" stopOpacity="0.7" />
              <stop offset="80%" stopColor="#22d3ee" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* ===== TIP SECTION (Above water - y: 0-150) ===== */}
          <g filter="url(#iceGlow)">
            {/* Main tip silhouette */}
            <polygon
              points="190,5 140,50 115,100 130,145 190,155 250,145 265,100 240,50"
              fill="url(#tipGradC)"
            />

            {/* Tip facets - irregular natural look */}
            <polygon points="190,5 140,50 165,65 190,45" fill="#ffffff" opacity="0.95" />
            <polygon points="190,5 240,50 215,65 190,45" fill="#f0f8fa" opacity="0.9" />
            <polygon points="140,50 115,100 145,105 165,65" fill="#d8eef5" opacity="0.85" />
            <polygon points="240,50 265,100 235,105 215,65" fill="#c8e5ee" opacity="0.8" />
            <polygon points="165,65 145,105 170,120 190,90 190,45" fill="#e5f2f7" opacity="0.9" />
            <polygon points="215,65 235,105 210,120 190,90 190,45" fill="#d0eaf2" opacity="0.85" />
            <polygon points="115,100 130,145 160,135 145,105" fill="#a8d8e8" opacity="0.75" />
            <polygon points="265,100 250,145 220,135 235,105" fill="#98cee0" opacity="0.7" />
            <polygon points="145,105 160,135 190,140 170,120" fill="#b8e0ec" opacity="0.8" />
            <polygon points="235,105 220,135 190,140 210,120" fill="#a8d4e6" opacity="0.75" />
            <polygon points="170,120 190,140 210,120 190,90" fill="#c8e8f0" opacity="0.85" />
            <polygon points="130,145 190,155 160,135" fill="#7ec8e3" opacity="0.65" />
            <polygon points="250,145 190,155 220,135" fill="#6ebdd8" opacity="0.6" />

            {/* Tip edge highlight */}
            <polyline
              points="190,5 140,50 115,100 130,145 190,155 250,145 265,100 240,50 190,5"
              fill="none" stroke="#ffffff" strokeWidth="0.8" opacity="0.5"
            />
          </g>

          {/* ===== WATER LINE (y: 155-165) - Wavy water surface ===== */}
          <g filter="url(#waterGlow)">
            {/* Main wavy water line - more pronounced waves */}
            <path
              d="M-800,157
                 C-750,147 -650,167 -600,157 C-550,147 -450,167 -400,157
                 C-350,147 -250,167 -200,157 C-150,147 -50,167 0,157
                 C50,147 150,167 200,157 C250,147 350,167 400,157
                 C450,147 550,167 600,157 C650,147 750,167 800,157
                 C850,147 950,167 1000,157 C1050,147 1150,167 1200,157"
              stroke="url(#waterLineGrad)"
              strokeWidth="5"
              fill="none"
            />
            {/* Bright center wave */}
            <path
              d="M-800,157
                 C-750,148 -650,166 -600,157 C-550,148 -450,166 -400,157
                 C-350,148 -250,166 -200,157 C-150,148 -50,166 0,157
                 C50,148 150,166 200,157 C250,148 350,166 400,157
                 C450,148 550,166 600,157 C650,148 750,166 800,157
                 C850,148 950,166 1000,157 C1050,148 1150,166 1200,157"
              stroke="#a5f3fc"
              strokeWidth="2"
              fill="none"
              opacity="0.95"
            />
            {/* Upper ripple wave - offset phase, more visible */}
            <path
              d="M-600,150
                 C-550,143 -450,157 -400,150 C-350,143 -250,157 -200,150
                 C-150,143 -50,157 0,150 C50,143 150,157 200,150
                 C250,143 350,157 400,150 C450,143 550,157 600,150
                 C650,143 750,157 800,150 C850,143 950,157 1000,150"
              stroke="#67e8f9"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
            {/* Lower ripple wave - offset phase */}
            <path
              d="M-600,164
                 C-550,171 -450,157 -400,164 C-350,171 -250,157 -200,164
                 C-150,171 -50,157 0,164 C50,171 150,157 200,164
                 C250,171 350,157 400,164 C450,171 550,157 600,164
                 C650,171 750,157 800,164 C850,171 950,157 1000,164"
              stroke="#22d3ee"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
          </g>

          {/* ===== UNDERWATER SECTION (Below water - y: 155-570) ===== */}
          <g>
            {/* Main underwater body - connected to tip */}
            <polygon
              points="130,155 100,200 70,280 80,380 110,460 160,520 190,550 220,520 270,460 300,380 310,280 280,200 250,155"
              fill="url(#underwaterGradC)"
              opacity="0.95"
            />

            {/* Large hexagonal facets with visible edges */}
            {/* Row 1 - just below water */}
            <polygon points="130,155 100,200 140,210 175,175 190,160" fill="#2a7595" stroke="#3a95b5" strokeWidth="1.2" opacity="0.85" />
            <polygon points="250,155 280,200 240,210 205,175 190,160" fill="#256a88" stroke="#3590a8" strokeWidth="1.2" opacity="0.8" />
            <polygon points="175,175 190,160 205,175 200,200 190,210 180,200" fill="#308090" stroke="#40a0b8" strokeWidth="1" opacity="0.9" />

            {/* Row 2 */}
            <polygon points="100,200 70,280 110,290 140,240 140,210" fill="#1e6580" stroke="#2e8598" strokeWidth="1.2" opacity="0.75" />
            <polygon points="140,210 140,240 180,250 200,200 175,175" fill="#287088" stroke="#3890a5" strokeWidth="1.2" opacity="0.8" />
            <polygon points="205,175 200,200 180,250 240,240 240,210" fill="#226878" stroke="#3288a0" strokeWidth="1.2" opacity="0.75" />
            <polygon points="280,200 310,280 270,290 240,240 240,210" fill="#1a5a70" stroke="#2a7a90" strokeWidth="1.2" opacity="0.7" />

            {/* Row 3 - large center hexagons */}
            <polygon points="70,280 80,380 120,370 130,310 110,290" fill="#155570" stroke="#256a85" strokeWidth="1.2" opacity="0.65" />
            <polygon points="110,290 130,310 170,320 180,250 140,240" fill="#1a6078" stroke="#2a7a95" strokeWidth="1.2" opacity="0.7" />
            <polygon points="180,250 170,320 210,330 220,250 200,200" fill="#206a80" stroke="#308aa0" strokeWidth="1.2" opacity="0.75" />
            <polygon points="200,200 220,250 210,330 250,320 240,240" fill="#185d72" stroke="#287a90" strokeWidth="1.2" opacity="0.7" />
            <polygon points="240,240 250,320 270,310 270,290 310,280 300,380" fill="#145065" stroke="#246a80" strokeWidth="1.2" opacity="0.6" />

            {/* Row 4 */}
            <polygon points="80,380 110,460 145,440 150,370 120,370" fill="#104560" stroke="#205a75" strokeWidth="1.2" opacity="0.55" />
            <polygon points="120,370 150,370 170,420 170,320 130,310" fill="#145068" stroke="#246580" strokeWidth="1.2" opacity="0.6" />
            <polygon points="170,320 170,420 210,420 210,330" fill="#186075" stroke="#287590" strokeWidth="1.2" opacity="0.65" />
            <polygon points="210,330 210,420 230,370 250,370 250,320" fill="#145570" stroke="#256a85" strokeWidth="1.2" opacity="0.6" />
            <polygon points="250,320 250,370 235,440 270,460 300,380 270,310" fill="#0f4558" stroke="#1f5a70" strokeWidth="1.2" opacity="0.5" />

            {/* Row 5 - narrowing */}
            <polygon points="110,460 160,520 175,480 170,420 145,440" fill="#0c3d50" stroke="#1c5065" strokeWidth="1.2" opacity="0.5" />
            <polygon points="145,440 170,420 170,480 175,480" fill="#104555" stroke="#20586a" strokeWidth="1" opacity="0.55" />
            <polygon points="170,420 210,420 210,480 170,480" fill="#125060" stroke="#226575" strokeWidth="1.2" opacity="0.6" />
            <polygon points="210,420 230,370 235,440 210,480" fill="#0f4858" stroke="#1f5a6d" strokeWidth="1" opacity="0.55" />
            <polygon points="235,440 270,460 220,520 205,480 210,480" fill="#0a3848" stroke="#1a4a5d" strokeWidth="1.2" opacity="0.45" />

            {/* Bottom point */}
            <polygon points="160,520 190,550 175,480" fill="#083040" stroke="#153d50" strokeWidth="1" opacity="0.4" />
            <polygon points="175,480 190,550 205,480" fill="#0a3545" stroke="#184555" strokeWidth="1" opacity="0.45" />
            <polygon points="205,480 190,550 220,520" fill="#072838" stroke="#123848" strokeWidth="1" opacity="0.35" />

            {/* Ambient glow spots underwater */}
            <ellipse cx="170" cy="300" rx="35" ry="25" fill="#30a0c0" opacity="0.08" />
            <ellipse cx="220" cy="400" rx="25" ry="20" fill="#2890b0" opacity="0.06" />
            <ellipse cx="140" cy="420" rx="20" ry="15" fill="#2080a0" opacity="0.05" />
          </g>
        </svg>
      </motion.div>

      {/* Connector Lines Layer - Desktop (CSS-based) */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
        {/* Line 1: ATTENTION SCIENCE → Iceberg (upper-left) */}
        <motion.div
          className="absolute"
          style={{
            left: '33%',
            top: '40%',
            width: '14%',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(34,211,238,0.7), rgba(34,211,238,0.2))',
            transformOrigin: 'left center',
            transform: 'rotate(-8deg)',
            opacity: line1Opacity,
          }}
        >
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400"
            style={{ boxShadow: '0 0 10px rgba(34,211,238,0.9)' }}
          />
        </motion.div>

        {/* Line 2: EMOTIONAL PACING → Iceberg (upper-right) */}
        <motion.div
          className="absolute"
          style={{
            right: '33%',
            top: '44%',
            width: '14%',
            height: '2px',
            background: 'linear-gradient(270deg, rgba(34,211,238,0.7), rgba(34,211,238,0.2))',
            transformOrigin: 'right center',
            transform: 'rotate(8deg)',
            opacity: line2Opacity,
          }}
        >
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400"
            style={{ boxShadow: '0 0 10px rgba(34,211,238,0.9)' }}
          />
        </motion.div>

        {/* Line 3: STORY STRUCTURE → Iceberg (mid-left) */}
        <motion.div
          className="absolute"
          style={{
            left: '31%',
            top: '56%',
            width: '16%',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(34,211,238,0.7), rgba(34,211,238,0.2))',
            transformOrigin: 'left center',
            transform: 'rotate(-5deg)',
            opacity: line3Opacity,
          }}
        >
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400"
            style={{ boxShadow: '0 0 10px rgba(34,211,238,0.9)' }}
          />
        </motion.div>

        {/* Line 4: SENSORY CUES → Iceberg (mid-right) */}
        <motion.div
          className="absolute"
          style={{
            right: '31%',
            top: '60%',
            width: '16%',
            height: '2px',
            background: 'linear-gradient(270deg, rgba(34,211,238,0.7), rgba(34,211,238,0.2))',
            transformOrigin: 'right center',
            transform: 'rotate(5deg)',
            opacity: line4Opacity,
          }}
        >
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400"
            style={{ boxShadow: '0 0 10px rgba(34,211,238,0.9)' }}
          />
        </motion.div>

        {/* Line 5: TASTE & DESIGN → Iceberg (bottom) */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: '66%',
            width: '2px',
            height: '8%',
            background: 'linear-gradient(0deg, rgba(34,211,238,0.7), rgba(34,211,238,0.2))',
            opacity: line5Opacity,
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400"
            style={{ boxShadow: '0 0 10px rgba(34,211,238,0.9)' }}
          />
        </motion.div>
      </div>

      {/* Labels layer - Desktop */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none hidden md:block"
        style={{ y: labelsY }}
      >
        <motion.div
          className="absolute left-[22%] top-[42%]"
          style={{ opacity: label1Opacity }}
          initial={{ scale: 0.8, filter: "blur(4px)" }}
          whileInView={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-right drop-shadow-lg relative">
            <motion.div
              className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="text-base font-bold text-cyan-300 relative" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>ATTENTION SCIENCE</div>
            <div className="text-sm text-slate-200/90 max-w-[180px] relative" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}>
              Using motion, contrast, & sound to guide the eye
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute left-[20%] top-[58%]"
          style={{ opacity: label3Opacity }}
          initial={{ scale: 0.8, filter: "blur(4px)" }}
          whileInView={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-right drop-shadow-lg relative">
            <motion.div
              className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="text-base font-bold text-cyan-300 relative" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>STORY STRUCTURE</div>
            <div className="text-sm text-slate-200/90 max-w-[180px] relative" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}>
              Clear hook, tension, payoff
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute right-[22%] top-[47%]"
          style={{ opacity: label2Opacity }}
          initial={{ scale: 0.8, filter: "blur(4px)" }}
          whileInView={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-left drop-shadow-lg relative">
            <motion.div
              className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="text-base font-bold text-cyan-300 relative" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>EMOTIONAL PACING</div>
            <div className="text-sm text-slate-200/90 max-w-[180px] relative" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}>
              Building tension, releasing it, creating the arc
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute right-[20%] top-[63%]"
          style={{ opacity: label4Opacity }}
          initial={{ scale: 0.8, filter: "blur(4px)" }}
          whileInView={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-left drop-shadow-lg relative">
            <motion.div
              className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="text-base font-bold text-cyan-300 relative" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>SENSORY CUES</div>
            <div className="text-sm text-slate-200/90 max-w-[180px] relative" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}>
              Intentional sound design, color grading
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-[78%]"
          style={{ opacity: label5Opacity }}
          initial={{ scale: 0.8, filter: "blur(4px)" }}
          whileInView={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-center drop-shadow-lg relative">
            <motion.div
              className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="text-base font-bold text-cyan-300 relative" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>TASTE & DESIGN</div>
            <div className="text-sm text-slate-200/90 relative" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}>Typography, visual identity, polish</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Labels layer - Mobile - Positioned around iceberg */}
      <div className="absolute inset-0 z-30 pointer-events-none md:hidden">
        {/* Top row - beside the tip */}
        <motion.div
          className="absolute left-3 top-[38%]"
          style={{ opacity: label1Opacity }}
        >
          <div className="text-center p-2 bg-slate-900/80 rounded-lg backdrop-blur-sm border border-cyan-500/30 max-w-[120px]">
            <div className="text-xs font-bold text-cyan-300">ATTENTION SCIENCE</div>
            <div className="text-[10px] text-slate-200/80 mt-0.5">Motion & contrast</div>
          </div>
        </motion.div>
        <motion.div
          className="absolute right-3 top-[38%]"
          style={{ opacity: label2Opacity }}
        >
          <div className="text-center p-2 bg-slate-900/80 rounded-lg backdrop-blur-sm border border-cyan-500/30 max-w-[120px]">
            <div className="text-xs font-bold text-cyan-300">EMOTIONAL PACING</div>
            <div className="text-[10px] text-slate-200/80 mt-0.5">Tension & release</div>
          </div>
        </motion.div>

        {/* Middle row */}
        <motion.div
          className="absolute left-3 top-[54%]"
          style={{ opacity: label3Opacity }}
        >
          <div className="text-center p-2 bg-slate-900/80 rounded-lg backdrop-blur-sm border border-cyan-500/30 max-w-[120px]">
            <div className="text-xs font-bold text-cyan-300">STORY STRUCTURE</div>
            <div className="text-[10px] text-slate-200/80 mt-0.5">Hook & payoff</div>
          </div>
        </motion.div>
        <motion.div
          className="absolute right-3 top-[54%]"
          style={{ opacity: label4Opacity }}
        >
          <div className="text-center p-2 bg-slate-900/80 rounded-lg backdrop-blur-sm border border-cyan-500/30 max-w-[120px]">
            <div className="text-xs font-bold text-cyan-300">SENSORY CUES</div>
            <div className="text-[10px] text-slate-200/80 mt-0.5">Sound & color</div>
          </div>
        </motion.div>

        {/* Bottom - centered */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-[70%]"
          style={{ opacity: label5Opacity }}
        >
          <div className="text-center p-2 bg-slate-900/80 rounded-lg backdrop-blur-sm border border-cyan-500/30">
            <div className="text-xs font-bold text-cyan-300">TASTE & DESIGN</div>
            <div className="text-[10px] text-slate-200/80 mt-0.5">Typography & polish</div>
          </div>
        </motion.div>
      </div>

      {/* "VIRAL VIDEO" label - prominent with shimmer animation */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 text-center z-40">
        <span
          className="text-3xl md:text-5xl lg:text-3xl font-black tracking-widest animate-text-shimmer"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(103, 232, 249, 0.8)) drop-shadow(0 0 40px rgba(103, 232, 249, 0.5)) drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
          }}
        >
          VIRAL VIDEO
        </span>
      </div>

      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400/30 rounded-full"
            style={{
              left: `${20 + i * 6}%`,
              top: `${40 + (i % 3) * 15}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.5, 0.15],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <span className="text-sm text-cyan-300/80 font-medium tracking-wide">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-cyan-400/70" />
        </motion.div>
      </motion.div>
    </div>
  )
}
