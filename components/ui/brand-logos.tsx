import Image from "next/image"
import { cn } from "@/lib/utils"

// Limitless Company - TLC Fingerprint logo (Black thumbprint)
export function LimitlessLogo({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-24 h-28", className)}>
      <Image
        src="/assets/tlc-thumbprint.png"
        alt="The Limitless Company"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}

// Client Logo component - renders PNG images
// Uses invert filter to make white logos visible on light background
function ClientLogo({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("relative w-36 h-16 md:w-44 md:h-20", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain invert opacity-70 hover:opacity-100 transition-opacity"
      />
    </div>
  )
}

// Brand data with actual client logos
interface BrandItem {
  name: string
  logo: React.ReactNode
}

export const brandItems: BrandItem[] = [
  { name: "HATCH", logo: <ClientLogo src="/assets/client-logo/1.png" alt="HATCH" /> },
  { name: "C&G", logo: <ClientLogo src="/assets/client-logo/2.png" alt="C&G" /> },
  { name: "Foodgod", logo: <ClientLogo src="/assets/client-logo/3.png" alt="Foodgod" /> },
  { name: "NP Digital", logo: <ClientLogo src="/assets/client-logo/5.png" alt="NP Digital" /> },
  { name: "Neil Patel", logo: <ClientLogo src="/assets/client-logo/6.png" alt="Neil Patel" /> },
  { name: "The Nikki Haskell Show", logo: <ClientLogo src="/assets/client-logo/7.png" alt="The Nikki Haskell Show" /> },
  { name: "Non Obvious Company", logo: <ClientLogo src="/assets/client-logo/8.png" alt="Non Obvious Company" /> },
  { name: "ConnectedEC", logo: <ClientLogo src="/assets/client-logo/9.png" alt="ConnectedEC" /> },
  { name: "Sparkle S", logo: <ClientLogo src="/assets/client-logo/10.png" alt="Sparkle S" /> },
  { name: "Dirty Genes Podcast", logo: <ClientLogo src="/assets/client-logo/11.png" alt="Dirty Genes Podcast" /> },
]
