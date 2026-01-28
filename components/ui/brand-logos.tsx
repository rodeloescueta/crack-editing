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
  { name: "Bravo", logo: <ClientLogo src="/assets/brands/1.png" alt="Bravo" /> },
  { name: "Intuit", logo: <ClientLogo src="/assets/brands/2.png" alt="Intuit" /> },
  { name: "Absolut Vodka", logo: <ClientLogo src="/assets/brands/3.png" alt="Absolut Vodka" /> },
  { name: "Anastasia Beverly Hills", logo: <ClientLogo src="/assets/brands/4.png" alt="Anastasia Beverly Hills" /> },
  { name: "HSN", logo: <ClientLogo src="/assets/brands/5.png" alt="HSN" /> },
  { name: "Adobe", logo: <ClientLogo src="/assets/brands/6.png" alt="Adobe" /> },
  { name: "Core Power", logo: <ClientLogo src="/assets/brands/7.png" alt="Core Power" /> },
  { name: "Google", logo: <ClientLogo src="/assets/brands/8.png" alt="Google" /> },
  { name: "Mailchimp", logo: <ClientLogo src="/assets/brands/9.png" alt="Mailchimp" /> },
]
