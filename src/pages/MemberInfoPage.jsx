import { useTranslation } from "react-i18next";
import { membersHero, allGalleryImages } from "../utils/images";
import navLogo from "../assets/logos/nav-logo.png";
import "../styles/MemberInfo.css";

function MemberInfoPage() {
  const { t } = useTranslation();

  return (
    <div className="members-page-editorial">
      {/* Hero Section with Image */}
      <div className="members-hero-editorial">
        <div className="members-hero-image-wrapper">
          <img src={membersHero} alt="Gioia Studio članice" className="members-hero-image" />
          <div className="members-hero-overlay" />
        </div>
        <div className="members-hero-content">
          <img src={navLogo} alt="" className="members-logo-watermark" />
          <h1 className="members-hero-title">
            {t("members.heroTitle", "Sve o vašim treninzima, na jednom mjestu")}
          </h1>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="members-main-wrapper">
        {/* Intro Section - Two Column */}
        <div className="members-intro-section">
          <div className="members-intro-content">
            <h2 className="members-section-title">
              {t("members.introTitle", "Za naše članice")}
            </h2>
            <p className="members-intro-text">
              {t(
                "members.introText",
                "Za naše postojeće članice pripremili smo aplikaciju putem koje se jednostavno možete prijaviti na treninge, pregledati raspored i upravljati svojim terminima. Pristup aplikaciji omogućen je uz vaše korisničke podatke."
              )}
            </p>
          </div>
          <div className="members-intro-image-wrapper">
            <img
              src={allGalleryImages[15]}
              alt="Gioia Studio Interior"
              className="members-intro-image"
              loading="lazy"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="members-features-grid">
          <div className="members-feature-card">
            <div className="members-feature-number">01</div>
            <h3 className="members-feature-title">
              {t("members.feature1Title", "Jednostavna prijava")}
            </h3>
            <p className="members-feature-text">
              {t("members.feature1Text", "Pregledajte slobodne termine i rezervirajte svoj trening u nekoliko klikova.")}
            </p>
          </div>

          <div className="members-feature-card">
            <div className="members-feature-number">02</div>
            <h3 className="members-feature-title">
              {t("members.feature2Title", "Pregled rasporeda")}
            </h3>
            <p className="members-feature-text">
              {t("members.feature2Text", "Vaš osobni kalendar s prikazom svih nadolazećih treninga na jednom mjestu.")}
            </p>
          </div>

          <div className="members-feature-card">
            <div className="members-feature-number">03</div>
            <h3 className="members-feature-title">
              {t("members.feature3Title", "Upravljanje rezervacijama")}
            </h3>
            <p className="members-feature-text">
              {t("members.feature3Text", "Lako otkazujte ili mijenjajte termine prema svojim potrebama.")}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section with Pattern - Full Width */}
      <div className="members-cta-section">
        <div className="members-cta-content">
          <h2 className="members-cta-title">
            {t("members.ctaTitle", "Pristupite aplikaciji")}
          </h2>
          <p className="members-cta-subtitle">
            {t(
              "members.ctaSubtitle",
              "Ako ste jedna od naših redovitih članica, prijavite se s vašim korisničkim podacima."
            )}
          </p>
          <a
            href="https://gioia-app.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="members-app-button"
          >
            {t("members.appButton", "Otvori aplikaciju")}
          </a>
        </div>
      </div>

      {/* Help Section with Image */}
      <div className="members-main-wrapper">
        <div className="members-help-section">
          <div className="members-help-image-wrapper">
            <img
              src={allGalleryImages[44]}
              alt="Gioia Studio"
              className="members-help-image"
              loading="lazy"
            />
          </div>
          <div className="members-help-content">
            <h3 className="members-help-title">
              {t("members.helpTitle", "Nova ste u studiju?")}
            </h3>
            <p className="members-help-text">
              {t(
                "members.helpText",
                "Ako tek počinjete s treninzima, prvo nas kontaktirajte kako bismo vam pomogli započeti vaš pilates put."
              )}
            </p>
            <a href="#contact" className="members-contact-link">
              {t("members.contactLink", "Kontaktirajte nas")} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberInfoPage;
