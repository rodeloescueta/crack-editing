import type { Variants, Transition } from "framer-motion"

// Default transition settings
export const defaultTransition: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1], // ease-out-cubic
}

export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
}

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
}

// Fade in from top
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
}

// Fade in only (no movement)
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
}

// Scale up with fade
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
}

// Stagger container for child animations
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Stagger with more delay
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
}

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
}

// For hover effects on cards
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      duration: 0.2,
      ease: [0, 0, 0.2, 1], // easeOut equivalent
    },
  },
}

// Enhanced card hover with glow (for module cards)
export const cardHoverGlow: Variants = {
  rest: {
    scale: 1,
    boxShadow: "0 0 0 rgba(139, 92, 246, 0)",
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 40px rgba(139, 92, 246, 0.15)",
    transition: {
      duration: 0.2,
      ease: [0, 0, 0.2, 1],
    },
  },
}

// Lift effect for feature cards
export const cardHoverLift: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
  },
  hover: {
    y: -6,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.25,
      ease: [0, 0, 0.2, 1],
    },
  },
}

// Button hover effect
export const buttonHover: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1],
    },
  },
  tap: {
    scale: 0.98,
  },
}

// Viewport settings for scroll animations
export const defaultViewport = {
  once: true,
  margin: "-100px",
}

export const immediateViewport = {
  once: true,
  margin: "0px",
}
