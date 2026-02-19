import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { allGalleryImages } from "../utils/images";
import patternBg from "../assets/green-pattern-bg.png";
import "../styles/Gallery.css";
import { fadeUp, fadeIn, imageReveal, staggerContainer } from "../animations/motionPresets";

const modalOverlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit:    { opacity: 0, transition: { duration: 0.45, ease: "easeIn" } },
};

const modalContent = {
  hidden:  { opacity: 0, scale: 0.97, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1], type: "tween" } },
  exit:    { opacity: 0, scale: 0.97, transition: { duration: 0.32, ease: "easeIn", type: "tween" } },
};

function GalleryPage() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(allGalleryImages[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const prevImage = () => {
    const newIndex = currentIndex === 0 ? allGalleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(allGalleryImages[newIndex]);
  };

  const nextImage = () => {
    const newIndex = currentIndex === allGalleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(allGalleryImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedImage]);

  return (
    <div className="gp">
      {/* Pattern — sits behind everything, full page height */}
      <div className="gp__pattern" style={{ backgroundImage: `url(${patternBg})` }} />

      {/* ── Intro header ── */}
      <header className="gp__header">
        <motion.div
          className="gp__header-inner"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className="gp__eyebrow" variants={fadeUp}>
            Studio &amp; Trening
          </motion.p>
          <motion.h1 className="gp__title" variants={fadeUp}>
            {t("gallery.pageTitle", "Galerija")}
          </motion.h1>
          <motion.div className="gp__divider" variants={fadeIn} />
          <motion.p className="gp__subtitle" variants={fadeUp}>
            {t(
              "gallery.pageSubtitle",
              "Zavirite u naš studio. Prirodno svjetlo, miran ambijent i trenuci fokusa."
            )}
          </motion.p>
        </motion.div>
      </header>

      {/* ── Masonry grid (CSS columns — auto-balanced heights) ── */}
      <div className="gp__grid">
        {allGalleryImages.map((src, index) => (
          <motion.div
            key={index}
            className="gp__item"
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            onClick={() => openModal(index)}
            role="button"
            tabIndex={0}
            aria-label={`Otvori sliku ${index + 1}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(index);
              }
            }}
          >
            <img src={src} alt={`Gioia studio ${index + 1}`} loading="lazy" />
            <div className="gp__item-overlay" aria-hidden="true">
              <span className="gp__item-icon">+</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gp-modal"
            onClick={closeModal}
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button className="gp-modal__close" onClick={closeModal} aria-label="Zatvori galeriju">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            <button
              className="gp-modal__prev"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Prethodna slika"
            >
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" aria-hidden="true">
                <polyline points="9,1 1,9 9,17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              className="gp-modal__next"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Sljedeća slika"
            >
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" aria-hidden="true">
                <polyline points="1,1 9,9 1,17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <motion.div
              className="gp-modal__content"
              onClick={(e) => e.stopPropagation()}
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <img src={selectedImage} alt={`Gioia studio ${currentIndex + 1}`} />
              <p className="gp-modal__counter">
                {String(currentIndex + 1).padStart(2, "0")} / {String(allGalleryImages.length).padStart(2, "0")}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GalleryPage;
