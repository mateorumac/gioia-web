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
          className="pressSection__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {pressItems.map((item) => (
            <motion.a
              key={item.source}
              className="pressSection__card"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
            >
              <span className="pressSection__source">{item.source}</span>
              <p className="pressSection__desc">{item.description}</p>
              <span className="pressSection__cta">Pročitaj članak →</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default PressSection;
