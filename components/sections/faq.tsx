"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, HelpCircle, Mail } from "lucide-react"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { GradientText } from "@/components/ui/gradient-text"
import {
  fadeInUp,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations"

// Mini lamp effect for accordion items
function AccordionLampEffect() {
  return (
    <div className="absolute inset-x-0 -top-px overflow-visible pointer-events-none">
      {/* Main glow line at top - aligned left with padding for border radius */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        exit={{ opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ transformOrigin: "left center" }}
        className="absolute left-6 top-0 h-px w-2/3 bg-gradient-to-r from-orange-400 via-orange-400/50 to-transparent"
      />
      {/* Bright left-aligned glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute -top-1 left-20 h-2 w-32 bg-orange-400 blur-md rounded-full"
      />
      {/* Wider soft glow - aligned left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute -top-6 left-12 h-12 w-64 bg-orange-500/30 blur-2xl rounded-full"
      />
      {/* Downward light cone - aligned left */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.15, scaleY: 1 }}
        exit={{ opacity: 0, scaleY: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "top center" }}
        className="absolute top-0 left-12 w-48 h-24 bg-gradient-to-b from-orange-400/40 via-orange-400/10 to-transparent"
      />
    </div>
  )
}

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
  // Pre-expand first FAQ to show value immediately
  const [openItem, setOpenItem] = useState<string | undefined>("item-0")

  return (
    <section className="py-20 md:py-28 section-dark">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="max-w-3xl mx-auto"
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            {/* Visual icon element */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-headline mb-4">
              frequently asked{" "}
              <GradientText variant="orange">questions</GradientText>
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Everything you need to know about crack editing™ before you enroll.
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div variants={fadeInUp}>
            <Accordion
              type="single"
              collapsible
              className="space-y-3"
              value={openItem}
              onValueChange={setOpenItem}
              aria-label="Frequently asked questions about crack editing™"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="relative rounded-xl border border-border/50 bg-card/30 px-6 data-[state=open]:bg-card/50 data-[state=open]:border-orange-500/30 transition-colors duration-300"
                >
                  {/* Lamp effect - only shown on open item */}
                  <AnimatePresence>
                    {openItem === `item-${index}` && <AccordionLampEffect />}
                  </AnimatePresence>
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

          {/* Support Link */}
          <div className="text-center mt-8">
            <p className="text-sm flex items-center justify-center gap-2 text-[#1a1a2e]">
              <Mail className="w-4 h-4 text-primary" />
              <span>Can&apos;t find your answer?</span>
              <a
                href="mailto:hello@limitless.inc"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
              >
                Contact us
              </a>
            </p>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-8"
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
