"use client"

import { motion } from "framer-motion"
import {
  Zap,
  Eye,
  LayoutGrid,
  Video,
  Wrench,
  RefreshCw,
} from "lucide-react"
import { Container } from "@/components/layout"
import { GradientText } from "@/components/ui/gradient-text"
import { FeatureCard } from "@/components/ui/feature-card"
import {
  fadeInUp,
  staggerContainer,
  staggerContainerSlow,
  defaultViewport,
} from "@/lib/animations"

const features = [
  {
    icon: Zap,
    title: "Proven Hook Strategies",
    description:
      "Learn what makes someone stop scrolling and keep watching. Design openings intentionally.",
  },
  {
    icon: Eye,
    title: "The Reasons People Keep Watching",
    description:
      "Understand why certain edits feel satisfying. Master pacing, emotion, and timing.",
  },
  {
    icon: LayoutGrid,
    title: "The Full Framework",
    description:
      "A simple system you can use on any video to guide your editing decisions.",
  },
  {
    icon: Video,
    title: "Real Edits, Step by Step",
    description:
      "Watch real videos get edited from start to finish with real-time decisions.",
  },
  {
    icon: Wrench,
    title: "Practice Tools & Examples",
    description:
      "Apply what you're learning to your own projects right away.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Updates",
    description:
      "As platforms change, the course is updated to reflect what still works.",
  },
]

export function WhatYouGetSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-card/20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <GradientText variant="purple">what you get</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A complete, step-by-step system for editing videos that feel easier
              to watch and keep people watching longer.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
