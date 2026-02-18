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
import img6 from "../assets/images/DSC_5624 2.webp";
import img9 from "../assets/images/DSC_5674.webp";

const galleryItems = [
  { src: img1, alt: "Trening u studiju" },
  { src: img2, alt: "Pilates trening" },
  { src: img3, alt: "Prostor studija" },
  { src: img4, alt: "Reformer trening" },
  { src: img5, alt: "Studio detalj" },
  { src: img6, alt: "Gioia studio ambijent" },
  { src: img7, alt: "Pilates vježba" },
  { src: img8, alt: "Grupni trening" },
  { src: img9, alt: "Studio atmosfera" },
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
        <motion.div
          className="gallerySection__header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="gallerySection__eyebrow" variants={fadeUp}>
            Prostor studija
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
              <img src={item.src} alt={item.alt} loading="lazy" />
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
