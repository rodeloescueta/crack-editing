"use client"

import { motion } from "framer-motion"
import { ArrowRight, Eye } from "lucide-react"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/ui/gradient-text"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations"

const trustIndicators = [
  "5-hour self-paced course",
  "30-day money-back guarantee",
  "Lifetime access",
]

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Aceternity UI: Background Ripple Effect */}
      <div className="absolute inset-0 z-0">
        <BackgroundRippleEffect rows={11} cols={30} cellSize={48} />
      </div>

      {/* Background gradient overlay - sits above ripple */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/40 via-background/60 to-background pointer-events-none" />

      {/* Subtle purple glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-[2]" />

      <Container className="relative z-10 pointer-events-none">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto pointer-events-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={defaultViewport}
        >
          {/* Badge */}
          <motion.div variants={fadeInDown}>
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm font-medium bg-muted/50 border border-border/50"
            >
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
            highly addictive{" "}
            <span className="inline-block" role="img" aria-label="eyes">
              👀
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
              className="min-h-[48px] px-8 text-base font-semibold"
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
    </section>
  )
}
