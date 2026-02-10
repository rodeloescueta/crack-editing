"use client"

import {
  Eye,
  Sparkles,
  Users,
  LayoutGrid,
  PlayCircle,
  Clapperboard,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import type { MotionValue } from "framer-motion"
import { MacbookScroll } from "@/components/ui/macbook-scroll"
import { GradientText } from "@/components/ui/gradient-text"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { Button } from "@/components/ui/button"



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
    gradient: "linear-gradient(to bottom right, #8B5CF6, #6366F1)",
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
    gradient: "linear-gradient(to bottom right, #0EA5E9, #38BDF8)",
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
    gradient: "linear-gradient(to bottom right, #EC4899, #8B5CF6)",
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
    gradient: "linear-gradient(to bottom right, #06B6D4, #10B981)",
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
    gradient: "linear-gradient(to bottom right, #0284C7, #0EA5E9)",
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
    gradient: "linear-gradient(to bottom right, #8B5CF6, #EC4899)",
  },
]

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
        <Icon className="mx-auto mb-2 h-8 w-8 sm:h-10 sm:w-10 opacity-90" />
        <div className="text-[9px] sm:text-[10px] font-medium opacity-80">MODULE</div>
        <div className="text-3xl sm:text-4xl font-bold">{moduleNumber}</div>
      </div>
    </div>
  )
}

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

export function MacbookShowcaseSection() {
  return (
    <section className="section-light overflow-hidden">
      {/* Mobile: Direct content (no MacBook frame) */}
      <div className="md:hidden px-4 py-12 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[oklch(0.20_0.02_240)]">
            what&apos;s inside{" "}
            <GradientText variant="primary">crack editing™</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-base text-[oklch(0.40_0.02_240)]">
            A 5-hour self-paced training program that teaches you the complete
            system for creating addictive content.
          </p>
        </div>
        <StickyScroll content={stickyContent} contentClassName="rounded-lg" />
      </div>

      {/* Desktop: MacBook scroll animation */}
      <div className="hidden md:block">
        <MacbookScroll
          showGradient
          title={
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[oklch(0.20_0.02_240)]">
                what&apos;s inside{" "}
                <GradientText variant="primary">crack editing™</GradientText>
              </h2>
              <Button
                variant="default"
                size="lg"
                className="min-h-[48px] px-8 text-base font-semibold"
              >
                enroll in crack editing™
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          }
        >
          {(scrollProgress: MotionValue<number>) => (
            <StickyScroll
              content={stickyContent}
              contentClassName="rounded-lg"
              compact
              scrollProgress={scrollProgress}
              scrollRange={[0.3, 0.7]}
            />
          )}
        </MacbookScroll>
      </div>
    </section>
  )
}
