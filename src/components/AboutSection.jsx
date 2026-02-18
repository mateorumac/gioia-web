import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../styles/AboutSection.css";
import patternBg from "../assets/green-pattern-bg.png";

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
          // positive = element below center, negative = above center
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
          // aggressive: ±120px travel reveals top/bottom of image on scroll
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
        <div className="about-header-editorial">
          <p className="about-eyebrow-editorial">O studiju</p>
          <h2 className="about-title-editorial">
            {t("about.title", "Studio koji njeguje fokus i zajedništvo")}
          </h2>
        </div>

        {/* B) Two-column intro area */}
        <div className="about-intro-columns">
          <div className="about-intro-left">
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
          </div>
          <div className="about-intro-right">
            <p>
              Vjerujemo da je učenje neprekidan proces i tako smo od početka
              otvaranja studija i mi uz naše klijente dosta naučili i
              napredovali.
            </p>
            <p>
              Gioiu ne činimo samo mi treneri i osnivači, Gioiu čine ljudi,
              svaka osoba koja uđe kroz naša vrata.
            </p>
          </div>
        </div>
      </div>

      {/* C) Full-bleed image with mission header overlay */}
      <div className="about-image-break" ref={imageBreakRef}>
        <div
          ref={bgRef}
          className="about-image-break__bg"
          style={{ backgroundImage: `url(${aboutHeroImage})` }}
          role="img"
          aria-label="Gioia Pilates Studio"
        />
        <div className="about-image-break__overlay" />
        <div className="about-image-break__content">
          <p className="about-image-break__eyebrow">Naše vrijednosti</p>
          <h3 className="about-image-break__title">
            {t("about.mission", "Misija i naše vrijednosti")}
          </h3>
          <p className="about-image-break__intro">
            Od prvog dana njegujemo neke temeljne principe rada, koji su za
            nas:
          </p>
        </div>
      </div>

      {/* D) Mission manifesto grid */}
      <div className="about-container-editorial">
        <div className="about-mission-editorial">
          <div className="about-manifesto-grid">
            {manifestoItems.map((item) => (
              <div key={item.num} className="about-manifesto-item">
                <span className="about-manifesto-num">{item.num}</span>
                <h4 className="about-manifesto-label">{item.label}</h4>
                <p className="about-manifesto-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
