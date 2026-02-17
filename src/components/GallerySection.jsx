import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "../styles/GallerySection.css";
import { galleryImages } from "../utils/images";

function GallerySection() {
  const { t } = useTranslation();
  const location = useLocation();
  const pathLang = location.pathname.split("/")[1];
  const currentLang = pathLang === "en" ? "en" : "hr";
  const galleryLink = currentLang === "en" ? "/en/gallery" : "/hr/galerija";

  const images = galleryImages.slice(0, 7);

  return (
    <section className="gallerySection" id="gallery">
      <div className="gallerySection__container">
        <div className="gallerySection__header">
          <p className="gallerySection__eyebrow">Prostor studija</p>
          <h2 className="gallerySection__title">
            {t("gallery.title", "Galerija")}
          </h2>
        </div>

        <div className="gallerySection__mosaic">
          {images.map((src, index) => (
            <div
              key={index}
              className={`gallerySection__item gallerySection__item--${index + 1}`}
            >
              <img
                src={src}
                alt={`Gioia studio ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="gallerySection__cta">
          <Link to={galleryLink} className="gallerySection__button">
            {t("gallery.viewAll", "Pogledaj cijelu galeriju")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
