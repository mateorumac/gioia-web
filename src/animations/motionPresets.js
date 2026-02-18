// Shared Framer Motion animation variants
// Editorial: luxury pace, intentional timing, no bounce

const ease = [0.16, 1, 0.3, 1]; // Custom cubic-bezier — calm deceleration

// ─── Text / headings ───────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.92, ease, type: "tween" },
  },
};

// ─── Centered / full-width reveals (no y-shift) ────────────────────
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease, type: "tween" },
  },
};

// ─── Photography / image panels ────────────────────────────────────
export const imageReveal = {
  hidden: { opacity: 0, scale: 1.018 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.15, ease, type: "tween" },
  },
};

// ─── Stagger parent — wraps any group of sequenced children ────────
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// ─── Decorative horizontal rule / divider ──────────────────────────
export const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.05, ease, type: "tween" },
  },
};

// ─── Default viewport — fires when 35% of the element is visible ───
// Use a lower `amount` override for large/tall elements (mosaics etc.)
export const viewport = { once: true, amount: 0.35 };
