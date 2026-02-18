import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/TeamSection.css";
import { teamSanja, teamTea } from "../utils/images";
import { fadeUp, imageReveal, staggerContainer, viewport } from "../animations/motionPresets";

function TeamSection() {
  const { t } = useTranslation();

  return (
    <section className="team-section-editorial" id="team">
      <div className="team-container-editorial">
        <motion.div
          className="team-header-editorial"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="team-eyebrow-editorial" variants={fadeUp}>
            Upoznajte nas
          </motion.p>
          <motion.h2 className="team-title-editorial" variants={fadeUp}>
            {t("team.title", "Trenerice koje vode vašu promjenu")}
          </motion.h2>
          <motion.p className="team-intro-editorial" variants={fadeUp}>
            U Gioia studiju vjerujemo da je odnos između trenerice i klijentice
            jedan od ključnih elemenata napretka. Svaka osoba koja dođe k nama
            dobiva podršku, jasne upute i osjećaj sigurnosti – bez žurbe,
            uspoređivanja i pritiska.
          </motion.p>
        </motion.div>

        <motion.div
          className="team-grid-editorial"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
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
              <p className="trainer-role-editorial">Osnivačica i instruktorica reformer pilatesa</p>
              <p className="trainer-text-editorial">
                Gioia je studio koji reflektira mene i moja životna uvjerenja. Gioia je stvorena kako bi donijela pouzdanje, podršku kako fizičku tako i osobnu, i držati mjesto onima koji žele ono malo više; snagu, mir i pozitivno okruženje, mjesto u kojem će se ljudi fokusirati na sebe u potpunosti i doći "napuniti". I sama sam ljubitelj pilatesa i teretane već godinama i gajim veliku ljubav i poštovanje prema pokretu i tijelu, što nažalost često uzimamo zdravo za gotovo. Niti jedna biljka ne može opstati bez brige i zalijevanja, tako je i s našim tijelom, ono je snažno i moćno, ali ako ga zapostavimo s vremenom ćemo osjećati posljedice toga. Your body is your home, take care of it.
              </p>
              <p className="trainer-text-editorial">
                S pilatesom sam se susrela još prije dvadesetak godina kada se pojavljivao kao vrsta treninga u Hrvatskoj, međutim nije bio ni blizu popularnosti koju je stekao sada. Prakticirala sam ga dok sam živjela vani i uvijek mi je bio intenzivan i zanimljiv. U pilatesu mali pokreti čine najveću promjenu, usporiti znači preuzeti kontrolu, povezivanjem daha i pokreta pokrećemo energiju i tijelo i dovodimo ga u psihofizički balans. Koncipiran tako da u tih sat vremena imate potpuno povezivanje sami sa sobom.
              </p>
              <p className="trainer-text-editorial">
                I sama sam često tražila mjesta gdje ću dobiti sve ono što u svom studiju i nudim, zato mi je bilo od početka bilo bitno stvoriti studio koji neće biti samo još jedan u nizu, nego mjesto gdje ćemo svi skupa zajedno rasti i biti podrška jedni drugima. Izuzetno sam sretna, ponosna i zahvalna što su i drugi to prepoznali.
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
              <p className="trainer-role-editorial">Instruktorica reformer pilatesa</p>
              <p className="trainer-text-editorial">
                Studij japanologije odveo me u Pulu, a nakon diplome sam završila kod Sanje na treningu i pronašla nešto što mogu živjeti i u čemu uživam - svoj ikigai.
              </p>
              <p className="trainer-text-editorial">
                Kretanje je inače moj način da se posložim i steknem kontrolu nad sobom, a pilates je postao moj izvor za stabilnost i prisutnost. Kroz dugogodišnju praksu naučila sam kako tijelo reagira na različite pokrete i što znači trenirati svjesno, a svoje znanje sam produbila kod Asje Petersen, osnivačice prvog pilates studija u Hrvatskoj.
              </p>
              <p className="trainer-text-editorial">
                Praksu i znanje nastojim prenijeti na treninge, a cilj mi je da se klijenti na mojim treninzima osjećaju sigurno, prisutno i malo jače nego kad su došli.
              </p>
              <p className="trainer-text-editorial">
                Ukratko, biti instruktorica pilatesa je prirodan nastavak svega što volim u životu i što mi je bitno: brige o sebi, učenja i rasta.
              </p>
              <p className="trainer-text-editorial">
                Koji god je razlog zbog kojeg želite isprobati reformer pilates, u Gioii ćemo skupa krenuti s mjesta na kojem jeste i dovesti vas do cilja zbog kojeg ste i došli.
              </p>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}

export default TeamSection;
