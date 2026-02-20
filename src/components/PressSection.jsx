import { motion } from "framer-motion";
import "../styles/PressSection.css";
import { fadeUp, staggerContainer, viewport } from "../animations/motionPresets";

const pressItems = [
  {
    source: "Istarski.hr",
    url: "https://istarski.hr/node/117951-zagrebacka-pravnica-i-menadzerica-vodi-poseban-pilates-studio-zivjela-sam-u-becu-i-melbourneu-ali-pula-me-odusevila",
    description:
      "Cjelovita priča o osnivačici i konceptu studija, od iskustva života u Beču i Melbourneu do stvaranja intimnog reformer studija u Puli.",
  },
  {
    source: "Stylish.hr",
    url: "https://stylish.hr/lifestyle/gdje-vjezbati-u-puli-ove-jeseni/",
    description:
      "Studio je istaknut kao preporučeno mjesto za vježbanje u Puli, s naglaskom na ugodnu atmosferu i osobni pristup.",
  },
];

function PressSection() {
  return (
    <section className="pressSection">
      <div className="pressSection__inner">
        <motion.div
          className="pressSection__header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="pressSection__eyebrow" variants={fadeUp}>
            Press
          </motion.p>
          <motion.h2 className="pressSection__title" variants={fadeUp}>
            U medijima
          </motion.h2>
        </motion.div>

        <motion.div
          className="pressSection__articles"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.a
            className="pressSection__article pressSection__article--primary"
            href={pressItems[0].url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
          >
            <span className="pressSection__source">{pressItems[0].source}</span>
            <p className="pressSection__desc">{pressItems[0].description}</p>
            <span className="pressSection__cta">Pročitaj članak →</span>
          </motion.a>

          <div className="pressSection__divider" aria-hidden="true" />

          <motion.a
            className="pressSection__article pressSection__article--secondary"
            href={pressItems[1].url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
          >
            <span className="pressSection__source">{pressItems[1].source}</span>
            <p className="pressSection__desc">{pressItems[1].description}</p>
            <span className="pressSection__cta">Pročitaj članak →</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default PressSection;
