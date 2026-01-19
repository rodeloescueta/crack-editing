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
import { GlowingCard } from "@/components/ui/glowing-card"
import {
  fadeInUp,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations"

const features = [
  {
    icon: Zap,
    title: "Proven Hook Strategies",
    description:
      "Learn what makes someone stop scrolling and keep watching. Design openings intentionally.",
    // Column 1, Row 1
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/4]",
  },
  {
    icon: Eye,
    title: "The Reasons People Keep Watching",
    description:
      "Understand why certain edits feel satisfying. Master pacing, emotion, and timing.",
    // Column 2 - TALL, spans 2 rows
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:1/4/3/7]",
  },
  {
    icon: LayoutGrid,
    title: "The Full Framework",
    description:
      "A simple system you can use on any video to guide your editing decisions.",
    // Column 3, Row 1
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/7/2/10]",
  },
  {
    icon: Video,
    title: "Real Edits, Step by Step",
    description:
      "Watch real videos get edited from start to finish with real-time decisions.",
    // Column 1, Row 2
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/4]",
  },
  {
    icon: Wrench,
    title: "Practice Tools & Examples",
    description:
      "Apply what you're learning to your own projects right away.",
    // Column 3, Row 2
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/7/3/10]",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Updates",
    description:
      "As platforms change, the course is updated to reflect what still works.",
    // Column 4 - TALL, spans 2 rows
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:1/10/3/13]",
  },
]

export function WhatYouGetSection() {
  return (
    <section className="py-20 md:py-28 section-dark">
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

          {/* Features Grid with Glowing Effect - Bento Layout */}
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2">
            {features.map((feature, index) => (
              <GlowingCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className={feature.area}
                index={index}
              />
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  )
}
