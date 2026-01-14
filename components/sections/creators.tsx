"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/ui/gradient-text"
import { StatCard } from "@/components/ui/stat-card"
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
    <section className="py-20 md:py-28">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Left: Logo */}
            <motion.div
              className="flex justify-center lg:justify-start"
              variants={slideInLeft}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-[80px]" />
                {/* Logo Circle */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-accent/30 flex items-center justify-center bg-background/50">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent tracking-wider">
                      LIMITLESS
                    </div>
                    <div className="text-sm text-muted-foreground tracking-widest">
                      .INC
                    </div>
                  </div>
                </div>
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

          {/* Brand Logos */}
          <motion.div variants={fadeInUp}>
            <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-6">
              Our clients are doing brand deals with:
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="text-muted-foreground/60 font-medium hover:text-muted-foreground transition-colors"
                >
                  {brand}
                </span>
              ))}
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
