"use client"

import { useState } from "react"
import { Instagram, Twitter, Youtube, Send, CheckCircle } from "lucide-react"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui/button"

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Fulfillment Policy", href: "#" },
  { label: "Careers", href: "#" },
]

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
]

// TikTok icon (not available in Lucide)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  )
}

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <footer className="border-t border-white/10 py-16 bg-[#0a0a1a]">
      <Container>
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Social Proof */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-primary font-semibold text-sm">500+ editors</span>
            <span className="text-white/70 text-sm">have joined the community</span>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full max-w-md">
            <h3 className="text-lg font-semibold text-white mb-2">
              Stay in the loop
            </h3>
            <p className="text-sm text-white/60 mb-4">
              Get editing tips and updates straight to your inbox.
            </p>
            {isSubmitted ? (
              <div className="flex items-center justify-center gap-2 text-green-400 py-3">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  required
                />
                <Button
                  type="submit"
                  size="default"
                  disabled={isLoading}
                  className="px-4"
                >
                  {isLoading ? (
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Social Media Links - Larger with enhanced hover */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary hover:bg-primary/20 hover:scale-110 transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary hover:bg-primary/20 hover:scale-110 transition-all duration-200"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-6 h-6" />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Support Email */}
          <p className="text-sm text-white/60">
            Need support? Email:{" "}
            <a
              href="mailto:hello@limitless.inc"
              className="text-primary hover:underline"
            >
              hello@limitless.inc
            </a>
          </p>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CE</span>
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-white">crack</span>
              <span className="text-primary">editing</span>
              <span className="text-white">™</span>
            </span>
          </div>

          {/* Company Info */}
          <div className="text-sm text-white/50 space-y-1">
            <p>©2026 The Limitless Company</p>
            <p>6600 Sunset Blvd, Los Angeles CA 90028</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
