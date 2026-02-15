import { useTranslation } from "react-i18next";
import "../styles/TeamSection.css";
import { teamSanja, teamTea } from "../utils/images";
import navLogo from "../assets/logos/nav-logo.png";

function TeamSection() {
  const { t } = useTranslation();

  return (
    <section className="team-section-editorial" id="team">
      <div className="team-container-editorial">
        <div className="team-header-editorial">
          <img src={navLogo} alt="" className="team-logo-watermark" />
          <h2 className="team-title-editorial">{t("team.title", "Naš tim")}</h2>
          <p className="team-intro-editorial">
            U Gioia studiju vjerujemo da je odnos između trenerice i klijentice
            jedan od ključnih elemenata napretka. Svaka osoba koja dođe k nama
            dobiva podršku, jasne upute i osjećaj sigurnosti – bez žurbe,
            uspoređivanja i pritiska.
          </p>
        </div>

        <div className="team-grid-editorial">
          {/* Sanja Vuk */}
          <article className="trainer-card-editorial">
            <div className="trainer-image-wrapper-editorial">
              <img
                src={teamSanja}
                alt="Sanja Vuk - Reformer Pilates Instructor"
                className="trainer-image-editorial"
                loading="lazy"
              />
            </div>
            <div className="trainer-content-editorial">
              <h3 className="trainer-name-editorial">Sanja Vuk</h3>
              <p className="trainer-role-editorial">Osnivačica i instruktorica reformer pilatesa</p>
              <p className="trainer-text-editorial">
                Kroz godine rada u pokretu, shvatila sam da je kvaliteta
                važnija od intenziteta. Moja je želja da se svaka osoba na
                reformeru osjeća sigurno, viđeno i podržano. Fokus mi je na
                pravilnoj tehnici, svjesnom disanju i postepenom jačanju tijela
                – bez forsiranja i agresivnog pristupa.
              </p>
              <p className="trainer-text-editorial">
                Posebno me raduje rad s osobama koje dugo nisu vježbale, imaju
                uredski posao ili osjećaju "težinu" u tijelu. Volim kada kroz
                trening osvijestimo male promjene koje na kraju donose veliki
                pomak u svakodnevnom životu.
              </p>
            </div>
          </article>

          {/* Tea */}
          <article className="trainer-card-editorial">
            <div className="trainer-image-wrapper-editorial">
              <img
                src={teamTea}
                alt="Tea - Reformer Pilates Instructor"
                className="trainer-image-editorial"
                loading="lazy"
              />
            </div>
            <div className="trainer-content-editorial">
              <h3 className="trainer-name-editorial">Tea [Prezime]</h3>
              <p className="trainer-role-editorial">Instruktorica reformer pilatesa</p>
              <p className="trainer-text-editorial">
                Tea svoj rad temelji na balansiranju snage i mekoće – trening
                kod nje je istovremeno izazovan i umirujući. Posebno pazi na
                detalje u posturi, aktivaciju "corea" i pravilno disanje, kako
                bi svaki pokret imao smisla i svrhu.
              </p>
              <p className="trainer-text-editorial">
                Njezin je cilj da iz dvorane izađeš lakšeg tijela i jasnije
                glave – s osjećajem da si napravila nešto dobro za sebe, bez
                iscrpljenosti i pretjeranog opterećenja zglobova.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
