import { cn } from "@/lib/utils"

type GradientVariant = "primary" | "orange" | "purple" | "blue"

interface GradientTextProps {
  children: React.ReactNode
  variant?: GradientVariant
  className?: string
  as?: React.ElementType
}

const gradientClasses: Record<GradientVariant, string> = {
  primary: "text-gradient-primary", // Uses theme color (blue or purple based on URL param)
  orange: "text-gradient-orange",   // Now maps to primary gradient for backward compatibility
  purple: "text-gradient-purple",
  blue: "text-gradient-blue",
}

export function GradientText({
  children,
  variant = "primary",
  className,
  as: Component = "span",
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        gradientClasses[variant],
        className
      )}
    >
      {children}
    </Component>
  )
}
