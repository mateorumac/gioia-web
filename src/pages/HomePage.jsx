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
import navLogo from "../assets/logos/nav-logo.png";
import heroLeft from "../assets/images/DSC_5627.webp";
import heroRight from "../assets/images/DSC_5455.webp";

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
          <div className="hero-text">
            <p className="hero-statement">We do things differently here.</p>
            <h1 className="hero-title">
              <span>Gioia Reformer</span>
              <span>Pilates</span>
            </h1>
            <button
              className="hero-btn-primary"
              onClick={() => scrollToSection("booking")}
            >
              {t("hero.ctaPrimary", "Rezerviraj termin")}
            </button>
          </div>
        </div>

        <img src={navLogo} alt="" className="hero-watermark" />
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
