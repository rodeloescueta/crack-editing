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
  statsImage: string
  before: { views: string; label: string; thumbnail: string; videoUrl?: string }
  after: { views: string; label: string; thumbnail: string; videoUrl?: string }
  growthStats: string
}

const transformations: Transformation[] = [
  {
    id: "1",
    creatorName: "Nikki",
    handle: "@bignikbh",
    avatar: "/assets/client-profile/nikki2.png",
    statsImage: "/assets/client-profile/nikki1.png",
    before: { views: "~500 views", label: "Generic edit", thumbnail: "/images/testimonials/video-thumbnail-1.jpg", videoUrl: "" },
    after: { views: "1.1M views", label: "Crack Edited™", thumbnail: "/images/testimonials/video-thumbnail-2.jpg", videoUrl: "" },
    growthStats: "Grew from 6,322 to 1,000,000+ followers using crack editing™",
  },
  {
    id: "2",
    creatorName: "Kathy",
    handle: "@kathyprounis",
    avatar: "/assets/client-profile/kathy2.png",
    statsImage: "/assets/client-profile/kathy1.png",
    before: { views: "~1K views", label: "Generic edit", thumbnail: "/images/testimonials/video-thumbnail-3.jpg", videoUrl: "" },
    after: { views: "482K views", label: "Crack Edited™", thumbnail: "/images/testimonials/video-thumbnail-4.jpg", videoUrl: "" },
    growthStats: "Scaled to 100,000+ followers in just 7 months",
  },
  {
    id: "3",
    creatorName: "Warren",
    handle: "@nontoxicdad",
    avatar: "/assets/client-profile/nontoxicdad2.png",
    statsImage: "/assets/client-profile/nontoxicdad1.png",
    before: { views: "~10K views", label: "Generic edit", thumbnail: "/images/testimonials/video-thumbnail-1.jpg", videoUrl: "" },
    after: { views: "22M+ views", label: "Crack Edited™", thumbnail: "/images/testimonials/video-thumbnail-3.jpg", videoUrl: "" },
    growthStats: "Built 1.1M+ followers over 2 years with the system",
  },
  {
    id: "4",
    creatorName: "Ashley",
    handle: "@ash_smash33",
    avatar: "/assets/client-profile/ashley2.png",
    statsImage: "/assets/client-profile/ashley1.png",
    before: { views: "~2K views", label: "Generic edit", thumbnail: "/images/testimonials/video-thumbnail-1.jpg", videoUrl: "" },
    after: { views: "500K+ views", label: "Crack Edited™", thumbnail: "/images/testimonials/video-thumbnail-2.jpg", videoUrl: "" },
    growthStats: "Built 66K+ engaged followers with crack editing™",
  },
  {
    id: "5",
    creatorName: "Jonathan",
    handle: "@foodgod",
    avatar: "/assets/client-profile/foodgod2.png",
    statsImage: "/assets/client-profile/foodgod1.png",
    before: { views: "~50K views", label: "Generic edit", thumbnail: "/images/testimonials/video-thumbnail-3.jpg", videoUrl: "" },
    after: { views: "10M+ views", label: "Crack Edited™", thumbnail: "/images/testimonials/video-thumbnail-4.jpg", videoUrl: "" },
    growthStats: "Scaled to 3.7M followers with the system",
  },
  {
    id: "6",
    creatorName: "Neil",
    handle: "@neilpatel",
    avatar: "/assets/client-profile/neil2.png",
    statsImage: "/assets/client-profile/neil1.png",
    before: { views: "~5K views", label: "Generic edit", thumbnail: "/images/testimonials/video-thumbnail-1.jpg", videoUrl: "" },
    after: { views: "2M+ views", label: "Crack Edited™", thumbnail: "/images/testimonials/video-thumbnail-3.jpg", videoUrl: "" },
    growthStats: "Grew to 646K+ followers as a marketing expert",
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

// Profile Avatar with hover stats popup
interface ProfileAvatarProps {
  transformation: Transformation
  isActive: boolean
  onClick: () => void
}

function ProfileAvatar({ transformation, isActive, onClick }: ProfileAvatarProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex flex-col items-center gap-2 transition-all duration-300 ease-out ${
        isActive ? "opacity-100" : "opacity-50 hover:opacity-70"
      }`}
      aria-label={`Go to ${transformation.creatorName}'s transformation`}
    >
      {/* Stats Popup - Desktop only */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-50 hidden sm:block"
          >
            <div className="relative w-[220px] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-card">
              <Image
                src={transformation.statsImage}
                alt={`${transformation.creatorName}'s social media stats`}
                width={220}
                height={400}
                className="w-full h-auto object-cover"
              />
              {/* Arrow pointer */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-card border-r border-b border-white/20" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar */}
      <div
        className={`relative rounded-full overflow-hidden transition-all duration-300 ease-out ${
          isActive
            ? "w-11 h-11 sm:w-12 sm:h-12 ring-2 ring-primary ring-offset-2 ring-offset-card shadow-[0_0_15px_var(--primary-glow)]"
            : "w-8 h-8 sm:w-9 sm:h-9 hover:scale-105"
        }`}
      >
        <Image
          src={transformation.avatar}
          alt={transformation.creatorName}
          fill
          className="object-cover"
        />
      </div>

      {/* Name and handle */}
      <div className="text-center">
        <p
          className={`font-semibold leading-tight transition-all duration-300 ${
            isActive
              ? "text-foreground text-xs sm:text-sm"
              : "text-muted-foreground text-[10px] sm:text-xs"
          }`}
        >
          {transformation.creatorName}
        </p>
        <p
          className={`leading-tight transition-all duration-300 ${
            isActive
              ? "text-primary text-[10px] sm:text-xs"
              : "text-muted-foreground/70 text-[8px] sm:text-[10px]"
          }`}
        >
          {transformation.handle}
        </p>
      </div>
    </button>
  )
}

// Helper to get 5 profiles with active item centered (hide the furthest one)
function getVisibleProfiles(activeIndex: number, items: Transformation[]) {
  const total = items.length
  const visibleCount = 5
  const centerPosition = Math.floor(visibleCount / 2) // position 2 (0-indexed) = 3rd item

  // Create array of indices centered around active
  const visibleIndices: number[] = []
  for (let i = -centerPosition; i <= centerPosition; i++) {
    const index = (activeIndex + i + total) % total
    visibleIndices.push(index)
  }

  return visibleIndices.map(originalIndex => ({
    item: items[originalIndex],
    originalIndex
  }))
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
  const visibleProfiles = getVisibleProfiles(currentIndex, transformations)

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
                <GradientText variant="primary">THIS</GradientText> to{" "}
                <GradientText variant="primary">THIS</GradientText>?
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
              className="bg-[#10131a] backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8"
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
                    videoUrl={currentTransformation.before.videoUrl}
                  />
                </div>

                {/* Arrow - larger with pulse animation */}
                <motion.div
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0 0 var(--primary-glow)",
                      "0 0 0 10px var(--primary-glow-transparent)",
                      "0 0 0 0 var(--primary-glow)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white rotate-90 sm:rotate-0" />
                </motion.div>

                {/* After Card */}
                <div className="flex flex-col items-center">
                  <span className="px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold mb-3">
                    AFTER
                  </span>
                  <VideoCard
                    type="after"
                    label={currentTransformation.after.label}
                    views={currentTransformation.after.views}
                    videoUrl={currentTransformation.after.videoUrl}
                  />
                </div>
              </div>

              {/* Growth Stats */}
              <div className="text-center border-t border-white/10 pt-6">
                <p className="text-gray-400">
                  {currentTransformation.growthStats}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Profile Navigation - Active profile centered (5 visible) */}
          <div className="flex justify-center items-end gap-3 sm:gap-4 md:gap-6 mt-6 px-4">
            {visibleProfiles.map(({ item, originalIndex }) => (
              <ProfileAvatar
                key={item.id}
                transformation={item}
                isActive={originalIndex === currentIndex}
                onClick={() => goToSlide(originalIndex)}
              />
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
