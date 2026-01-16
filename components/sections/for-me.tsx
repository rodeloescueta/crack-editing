"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout"
import { GradientText } from "@/components/ui/gradient-text"
import { ComparisonCard } from "@/components/ui/comparison-card"
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
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

          {/* Cards Container */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Not For You Card */}
            <motion.div variants={slideInLeft}>
              <ComparisonCard
                type="negative"
                title="It's NOT for you if..."
                subtitle="This course won't help you if:"
                items={notForYouItems}
              />
            </motion.div>

            {/* For You Card */}
            <motion.div variants={slideInRight}>
              <ComparisonCard
                type="positive"
                title="It's FOR you if..."
                subtitle="You'll love this course if:"
                items={forYouItems}
              />
            </motion.div>
          </div>

          {/* Footer Message */}
          <motion.div
            className="text-center mt-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              If you checked more boxes on the right,{" "}
              <span className="text-primary">
                this course was made for you.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
