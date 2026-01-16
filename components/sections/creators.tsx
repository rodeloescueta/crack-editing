"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/ui/gradient-text"
import { StatCard } from "@/components/ui/stat-card"
import { SparklesCore } from "@/components/ui/sparkles"
import { Marquee } from "@/components/ui/marquee"
import { PinContainer } from "@/components/ui/3d-pin"
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations"

const stats = [
  { value: "15+", label: "Years Digital Marketing", attribution: "AJ Kumar" },
  { value: "3B+", label: "Views Generated", attribution: "For Clients" },
  { value: "10+", label: "Years Video Editing", attribution: "Josh Bill" },
  { value: "100+", label: "Brand Deals", attribution: "Secured" },
]

const brands = [
  "Google",
  "MailChimp",
  "Adobe",
  "HSN",
  "Absolut Vodka",
  "Intuit",
  "Bravo",
  "Core Power",
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
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Left: Logo with 3D Pin Effect */}
            <motion.div
              className="flex justify-center"
              variants={slideInLeft}
            >
              <div className="h-[28rem] w-full flex items-center justify-center">
                <PinContainer
                  title="limitless.inc"
                  href="https://limitless.inc"
                  containerClassName="flex items-center justify-center"
                >
                  {/* Logo Circle with Sparkles */}
                  <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full border-2 border-accent/30 flex items-center justify-center bg-background/80 overflow-hidden">
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
                    {/* Logo Text - above sparkles */}
                    <div className="text-center relative z-10">
                      <div className="text-2xl md:text-3xl font-bold text-accent tracking-wider">
                        LIMITLESS
                      </div>
                      <div className="text-sm text-muted-foreground tracking-widest">
                        .INC
                      </div>
                    </div>
                  </div>
                </PinContainer>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div variants={slideInRight}>
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-2 text-sm font-medium bg-muted/50 border border-border/50"
              >
                MEET THE CREATORS
              </Badge>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                It&apos;s taken{" "}
                <GradientText variant="orange">25+ combined years</GradientText>{" "}
                to master this craft.
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="text-foreground font-semibold">AJ Kumar</span>{" "}
                  brings 15+ years in digital marketing and content strategy,
                  having helped creators generate millions in brand deals and
                  build sustainable businesses.
                </p>
                <p>
                  <span className="text-foreground font-semibold">Josh Bill</span>{" "}
                  contributes 10+ years of hands-on experience editing and
                  producing high-performing social media content that&apos;s driven
                  over 3 billion views.
                </p>
              </div>
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
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="text-muted-foreground/60 font-medium hover:text-muted-foreground transition-colors whitespace-nowrap px-4"
                  >
                    {brand}
                  </span>
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
