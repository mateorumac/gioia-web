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

function AboutSection() {
  const { t } = useTranslation();

  const manifestoItems = [
    {
      num: "01",
      label: t("about.manifesto01Label", "Fokus na klijenta"),
      text: t("about.manifesto01Text", "Radimo u malim grupama s maksimalno 6 reformera. Takav format omogućuje nam potpunu pažnju prema svakom klijentu, preciznu observaciju izvođenja vježbi te pravovremenu korekciju pokreta."),
    },
    {
      num: "02",
      label: t("about.manifesto02Label", "Progres"),
      text: t("about.manifesto02Text", "Sustavno pratimo napredak svakog klijenta. Jednaku važnost pridajemo malim i velikim pomacima jer upravo dosljednost vodi dugoročnim rezultatima."),
    },
    {
      num: "03",
      label: t("about.manifesto03Label", "Poštovanje"),
      text: t("about.manifesto03Text", "Gradimo odnos temeljen na međusobnom povjerenju i uvažavanju. Svaki klijent u našem studiju saslušan je i cijenjen, a povratne informacije aktivno uvažavamo jer vjerujemo u otvorenu komunikaciju."),
    },
    {
      num: "04",
      label: t("about.manifesto04Label", "Zajedništvo"),
      text: t("about.manifesto04Text", "Energija i atmosfera u studiju jednako su nam važni kao i kvaliteta treninga. Stvaramo prostor u kojem se svatko osjeća sigurno, podržano i kao dio zajednice."),
    },
  ];

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
    <section className="about-section-editorial" id="o-nama">
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
            {t("about.eyebrow", "O studiju")}
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
              {t("about.intro1", "Gioia Reformer Studio započeo je s radom u ožujku 2025. Godine. U trenutku kada je reformer pilates već bio prepoznat kao kvalitetan i učinkovit oblik treninga, u Puli još nije postojao studio specijaliziran za ovu vrstu rada.")}
            </p>
            <p>
              {t("about.intro2", "Naša vizija od početka je bila jasna: približiti reformer pilates široj zajednici i stvoriti prostor u kojem je briga o zdravlju prioritet. Mjesto gdje su dobrodošli svi koji žele unaprijediti svoje zdravlje i fizičko stanje — u sigurnom, pozitivnom i podržavajućem okruženju.")}
            </p>
          </motion.div>
          <motion.div className="about-intro-right" variants={fadeUp}>
            <p>
              {t("about.intro3", "Učenje doživljavamo kao neprekidan proces. Od samog otvaranja studija rastemo zajedno s našim klijentima, profesionalno i osobno, podižući kvalitetu rada iz dana u dan.")}
            </p>
            <p>
              {t("about.intro4", "Gioiu ne čine samo treneri i osnivači. Gioiu čine ljudi — svaka osoba koja uđe kroz naša vrata.")}
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
            {t("about.valuesEyebrow", "Naše vrijednosti")}
          </motion.p>
          <motion.h3 className="about-image-break__title" variants={fadeUp}>
            {t("about.mission", "Misija i naše vrijednosti")}
          </motion.h3>
          <motion.p className="about-image-break__intro" variants={fadeUp}>
            {t("about.valuesIntro", "Od prvog dana rada njegujemo temeljne principe koji definiraju naš pristup.")}
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
