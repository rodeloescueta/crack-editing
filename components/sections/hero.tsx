"use client"

import { motion } from "framer-motion"
import { ArrowRight, Eye, ChevronDown } from "lucide-react"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/ui/gradient-text"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"
import { FlipWords } from "@/components/ui/flip-words"
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations"

const heroFlipWords = [
  "highly addictive",
  "scroll-stopping",
  "unforgettable",
  "irresistible",
]

const trustIndicators = [
  "5-hour self-paced course",
  "30-day money-back guarantee",
  "Lifetime access",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[oklch(0.96_0.015_210)] via-[oklch(0.94_0.02_210)] to-[oklch(0.92_0.025_210)]">
      {/* Aceternity UI: Background Ripple Effect */}
      <div className="absolute inset-0 z-0">
        <BackgroundRippleEffect rows={11} cols={30} cellSize={48} />
      </div>

      {/* Background gradient overlay - sits above ripple */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-[oklch(0.90_0.02_210)]/20 pointer-events-none" />

      {/* Subtle blue glow effect - lighter for ice-blue theme */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[oklch(0.80_0.08_210)]/30 rounded-full blur-[150px] pointer-events-none z-[2]" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
        {/* Large slow-moving orbs */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          style={{ top: "10%", left: "10%" }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-accent/5 blur-3xl"
          style={{ top: "60%", right: "15%" }}
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small floating dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
            style={{
              top: `${15 + (i * 10)}%`,
              left: `${10 + (i * 11)}%`,
            }}
            animate={{
              y: [0, -30 - (i * 5), 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Container className="relative z-10 pointer-events-none">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto pointer-events-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={defaultViewport}
        >
          {/* Badge with glow animation */}
          <motion.div variants={fadeInDown}>
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm font-medium bg-muted/50 border border-primary/20 shadow-[0_0_20px_rgba(234,88,12,0.15)] animate-badge-glow"
            >
              <motion.span
                className="inline-block w-2 h-2 rounded-full bg-primary mr-2"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-primary font-semibold">3+ billion views</span>
              <span className="text-muted-foreground ml-1">generated for our clients</span>
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-display mb-6"
            variants={fadeInUp}
          >
            make your{" "}
            <GradientText variant="orange">
              social media
              <br />
              videos
            </GradientText>
            <br />
            <span className="relative inline-flex items-center">
              <FlipWords words={heroFlipWords} className="text-foreground" />
              {/* Animated Eye - positioned absolutely so it doesn't move with word transitions */}
              <motion.span
                className="absolute -right-12 md:-right-16 top-1/2 -translate-y-1/2 text-5xl md:text-6xl origin-center"
                role="img"
                aria-label="eyes"
                animate={{
                  y: [0, -8, 0],           // Bouncing
                  x: [0, 3, -3, 0],        // Looking around
                  scaleY: [1, 1, 1, 0.1, 1, 1, 1, 1], // Blinking
                  filter: [
                    "drop-shadow(0 0 0px rgba(234,88,12,0))",
                    "drop-shadow(0 0 12px rgba(234,88,12,0.6))",
                    "drop-shadow(0 0 0px rgba(234,88,12,0))",
                  ], // Pulsing glow
                }}
                transition={{
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scaleY: { duration: 4, repeat: Infinity, times: [0, 0.4, 0.45, 0.5, 0.55, 0.6, 0.8, 1] },
                  filter: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                👀
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-subtitle max-w-2xl mb-8"
            variants={fadeInUp}
          >
            crack editing™ is an online training program that teaches a psychology-driven
            editing system for{" "}
            <span className="text-primary font-medium">attention</span>,{" "}
            <span className="text-primary font-medium">emotion</span>, and{" "}
            <span className="text-primary font-medium">retention</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto"
            variants={fadeInUp}
          >
            <Button
              size="lg"
              className="min-h-[48px] px-8 text-base font-semibold cta-pulse"
            >
              enroll in crack editing™
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-h-[48px] px-8 text-base font-semibold"
            >
              <Eye className="mr-2 h-5 w-5" />
              see examples
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            variants={fadeInUp}
          >
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="flex items-center text-small"
              >
                <svg
                  className="w-4 h-4 mr-2 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {indicator}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
