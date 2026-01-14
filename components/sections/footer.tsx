import { Container } from "@/components/layout"

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Fulfillment Policy", href: "#" },
  { label: "Careers", href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-12">
      <Container>
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Support Email */}
          <p className="text-sm text-muted-foreground">
            Need support? Email:{" "}
            <a
              href="mailto:hello@limitless.inc"
              className="text-primary hover:underline"
            >
              hello@limitless.inc
            </a>
          </p>

          {/* Company Info */}
          <div className="text-sm text-muted-foreground space-y-1">
            <p>©2026 The Limitless Company</p>
            <p>6600 Sunset Blvd, Los Angeles CA 90028</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
