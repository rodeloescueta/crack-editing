"use client"

import { motion } from "framer-motion"
import { X, Check, CircleOff, CircleCheck } from "lucide-react"
import { Container } from "@/components/layout"
import { GradientText } from "@/components/ui/gradient-text"
import {
  fadeInUp,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations"

const notForYouItems = [
  "You're looking for a magic button that creates content for you",
  "You're not willing to put in the work to learn and practice",
  "You expect overnight viral success without effort",
  "You're not open to changing how you approach editing",
  "You think you already know everything about video editing",
]

const forYouItems = [
  "You're willing to learn a new system and apply it consistently",
  "You want to understand why some videos work and others don't",
  "You're ready to invest in your skills for long-term growth",
  "You create content for social media and want better results",
  "You're coachable and open to new approaches",
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
            className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-lg border border-border/30 p-8 md:p-12"
            variants={fadeInUp}
          >
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              {/* NOT For You Column */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20">
                    <CircleOff className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Skip this if...</h3>
                    <p className="text-sm text-muted-foreground">Not for you if:</p>
                  </div>
                </div>
                <ul className="space-y-4">
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
                        <X className="w-3.5 h-3.5 text-red-400" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* FOR You Column */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20">
                    <CircleCheck className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Perfect for you if...</h3>
                    <p className="text-sm text-muted-foreground">Made for you if:</p>
                  </div>
                </div>
                <ul className="space-y-4">
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
                        <Check className="w-3.5 h-3.5 text-green-400" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-10 pt-8 border-t border-border/30">
              <p className="text-center text-lg md:text-xl font-semibold text-foreground">
                See yourself on the right?{" "}
                <span className="text-primary">
                  This course was made for you.
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
