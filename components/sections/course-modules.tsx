"use client"

import { motion } from "framer-motion"
import {
  Eye,
  Sparkles,
  Users,
  LayoutGrid,
  PlayCircle,
  Clapperboard,
  type LucideIcon,
} from "lucide-react"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import {
  fadeInUp,
  staggerContainer,
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
    gradient: "linear-gradient(to bottom right, #8B5CF6, #6366F1)", // purple to indigo
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
    gradient: "linear-gradient(to bottom right, #F97316, #EAB308)", // orange to yellow
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
    gradient: "linear-gradient(to bottom right, #EC4899, #8B5CF6)", // pink to purple
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
    gradient: "linear-gradient(to bottom right, #06B6D4, #10B981)", // cyan to emerald
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
    gradient: "linear-gradient(to bottom right, #F59E0B, #F97316)", // amber to orange
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
    gradient: "linear-gradient(to bottom right, #8B5CF6, #EC4899)", // purple to pink
  },
]

// Module content card for the sticky scroll
function ModuleContentCard({
  moduleNumber,
  icon: Icon,
  gradient,
}: {
  moduleNumber: number
  icon: LucideIcon
  gradient: string
}) {
  return (
    <div
      className="flex h-full w-full items-center justify-center rounded-md"
      style={{ background: gradient }}
    >
      <div className="text-center text-white">
        <Icon className="mx-auto mb-4 h-16 w-16 opacity-90" />
        <div className="text-sm font-medium opacity-80">MODULE</div>
        <div className="text-6xl font-bold">{moduleNumber}</div>
      </div>
    </div>
  )
}

// Transform modules data for StickyScroll component
const stickyContent = modules.map((module) => ({
  title: module.title,
  description: `${module.description}\n\n• ${module.bullets.join("\n• ")}`,
  content: (
    <ModuleContentCard
      moduleNumber={module.moduleNumber}
      icon={module.icon}
      gradient={module.gradient}
    />
  ),
}))

export function CourseModulesSection() {
  return (
    <section className="py-20 md:py-28 section-light">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Header - dark text for light section */}
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.02_240)]">
              what&apos;s inside{" "}
              <GradientText variant="purple">crack editing™</GradientText>
            </h2>
            <p className="text-[oklch(0.45_0.02_240)] text-lg max-w-2xl mx-auto">
              A 5-hour self-paced training program that teaches you the complete
              system for creating addictive content.
            </p>
          </motion.div>

          {/* Sticky Scroll Modules */}
          <motion.div variants={fadeInUp}>
            <StickyScroll
              content={stickyContent}
              contentClassName="rounded-xl"
            />
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
