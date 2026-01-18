import { cn } from "@/lib/utils"

// Limitless Company - TLC Fingerprint logo
export function LimitlessLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" className={cn("w-24 h-28", className)}>
      {/* Fingerprint curves - outer */}
      <path
        d="M15 85 Q5 70 5 50 Q5 20 40 10 Q75 20 75 50 Q75 70 65 85"
        fill="none"
        stroke="#9CA3AF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 80 Q12 68 12 50 Q12 25 40 17 Q68 25 68 50 Q68 68 60 80"
        fill="none"
        stroke="#9CA3AF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M25 75 Q18 65 18 50 Q18 30 40 24 Q62 30 62 50 Q62 65 55 75"
        fill="none"
        stroke="#9CA3AF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Inner curves */}
      <path
        d="M30 70 Q24 62 24 50 Q24 35 40 30 Q56 35 56 50 Q56 62 50 70"
        fill="none"
        stroke="#9CA3AF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M35 65 Q30 58 30 50 Q30 40 40 36 Q50 40 50 50 Q50 58 45 65"
        fill="none"
        stroke="#9CA3AF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Center curves */}
      <path
        d="M38 60 Q36 55 36 50 Q36 44 40 42 Q44 44 44 50 Q44 55 42 60"
        fill="none"
        stroke="#9CA3AF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* TLC text overlay */}
      <text
        x="40"
        y="55"
        fontFamily="Georgia, serif"
        fontSize="18"
        fontWeight="600"
        fill="#374151"
        textAnchor="middle"
        fontStyle="italic"
      >
        TLC
      </text>
    </svg>
  )
}

// Brand logo SVG components - actual company logos

// Google - Multicolored "Google" wordmark
export function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 44" className={cn("w-24 h-8", className)}>
      {/* G - Blue */}
      <text x="0" y="34" fontFamily="Product Sans, Arial, sans-serif" fontSize="36" fontWeight="500" fill="#4285F4">G</text>
      {/* o - Red */}
      <text x="28" y="34" fontFamily="Product Sans, Arial, sans-serif" fontSize="36" fontWeight="500" fill="#EA4335">o</text>
      {/* o - Yellow */}
      <text x="52" y="34" fontFamily="Product Sans, Arial, sans-serif" fontSize="36" fontWeight="500" fill="#FBBC05">o</text>
      {/* g - Blue */}
      <text x="76" y="34" fontFamily="Product Sans, Arial, sans-serif" fontSize="36" fontWeight="500" fill="#4285F4">g</text>
      {/* l - Green */}
      <text x="100" y="34" fontFamily="Product Sans, Arial, sans-serif" fontSize="36" fontWeight="500" fill="#34A853">l</text>
      {/* e - Red */}
      <text x="112" y="34" fontFamily="Product Sans, Arial, sans-serif" fontSize="36" fontWeight="500" fill="#EA4335">e</text>
    </svg>
  )
}

// MailChimp - Freddie mascot in yellow circle + "mailchimp" wordmark
export function MailchimpLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 40" className={cn("w-32 h-8", className)}>
      {/* Yellow circle background */}
      <circle cx="20" cy="20" r="18" fill="#FFE01B" />
      {/* Freddie's face outline */}
      <path
        d="M20 6c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14z"
        fill="#FFE01B"
      />
      {/* Freddie simplified - cap */}
      <path d="M12 12c2-3 5-4 8-4s6 1 8 4c-2-1-5-2-8-2s-6 1-8 2z" fill="#241C15" />
      {/* Face */}
      <ellipse cx="20" cy="22" rx="10" ry="9" fill="#FFE01B" stroke="#241C15" strokeWidth="1.5" />
      {/* Winking left eye */}
      <path d="M14 19c1-1 3-1 4 0" fill="none" stroke="#241C15" strokeWidth="1.2" strokeLinecap="round" />
      {/* Right eye */}
      <circle cx="26" cy="19" r="1.5" fill="#241C15" />
      {/* Smile */}
      <path d="M15 24c2 3 5 3.5 5 3.5s3-.5 5-3.5" fill="none" stroke="#241C15" strokeWidth="1.2" strokeLinecap="round" />
      {/* Ear */}
      <ellipse cx="10" cy="22" rx="2" ry="3" fill="#FFE01B" stroke="#241C15" strokeWidth="1" />
      {/* "mailchimp" wordmark */}
      <text x="44" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="700" fill="#241C15">
        mailchimp
      </text>
    </svg>
  )
}

