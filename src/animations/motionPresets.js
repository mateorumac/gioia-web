// Shared Framer Motion animation variants
// Editorial: calm, slow, no bounce, minimal displacement

const ease = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.65, ease },
  },
};

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease },
  },
};

// Wrap parent in this — children animate in sequence
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// For decorative rule/divider lines — grows from left
export const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease },
  },
};

// Shared viewport options (trigger once, start when 15% visible)
export const viewport = { once: true, amount: 0.15 };
