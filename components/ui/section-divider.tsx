"use client"

import { cn } from "@/lib/utils"

type DividerVariant = "wave" | "curve" | "slope"
type DividerPosition = "top" | "bottom"

interface SectionDividerProps {
  /** Color transitioning FROM (the section above) */
  fromColor?: string
  /** Color transitioning TO (the section below) */
  toColor?: string
  /** Shape variant */
  variant?: DividerVariant
  /** Position - affects the curve direction */
  position?: DividerPosition
  /** Height of the divider */
  height?: number
  /** Additional className */
  className?: string
  /** Flip horizontally */
  flipX?: boolean
}

export function SectionDivider({
  fromColor = "var(--background)",
  toColor = "var(--section-light)",
  variant = "curve",
  position = "bottom",
  height = 80,
  className,
  flipX = false,
}: SectionDividerProps) {
  const isTop = position === "top"

  return (
    <div
      className={cn(
        "w-full overflow-hidden pointer-events-none select-none",
        isTop ? "-mb-px" : "-mt-px",
        className
      )}
      style={{
        height,
        backgroundColor: fromColor,
        transform: flipX ? "scaleX(-1)" : undefined,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{
          transform: isTop ? "rotate(180deg)" : undefined,
        }}
      >
        {variant === "curve" && (
          <path
            d="M0,0 C360,100 1080,100 1440,0 L1440,100 L0,100 Z"
            fill={toColor}
          />
        )}
        {variant === "wave" && (
          <path
            d="M0,50 C180,100 360,0 540,50 C720,100 900,0 1080,50 C1260,100 1440,0 1440,50 L1440,100 L0,100 Z"
            fill={toColor}
          />
        )}
        {variant === "slope" && (
          <path
            d="M0,100 L1440,0 L1440,100 L0,100 Z"
            fill={toColor}
          />
        )}
      </svg>
    </div>
  )
}

// Pre-configured dividers for common transitions
export function DarkToLightDivider({ className, ...props }: Omit<SectionDividerProps, "fromColor" | "toColor">) {
  return (
    <SectionDivider
      fromColor="var(--section-dark)"
      toColor="var(--section-light)"
      className={className}
      {...props}
    />
  )
}

export function LightToDarkDivider({ className, ...props }: Omit<SectionDividerProps, "fromColor" | "toColor">) {
  return (
    <SectionDivider
      fromColor="var(--section-light)"
      toColor="var(--section-dark)"
      className={className}
      {...props}
    />
  )
}
