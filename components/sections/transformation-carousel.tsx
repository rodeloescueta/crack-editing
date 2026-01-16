"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import { VideoCard } from "@/components/ui/video-card"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import {
  fadeInUp,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations"

interface Transformation {
  id: string
  creatorName: string
  handle: string
  before: { views: string; label: string; thumbnail: string }
  after: { views: string; label: string; thumbnail: string }
  growthStats: string
}

const transformations: Transformation[] = [
  {
    id: "1",
    creatorName: "Nikki",
    handle: "@bignikbh",
    before: { views: "~500 views", label: "Generic edit", thumbnail: "/images/testimonials/video-thumbnail-1.jpg" },
    after: { views: "1.1M views", label: "Crack Edited™", thumbnail: "/images/testimonials/video-thumbnail-2.jpg" },
    growthStats: "Grew from 6,322 to 1,000,000+ followers using crack editing™",
  },
  {
    id: "2",
    creatorName: "Kathy",
    handle: "@kathyprounis",
    before: { views: "~1K views", label: "Generic edit", thumbnail: "/images/testimonials/video-thumbnail-3.jpg" },
    after: { views: "482K views", label: "Crack Edited™", thumbnail: "/images/testimonials/video-thumbnail-4.jpg" },
    growthStats: "Scaled to 100,000+ followers in just 7 months",
  },
  {
    id: "3",
    creatorName: "Warren",
    handle: "@nontoxicdad",
    before: { views: "~10K views", label: "Generic edit", thumbnail: "/images/testimonials/video-thumbnail-1.jpg" },
    after: { views: "22M+ views", label: "Crack Edited™", thumbnail: "/images/testimonials/video-thumbnail-3.jpg" },
    growthStats: "Built 1.1M+ followers over 2 years with the system",
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
    <section className="py-20 md:py-28 overflow-hidden section-light">
      <Container>
        <ContainerScroll
          titleComponent={
            <motion.div
              className="text-center mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              {/* Headline */}
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.25_0.02_260)]"
                variants={fadeInUp}
              >
                can you go from{" "}
                <GradientText variant="orange">THIS</GradientText> to{" "}
                <GradientText variant="orange">THIS</GradientText>?
              </motion.h2>

              {/* Subtext */}
              <motion.p
                className="text-[oklch(0.45_0.02_260)] text-lg max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Real transformations from creators who learned the crack editing
                system.
              </motion.p>
            </motion.div>
          }
        >
          {/* Carousel Container */}
          <div
            className="relative max-w-5xl mx-auto"
            style={{ transformStyle: "preserve-3d" }}
            role="region"
            aria-roledescription="carousel"
            aria-label="Creator transformation stories"
          >
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
              className="bg-[oklch(0.18_0.03_265)] backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8"
              role="group"
              aria-roledescription="slide"
              aria-label={`${currentIndex + 1} of ${transformations.length}: ${currentTransformation.creatorName}'s transformation`}
            >
              {/* Creator Info */}
              <div className="text-center mb-8" aria-live="polite">
                <h3 className="text-2xl font-bold text-foreground">
                  {currentTransformation.creatorName}
                </h3>
                <p className="text-primary font-medium">
                  {currentTransformation.handle}
                </p>
              </div>

              {/* Before/After Cards */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 mb-8">
                {/* Before Card */}
                <div className="flex flex-col items-center">
                  <span className="px-4 py-1.5 rounded-full bg-red-500/20 text-red-400 text-sm font-semibold mb-3">
                    BEFORE
                  </span>
                  <VideoCard
                    type="before"
                    label={currentTransformation.before.label}
                    views={currentTransformation.before.views}
                    thumbnail={currentTransformation.before.thumbnail}
                  />
                </div>

                {/* Arrow - rotates on mobile */}
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black rotate-90 sm:rotate-0" />
                </div>

                {/* After Card */}
                <div className="flex flex-col items-center">
                  <span className="px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-3">
                    AFTER
                  </span>
                  <VideoCard
                    type="after"
                    label={currentTransformation.after.label}
                    views={currentTransformation.after.views}
                    thumbnail={currentTransformation.after.thumbnail}
                  />
                </div>
              </div>

              {/* Growth Stats */}
              <div className="text-center border-t border-border/30 pt-6">
                <p className="text-muted-foreground">
                  {currentTransformation.growthStats}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ease-out ${
                  index === currentIndex
                    ? "bg-primary w-10 shadow-[0_0_10px_oklch(0.75_0.18_55/0.5)]"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3 hover:scale-110"
                }`}
                aria-label={`Go to transformation ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipe Hint - Mobile Only */}
          <p className="text-center text-muted-foreground/60 text-xs mt-3 sm:hidden">
            Swipe or tap dots to navigate
          </p>

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
        </ContainerScroll>

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
