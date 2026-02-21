import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import patternBg from "../assets/green-pattern-bg.png";
import "../styles/NotFoundPage.css";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const bgFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.4, ease: "easeOut" } },
};

function NotFoundPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const pathLang = location.pathname.split("/")[1];
  const currentLang = pathLang === "en" ? "en" : "hr";

  const homeLink = `/${currentLang}`;
  const aboutLink = `/${currentLang}#o-nama`;
  const bookingLink = `/${currentLang}#rezervacija`;

  return (
    <>
      <Helmet>
        <title>{t("notFound.pageTitle", "Stranica nije pronađena | Gioia Reformer Pilates")}</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div
        className="notFound"
        style={{ backgroundImage: `url(${patternBg})` }}
      >
        <div className="notFound__patternLayer" />

        <motion.span
          className="notFound__bg404"
          aria-hidden="true"
          variants={bgFade}
          initial="hidden"
          animate="visible"
        >
          404
        </motion.span>

        <motion.div
          className="notFound__content"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="notFound__title" variants={item}>
            {t("notFound.title", "Stranica nije pronađena")}
          </motion.h1>

          <motion.p className="notFound__subtitle" variants={item}>
            {t("notFound.subtitle", "Čini se da je stranica koju tražite premještena ili više ne postoji.")}
          </motion.p>

          <motion.p className="notFound__support" variants={item}>
            {t("notFound.support", "Vratite se na početnu stranicu ili istražite naš studio.")}
          </motion.p>

          <motion.div className="notFound__actions" variants={item}>
            <Link to={homeLink} className="notFound__btn notFound__btn--primary">
              {t("notFound.btnHome", "Povratak na početnu")}
            </Link>
            <Link to={aboutLink} className="notFound__btn notFound__btn--outline">
              {t("notFound.btnAbout", "O studiju")}
            </Link>
            <Link to={bookingLink} className="notFound__btn notFound__btn--outline">
              {t("notFound.btnBook", "Rezerviraj termin")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default NotFoundPage;
