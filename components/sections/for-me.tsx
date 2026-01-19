"use client"

import { motion } from "framer-motion"
import { X, Check, CircleOff, CircleCheck, ArrowRight } from "lucide-react"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import {
  fadeInUp,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations"

const notForYouItems = [
  { bold: "Magic button seekers", rest: " — looking for something that creates content for you" },
  { bold: "Not willing to practice", rest: " — you need to put in the work to learn" },
  { bold: "Overnight success expecters", rest: " — viral growth takes effort" },
  { bold: "Resistant to change", rest: " — not open to new editing approaches" },
  { bold: "Know-it-alls", rest: " — you think you already know everything" },
]

const forYouItems = [
  { bold: "Willing to learn", rest: " — ready to apply a new system consistently" },
  { bold: "Curious about what works", rest: " — want to understand why some videos succeed" },
  { bold: "Long-term thinkers", rest: " — ready to invest in skills for growth" },
  { bold: "Social media creators", rest: " — making content and want better results" },
  { bold: "Coachable and open", rest: " — ready to try new approaches" },
]

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
}

export function ForMeSection() {
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              is this course{" "}
              <GradientText variant="purple">for me?</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              This course isn&apos;t for everyone. Here&apos;s how to know if
              it&apos;s the right fit for you.
            </p>
          </motion.div>

          {/* Unified Checklist Card */}
          <motion.div
            className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-lg border border-border/30 p-10 md:p-14"
            variants={fadeInUp}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* NOT For You Column - Red tint background */}
              <div className="rounded-2xl bg-gradient-to-br from-red-500/5 via-red-500/3 to-transparent p-6 md:p-8 border border-red-500/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-500/20 border border-red-500/30">
                    <CircleOff className="w-7 h-7 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Skip this if...</h3>
                    <p className="text-base text-muted-foreground">Not the right fit</p>
                  </div>
                </div>
                <ul className="space-y-5">
                  {notForYouItems.map((item, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-md border border-red-500/30 bg-red-500/10 flex items-center justify-center mt-0.5 transition-colors group-hover:bg-red-500/20">
                        <X className="w-4 h-4 text-red-400" />
                      </div>
                      <span className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        <strong className="text-foreground">{item.bold}</strong>
                        {item.rest}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* FOR You Column - Green tint background, slightly elevated */}
              <motion.div
                className="rounded-2xl bg-gradient-to-br from-green-500/8 via-green-500/5 to-transparent p-6 md:p-8 border border-green-500/20 shadow-lg shadow-green-500/5"
                initial={{ y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500/20 border border-green-500/30">
                    <CircleCheck className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Perfect for you if...</h3>
                    <p className="text-base text-muted-foreground">Made for you</p>
                  </div>
                </div>
                <ul className="space-y-5">
                  {forYouItems.map((item, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-md border border-green-500/30 bg-green-500/10 flex items-center justify-center mt-0.5 transition-colors group-hover:bg-green-500/20">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        <strong className="text-foreground">{item.bold}</strong>
                        {item.rest}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Divider and CTA */}
            <div className="mt-10 pt-8 border-t border-border/30 text-center">
              <p className="text-lg md:text-xl font-semibold text-foreground mb-6">
                See yourself on the right?{" "}
                <span className="text-primary">
                  This course was made for you.
                </span>
              </p>
              <Button size="lg" className="min-h-[48px] px-8 text-base font-semibold">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
