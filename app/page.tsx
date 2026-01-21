import {
  HeroSection,
  TransformationCarousel,
  ProblemSolutionSection,
  CourseModulesSection,
  ForMeSection,
  WhatYouGetSection,
  CreatorsSection,
  PricingSection,
  FAQSection,
  Footer,
} from "@/components/sections"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { SectionDivider } from "@/components/ui/section-divider"

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <main>
        {/* DARK: Hero Section */}
        <HeroSection />

        {/* LIGHT: Transformation Carousel (no divider - direct transition) */}
        <TransformationCarousel />

        {/* Divider: Light to Iceberg Dark */}
        <SectionDivider
          fromColor="var(--section-light)"
          toColor="#0a1628"
          variant="curve"
          height={100}
        />

        {/* DARK: Problem vs Solution (iceberg gradient) */}
        <ProblemSolutionSection />

        {/* LIGHT: Course Modules (no divider - direct transition) */}
        <CourseModulesSection />

        {/* Divider: Light to Dark Navy */}
        <SectionDivider
          fromColor="var(--section-light)"
          toColor="#0a1628"
          variant="curve"
          height={100}
        />

        {/* DARK SECTIONS WRAPPER - seamless background */}
        <div className="bg-gradient-to-b from-[#0a1628] via-[#0c2445] to-[#0a1628]">
          {/* DARK: Is This For Me */}
          <ForMeSection />

          {/* DARK: What You Get */}
          <WhatYouGetSection />
        </div>

        {/* DARK: Meet The Creators (no divider - both dark) */}
        <CreatorsSection />

        {/* DARK: Pricing (with oval light background inside) */}
        <PricingSection />

        {/* DARK: FAQ */}
        <FAQSection />

        {/* DARK: Footer (continues from FAQ) */}
        <Footer />
      </main>
    </>
  )
}
