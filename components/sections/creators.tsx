"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
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

const creators = [
  {
    name: "AJ Kumar",
    role: "Digital Marketing & Strategy",
    image: "/images/creators/aj-kumar.png",
    bio: "15+ years in digital marketing and content strategy. Helped creators generate millions in brand deals and build sustainable businesses.",
    stat: { value: "15+", label: "Years Experience" },
  },
  {
    name: "Josh Bill",
    role: "Video Editing & Production",
    image: "/images/creators/josh-bill.png",
    bio: "10+ years of hands-on experience editing and producing high-performing social media content that's driven over 3 billion views.",
    stat: { value: "3B+", label: "Views Generated" },
  },
]

const stats = [
  { value: "15+", label: "Years Digital Marketing", attribution: "AJ Kumar", avatar: "/images/creators/aj-kumar.png" },
  { value: "3B+", label: "Views Generated", attribution: "For Clients", avatar: null },
  { value: "10+", label: "Years Video Editing", attribution: "Josh Bill", avatar: "/images/creators/josh-bill.png" },
  { value: "100+", label: "Brand Deals", attribution: "Secured", avatar: null },
]

// Creator card animation
const creatorCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

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
              <div className="h-[32rem] w-full flex items-center justify-center">
                <PinContainer
                  title="limitless.inc"
                  href="https://limitless.inc"
                  containerClassName="flex items-center justify-center"
                >
                  {/* TLC Fingerprint Logo with Sparkles */}
                  <div className="relative w-64 h-80 md:w-80 md:h-96 flex items-center justify-center overflow-hidden">
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
                    {/* TLC Fingerprint Logo */}
                    <div className="relative z-10">
                      <LimitlessLogo className="w-64 h-80 md:w-80 md:h-96" />
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

              {/* Creator Bio Cards with Avatars */}
              <div className="space-y-4">
                {/* AJ Kumar */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card/30 border border-border/30">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                    <Image
                      src="/images/creators/aj-kumar.png"
                      alt="AJ Kumar"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">AJ Kumar</span>{" "}
                    brings 15+ years in digital marketing and content strategy,
                    having helped creators generate millions in brand deals and
                    build sustainable businesses.
                  </p>
                </div>

                {/* Josh Bill */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card/30 border border-border/30">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                    <Image
                      src="/images/creators/josh-bill.png"
                      alt="Josh Bill"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">Josh Bill</span>{" "}
                    contributes 10+ years of hands-on experience editing and
                    producing high-performing social media content that&apos;s driven
                    over 3 billion views.
                  </p>
                </div>
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
