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

export default function Page() {
  return (
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
  )
}
