import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full px-4 sm:px-6 lg:px-12 xl:px-16",
        className
      )}
    >
      {children}
    </Component>
  )
}
