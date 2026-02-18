import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/home.css";
import AboutSection from "../components/AboutSection";
import ClassesSection from "../components/ClassesSection";
import TrainingSignupSection from "../components/TrainingSignupSection";
import TeamSection from "../components/TeamSection";
import ReviewsSection from "../components/ReviewsSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import QuoteSection from "../components/QuoteSection";
import heroLeft from "../assets/images/DSC_5627.webp";
import heroRight from "../assets/images/DSC_5455.webp";

// Hero-specific animation variants — slower and more composed than global presets
const heroEase = [0.16, 1, 0.3, 1];

const heroFadeUp = {
  hidden: { opacity: 0, y: 11 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease: heroEase, type: "tween" },
  },
};

const heroStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.13,
    },
  },
};

function HomePage() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="home">
      {/* HERO — Split background, centered content */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-left">
            <img src={heroLeft} alt="" className="hero-bg-img" />
          </div>
          <div className="hero-bg-right">
            <img src={heroRight} alt="" className="hero-bg-img hero-bg-img--mirrored" />
          </div>
          <div className="hero-bg-overlay" />
        </div>

        <div className="hero-inner">
          <motion.div
            className="hero-text"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="hero-statement" variants={heroFadeUp}>
              We do things differently here.
            </motion.p>
            <motion.h1 className="hero-title" variants={heroFadeUp}>
              <span>Gioia Reformer</span>
              <span>Pilates</span>
            </motion.h1>
            {/* Wrap in motion.div so Framer Motion never touches the button's own transform */}
            <motion.div variants={heroFadeUp}>
              <button
                className="hero-btn-primary"
                onClick={() => scrollToSection("booking")}
              >
                {t("hero.ctaPrimary", "Rezerviraj termin")}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AboutSection />
      <ClassesSection />
      <TrainingSignupSection />
      <QuoteSection />
      <TeamSection />
      <ReviewsSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
