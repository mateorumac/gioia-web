import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/ClassesSection.css";
import { fadeUp, imageReveal, staggerContainer, viewport } from "../animations/motionPresets";

import individualTrainingImage from "../assets/images/DSC_8240.webp";
import groupTrainingImage from "../assets/images/IMG_1588.webp";
import bookingSidebar1 from "../assets/images/DSC_1394.webp";
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
                {t("classes.forWho1Text", "Siguran i kontroliran ulazak u svijet vježbanja uz stručno vodstvo")}
              </p>
            </motion.div>
            <motion.div className="for-who-column" variants={fadeUp}>
              <h4 className="for-who-column__title">{t("classes.forWho2Title", "Sjedilački posao")}</h4>
              <p className="for-who-column__text">
                {t("classes.forWho2Text", "Rješenje za napetost u leđima, vratu i ramenima")}
              </p>
            </motion.div>
            <motion.div className="for-who-column" variants={fadeUp}>
              <h4 className="for-who-column__title">{t("classes.forWho3Title", "Iskusne vježbačice")}</h4>
              <p className="for-who-column__text">
                {t("classes.forWho3Text", "Produbljivanje kontrole, snage i svijesti o tijelu")}
              </p>
            </motion.div>
            <motion.div className="for-who-column" variants={fadeUp}>
              <h4 className="for-who-column__title">{t("classes.forWho4Title", "Tražiš balans")}</h4>
              <p className="for-who-column__text">
                {t("classes.forWho4Text", "Miran, ali intenzivan trening koji povezuje tijelo i um")}
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
            <motion.p className="training-intro__text" variants={fadeUp}>
              {t("classes.trainingIntro", "Svi naši treninzi traju 55 minuta, u kojima imamo dio posvećen zagrijavanju i istezanju tijela i glavni dio treninga s vježbama. U našim vježbama često koristimo i razne rekvizite poput bučica, traka za gluteus i ručnih utega. Tijekom sata fokus je na cijelom tijelu, iako reformer sam po sebi izuzetno jača mišiće trupa. Za vježbanje je potrebno imati protuklizne čarape, ručnik i vodu i spremni ste za trening.")}
            </motion.p>
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
              {t("classes.strengthDesc", "Ovo je sat koji je, rekli bi, naš signature. U početku smo imale samo ovu vrstu treninga, ali smo s vremenom shvatile da je potrebna i prilagodba klijentima. U satu kombiniramo vježbe snage i tradicionalne, bazične, reformer vježbe. Sat je dosta intenzivan, međutim svi klijenti ga savladaju bez ikakvih problema. S reformerom kombiniramo i dodatne rekvizite kao što su slobodni utezi, utezi za zglobove, pilates lopta i obruč, trake za gluteus i štap. Cilj je jačanje mišića s fokusom na trup, kako bi se poboljšala stabilnost centra tijela. Rezultat je jače tijelo, bolje i pravilnije držanje i lakši i pravilniji pokreti.")}
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
              {t("classes.stretchDesc", "Ovo je nježan stretch reformer sat koji je prikladan za početnike, osobe koje se prvi put susreću s reformerom, kao i za one koje nisu dugo vježbale ili imaju nekih blagih odstupanja u području kralježnice. To je opušteniji sat s naglaskom na istezanja. Fokus je na tradicionalni reformer pilates po učenjima Josepha Pilatesa. Sat se fokusira na dubinsko jačanje mišića, potporu i osnažvanje kralježnice te poboljšanje ukupnog poravnanja tijela na smiren i svjestan način.")}
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
              {t("classes.cardioDesc", "Dinamičan i brz reformer sat namijenjen iskusnijim polaznicima. Uz jumping board (daska za skakanje) koji izgleda kao mali trampolin na reformeru, imate mogućnost isprobati trening visokog intenziteta s fokusom na donji dio tijela na zabavan i dinamičan način. Ovu vrstu treninga preporučujemo ipak malo iskusnijim klijentima koji već neko vrijeme vježbaju na reformeru ili su u već dobroj kondicijskoj formi.")}
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
              {t("classes.pricingNote", "Ovisno o vrsti treninga i dinamici dolazaka, nudimo različite pakete i članarine. Rado ćemo pomoći pri odabiru opcije koja ti najviše odgovara.")}
            </motion.p>

            <motion.div className="pricing-table" variants={staggerContainer}>
              <motion.div className="pricing-column" variants={fadeUp}>
                <h4 className="pricing-column__title">{t("classes.individualTitle", "Individualni trening")}</h4>
                <p className="pricing-column__sub">{t("classes.individualSub", "Personalizirani pristup, potpuni fokus na tebe")}</p>
                <div className="pricing-items">
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.singleSession", "Pojedinačni termin")}</span>
                    <span className="pricing-value">xx<span className="pricing-currency"> €</span></span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.pack5", "Paket 5 termina")}</span>
                    <span className="pricing-value">xx<span className="pricing-currency"> €</span></span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.pack10", "Paket 10 termina")}</span>
                    <span className="pricing-value">xx<span className="pricing-currency"> €</span></span>
                  </div>
                </div>
              </motion.div>

              <motion.div className="pricing-column" variants={fadeUp}>
                <h4 className="pricing-column__title">{t("classes.groupTitle", "Mala grupa")}</h4>
                <p className="pricing-column__sub">{t("classes.groupSub", "Do 6 polaznica, energija grupe uz osobni pristup")}</p>
                <div className="pricing-items">
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.singleSession", "Pojedinačni termin")}</span>
                    <span className="pricing-value">xx<span className="pricing-currency"> €</span></span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.pack8", "Paket 8 termina")}</span>
                    <span className="pricing-value">xx<span className="pricing-currency"> €</span></span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">{t("classes.monthly", "Mjesečna članarina (2x tjedno)")}</span>
                    <span className="pricing-value">xx<span className="pricing-currency"> €</span></span>
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
