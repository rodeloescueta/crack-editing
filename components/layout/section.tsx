import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: React.ElementType
}

export function Section({
  children,
  className,
  id,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        "relative w-full py-16 sm:py-20 md:py-24 lg:py-32",
        className
      )}
    >
      {children}
    </Component>
  )
}
