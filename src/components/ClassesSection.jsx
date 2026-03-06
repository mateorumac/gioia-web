import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/ClassesSection.css";
import { fadeUp, imageReveal, staggerContainer, viewport } from "../animations/motionPresets";

import individualTrainingImage from "../assets/images/DSC_5556.webp";
import groupTrainingImage from "../assets/images/DSC_5674.webp";
import bookingSidebar1 from "../assets/images/DSC_1394.webp";
import beginnerTrainingImage from "../assets/images/DSC_8240.webp";
import patternBg from "../assets/green-pattern-bg.png";

function ClassesSection() {
  const { t } = useTranslation();

  return (
    <section className="classes-section" id="treninzi">
      <div className="classes-for-who-section">
        <div className="for-who-grain" />
        <div className="for-who-container">
          <motion.div
            className="for-who-header"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p className="for-who-eyebrow" variants={fadeUp}>
              {t("classes.forWhoEyebrow", "Kome je namijenjen")}
            </motion.p>
            <motion.h3 className="for-who-title" variants={fadeUp}>
              {t("classes.forWho", "Reformer pilates prilagođava se vama")}
            </motion.h3>
          </motion.div>

          <motion.div
            className="for-who-columns"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div className="for-who-column" variants={fadeUp}>
              <h4 className="for-who-column__title">{t("classes.forWho1Title", "Početnice")}</h4>
              <p className="for-who-column__text">
                {t("classes.forWho1Text", "Siguran i kontroliran ulazak u svijet vježbanja uz stručno vodstvo.")}
              </p>
            </motion.div>
            <motion.div className="for-who-column" variants={fadeUp}>
              <h4 className="for-who-column__title">{t("classes.forWho2Title", "Sjedilački posao")}</h4>
              <p className="for-who-column__text">
                {t("classes.forWho2Text", "Ciljani rad na smanjenju napetosti u leđima, vratu i ramenima.")}
              </p>
            </motion.div>
            <motion.div className="for-who-column" variants={fadeUp}>
              <h4 className="for-who-column__title">{t("classes.forWho3Title", "Iskusne vježbačice")}</h4>
              <p className="for-who-column__text">
                {t("classes.forWho3Text", "Produbljivanje kontrole, snage i svijesti o tijelu.")}
              </p>
            </motion.div>
            <motion.div className="for-who-column" variants={fadeUp}>
              <h4 className="for-who-column__title">{t("classes.forWho4Title", "Tražiš balans")}</h4>
              <p className="for-who-column__text">
                {t("classes.forWho4Text", "Miran, ali intenzivan trening koji povezuje tijelo i um.")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="training-types-section">
        <div className="training-types-container">
          <motion.div
            className="training-intro"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p className="training-intro__eyebrow" variants={fadeUp}>
              {t("classes.trainingEyebrow", "Trening u Gioia studiju")}
            </motion.p>
            <motion.h3 className="training-intro__title" variants={fadeUp}>
              {t("classes.trainingTitle", "Tri koncepta. Jedan cilj. Snažno i svjesno tijelo.")}
            </motion.h3>
            <motion.div className="training-intro__text" variants={fadeUp}>
              <p>{t("classes.trainingIntro", "Svi treninzi traju 55 minuta i uključuju strukturirani uvodni dio sa zagrijavanjem i pripremom tijela, glavni dio treninga te završno istezanje.")}</p>
              <p>{t("classes.trainingIntro2", "U radu koristimo reformer kao osnovu, ali često uključujemo i dodatne rekvizite poput bučica, utega za zglobove, pilates lopte, obruča, traka i štapa.")}</p>
              <p>{t("classes.trainingIntro3", "Fokus je na radu cijelog tijela, uz poseban naglasak na jačanje mišića trupa, stabilnosti centra i kontrole.")}</p>
              <p>{t("classes.trainingIntro4", "Za trening su potrebne protuklizne čarape, ručnik i voda.")}</p>
            </motion.div>
          </motion.div>
          <div className="training-intro__separator" />
        </div>

        {/* Block 1 — Strength Reformer */}
        <motion.article
          className="training-block"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div className="training-block__image" variants={imageReveal}>
            <img
              src={individualTrainingImage}
              alt={t("classes.strengthAlt", "Strength Reformer trening")}
              loading="lazy"
            />
          </motion.div>
          <motion.div className="training-block__content" variants={fadeUp}>
            <span className="training-block__num">01</span>
            <h4 className="training-block__name">{t("classes.strengthName", "Strength Reformer")}</h4>
            <p className="training-block__intensity">{t("classes.strengthIntensity", "srednji do jači intenzitet")}</p>
            <p className="training-block__desc">
              {t("classes.strengthDesc", "Naš signature trening. Kombinira vježbe snage i klasične reformer vježbe. Trening je intenzivan, ali prilagodljiv i izvediv uz stručno vodstvo. Korištenjem dodatnih rekvizita dodatno potičemo razvoj snage i stabilnosti. Cilj je jačanje mišića s naglaskom na trup – tzv. powerhouse, odnosno centar tijela – uz poboljšanje posture i stabilnosti. Rezultat je snažnije tijelo, pravilnije držanje i učinkovitiji pokreti.")}
            </p>
          </motion.div>
        </motion.article>

        {/* Block 2 — Stretch Reformer */}
        <motion.article
          className="training-block training-block--reverse"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div className="training-block__image" variants={imageReveal}>
            <img
              src={groupTrainingImage}
              alt={t("classes.stretchAlt", "Stretch Reformer trening")}
              loading="lazy"
            />
          </motion.div>
          <motion.div className="training-block__content" variants={fadeUp}>
            <span className="training-block__num">02</span>
            <h4 className="training-block__name">{t("classes.stretchName", "Stretch Reformer")}</h4>
            <p className="training-block__intensity">{t("classes.stretchIntensity", "umjeren intenzitet")}</p>
            <p className="training-block__desc">
              {t("classes.stretchDesc", "Nježniji trening namijenjen početnicima, osobama koje se prvi put susreću s reformerom ili onima koji se vraćaju treningu nakon pauze, i onima koji imaju blagih odstupanja u području kralježnice. Fokus je na tradicionalnom reformer pilatesu prema principima Josepha Pilatesa, uz dubinsko jačanje i kontrolirano istezanje. Cilj je osnažiti kralježnicu, poboljšati poravnanje tijela i razviti svjesnost pokreta na smiren i kontroliran način.")}
            </p>
          </motion.div>
        </motion.article>

        {/* Block 3 — Cardio Reformer */}
        <motion.article
          className="training-block"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div className="training-block__image" variants={imageReveal}>
            <img
              src={bookingSidebar1}
              alt={t("classes.cardioAlt", "Cardio Reformer trening")}
              loading="lazy"
            />
          </motion.div>
          <motion.div className="training-block__content" variants={fadeUp}>
            <span className="training-block__num">03</span>
            <h4 className="training-block__name">{t("classes.cardioName", "Cardio Reformer")}</h4>
            <p className="training-block__intensity">{t("classes.cardioIntensity", "jači intenzitet")}</p>
            <p className="training-block__desc">
              {t("classes.cardioDesc", "Dinamičan i brži trening namijenjen iskusnijim polaznicima. Korištenjem jumping boarda (daske za skakanje) – dodatak koji reformer pretvara u mali trampolin – trening dobiva kardio komponentu višeg intenziteta, s naglaskom na donji dio tijela, uz element zabave i dinamike. Preporučuje se klijentima koji već imaju iskustva na reformeru ili su u već dobroj kondicijskoj formi.")}
            </p>
          </motion.div>
        </motion.article>

        {/* Block 4 — Beginner Reformer */}
        <motion.article
          className="training-block training-block--reverse"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div className="training-block__image" variants={imageReveal}>
            <img
              src={beginnerTrainingImage}
              alt={t("classes.beginnerAlt", "Beginner Reformer trening")}
              loading="lazy"
            />
          </motion.div>
          <motion.div className="training-block__content" variants={fadeUp}>
            <span className="training-block__num">04</span>
            <h4 className="training-block__name">{t("classes.beginnerName", "Beginner Reformer")}</h4>
            <p className="training-block__intensity">{t("classes.beginnerIntensity", "slabiji intenzitet")}</p>
            <p className="training-block__desc">
              {t("classes.beginnerDesc1", "Ovaj trening je idealan za sve koji tek započinju svoje Pilates putovanje, kao i za osobe s blagim problemima s kralježnicom ili dugotrajnim sjedenjem. Fokus je na pravilnoj tehnici, svjesnom disanju i kontroli pokreta – bez naglih opterećenja i prevelikog intenziteta.")}
            </p>
            <p className="training-block__desc">
              {t("classes.beginnerDesc2", "Kroz sporiji tempo rada jačamo duboke mišiće trupa, stabiliziramo kralježnicu i poboljšavamo pokretljivost cijelog tijela. Vježbe se prilagođavaju svakom polazniku, uz naglasak na sigurnost, posturalnu korekciju i postupno povećanje snage.")}
            </p>
            <p className="training-block__desc">
              {t("classes.beginnerDesc3", "Trening je nježan, ali učinkovit – pomaže u smanjenju napetosti u leđima, poboljšava držanje i donosi osjećaj lakoće u tijelu.")}
            </p>
          </motion.div>
        </motion.article>
      </div>

      <div className="pricing-section-wrapper">
        <div className="pricing-pattern" style={{ backgroundImage: `url(${patternBg})` }} />
        <div className="classes-container">
          <motion.div
            className="pricing-editorial"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p className="pricing-eyebrow" variants={fadeUp}>{t("classes.pricingEyebrow", "Cjenik")}</motion.p>
            <motion.h3 className="pricing-title" variants={fadeUp}>{t("classes.pricingTitle", "Investicija u sebe")}</motion.h3>
            <motion.p className="pricing-note" variants={fadeUp}>
              {t("classes.pricingNote", "Ovisno o vrsti treninga i dinamici dolazaka, nudimo različite pakete i članarine. Rado ćemo pomoći pri odabiru opcije koja najbolje odgovara vašim ciljevima i rasporedu.")}
            </motion.p>

            <motion.div className="pricing-table" variants={staggerContainer}>
              {/* Column 1 — Individualni trening */}
              <motion.div className="pricing-column" variants={fadeUp}>
                <h4 className="pricing-column__title">{t("classes.individualTitle", "Individualni trening")}</h4>
                <p className="pricing-column__sub">{t("classes.individualSub", "Personalizirani pristup, potpuni fokus na tebe")}</p>
                <div className="pricing-items">
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.singleSession", "Pojedinačni termin")}</span>
                    <span className="pricing-value">x<span className="pricing-currency"> €</span></span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.packInd4", "Paket od 4 termina")}</span>
                    <span className="pricing-value">x<span className="pricing-currency"> €</span></span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.packInd8", "Paket od 8 termina")}</span>
                    <span className="pricing-value">x<span className="pricing-currency"> €</span></span>
                  </div>
                </div>
              </motion.div>

              {/* Column 2 — Grupni trening */}
              <motion.div className="pricing-column" variants={fadeUp}>
                <h4 className="pricing-column__title">{t("classes.groupTitle", "Grupni trening")}</h4>
                <p className="pricing-column__sub">{t("classes.groupSub", "Do 6 polaznika, energija grupe uz osobni pristup")}</p>
                <div className="pricing-items">
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.singleSession", "Pojedinačni termin")}</span>
                    <span className="pricing-value">20<span className="pricing-currency"> €</span></span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.pack4", "Paket 4 termina")}</span>
                    <span className="pricing-value">60<span className="pricing-currency"> €</span></span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.pack8", "Paket 8 termina")}</span>
                    <span className="pricing-value">110<span className="pricing-currency"> €</span></span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.pack12", "Paket 12 treninga")}</span>
                    <span className="pricing-value">160<span className="pricing-currency"> €</span></span>
                  </div>
                </div>
              </motion.div>

              {/* Column 3 — Studenti */}
              <motion.div className="pricing-column" variants={fadeUp}>
                <h4 className="pricing-column__title">{t("classes.studentsTitle", "Studenti")}</h4>
                <p className="pricing-column__sub">{t("classes.studentsSub", "Grupni trening uz studentsku povlasticu")}</p>
                <div className="pricing-items">
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.singleSession", "Pojedinačni termin")}</span>
                    <span className="pricing-value">20<span className="pricing-currency"> €</span></span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.pack4", "Paket 4 termina")}</span>
                    <span className="pricing-value">50<span className="pricing-currency"> €</span></span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.pack8", "Paket 8 termina")}</span>
                    <span className="pricing-value">100<span className="pricing-currency"> €</span></span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.pack12", "Paket 12 treninga")}</span>
                    <span className="pricing-value">150<span className="pricing-currency"> €</span></span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ClassesSection;
