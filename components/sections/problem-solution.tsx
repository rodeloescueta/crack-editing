"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout"
import { ComparisonCard } from "@/components/ui/comparison-card"
// Toggle between versions for comparison:
// - IcebergReveal: Original version
// - IcebergRevealA: Option A - Enhanced separate SVGs
// - IcebergRevealC: Option C - Single connected SVG
// import { IcebergRevealA as IcebergReveal } from "@/components/ui/iceberg-reveal-a"
import { IcebergRevealC as IcebergReveal } from "@/components/ui/iceberg-reveal-c"
// import { IcebergReveal } from "@/components/ui/iceberg-reveal"
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations"

const problemItems = [
  "You edit for hours but videos still feel \"off\"",
  "You copy trending formats but don't get the same results",
  "You don't know why some videos explode and others flop",
  "You're guessing what works instead of knowing",
  "You're burning out trying to keep up with the algorithm",
]

const solutionItems = [
  "Learn the psychology behind why people watch (or scroll)",
  "Master a proven framework that works across platforms",
  "Understand the 6 elements that make videos addictive",
  "Edit with intention, not guesswork",
  "Create content that compounds instead of expires",
]

export function ProblemSolutionSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-card/20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Headline */}
          <motion.div className="text-center mb-8" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto">
              most viral videos look simple.{" "}
              <span className="text-muted-foreground">
                the real work happens underneath.
              </span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Iceberg Visualization - Full viewport width */}
        <IcebergReveal className="my-8 w-screen relative left-1/2 -translate-x-1/2" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Cards Container */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Problem Card */}
            <motion.div variants={slideInLeft}>
              <ComparisonCard
                type="negative"
                title="THE PROBLEM"
                subtitle="Why most videos fail"
                items={problemItems}
              />
            </motion.div>

            {/* Solution Card */}
            <motion.div variants={slideInRight}>
              <ComparisonCard
                type="positive"
                title="THE SOLUTION"
                subtitle="The crack editing difference"
                items={solutionItems}
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
