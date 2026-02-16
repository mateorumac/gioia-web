import { useTranslation } from "react-i18next";
import "../styles/AboutSection.css";
import { aboutStudio1 } from "../utils/images";
import navLogo from "../assets/logos/nav-logo.png";

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="about-section-editorial" id="about">
      <div className="about-container-editorial">
        {/* Image Column with logo watermark */}
        <div className="about-image-column">
          <img src={navLogo} alt="" className="about-logo-watermark" />
          <div className="about-image-wrapper-editorial">
            <img
              src={aboutStudio1}
              alt="Gioia Pilates Studio owner"
              className="about-image-editorial"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Column */}
        <div className="about-text-editorial">
          <h2 className="about-title-editorial">
            {t("about.title", "O studiju")}
          </h2>

          <div className="about-block-editorial">
            <p>
              Gioia reformer studio započeo je s radom u ožujku 2025. Iako je reformer pilates već bio dosta popularan u to vrijeme, u Puli još nije bilo studija s takvom vrstom treninga.
            </p>
            <p>
              Ideja je bila upoznati ljude s reformerom i benefitima koje nudi za svakog pojedinca, te stvoriti mjesto gdje su svi koji žele prioritizirati svoje zdravlje i poboljšati fizičko stanje dobrodošli, s ciljem da im pružimo podržavajuće i pozitivno okruženje.
            </p>
          </div>

          <div className="about-block-editorial">
            <h3>{t("about.mission", "Misija i naše vrijednosti")}</h3>
            <p>Od prvog dana njegujemo neke temeljne principe rada, koji su za nas:</p>
            <p>
              Usmjeren fokus isključivo na klijenta. Imamo 6 reformera i smatramo da je to maksimum u kojem možemo pružiti kvalitetnu observaciju izvođenja vježbi kod svakog klijenta i korigiranja istog.
            </p>
            <p>
              Pazimo na progres svakog klijenta i potičemo i slavimo napretke, bez obzira jesu li veliki ili mali.
            </p>
            <p>
              Poštujemo svakog klijenta u našem studiju i uvažavamo svaki feedback.
            </p>
            <p>
              Bitne su nam i energija i zajedništvo koje se stvara u studiju, tako da osiguravamo u svakom trenutku da se svi osjećaju viđeno, sigurno i podržano.
            </p>
          </div>

          <div className="about-block-editorial">
            <p>
              Vjerujemo da je učenje neprekidan proces i tako smo od početka otvaranja studija i mi uz naše klijente dosta naučili i napredovali.
            </p>
            <p>
              Gioiu ne činimo samo mi treneri i osnivači, Gioiu čine ljudi, svaka osoba koja uđe kroz naša vrata.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
