"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import { VideoCard } from "@/components/ui/video-card"
import {
  fadeInUp,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations"

interface Transformation {
  id: string
  creatorName: string
  handle: string
  before: { views: string; label: string }
  after: { views: string; label: string }
  growthStats: string
}

const transformations: Transformation[] = [
  {
    id: "1",
    creatorName: "Nikki",
    handle: "@bignikbh",
    before: { views: "500", label: "Generic edit" },
    after: { views: "1.1M", label: "Crack Edited™" },
    growthStats: "2,200x growth in views",
  },
  {
    id: "2",
    creatorName: "Warren",
    handle: "@nontoxicdad",
    before: { views: "1.2K", label: "Generic edit" },
    after: { views: "3.5M", label: "Crack Edited™" },
    growthStats: "2,916x growth in views",
  },
  {
    id: "3",
    creatorName: "Sarah",
    handle: "@sarahcreates",
    before: { views: "800", label: "Generic edit" },
    after: { views: "2.8M", label: "Crack Edited™" },
    growthStats: "3,500x growth in views",
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
}

export function TransformationCarousel() {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0])

  const paginate = (newDirection: number) => {
    const newIndex =
      (currentIndex + newDirection + transformations.length) %
      transformations.length
    setCurrentIndex([newIndex, newDirection])
  }

  const goToSlide = (index: number) => {
    const direction = index > currentIndex ? 1 : -1
    setCurrentIndex([index, direction])
  }

  const currentTransformation = transformations[currentIndex]

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            variants={fadeInUp}
          >
            can you go from{" "}
            <GradientText variant="orange">THIS</GradientText> to{" "}
            <GradientText variant="orange">THIS</GradientText>?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Real transformations from creators who learned the crack editing
            system.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/80 border border-border/50 flex items-center justify-center hover:bg-card transition-colors hidden sm:flex"
            aria-label="Previous transformation"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/80 border border-border/50 flex items-center justify-center hover:bg-card transition-colors hidden sm:flex"
            aria-label="Next transformation"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel Content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-8"
            >
              {/* Creator Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground">
                  {currentTransformation.creatorName}
                </h3>
                <p className="text-muted-foreground">
                  {currentTransformation.handle}
                </p>
              </div>

              {/* Before/After Cards */}
              <div className="flex items-center justify-center gap-4 md:gap-8 mb-6">
                {/* Before Card */}
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-red-400 mb-2">
                    BEFORE
                  </span>
                  <VideoCard
                    type="before"
                    label={currentTransformation.before.label}
                    views={currentTransformation.before.views}
                  />
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>

                {/* After Card */}
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-accent mb-2">
                    AFTER
                  </span>
                  <VideoCard
                    type="after"
                    label={currentTransformation.after.label}
                    views={currentTransformation.after.views}
                  />
                </div>
              </div>

              {/* Growth Stats */}
              <div className="text-center">
                <p className="text-lg font-semibold text-primary">
                  {currentTransformation.growthStats}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to transformation ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-4 sm:hidden">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-card/80 border border-border/50 flex items-center justify-center"
              aria-label="Previous transformation"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-card/80 border border-border/50 flex items-center justify-center"
              aria-label="Next transformation"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <Button size="lg" className="min-h-[48px] px-8 text-base font-semibold">
            Start Your Transformation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
