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
            <h3>{t("about.myStory", "Moja priča")}</h3>
            <p>
              Gioia je nastala iz želje za stvaranjem prostora u kojem se tijelo
              i um mogu povezati kroz sigurne, promišljene pokrete. Nakon godina
              rada u wellness industriji, shvatila sam koliko je važan osobni
              pristup, manji broj ljudi u grupi i edukacija temeljena na iskustvu,
              anatomiji i individualnim potrebama. Gioia je mjesto gdje se uči
              kako slušati vlastito tijelo.
            </p>
          </div>

          <div className="about-block-editorial">
            <h3>{t("about.mission", "Misija i naše vrijednosti")}</h3>
            <ul>
              <li>Sigurni i funkcionalni pokreti za sva tijela</li>
              <li>Učenje pravilnog disanja i osvještavanja pokreta</li>
              <li>Individualni pristup u malim grupama</li>
              <li>Topla, podržavajuća atmosfera bez žurbe i buke</li>
              <li>Stručnost temeljena na znanju i kontinuiranoj edukaciji</li>
            </ul>
          </div>

          <div className="about-block-editorial">
            <h3>{t("about.whySpecial", "Zašto smo posebne")}</h3>
            <p>
              U Gioia studiju naglasak je na kvaliteti, a ne kvantiteti. Radimo u
              malim grupama kako bismo svakome posvetile dovoljno pažnje. Naše
              vježbe su prilagođene svim razinama, a cilj je ojačati tijelo,
              poboljšati držanje, povećati mobilnost i vratiti lakoću pokreta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
