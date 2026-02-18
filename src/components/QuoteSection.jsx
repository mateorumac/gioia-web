import { motion } from "framer-motion";
import "../styles/QuoteSection.css";
import { fadeIn, staggerContainer, viewport } from "../animations/motionPresets";

function QuoteSection() {
  return (
    <section className="quote-section-editorial">
      <motion.div
        className="quote-container-editorial"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.span className="quote-mark-editorial" aria-hidden="true" variants={fadeIn}>
          &ldquo;
        </motion.span>
        <motion.blockquote className="quote-text-editorial" variants={fadeIn}>
          "Change happens through movement, and movement heals."
        </motion.blockquote>
        <motion.cite className="quote-author-editorial" variants={fadeIn}>
          — Joseph Pilates
        </motion.cite>
      </motion.div>
    </section>
  );
}

export default QuoteSection;