// Adobe - Red "Adobe" wordmark
export function AdobeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 28" className={cn("w-20 h-8", className)}>
      <text
        x="2"
        y="22"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#EB1000"
      >
        Adobe
      </text>
    </svg>
  )
}

// HSN - Blue circle with white "HSN" text
export function HSNLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={cn("w-12 h-12", className)}>
      {/* Blue circle background */}
      <circle cx="24" cy="24" r="22" fill="#0078D4" />
      {/* White HSN text */}
      <text
        x="24"
        y="29"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
      >
        HSN
      </text>
    </svg>
  )
}

// Intuit - Blue "INTUIT" wordmark with distinctive arch "n"
export function IntuitLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 32" className={cn("w-24 h-8", className)}>
      {/* I */}
      <rect x="2" y="6" width="6" height="20" fill="#365EBF" />
      {/* n - arch shape */}
      <path d="M14 26V14c0-5 4-8 8-8v6c-2 0-4 2-4 4v10h-4z" fill="#365EBF" />
      <rect x="22" y="6" width="4" height="20" fill="#365EBF" />
      {/* t */}
      <rect x="32" y="6" width="4" height="20" fill="#365EBF" />
      <rect x="28" y="6" width="12" height="4" fill="#365EBF" />
      {/* u */}
      <path d="M46 6v14c0 2 2 4 4 4s4-2 4-4V6h4v14c0 5-4 8-8 8s-8-3-8-8V6h4z" fill="#365EBF" />
      {/* i */}
      <rect x="64" y="10" width="4" height="16" fill="#365EBF" />
      <rect x="64" y="4" width="4" height="4" fill="#365EBF" />
      {/* t */}
      <rect x="74" y="6" width="4" height="20" fill="#365EBF" />
      <rect x="70" y="6" width="12" height="4" fill="#365EBF" />
    </svg>
  )
}

// Absolut Vodka - Iconic bottle silhouette
export function AbsolutLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" className={cn("w-10 h-12", className)}>
      {/* Bottle silhouette */}
      <path
        fill="currentColor"
        d="M8 0h8v3h-1v2h1c2 0 4 2 4 4v20c0 2-2 3-4 3H8c-2 0-4-1-4-3V9c0-2 2-4 4-4h1V3H8V0z"
        opacity="0.8"
      />
      {/* Label area */}
      <rect fill="currentColor" x="6" y="12" width="12" height="8" rx="1" opacity="0.4" />
      {/* Text "A" */}
      <text x="9" y="19" fontFamily="Times, serif" fontSize="8" fontWeight="700" fill="currentColor">
        A
      </text>
    </svg>
  )
}

// Bravo - Speech bubble with gradient
export function BravoLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 28" className={cn("w-20 h-10", className)}>
      <defs>
        <linearGradient id="bravoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      {/* Speech bubble shape */}
      <path
        fill="url(#bravoGradient)"
        d="M4 4h54c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4H20l-6 6v-6H4c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4z"
      />
      {/* "bravo" text */}
      <text
        x="10"
        y="16"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="10"
        fontWeight="600"
        fill="white"
      >
        bravo
      </text>
    </svg>
  )
}

// Core Power - Bold fitness brand
export function CorePowerLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 24" className={cn("w-32 h-12", className)}>
      {/* CORE text */}
      <text x="2" y="17" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900" fill="#1E3A5F">
        CORE
      </text>
      {/* POWER text - lighter */}
      <text x="48" y="17" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="400" fill="#1E3A5F">
        POWER
      </text>
    </svg>
  )
}

// Text-based logos fallback
export function TextLogo({ name, className }: { name: string; className?: string }) {
  return (
    <span className={cn("text-lg md:text-xl font-bold tracking-tight whitespace-nowrap", className)}>
      {name}
    </span>
  )
}

// Brand data with logo components
interface BrandItem {
  name: string
  logo: React.ReactNode
}

export const brandItems: BrandItem[] = [
  { name: "Google", logo: <GoogleLogo /> },
  { name: "Mailchimp", logo: <MailchimpLogo /> },
  { name: "Adobe", logo: <AdobeLogo /> },
  { name: "HSN", logo: <HSNLogo /> },
  { name: "Absolut Vodka", logo: <AbsolutLogo /> },
  { name: "Intuit", logo: <IntuitLogo /> },
  { name: "Bravo", logo: <BravoLogo /> },
  { name: "Core Power", logo: <CorePowerLogo /> },
]
