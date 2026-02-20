import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { membersHero, allGalleryImages } from "../utils/images";
import {
  fadeUp,
  imageReveal,
  lineReveal,
  staggerContainer,
  viewport,
} from "../animations/motionPresets";
import "../styles/MemberInfo.css";

function MemberInfoPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const currentLang = location.pathname.split("/")[1] === "en" ? "en" : "hr";
  const contactHref = `/${currentLang}/#contact`;

  return (
    <div className="mi__page">
      <Helmet>
        <title>
          {currentLang === "en"
            ? "Members | Gioia Reformer Pilates Studio"
            : "Članice | Gioia Reformer Pilates Studio"}
        </title>
        <meta
          name="description"
          content={
            currentLang === "en"
              ? "Meet the members of Gioia Reformer Pilates Studio in Pula. A welcoming community built around reformer pilates."
              : "Upoznajte članice Gioia Reformer Pilates Studija u Puli. Zajednica izgrađena oko treninga na reformeru."
          }
        />
      </Helmet>

      {/* ── Hero ── */}
      <section className="mi__hero">
        <div
          className="mi__hero-bg"
          style={{ backgroundImage: `url(${membersHero})` }}
          role="img"
          aria-label="Gioia Studio članice"
        />
        <div className="mi__hero-overlay" />
        <motion.div
          className="mi__hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="mi__hero-eyebrow" variants={fadeUp}>
            {t("members.eyebrow", "Digitalni alati")}
          </motion.p>
          <motion.h1 className="mi__hero-title" variants={fadeUp}>
            {t("members.heroTitle", "Sve o vašim treninzima, na jednom mjestu")}
          </motion.h1>
        </motion.div>
      </section>

      {/* ── Intro ── */}
      <section className="mi__intro">
        <div className="mi__container">
          <div className="mi__intro-grid">

            <motion.div
              className="mi__intro-text"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.p className="mi__eyebrow" variants={fadeUp}>
                {t("members.introEyebrow", "Za naše članice")}
              </motion.p>
              <motion.div
                className="mi__rule"
                variants={lineReveal}
                style={{ transformOrigin: "left center" }}
              />
              <motion.h2 className="mi__section-title" variants={fadeUp}>
                {t("members.introTitle", "Vaš trening, vaš raspored")}
              </motion.h2>
              <motion.p className="mi__intro-body" variants={fadeUp}>
                {t(
                  "members.introText",
                  "Za naše postojeće članice pripremili smo aplikaciju putem koje se jednostavno možete prijaviti na treninge, pregledati raspored i upravljati svojim terminima. Pristup aplikaciji omogućen je uz vaše korisničke podatke."
                )}
              </motion.p>
            </motion.div>

            <motion.div
              className="mi__intro-image"
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <img
                src={allGalleryImages[15]}
                alt="Gioia Studio interior"
                loading="lazy"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="mi__features">
        <div className="mi__container">
          <motion.div
            className="mi__features-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div className="mi__feature" variants={fadeUp}>
              <span className="mi__feature-num">01</span>
              <h3 className="mi__feature-title">
                {t("members.feature1Title", "Jednostavna prijava")}
              </h3>
              <p className="mi__feature-text">
                {t(
                  "members.feature1Text",
                  "Pregledajte slobodne termine i rezervirajte svoj trening u nekoliko klikova."
                )}
              </p>
            </motion.div>

            <motion.div className="mi__feature" variants={fadeUp}>
              <span className="mi__feature-num">02</span>
              <h3 className="mi__feature-title">
                {t("members.feature2Title", "Pregled rasporeda")}
              </h3>
              <p className="mi__feature-text">
                {t(
                  "members.feature2Text",
                  "Vaš osobni kalendar s prikazom svih nadolazećih treninga na jednom mjestu."
                )}
              </p>
            </motion.div>

            <motion.div className="mi__feature" variants={fadeUp}>
              <span className="mi__feature-num">03</span>
              <h3 className="mi__feature-title">
                {t("members.feature3Title", "Upravljanje rezervacijama")}
              </h3>
              <p className="mi__feature-text">
                {t(
                  "members.feature3Text",
                  "Lako otkazujte ili mijenjajte termine prema svojim potrebama."
                )}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA — sage panel ── */}
      <section className="mi__cta">
        <motion.div
          className="mi__cta-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="mi__cta-eyebrow" variants={fadeUp}>
            {t("members.ctaEyebrow", "Aplikacija")}
          </motion.p>
          <motion.h2 className="mi__cta-title" variants={fadeUp}>
            {t("members.ctaTitle", "Pristupite aplikaciji")}
          </motion.h2>
          <motion.p className="mi__cta-sub" variants={fadeUp}>
            {t(
              "members.ctaSubtitle",
              "Ako ste jedna od naših redovitih članica, prijavite se s vašim korisničkim podacima."
            )}
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href="https://gioia-app.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mi__cta-btn"
            >
              {t("members.appButton", "Otvori aplikaciju")}
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Help ── */}
      <section className="mi__help">
        <div className="mi__container">
          <div className="mi__help-grid">

            <motion.div
              className="mi__help-image"
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <img
                src={allGalleryImages[44]}
                alt="Gioia Studio"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="mi__help-text"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.p className="mi__eyebrow" variants={fadeUp}>
                {t("members.helpEyebrow", "Početnice")}
              </motion.p>
              <motion.div
                className="mi__rule"
                variants={lineReveal}
                style={{ transformOrigin: "left center" }}
              />
              <motion.h3 className="mi__help-title" variants={fadeUp}>
                {t("members.helpTitle", "Nova ste u studiju?")}
              </motion.h3>
              <motion.p className="mi__help-body" variants={fadeUp}>
                {t(
                  "members.helpText",
                  "Ako tek počinjete s treninzima, prvo nas kontaktirajte kako bismo vam pomogli započeti vaš pilates put."
                )}
              </motion.p>
              <motion.div variants={fadeUp}>
                <a href={contactHref} className="mi__contact-link">
                  <span>{t("members.contactLink", "Kontaktirajte nas")}</span>
                  <span className="mi__contact-arrow" aria-hidden="true">→</span>
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default MemberInfoPage;
