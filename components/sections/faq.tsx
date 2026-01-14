"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  fadeInUp,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations"

const faqs = [
  {
    question: "What exactly will I get when I enroll?",
    answer:
      "You'll get instant access to the complete 5-hour crack editing™ training program, including all 6 modules, real video breakdowns, practice tools, and lifetime access to all future updates. Everything is self-paced so you can learn on your schedule.",
  },
  {
    question: "How is this different from other editing courses?",
    answer:
      "Most editing courses focus on technical skills—buttons, timelines, effects. Crack editing™ teaches you the psychology behind why people watch. You'll learn the underlying principles that make videos feel addictive, not just how to use software.",
  },
  {
    question: "Do I need specific software to take this course?",
    answer:
      "The principles taught in crack editing™ work across any editing software. Whether you use Premiere Pro, Final Cut, CapCut, DaVinci Resolve, or any other tool—the framework applies to all of them.",
  },
  {
    question: "How much time should I expect to spend on this?",
    answer:
      "The core training is about 5 hours of video content. Most students complete it over a weekend or spread it across a week or two. After that, you'll have lifetime access to revisit any module whenever you need a refresher.",
  },
  {
    question: "Will this help with client work?",
    answer:
      "Absolutely. The skills you learn will make you a more valuable editor. You'll be able to create videos that perform better, which means happier clients, better testimonials, and the ability to charge higher rates.",
  },
  {
    question: "Will this make my videos go viral?",
    answer:
      "We can't guarantee virality—no one can. But we can teach you the principles that give your videos the best possible chance to perform. The same principles that have generated over 3 billion views for our clients.",
  },
  {
    question: "What if this isn't a good fit for me?",
    answer:
      "We offer a 30-day money-back guarantee. If you go through the course and don't feel like it's worth the investment, just email us and we'll refund you in full. No questions asked.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="max-w-3xl mx-auto"
        >
          {/* Accordion */}
          <motion.div variants={fadeInUp}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-xl border border-border/50 bg-card/30 px-6 data-[state=open]:bg-card/50"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <Button
              size="lg"
              className="min-h-[52px] px-10 text-base font-semibold"
            >
              enroll in crack editing™
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
