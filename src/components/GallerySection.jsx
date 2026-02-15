import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "../styles/GallerySection.css";
import { galleryImages } from "../utils/images";
import navLogo from "../assets/logos/nav-logo.png";

function GallerySection() {
  const { t } = useTranslation();
  const location = useLocation();
  const pathLang = location.pathname.split("/")[1];
  const currentLang = pathLang === "en" ? "en" : "hr";
  const galleryLink = currentLang === "en" ? "/en/gallery" : "/hr/galerija";

  // Use first 9 images for homepage preview - better for 3x3 grid
  const images = galleryImages.slice(0, 9);

  return (
    <section className="gallery-section-editorial" id="gallery">
      <div className="gallery-container-editorial">
        <div className="gallery-header-editorial">
          <img src={navLogo} alt="" className="gallery-logo-watermark" />
          <h2 className="gallery-title-editorial">
            {t("gallery.title", "Galerija")}
          </h2>
          <p className="gallery-subtitle-editorial">
            Miran interijer, prirodno svjetlo i trenuci fokusa, pogled u
            svakodnevicu Gioia Reformer Pilates studija.
          </p>
        </div>

        <div className="gallery-grid-editorial">
          {images.map((src, index) => (
            <div
              key={index}
              className={`gallery-item-editorial gallery-item-${(index % 9) + 1}`}
            >
              <img src={src} alt={`Gioia studio ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="gallery-cta-editorial">
          <Link to={galleryLink} className="gallery-button-editorial">
            {t("gallery.viewAll", "Pogledaj cijelu galeriju")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
