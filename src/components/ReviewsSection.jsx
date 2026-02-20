import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/ReviewsSection.css";
import sectionBg from "../assets/images/IMG_1588.webp";
import { fadeUp, fadeIn, staggerContainer, viewport } from "../animations/motionPresets";

const StarIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.26 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
  </svg>
);

const Stars = ({ count = 5, className = "" }) => (
  <div className={`testimonialsSection__stars ${className}`}>
    {Array.from({ length: count }, (_, i) => (
      <StarIcon key={i} className="testimonialsSection__starIcon" />
    ))}
  </div>
);

function ReviewsSection() {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: "Maja",
      text: t("reviews.t1", "Obje trenerice su izuzetno stručne i smirene. Vježbe su jasno objašnjene, a svaki pokret ima smisao – osjećam se sigurnije u svom tijelu."),
      featured: true,
    },
    {
      id: 2,
      name: "Ana",
      text: t("reviews.t2", "Predivan studio, intimna atmosfera i stvarno pažljiv pristup. Nakon nekoliko treninga osjećam puno manje napetosti u leđima."),
      featured: false,
    },
    {
      id: 3,
      name: "Ivana",
      text: t("reviews.t3", "Volim što su grupe male i što me netko stvarno ispravi kad treba. Nakon treninga se osjećam i jače i smirenije."),
      featured: false,
    },
    {
      id: 4,
      name: "Petra",
      text: t("reviews.t4", "Prostor je predivan i miran, a treninzi su izazovni na najbolji način. Idealno nakon radnog dana."),
      featured: false,
    },
  ];

  const featured = testimonials.find((t) => t.featured);
  const supporting = testimonials.filter((t) => !t.featured);

  return (
    <section
      className="testimonialsSection"
      id="recenzije"
      style={{ backgroundImage: `url(${sectionBg})` }}
    >
      <div className="testimonialsSection__overlay" />

      <div className="testimonialsSection__inner">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="testimonialsSection__eyebrow" variants={fadeUp}>
            {t("reviews.eyebrow", "Recenzije")}
          </motion.p>
          <motion.h2 className="testimonialsSection__title" variants={fadeUp}>
            {t("reviews.title", "Iskustva naših klijenata")}
          </motion.h2>
        </motion.div>

        <motion.div
          className="testimonialsSection__credibilityBlock"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Stars className="testimonialsSection__stars--credibility" />
          <p className="testimonialsSection__credibilityText">
            {t("reviews.credibility", "na temelju 50+ recenzija")}
          </p>
        </motion.div>

        <motion.div
          className="testimonialsSection__featured"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="testimonialsSection__quoteMark">&ldquo;</span>
          <blockquote className="testimonialsSection__featuredQuote">
            {featured.text}
          </blockquote>
          <p className="testimonialsSection__featuredName">{featured.name}</p>
          <Stars className="testimonialsSection__stars--featured" />
        </motion.div>

        <motion.div
          className="testimonialsSection__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {supporting.map((item) => (
            <motion.article
              key={item.id}
              className="testimonialsSection__card"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], type: "tween" }}
            >
              <p className="testimonialsSection__cardText">{item.text}</p>
              <div className="testimonialsSection__cardFooter">
                <p className="testimonialsSection__cardName">{item.name}</p>
                <Stars className="testimonialsSection__stars--card" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ReviewsSection;
