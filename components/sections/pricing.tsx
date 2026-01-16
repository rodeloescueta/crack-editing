"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/ui/gradient-text"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import {
  fadeInUp,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations"

const features = [
  "5-hour self-paced training",
  "6 comprehensive modules",
  "Real video breakdowns",
  "Full editing framework",
  "Practice tools & examples",
  "Lifetime access",
  "Ongoing updates",
  "30-day money-back guarantee",
]

export function PricingSection() {
  return (
    <section className="relative section-dark overflow-hidden">
      {/* Oval/Circle container with light background */}
      <div
        className="relative mx-auto py-20 md:py-28 px-4"
        style={{
          background: "var(--section-light)",
          borderRadius: "50% / 15%",
          maxWidth: "1400px",
        }}
      >
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="max-w-3xl mx-auto"
          >
            {/* Header */}
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.25_0.02_260)]">
                turn a small investment into a skill{" "}
                <GradientText variant="orange">you can use for years</GradientText>
              </h2>
              <p className="text-[oklch(0.45_0.02_260)] text-lg max-w-2xl mx-auto">
                Editors who make better decisions get paid more. Win better clients,
                charge higher rates, and keep work longer because your videos
                actually perform.
              </p>
            </motion.div>

            {/* Pricing Card with 3D Effect */}
            <CardContainer containerClassName="py-0">
              <CardBody className="rounded-2xl border border-border/50 bg-gradient-to-b from-card/80 to-card p-8 md:p-10 w-full max-w-2xl">
                {/* Badge */}
                <CardItem translateZ={50} className="w-full text-center mb-6">
                  <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1.5">
                    ONE-TIME INVESTMENT
                  </Badge>
                </CardItem>

                {/* Price */}
                <CardItem translateZ={60} className="w-full text-center mb-8">
                  <div className="text-5xl md:text-6xl font-bold text-foreground mb-3">
                    $297
                  </div>
                  {/* Payment Plan Option - Highlighted */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                    <span className="text-muted-foreground text-sm">or</span>
                    <span className="text-primary font-bold text-lg">3 × $99</span>
                    <span className="text-xs text-muted-foreground bg-primary/20 px-2 py-0.5 rounded-full">
                      payment plan
                    </span>
                  </div>
                </CardItem>

                {/* Features */}
                <CardItem translateZ={40} className="w-full mb-8">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardItem>

                {/* CTA */}
                <CardItem translateZ={70} className="w-full text-center">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto min-h-[52px] px-10 text-base font-semibold cta-pulse"
                  >
                    enroll in crack editing™
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Value Footer */}
            <motion.p
              className="text-center text-[oklch(0.45_0.02_260)] mt-8"
              variants={fadeInUp}
            >
              If crack editing™ helps you land even{" "}
              <span className="text-[oklch(0.25_0.02_260)] font-semibold">one better client</span>
              , one higher-paying project, or one ongoing retainer—it pays for
              itself many times over.
            </motion.p>
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
