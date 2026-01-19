"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout"
import { ComparisonCard } from "@/components/ui/comparison-card"
import { Highlight } from "@/components/ui/hero-highlight"
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
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#0a1628] via-[#0c2445] to-[#051525]">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Headline */}
          <motion.div className="text-center mb-8" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto text-white">
              most viral videos look simple.{" "}
              <Highlight>the real work happens underneath.</Highlight>
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
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-7xl mx-auto px-4">
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

      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative block w-full h-[60px] md:h-[80px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"
            className="fill-[oklch(0.90_0.02_210)]"
          />
          <path
            d="M0,80 C300,120 600,40 900,80 C1050,100 1150,60 1200,80 L1200,120 L0,120 Z"
            className="fill-[oklch(0.90_0.02_210)]"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  )
}
