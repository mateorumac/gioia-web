import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { allGalleryImages } from "../utils/images";
import navLogo from "../assets/logos/nav-logo.png";
import "../styles/Gallery.css";

function GalleryPage() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open modal
  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(allGalleryImages[index]);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  // Navigate to previous image
  const prevImage = () => {
    const newIndex = currentIndex === 0 ? allGalleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(allGalleryImages[newIndex]);
  };

  // Navigate to next image
  const nextImage = () => {
    const newIndex = currentIndex === allGalleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(allGalleryImages[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <div className="gallery-page-editorial">
      {/* Header */}
      <div className="gallery-page-header">
        <img src={navLogo} alt="" className="gallery-page-logo-watermark" />
        <h1 className="gallery-page-title">{t("gallery.pageTitle", "Galerija")}</h1>
        <p className="gallery-page-subtitle">
          {t(
            "gallery.pageSubtitle",
            "Zavirite u naš studio — prirodno svjetlo, miran ambijent i trenuci fokusa tijekom treninga."
          )}
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="gallery-page-masonry">
        {allGalleryImages.map((src, index) => (
          <div
            key={index}
            className={`gallery-page-item gallery-page-item-${(index % 12) + 1}`}
            onClick={() => openModal(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(index);
              }
            }}
          >
            <img src={src} alt={`Gioia studio ${index + 1}`} loading="lazy" />
            <div className="gallery-page-overlay">
              <span className="gallery-page-icon">+</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <button
            className="gallery-modal-close"
            onClick={closeModal}
            aria-label="Zatvori galeriju"
          >
            ×
          </button>

          <button
            className="gallery-modal-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Prethodna slika"
          >
            ‹
          </button>

          <button
            className="gallery-modal-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Sljedeća slika"
          >
            ›
          </button>

          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt={`Gioia studio ${currentIndex + 1}`} />
            <div className="gallery-modal-counter">
              {currentIndex + 1} / {allGalleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
