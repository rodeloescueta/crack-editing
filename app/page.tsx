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

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <main>
        <HeroSection />
        <TransformationCarousel />
        <ProblemSolutionSection />
        <CourseModulesSection />
        <ForMeSection />
        <WhatYouGetSection />
        <CreatorsSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  )
}
