import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "../styles/GallerySection.css";
import patternBg from "../assets/green-pattern-bg.png";
import { fadeUp, imageReveal, staggerContainer, viewport } from "../animations/motionPresets";

import img1 from "../assets/images/DSC_3662.webp";
import img2 from "../assets/images/DSC_1517.webp";
import img3 from "../assets/images/DSC_2478.webp";
import img4 from "../assets/images/DSC_5385.webp";
import img5 from "../assets/images/DSC_3690.webp";
import img7 from "../assets/images/DSC_2489.webp";
import img8 from "../assets/images/DSC_3722.webp";
import img6 from "../assets/images/DSC_5624.webp";
import img9 from "../assets/images/DSC_5674.webp";

function GallerySection() {
  const { t } = useTranslation();
  const location = useLocation();
  const pathLang = location.pathname.split("/")[1];
  const currentLang = pathLang === "en" ? "en" : "hr";
  const galleryLink = currentLang === "en" ? "/en/galerija" : "/hr/galerija";

  const galleryItems = [
    { src: img1, alt: t("gallery.alt1", "Trening u studiju"), width: 1300, height: 1950 },
    { src: img2, alt: t("gallery.alt2", "Pilates trening"), width: 1200, height: 1800 },
    { src: img3, alt: t("gallery.alt3", "Prostor studija"), width: 1200, height: 1800 },
    { src: img4, alt: t("gallery.alt4", "Reformer trening"), width: 1198, height: 1800 },
    { src: img5, alt: t("gallery.alt5", "Studio detalj"), width: 1200, height: 1800 },
    { src: img6, alt: t("gallery.alt6", "Gioia studio ambijent"), width: 1800, height: 1198 },
    { src: img7, alt: t("gallery.alt7", "Pilates vježba"), width: 1100, height: 1650 },
    { src: img8, alt: t("gallery.alt8", "Grupni trening"), width: 1200, height: 1800 },
    { src: img9, alt: t("gallery.alt9", "Studio atmosfera"), width: 1198, height: 1800 },
  ];

  return (
    <section className="gallerySection" id="galerija">
      <div
        className="gallerySection__patternLayer"
        style={{ backgroundImage: `url(${patternBg})` }}
      />

      <div className="gallerySection__container">
        <motion.div
          className="gallerySection__header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="gallerySection__eyebrow" variants={fadeUp}>
            {t("gallery.eyebrow", "Prostor studija")}
          </motion.p>
          <motion.h2 className="gallerySection__title" variants={fadeUp}>
            {t("gallery.title", "Galerija")}
          </motion.h2>
        </motion.div>

        <motion.div
          className="gallerySection__mosaic"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`gallerySection__item gallerySection__item--${index + 1}`}
              variants={imageReveal}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="gallerySection__cta"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Link to={galleryLink} className="gallerySection__button">
            {t("gallery.viewAll", "Pogledaj cijelu galeriju")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default GallerySection;
