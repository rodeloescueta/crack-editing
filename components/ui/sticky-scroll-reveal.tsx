"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Stop auto-scroll function
  const stopAutoScroll = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  // Start auto-scroll function
  const startAutoScroll = useCallback(() => {
    // Use DOM query to get the scroll container (avoids conflict with Framer Motion's useScroll)
    const container = document.querySelector('.scrollbar-hide') as HTMLDivElement | null;
    if (!container) return;

    const scrollSpeed = 0.5; // pixels per frame (subpixel for smooth scrolling)
    let accumulatedScroll = 0; // Accumulator for subpixel scrolling

    const animate = () => {
      const container = document.querySelector('.scrollbar-hide') as HTMLDivElement | null;
      if (!container) return;

      const maxScroll = container.scrollHeight - container.clientHeight;
      const currentScroll = container.scrollTop;

      if (currentScroll >= maxScroll - 1) {
        setIsPlaying(false);
        animationRef.current = null;
        return;
      }

      // Accumulate subpixel scroll and apply when >= 1
      accumulatedScroll += scrollSpeed;
      if (accumulatedScroll >= 1) {
        const pixelsToScroll = Math.floor(accumulatedScroll);
        container.scrollTop += pixelsToScroll;
        accumulatedScroll -= pixelsToScroll;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  // Detect user scroll interaction to stop auto-scroll
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleUserInteraction = () => {
      if (isPlaying) {
        stopAutoScroll();
      }
    };

    container.addEventListener('wheel', handleUserInteraction);
    container.addEventListener('touchstart', handleUserInteraction);

    return () => {
      container.removeEventListener('wheel', handleUserInteraction);
      container.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [isPlaying, stopAutoScroll]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Toggle play/pause handler
  const handlePlayPause = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // Don't trigger progress bar click

    if (isPlaying) {
      stopAutoScroll();
    } else {
      setIsPlaying(true);
      startAutoScroll();
    }
  }, [isPlaying, startAutoScroll, stopAutoScroll]);

  // Handle click on progress bar to jump to position
  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // Ignore clicks on the play/pause button
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;

    if (!ref.current || !progressBarRef.current) return;

    // Stop auto-scroll if playing
    if (isPlaying) {
      stopAutoScroll();
    }

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));

    const maxScroll = ref.current.scrollHeight - ref.current.clientHeight;
    ref.current.scrollTo({
      top: percentage * maxScroll,
      behavior: "smooth",
    });
  }, [isPlaying, stopAutoScroll]);

  const backgroundColors = [
    "#E8F4F8", // ice-blue light
    "#DEF0F5", // ice-blue medium
    "#D4ECF2", // ice-blue darker
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #0ea5e9, #38bdf8)", // sky-500 to sky-400
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div className="mx-auto max-w-4xl rounded-2xl border border-border/50 bg-white/80 shadow-lg backdrop-blur-sm overflow-hidden">
      <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="relative rounded-t-2xl"
      >
        <div
          ref={ref}
          className="flex h-[22rem] justify-center gap-6 overflow-y-auto p-6 lg:p-8 scrollbar-hide"
        >
        <div className="relative flex items-start">
          <div className="max-w-md lg:max-w-lg">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-14 first:mt-4">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-xl lg:text-2xl font-bold text-[oklch(0.15_0.03_240)]"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-sm lg:text-base mt-6 max-w-sm text-[oklch(0.35_0.02_240)] whitespace-pre-line"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-24" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "sticky top-6 hidden h-48 w-64 lg:h-56 lg:w-72 shrink-0 overflow-hidden rounded-xl shadow-md lg:block",
            contentClassName,
          )}
        >
          {content[activeCard].content ?? null}
        </div>
        </div>
      </motion.div>

      {/* YouTube-style Progress Bar */}
      <div className="relative px-4 py-3 bg-[oklch(0.97_0.01_240)] border-t border-[oklch(0.90_0.02_240)]">
        <div
          ref={progressBarRef}
          className="relative flex items-center gap-3 cursor-pointer group"
          onClick={handleProgressClick}
        >
          {/* Play/Pause Button */}
          <motion.button
            onClick={handlePlayPause}
            className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[oklch(0.65_0.20_280)] to-[oklch(0.55_0.25_260)] flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            animate={isPlaying ? {} : { scale: [1, 1.05, 1] }}
            transition={isPlaying ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {isPlaying ? (
              <Pause className="w-3 h-3 text-white fill-white" />
            ) : (
              <Play className="w-3 h-3 text-white fill-white ml-0.5" />
            )}
          </motion.button>

          {/* Progress Track */}
          <div className="flex-1 relative h-2 bg-[oklch(0.88_0.02_240)] rounded-full overflow-hidden">
            {/* Progress Fill */}
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[oklch(0.60_0.20_280)] via-[oklch(0.55_0.22_270)] to-[oklch(0.50_0.24_260)]"
              style={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.1 }}
            />

            {/* Playhead */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md border-2 border-[oklch(0.55_0.22_270)] opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `calc(${progress * 100}% - 6px)` }}
            />
          </div>

          {/* Module indicator */}
          <div className="flex-shrink-0 text-xs font-medium text-[oklch(0.45_0.02_240)] tabular-nums">
            {activeCard + 1}/{cardLength}
          </div>
        </div>
      </div>
    </div>
  );
};
