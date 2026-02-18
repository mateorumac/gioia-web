import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/AboutSection.css";
import patternBg from "../assets/green-pattern-bg.png";
import { fadeUp, staggerContainer, viewport } from "../animations/motionPresets";

/* Horizontal image options — swap index to change */
const aboutImages = [
  new URL("../assets/images/DSC_5624 2.webp", import.meta.url).href,
  new URL("../assets/images/IMG_1658 2.webp", import.meta.url).href,
];
const aboutHeroImage = aboutImages[0];

const manifestoItems = [
  {
    num: "01",
    label: "Fokus na klijenta",
    text: "Usmjeren fokus isključivo na klijenta. Imamo 6 reformera i smatramo da je to maksimum u kojem možemo pružiti kvalitetnu observaciju izvođenja vježbi kod svakog klijenta i korigiranja istog.",
  },
  {
    num: "02",
    label: "Progres",
    text: "Pazimo na progres svakog klijenta i potičemo i slavimo napretke, bez obzira jesu li veliki ili mali.",
  },
  {
    num: "03",
    label: "Poštovanje",
    text: "Poštujemo svakog klijenta u našem studiju i uvažavamo svaki feedback.",
  },
  {
    num: "04",
    label: "Zajedništvo",
    text: "Bitne su nam i energija i zajedništvo koje se stvara u studiju, tako da osiguravamo u svakom trenutku da se svi osjećaju viđeno, sigurno i podržano.",
  },
];

function AboutSection() {
  const { t } = useTranslation();

  const imageBreakRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!imageBreakRef.current || !bgRef.current) { ticking = false; return; }
        const rect = imageBreakRef.current.getBoundingClientRect();
        const vh = window.innerHeight;
        if (rect.bottom > -vh && rect.top < vh * 2) {
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
          const shift = progress * 120;
          bgRef.current.style.transform = `translateY(${shift}px)`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="about-section-editorial" id="about">
      {/* Pattern layer */}
      <div
        className="about-section-editorial__pattern"
        style={{ backgroundImage: `url(${patternBg})` }}
      />

      <div className="about-container-editorial">
        {/* A) Header */}
        <motion.div
          className="about-header-editorial"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="about-eyebrow-editorial" variants={fadeUp}>
            O studiju
          </motion.p>
          <motion.h2 className="about-title-editorial" variants={fadeUp}>
            {t("about.title", "Studio koji njeguje fokus i zajedništvo")}
          </motion.h2>
        </motion.div>

        {/* B) Two-column intro area */}
        <motion.div
          className="about-intro-columns"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div className="about-intro-left" variants={fadeUp}>
            <p className="about-intro-lead">
              Gioia reformer studio započeo je s radom u ožujku 2025. Iako je
              reformer pilates već bio dosta popularan u to vrijeme, u Puli još
              nije bilo studija s takvom vrstom treninga.
            </p>
            <p>
              Ideja je bila upoznati ljude s reformerom i benefitima koje nudi
              za svakog pojedinca, te stvoriti mjesto gdje su svi koji žele
              prioritizirati svoje zdravlje i poboljšati fizičko stanje
              dobrodošli, s ciljem da im pružimo podržavajuće i pozitivno
              okruženje.
            </p>
          </motion.div>
          <motion.div className="about-intro-right" variants={fadeUp}>
            <p>
              Vjerujemo da je učenje neprekidan proces i tako smo od početka
              otvaranja studija i mi uz naše klijente dosta naučili i
              napredovali.
            </p>
            <p>
              Gioiu ne činimo samo mi treneri i osnivači, Gioiu čine ljudi,
              svaka osoba koja uđe kroz naša vrata.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* C) Full-bleed image with mission header overlay — parallax bg untouched */}
      <div className="about-image-break" ref={imageBreakRef}>
        <div
          ref={bgRef}
          className="about-image-break__bg"
          style={{ backgroundImage: `url(${aboutHeroImage})` }}
          role="img"
          aria-label="Gioia Pilates Studio"
        />
        <div className="about-image-break__overlay" />
        <motion.div
          className="about-image-break__content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="about-image-break__eyebrow" variants={fadeUp}>
            Naše vrijednosti
          </motion.p>
          <motion.h3 className="about-image-break__title" variants={fadeUp}>
            {t("about.mission", "Misija i naše vrijednosti")}
          </motion.h3>
          <motion.p className="about-image-break__intro" variants={fadeUp}>
            Od prvog dana njegujemo neke temeljne principe rada, koji su za
            nas:
          </motion.p>
        </motion.div>
      </div>

      {/* D) Mission manifesto grid */}
      <div className="about-container-editorial">
        <div className="about-mission-editorial">
          <motion.div
            className="about-manifesto-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {manifestoItems.map((item) => (
              <motion.div
                key={item.num}
                className="about-manifesto-item"
                variants={fadeUp}
              >
                <span className="about-manifesto-num">{item.num}</span>
                <h4 className="about-manifesto-label">{item.label}</h4>
                <p className="about-manifesto-text">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
