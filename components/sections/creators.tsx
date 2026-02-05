"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout"
import { GradientText } from "@/components/ui/gradient-text"
import { StatCard } from "@/components/ui/stat-card"
import { SparklesCore } from "@/components/ui/sparkles"
import { Marquee } from "@/components/ui/marquee"
import { brandItems, LimitlessLogo } from "@/components/ui/brand-logos"
import { PinContainer } from "@/components/ui/3d-pin"
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations"

const stats = [
  { value: "15+", label: "Years Digital Marketing", attribution: "AJ Kumar", avatar: null },
  { value: "3B+", label: "Views Generated", attribution: "For Clients", avatar: null },
  { value: "10+", label: "Years Video Editing", attribution: "Josh Bill", avatar: null },
  { value: "100+", label: "Brand Deals", attribution: "Secured", avatar: null },
]

export function CreatorsSection() {
  return (
    <section className="py-20 md:py-28 section-dark">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Main Content - Logo + Text */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Left: Logo with 3D Pin Effect */}
            <motion.div
              className="flex justify-center"
              variants={slideInLeft}
            >
              <div className="h-[22rem] w-full flex items-center justify-center">
                <PinContainer
                  title="limitless.inc"
                  href="https://limitless.inc"
                  containerClassName="flex items-center justify-center"
                >
                  {/* TLC Full Logo with Sparkles */}
                  <div className="relative w-80 h-48 md:w-[28rem] md:h-56 flex items-center justify-center overflow-hidden">
                    {/* Aceternity UI: Sparkles Effect */}
                    <div className="absolute inset-0 z-0">
                      <SparklesCore
                        id="creators-sparkles"
                        background="transparent"
                        minSize={0.4}
                        maxSize={1.2}
                        particleDensity={80}
                        particleColor="#8B5CF6"
                        className="w-full h-full"
                      />
                    </div>
                    {/* The Limitless Company Full Logo */}
                    <div className="relative z-10">
                      <LimitlessLogo className="w-80 h-48 md:w-[28rem] md:h-56" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div variants={slideInRight}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <GradientText variant="primary">15 years</GradientText>{" "}
                of translating expertise into content that connects.
              </h2>

              {/* Company Story */}
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Fifteen years ago, The Limitless Company began by working alongside thought leaders to help build media companies in their businesses. As attention shifted and social media became the dominant medium, that same work evolved into a new discipline: distilling deep expertise and institutional knowledge into content built for modern consumption. In part, this translation has been made possible through the strategies developed within Crack Editing, a proprietary editing system shaped by years of testing, psychological insight, and performance data allowing complex ideas to be expressed with precision, clarity, and authority at scale.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            variants={fadeInUp}
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </motion.div>

          {/* Brand Logos - Marquee */}
          <motion.div variants={fadeInUp}>
            <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-6">
              Our clients are doing brand deals with:
            </p>
            <div className="relative overflow-hidden py-2">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              <Marquee pauseOnHover duration={25}>
                {brandItems.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex items-center justify-center px-6 md:px-8 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                  >
                    {brand.logo}
                  </div>
                ))}
              </Marquee>
            </div>
          </motion.div>

          {/* CTA Link */}
          <motion.div className="text-center mt-8" variants={fadeInUp}>
            <p className="text-muted-foreground">
              Want to learn more about our full service social media agency?{" "}
              <a
                href="https://limitless.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                Visit limitless.inc
                <ArrowRight className="w-4 h-4" />
              </a>
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
