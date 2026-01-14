"use client"

import { motion } from "framer-motion"
import {
  Eye,
  Sparkles,
  Users,
  LayoutGrid,
  PlayCircle,
  Clapperboard,
} from "lucide-react"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import { ModuleCard } from "@/components/ui/module-card"
import {
  fadeInUp,
  staggerContainer,
  staggerContainerSlow,
  defaultViewport,
} from "@/lib/animations"
import { ArrowRight } from "lucide-react"

const modules = [
  {
    moduleNumber: 1,
    title: "Why People Stop Scrolling (Or Don't)",
    description:
      "Understand the psychology behind the first 3 seconds that make or break your video.",
    bullets: [
      "The scroll-stopping triggers",
      "Pattern interrupts that work",
      "Hook psychology deep dive",
    ],
    icon: Eye,
  },
  {
    moduleNumber: 2,
    title: "Tiny Changes That Turn Videos Into Bangers",
    description:
      "Small edits that create massive impact on viewer retention and engagement.",
    bullets: [
      "Micro-adjustments that matter",
      "Timing and pacing secrets",
      "Audio-visual sync techniques",
    ],
    icon: Sparkles,
  },
  {
    moduleNumber: 3,
    title: "How to Edit for Your Audience",
    description:
      "Tailor your editing style to match what your specific audience craves.",
    bullets: [
      "Audience analysis framework",
      "Platform-specific strategies",
      "Content-type adaptations",
    ],
    icon: Users,
  },
  {
    moduleNumber: 4,
    title: "The 6-Element System",
    description:
      "The complete framework that makes every video addictive from start to finish.",
    bullets: [
      "All 6 elements explained",
      "How to apply each element",
      "Stacking for maximum impact",
    ],
    icon: LayoutGrid,
  },
  {
    moduleNumber: 5,
    title: "Real Breakdowns of Viral Videos",
    description:
      "Watch as we dissect exactly what makes top-performing videos work.",
    bullets: [
      "Frame-by-frame analysis",
      "Why these videos went viral",
      "Patterns you can replicate",
    ],
    icon: PlayCircle,
  },
  {
    moduleNumber: 6,
    title: "Live Editing: Raw to Finished",
    description:
      "Watch complete edits from raw footage to final product in real-time.",
    bullets: [
      "Full editing walkthroughs",
      "Real-time decision making",
      "Before and after reveals",
    ],
    icon: Clapperboard,
  },
]

export function CourseModulesSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Header */}
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              what&apos;s inside{" "}
              <GradientText variant="purple">crack editing™</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A 5-hour self-paced training program that teaches you the complete
              system for creating addictive content.
            </p>
          </motion.div>

          {/* Modules Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {modules.map((module) => (
              <motion.div key={module.moduleNumber} variants={fadeInUp}>
                <ModuleCard {...module} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <Button
              size="lg"
              className="min-h-[48px] px-8 text-base font-semibold"
            >
              enroll in crack editing™
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
