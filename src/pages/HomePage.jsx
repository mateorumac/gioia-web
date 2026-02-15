import { useTranslation } from "react-i18next";
import "../styles/home.css";
import AboutSection from "../components/AboutSection";
import ClassesSection from "../components/ClassesSection";
import TeamSection from "../components/TeamSection";
import ReviewsSection from "../components/ReviewsSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import { heroImage } from "../utils/images";
import navLogo from "../assets/logos/nav-logo.png";

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
      <section className="hero-editorial">
        <div className="hero-content-editorial">
          <img src={navLogo} alt="" className="hero-logo-watermark" />
          <h1 className="hero-title-editorial">
            {t("hero.title", "Transformiraj tijelo i pronađi balans")}
          </h1>
          <p className="hero-subtitle-editorial">
            {t(
              "hero.subtitle",
              "Boutique reformer pilates studio s personaliziranim pristupom u mirnom, intimnom prostoru."
            )}
          </p>
          <div className="hero-actions-editorial">
            <button
              className="hero-btn hero-btn-primary"
              onClick={() => scrollToSection("classes")}
            >
              {t("hero.ctaPrimary", "Rezerviraj termin")}
            </button>
            <button
              className="hero-btn hero-btn-secondary"
              onClick={() => scrollToSection("about")}
            >
              {t("hero.ctaSecondary", "Saznaj više")}
            </button>
          </div>
        </div>
        <div className="hero-image-wrapper-editorial">
          <img src={heroImage} alt="Gioia pilates studio" className="hero-image-editorial" />
        </div>
      </section>

      <AboutSection />
      <ClassesSection />
      <TeamSection />
      <ReviewsSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
