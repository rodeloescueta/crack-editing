"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, ShieldCheck } from "lucide-react"
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
            {/* Header - using dark text for light background */}
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.02_240)]">
                turn a small investment into a skill{" "}
                <GradientText variant="orange">you can use for years</GradientText>
              </h2>
              <p className="text-[oklch(0.45_0.02_240)] text-lg max-w-2xl mx-auto">
                Editors who make better decisions get paid more. Win better clients,
                charge higher rates, and keep work longer because your videos
                actually perform.
              </p>
            </motion.div>

            {/* Pricing Card with 3D Effect and Enhanced Depth */}
            <CardContainer containerClassName="py-0">
              <CardBody className="relative rounded-2xl border-2 border-primary/30 bg-gradient-to-b from-card to-card/90 p-8 md:p-10 w-full max-w-2xl shadow-[0_0_60px_-15px_rgba(249,115,22,0.3)] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-primary/10 before:via-transparent before:to-accent/10 before:pointer-events-none">
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

                {/* CTA - Larger and More Prominent */}
                <CardItem translateZ={70} className="w-full text-center mb-6">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto min-h-[60px] px-12 text-lg font-bold cta-pulse bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 shadow-lg shadow-primary/25"
                  >
                    enroll in crack editing™
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardItem>

                {/* Guarantee Badge */}
                <CardItem translateZ={30} className="w-full">
                  <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="text-left">
                      <p className="text-green-500 font-bold text-sm">30-Day Money-Back Guarantee</p>
                      <p className="text-muted-foreground text-xs">Not satisfied? Get a full refund, no questions asked.</p>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Value Footer - dark text for light background */}
            <motion.p
              className="text-center text-[oklch(0.45_0.02_240)] mt-8"
              variants={fadeInUp}
            >
              If crack editing™ helps you land even{" "}
              <span className="text-[oklch(0.20_0.02_240)] font-semibold">one better client</span>
              , one higher-paying project, or one ongoing retainer—it pays for
              itself many times over.
            </motion.p>
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
