"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/ui/gradient-text"
import { StatCard } from "@/components/ui/stat-card"
import { Marquee } from "@/components/ui/marquee"
import { brandItems } from "@/components/ui/brand-logos"
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
          {/* Header */}
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 text-sm font-medium bg-muted/50 border border-border/50"
            >
              MEET THE CREATORS
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              It&apos;s taken{" "}
              <GradientText variant="orange">25+ combined years</GradientText>{" "}
              to master this craft.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Learn from industry veterans who&apos;ve built careers helping creators succeed.
            </p>
          </motion.div>

          {/* Creator Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 max-w-4xl mx-auto">
            {creators.map((creator, index) => (
              <motion.div
                key={creator.name}
                custom={index}
                variants={creatorCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl bg-card/50 border border-border/50 p-6 backdrop-blur-sm overflow-hidden group"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Photo */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg shadow-primary/10">
                        <Image
                          src={creator.image}
                          alt={creator.name}
                          width={160}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      {/* Stat badge */}
                      <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        {creator.stat.value}
                      </div>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-foreground">{creator.name}</h3>
                    <p className="text-sm text-primary font-medium">{creator.role}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {creator.bio}
                  </p>
                </div>
              </motion.div>
            ))}
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
