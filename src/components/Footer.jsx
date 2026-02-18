// import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import mainLogo from "../assets/logos/main-logo.png";
// import Toast from "../components/Toast.jsx";
import "../styles/Footer.css";
import { fadeUp, staggerContainer, viewport } from "../animations/motionPresets";

function Footer() {
  const { t } = useTranslation();
  const location = useLocation();
  const pathLang = location.pathname.split("/")[1];
  const currentLang = pathLang === "en" ? "en" : "hr";

  const homeBase = `/${currentLang}`;
  const year = new Date().getFullYear();

  // const [newsletterEmail, setNewsletterEmail] = useState("");
  // const [toast, setToast] = useState({
  //   open: false,
  //   type: "info",
  //   title: "",
  //   message: "",
  // });

  // const handleNewsletterSubmit = (e) => {
  //   e.preventDefault();

  //   setToast({
  //     open: true,
  //     type: "info",
  //     title: t("newsletter.title", "Newsletter"),
  //     message: t("newsletter.success", "Hvala na prijavi!"),
  //   });

  //   setNewsletterEmail("");
  // };

  return (
    <footer className="site-footer-editorial">
      <div className="footer-inner-editorial">
        <motion.div
          className="footer-top-editorial"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div className="footer-brand-editorial" variants={fadeUp}>
            <img
              src={mainLogo}
              alt="Gioia Studio"
              className="footer-brand-logo-editorial"
            />
          </motion.div>

          <motion.div
            className="footer-columns-editorial"
            variants={staggerContainer}
          >
            <motion.div className="footer-column-editorial" variants={fadeUp}>
              <h4>{t("footer.navigation", "Navigacija")}</h4>
              <ul>
                <li>
                  <Link to={`${homeBase}#about`}>O studiju</Link>
                </li>
                <li>
                  <Link to={`${homeBase}#classes`}>Treninzi</Link>
                </li>
                <li>
                  <Link to={`${homeBase}#team`}>Trenerice</Link>
                </li>
                <li>
                  <Link to={`${homeBase}#gallery`}>Galerija</Link>
                </li>
                <li>
                  <Link to={`${homeBase}#contact`}>Kontakt</Link>
                </li>
              </ul>
            </motion.div>

            <motion.div className="footer-column-editorial" variants={fadeUp}>
              <h4>{t("footer.contact", "Kontakt")}</h4>
              <ul className="footer-contact-list">
                <li>
                  <FaMapMarkerAlt />
                  <a
                    href="https://www.google.com/maps/place/Gioia+-+reformer+pilates+studio/@44.8432031,13.8366326,388m/data=!3m2!1e3!4b1!4m6!3m5!1s0x477cd3c7d9c47527:0x96f98e7e1837d5d7!8m2!3d44.8432012!4d13.8390681!16s%2Fg%2F11xcclh6n9?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verudela 8
                    <br />
                    52100 Pula, Hrvatska
                  </a>
                </li>
                <li>
                  <FaPhoneAlt />
                  <a href="tel:+385953896809">095 389 6809</a>
                </li>
                <li>
                  <FaEnvelope />
                  <a href="mailto:info@gioia.hr">info@gioia.hr</a>
                </li>
              </ul>

              <div className="footer-social">
                <a
                  href="https://www.instagram.com/gioiareformerstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </motion.div>

            <motion.div className="footer-column-editorial" variants={fadeUp}>
              <h4>{t("footer.hours", "Radno vrijeme")}</h4>
              <ul className="footer-hours">
                <li>
                  <span>Pon – Pet:</span>
                  <span>7–10 h, 16–19 h</span>
                </li>
                <li>
                  <span>Subota:</span>
                  <span>8–11 h</span>
                </li>
                <li>
                  <span>Nedjelja:</span>
                  <span>Zatvoreno</span>
                </li>
              </ul>
            </motion.div>

            <motion.div className="footer-column-editorial" variants={fadeUp}>
              <h4>{t("footer.legal", "Pravne informacije")}</h4>
              <ul>
                <li>
                  <Link to={`${homeBase}/privacy-policy`}>
                    Politika privatnosti
                  </Link>
                </li>
                <li>
                  <Link to={`${homeBase}/terms`}>Uvjeti korištenja</Link>
                </li>
                <li>
                  <Link to={`${homeBase}/cookies`}>Cookie pravila</Link>
                </li>
                <li>
                  <Link to={`${homeBase}/gdpr`}>GDPR informacije</Link>
                </li>
              </ul>
            </motion.div>

            {/* <div className="footer-newsletter-editorial">
              <h4>{t("newsletter.title", "Ostani u tijeku")}</h4>
              <p>
                {t(
                  "newsletter.subtitle",
                  "Prijavi se na naš newsletter kako bi saznao/la o novim terminima, posebnim ponudama i korisnim savjetima.",
                )}
              </p>

              <form
                className="newsletter-form-editorial"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  placeholder={t(
                    "newsletter.placeholder",
                    "Tvoja email adresa",
                  )}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit">
                  {t("newsletter.button", "Prijavi se")}
                </button>
              </form>
            </div> */}
          </motion.div>
        </motion.div>

        <div className="footer-divider-editorial" />

        <div className="footer-bottom-editorial">
          <p>
            © {year} Powered by:{" "}
            <a
              href="https://www.lematech-digital.com/"
              target="_blank"
              rel="noreferrer"
              className="footer-powered-link-editorial"
            >
              LeMatech-Digital
            </a>{" "}
            | {t("footer.rights", "Sva prava pridržana")}
          </p>
        </div>
      </div>

      {/* <Toast
        open={toast.open}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        duration={4500}
        position="top-right"
        onClose={() => setToast((p) => ({ ...p, open: false }))}
      /> */}
    </footer>
  );
}

export default Footer;
