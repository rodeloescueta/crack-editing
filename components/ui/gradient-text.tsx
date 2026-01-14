import { cn } from "@/lib/utils"

type GradientVariant = "orange" | "purple"

interface GradientTextProps {
  children: React.ReactNode
  variant?: GradientVariant
  className?: string
  as?: React.ElementType
}

const gradientClasses: Record<GradientVariant, string> = {
  orange: "text-gradient-orange",
  purple: "text-gradient-purple",
}

export function GradientText({
  children,
  variant = "orange",
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
