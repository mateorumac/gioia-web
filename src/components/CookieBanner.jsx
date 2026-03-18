import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FaCookieBite } from "react-icons/fa";
import { getConsent, saveConsent, hasConsented } from "../utils/cookieConsent";
import { loadGA } from "../utils/gaLoader";
import "../styles/CookieBanner.css";

const content = {
  hr: {
    title: "Kolačići",
    text: "Koristimo nužne kolačiće za ispravan rad stranice. Uz vašu privolu koristimo i analitičke kolačiće (Google Analytics) kako bismo poboljšali iskustvo korištenja.",
    accept: "Da, prihvaćam",
    reject: "Ne, odbij",
    settings: "Postavke",
    necessary: "Nužni kolačići",
    necessaryDesc: "Uvijek aktivni. Potrebni za ispravan rad stranice.",
    analytics: "Analitički kolačići (Google Analytics 4)",
    analyticsDesc: "Pomažu nam razumjeti kako posjetitelji koriste stranicu. Podaci su anonimni.",
    save: "Spremi odabir",
    alwaysOn: "Uvijek uključeno",
    cookieLink: "/hr/cookies",
    privacyLink: "/hr/privacy",
    cookieLinkText: "Politika kolačića",
    privacyLinkText: "Politika privatnosti",
    widgetLabel: "Postavke kolačića",
    close: "Zatvori",
  },
  en: {
    title: "Cookies",
    text: "We use necessary cookies for the site to function properly. With your consent, we also use analytics cookies (Google Analytics) to improve the experience.",
    accept: "Yes, I accept",
    reject: "No, reject",
    settings: "Settings",
    necessary: "Necessary cookies",
    necessaryDesc: "Always active. Required for the site to function properly.",
    analytics: "Analytics cookies (Google Analytics 4)",
    analyticsDesc: "Help us understand how visitors use the site. Data is anonymous.",
    save: "Save preferences",
    alwaysOn: "Always on",
    cookieLink: "/en/cookies",
    privacyLink: "/en/privacy",
    cookieLinkText: "Cookie Policy",
    privacyLinkText: "Privacy Policy",
    widgetLabel: "Cookie settings",
    close: "Close",
  },
};

export default function CookieBanner() {
  const location = useLocation();
  const isEN = location.pathname.startsWith("/en");
  const t = isEN ? content.en : content.hr;

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analyticsToggle, setAnalyticsToggle] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = getConsent();
    if (consent === null) {
      setShowPrefs(false);
      setOpen(true);
    } else {
      if (consent.analytics) loadGA();
      setAnalyticsToggle(consent.analytics);
    }
  }, []);

  // Closing without explicit first-time choice defaults to reject (GDPR)
  const handleClose = () => {
    if (!hasConsented()) {
      saveConsent(false);
    }
    setOpen(false);
  };

  const openFromWidget = () => {
    const consent = getConsent();
    setAnalyticsToggle(consent ? consent.analytics : false);
    setShowPrefs(true);
    setOpen(true);
  };

  const openPrefsFromBanner = () => {
    const consent = getConsent();
    setAnalyticsToggle(consent ? consent.analytics : false);
    setShowPrefs(true);
  };

  const handleAccept = () => {
    saveConsent(true);
    loadGA();
    setOpen(false);
  };

  const handleReject = () => {
    saveConsent(false);
    setOpen(false);
  };

  const handleSave = () => {
    saveConsent(analyticsToggle);
    if (analyticsToggle) loadGA();
    setOpen(false);
  };

  if (!mounted) return null;

  return (
    <>
      {/* ── Floating widget ── */}
      <button
        className="cb__float"
        onClick={openFromWidget}
        aria-label={t.widgetLabel}
        title={t.widgetLabel}
      >
        <FaCookieBite size={17} />
      </button>

      {/* ── Banner — bottom strip (first visit) ── */}
      <AnimatePresence>
        {open && !showPrefs && (
          <motion.div
            className="cb__panel"
            role="dialog"
            aria-modal="true"
            aria-label={t.title}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="cb__panel-inner">
              <div className="cb__panel-body">
                <h2 className="cb__title">{t.title}</h2>
                <p className="cb__text">
                  {t.text}{" "}
                  <a href={t.cookieLink} className="cb__link">{t.cookieLinkText}</a>
                  {" · "}
                  <a href={t.privacyLink} className="cb__link">{t.privacyLinkText}</a>
                </p>
              </div>
              <div className="cb__panel-actions">
                <button className="cb__btn cb__btn--reject" onClick={handleReject}>
                  {t.reject}
                </button>
                <button className="cb__btn cb__btn--accept" onClick={handleAccept}>
                  {t.accept}
                </button>
                <button className="cb__settings-link" onClick={openPrefsFromBanner}>
                  {t.settings}
                </button>
              </div>
              <button className="cb__close cb__panel-close" onClick={handleClose} aria-label={t.close}>
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Preferences — centered modal ── */}
      <AnimatePresence>
        {open && showPrefs && (
          <>
            <motion.div
              className="cb__overlay"
              onClick={handleClose}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            />
            <motion.div
              className="cb__modal"
              role="dialog"
              aria-modal="true"
              aria-label={t.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              <div className="cb__modal-header">
                <h2 className="cb__title">{t.title}</h2>
                <button className="cb__close" onClick={handleClose} aria-label={t.close}>
                  ×
                </button>
              </div>
              <div className="cb__modal-body">
                <div className="cb__row cb__row--disabled">
                  <div className="cb__row-info">
                    <span className="cb__row-name">{t.necessary}</span>
                    <span className="cb__row-desc">{t.necessaryDesc}</span>
                  </div>
                  <span className="cb__toggle cb__toggle--on cb__toggle--static" aria-label={t.alwaysOn}>
                    <span className="cb__toggle-track"><span className="cb__toggle-thumb" /></span>
                  </span>
                </div>
                <div className="cb__row">
                  <div className="cb__row-info">
                    <span className="cb__row-name">{t.analytics}</span>
                    <span className="cb__row-desc">{t.analyticsDesc}</span>
                  </div>
                  <button
                    role="switch"
                    aria-checked={analyticsToggle}
                    className={`cb__toggle${analyticsToggle ? " cb__toggle--on" : ""}`}
                    onClick={() => setAnalyticsToggle((v) => !v)}
                    aria-label={t.analytics}
                  >
                    <span className="cb__toggle-track"><span className="cb__toggle-thumb" /></span>
                  </button>
                </div>
              </div>
              <div className="cb__modal-footer cb__modal-footer--center">
                <button className="cb__btn cb__btn--accept cb__btn--full" onClick={handleSave}>
                  {t.save}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
