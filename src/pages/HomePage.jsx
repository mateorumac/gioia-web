import { useTranslation } from "react-i18next";
import "../styles/home.css";
import AboutSection from "../components/AboutSection";
import ClassesSection from "../components/ClassesSection";
import TeamSection from "../components/TeamSection";
import ReviewsSection from "../components/ReviewsSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import QuoteSection from "../components/QuoteSection";
import navLogo from "../assets/logos/nav-logo.png";
import heroImg from "../assets/images/DSC_8301.webp";
import heroAccent from "../assets/images/DSC_5627.webp";

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
      {/* HERO — Full-bleed image with overlay */}
      <section className="hero">
        <div className="hero-bg">
          <img src={heroImg} alt="" className="hero-bg-img" />
          <div className="hero-bg-overlay" />
        </div>

        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-statement">We do things differently here.</p>
            <h1 className="hero-title">
              {t("hero.title", "Transformiraj tijelo i pronađi balans")}
            </h1>
            <p className="hero-subtitle">
              {t(
                "hero.subtitle",
                "Boutique reformer pilates studio s personaliziranim pristupom u mirnom, intimnom prostoru."
              )}
            </p>
            <div className="hero-actions">
              <button
                className="hero-btn-primary"
                onClick={() => scrollToSection("classes")}
              >
                {t("hero.ctaPrimary", "Rezerviraj termin")}
              </button>
              <button
                className="hero-btn-secondary"
                onClick={() => scrollToSection("about")}
              >
                {t("hero.ctaSecondary", "Saznaj više")}
              </button>
            </div>
          </div>

          <div className="hero-accent-img-wrap">
            <img src={heroAccent} alt="" className="hero-accent-img" />
          </div>
        </div>

        <img src={navLogo} alt="" className="hero-watermark" />
      </section>

      <AboutSection />
      <ClassesSection />
      <QuoteSection />
      <TeamSection />
      <ReviewsSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
