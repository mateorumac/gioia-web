import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "../styles/GallerySection.css";
import patternBg from "../assets/green-pattern-bg.png";

import img1 from "../assets/images/DSC_3662.webp";
import img2 from "../assets/images/DSC_1517.webp";
import img3 from "../assets/images/DSC_2478.webp";
import img4 from "../assets/images/DSC_5385.webp";
import img5 from "../assets/images/DSC_3690.webp";
import img6 from "../assets/images/DSC_5624 2.webp";

const galleryItems = [
  { src: img1, alt: "Trening u studiju" },
  { src: img2, alt: "Pilates trening" },
  { src: img3, alt: "Prostor studija" },
  { src: img4, alt: "Reformer trening" },
  { src: img5, alt: "Studio detalj" },
  { src: img6, alt: "Gioia studio ambijent" },
];

function GallerySection() {
  const { t } = useTranslation();
  const location = useLocation();
  const pathLang = location.pathname.split("/")[1];
  const currentLang = pathLang === "en" ? "en" : "hr";
  const galleryLink = currentLang === "en" ? "/en/gallery" : "/hr/galerija";

  return (
    <section className="gallerySection" id="gallery">
      <div
        className="gallerySection__patternLayer"
        style={{ backgroundImage: `url(${patternBg})` }}
      />

      <div className="gallerySection__container">
        <div className="gallerySection__header">
          <p className="gallerySection__eyebrow">Prostor studija</p>
          <h2 className="gallerySection__title">
            {t("gallery.title", "Galerija")}
          </h2>
        </div>

        <div className="gallerySection__mosaic">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`gallerySection__item gallerySection__item--${index + 1}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
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
