"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
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
  avatar: string
  before: { views: string; label: string; thumbnail: string; videoUrl?: string }
  after: { views: string; label: string; thumbnail: string; videoUrl?: string }
  growthStats: string
}

const transformations: Transformation[] = [
  {
    id: "1",
    creatorName: "Nikki",
    handle: "@bignikbh",
    avatar: "/images/avatars/nikki.svg",
    before: { views: "~500 views", label: "Generic edit", thumbnail: "/images/testimonials/video-thumbnail-1.jpg", videoUrl: "" },
    after: { views: "1.1M views", label: "Crack Edited™", thumbnail: "/images/testimonials/video-thumbnail-2.jpg", videoUrl: "" },
    growthStats: "Grew from 6,322 to 1,000,000+ followers using crack editing™",
  },
  {
    id: "2",
    creatorName: "Kathy",
    handle: "@kathyprounis",
    avatar: "/images/avatars/kathy.svg",
    before: { views: "~1K views", label: "Generic edit", thumbnail: "/images/testimonials/video-thumbnail-3.jpg", videoUrl: "" },
    after: { views: "482K views", label: "Crack Edited™", thumbnail: "/images/testimonials/video-thumbnail-4.jpg", videoUrl: "" },
    growthStats: "Scaled to 100,000+ followers in just 7 months",
  },
  {
    id: "3",
    creatorName: "Warren",
    handle: "@nontoxicdad",
    avatar: "/images/avatars/warren.svg",
    before: { views: "~10K views", label: "Generic edit", thumbnail: "/images/testimonials/video-thumbnail-1.jpg", videoUrl: "" },
    after: { views: "22M+ views", label: "Crack Edited™", thumbnail: "/images/testimonials/video-thumbnail-3.jpg", videoUrl: "" },
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
              {/* Headline - dark text for light section */}
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.02_240)]"
                variants={fadeInUp}
              >
                can you go from{" "}
                <GradientText variant="orange">THIS</GradientText> to{" "}
                <GradientText variant="orange">THIS</GradientText>?
              </motion.h2>

              {/* Subtext - dark text for light section */}
              <motion.p
                className="text-[oklch(0.45_0.02_240)] text-lg max-w-2xl mx-auto"
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-20 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card border border-border/50 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 hover:bg-card/90 transition-all duration-200 hidden sm:flex"
            aria-label="Previous transformation"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-20 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card border border-border/50 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 hover:bg-card/90 transition-all duration-200 hidden sm:flex"
            aria-label="Next transformation"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
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
              className="bg-card backdrop-blur-sm rounded-2xl border border-border p-6 md:p-8"
              role="group"
              aria-roledescription="slide"
              aria-label={`${currentIndex + 1} of ${transformations.length}: ${currentTransformation.creatorName}'s transformation`}
            >
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
                    videoUrl={currentTransformation.before.videoUrl}
                  />
                </div>

                {/* Arrow - larger with pulse animation */}
                <motion.div
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(234, 88, 12, 0.4)",
                      "0 0 0 10px rgba(234, 88, 12, 0)",
                      "0 0 0 0 rgba(234, 88, 12, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black rotate-90 sm:rotate-0" />
                </motion.div>

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
                    videoUrl={currentTransformation.after.videoUrl}
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

          {/* Profile Navigation */}
          <div className="flex justify-center items-end gap-6 sm:gap-8 mt-6">
            {transformations.map((transformation, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex flex-col items-center gap-2 transition-all duration-300 ease-out ${
                  index === currentIndex
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-70"
                }`}
                aria-label={`Go to ${transformation.creatorName}'s transformation`}
              >
                <div
                  className={`relative rounded-full overflow-hidden transition-all duration-300 ease-out ${
                    index === currentIndex
                      ? "w-12 h-12 ring-2 ring-primary ring-offset-2 ring-offset-card shadow-[0_0_15px_oklch(0.75_0.18_55/0.4)]"
                      : "w-9 h-9 hover:scale-105"
                  }`}
                >
                  <Image
                    src={transformation.avatar}
                    alt={transformation.creatorName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className={`font-semibold leading-tight transition-all duration-300 ${
                    index === currentIndex
                      ? "text-foreground text-sm"
                      : "text-muted-foreground text-xs"
                  }`}>
                    {transformation.creatorName}
                  </p>
                  <p className={`leading-tight transition-all duration-300 ${
                    index === currentIndex
                      ? "text-primary text-xs"
                      : "text-muted-foreground/70 text-[10px]"
                  }`}>
                    {transformation.handle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Swipe Hint - Mobile Only */}
          <p className="text-center text-muted-foreground/60 text-xs mt-3 sm:hidden">
            Tap a profile to view their transformation
          </p>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-6 mt-4 sm:hidden">
            <button
              onClick={() => paginate(-1)}
              className="w-14 h-14 rounded-full bg-card border border-border/50 flex items-center justify-center shadow-lg active:scale-95 transition-all duration-200"
              aria-label="Previous transformation"
            >
              <ChevronLeft className="w-7 h-7 text-foreground" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-14 h-14 rounded-full bg-card border border-border/50 flex items-center justify-center shadow-lg active:scale-95 transition-all duration-200"
              aria-label="Next transformation"
            >
              <ChevronRight className="w-7 h-7 text-foreground" />
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
