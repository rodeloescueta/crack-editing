"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

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
  const ref = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
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

  // Handle click on progress bar to jump to position
  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));

    const maxScroll = ref.current.scrollHeight - ref.current.clientHeight;
    ref.current.scrollTo({
      top: percentage * maxScroll,
      behavior: "smooth",
    });
  }, []);

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
        className="relative flex h-[22rem] justify-center gap-6 overflow-y-auto rounded-t-2xl p-6 lg:p-8 scrollbar-hide"
        ref={ref}
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
      </motion.div>

      {/* YouTube-style Progress Bar */}
      <div className="relative px-4 py-3 bg-[oklch(0.97_0.01_240)] border-t border-[oklch(0.90_0.02_240)]">
        <div
          ref={progressBarRef}
          className="relative flex items-center gap-3 cursor-pointer group"
          onClick={handleProgressClick}
        >
          {/* Play Button */}
          <motion.div
            className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[oklch(0.65_0.20_280)] to-[oklch(0.55_0.25_260)] flex items-center justify-center shadow-sm"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Play className="w-3 h-3 text-white fill-white ml-0.5" />
          </motion.div>

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
