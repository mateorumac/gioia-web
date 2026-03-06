import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/TeamSection.css";
import { teamSanja, teamTea } from "../utils/images";
import { fadeUp, imageReveal, staggerContainer, viewport } from "../animations/motionPresets";

function TeamSection() {
  const { t } = useTranslation();

  return (
    <section className="team-section-editorial" id="trenerice">
      <div className="team-container-editorial">
        <motion.div
          className="team-header-editorial"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p className="team-eyebrow-editorial" variants={fadeUp}>
            {t("team.eyebrow", "Upoznajte nas")}
          </motion.p>
          <motion.h2 className="team-title-editorial" variants={fadeUp}>
            {t("team.title", "Trenerice koje vode vašu promjenu")}
          </motion.h2>
          <motion.p className="team-intro-editorial" variants={fadeUp}>
            {t("team.intro", "Vjerujemo da je odnos između trenerice i klijentice jedan od ključnih elemenata napretka. Svaka osoba u našem studiju dobiva jasne upute, pažnju i osjećaj sigurnosti — bez žurbe, uspoređivanja i pritiska.")}
          </motion.p>
        </motion.div>

        <motion.div
          className="team-grid-editorial"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.06 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Sanja */}
          <motion.article className="trainer-card-editorial" variants={fadeUp}>
            <motion.div className="trainer-image-wrapper-editorial" variants={imageReveal}>
              <img
                src={teamSanja}
                alt="Sanja - Reformer Pilates Instructor"
                className="trainer-image-editorial"
                loading="lazy"
              />
            </motion.div>
            <div className="trainer-content-editorial">
              <h3 className="trainer-name-editorial">Sanja</h3>
              <p className="trainer-role-editorial">{t("team.sanjaRole", "Osnivačica i instruktorica reformer pilatesa")}</p>
              <p className="trainer-text-editorial">
                {t("team.sanjaP1", "Gioia studio odraz je mojih životnih uvjerenja i odnosa prema pokretu. Stvoren je s ciljem pružanja pouzdanja i podrške — fizičke i osobne — svima koji žele više: snagu, mir i pozitivno okruženje.  To je prostor u kojem možete u potpunosti usmjeriti fokus na sebe i  ''napuniti se''.")}
              </p>
              <p className="trainer-text-editorial">
                {t("team.sanjaP2", "Kao dugogodišnja ljubiteljica pilatesa i teretane, pokret za mene predstavlja izraz poštovanja prema tijelu. Tijelo je snažno i moćno, ali zahtijeva pažnju i brigu. Kao što biljka ne može opstati bez njege, tako ni tijelo ne može bez svjesnog ulaganja.")}
              </p>
              <p className="trainer-text-editorial">
                {t("team.sanjaP3", `„Your body is your home — take care of it."`)}
              </p>
              <p className="trainer-text-editorial">
                {t("team.sanjaP4", "S pilatesom sam se susrela prije dvadesetak godina. Kroz godine prakse shvatila sam koliko mali, kontrolirani pokreti mogu donijeti velike promjene. Usporiti znači preuzeti kontrolu. Povezivanjem daha i pokreta stvaramo ravnotežu tijela i uma, a u tih sat vremena dobivate priliku za potpunu povezanost sa sobom.")}
              </p>
              <p className="trainer-text-editorial">
                {t("team.sanjaP5", "Od početka mi je bilo važno stvoriti studio koji neće biti samo još jedno mjesto za trening, već prostor zajedničkog rasta i podrške. Ponosna sam i zahvalna što su klijenti to prepoznali.")}
              </p>
            </div>
          </motion.article>

          {/* Tea */}
          <motion.article className="trainer-card-editorial" variants={fadeUp}>
            <motion.div className="trainer-image-wrapper-editorial" variants={imageReveal}>
              <img
                src={teamTea}
                alt="Tea - Reformer Pilates Instructor"
                className="trainer-image-editorial"
                loading="lazy"
              />
            </motion.div>
            <div className="trainer-content-editorial">
              <h3 className="trainer-name-editorial">Tea</h3>
              <p className="trainer-role-editorial">{t("team.teaRole", "Instruktorica reformer pilatesa")}</p>
              <p className="trainer-text-editorial">
                {t("team.teaP1", "Put me doveo u Pulu kroz studij japanologije, a različiti oblici treninga već su godinama bili dio mog života. Prvi susret s reformerom imala sam kod Sanje, gdje sam započela kao klijentica i trenirala od samih početaka. Upravo to iskustvo — iz perspektive polaznice — dodatno me motiviralo da se profesionalno posvetim radu u pilatesu.")}
              </p>
              <p className="trainer-text-editorial">
                {t("team.teaP2", "Kretanje je moj način uspostavljanja balansa, a pilates je postao moj alat za stabilnost i prisutnost. Dugogodišnjom praksom razvila sam razumijevanje načina na koji tijelo reagira na pokret i što znači trenirati svjesno. Znanje sam dodatno nadogradila edukacijom kod Asje Petersen, osnivačice prvog pilates studija u Hrvatskoj.")}
              </p>
              <p className="trainer-text-editorial">
                {t("team.teaP3", "Na treninzima mi je prioritet da se klijenti osjećaju sigurno, prisutno i snažnije nego kada su došli.")}
              </p>
              <p className="trainer-text-editorial">
                {t("team.teaP4", "Biti instruktorica pilatesa prirodan je nastavak svega što cijenim — brige o sebi, kontinuiranog učenja i osobnog rasta.")}
              </p>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}

export default TeamSection;
