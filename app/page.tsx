import {
  HeroSection,
  TransformationCarousel,
  ProblemSolutionSection,
  CourseModulesSection,
  ForMeSection,
} from "@/components/sections"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <TransformationCarousel />
      <ProblemSolutionSection />
      <CourseModulesSection />
      <ForMeSection />
    </main>
  )
}
