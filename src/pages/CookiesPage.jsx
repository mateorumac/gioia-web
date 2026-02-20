import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import "../styles/LegalPages.css";

function CookiesPage() {
  const { i18n } = useTranslation();
  const isHR = i18n.language === "hr";

  return (
    <div className="legal-page">
      <Helmet>
        <title>
          {isHR
            ? "Politika kolačića | Gioia Reformer Pilates Studio"
            : "Cookie Policy | Gioia Reformer Pilates Studio"}
        </title>
        <meta
          name="description"
          content={
            isHR
              ? "Politika kolačića Gioia Reformer Pilates Studija. Informacije o upotrebi Google Analytics kolačića i upravljanju vašim postavkama."
              : "Cookie policy of Gioia Reformer Pilates Studio. Information about Google Analytics cookie usage and managing your preferences."
          }
        />
      </Helmet>

      <div className="legal-container">
        <h1>{isHR ? "Politika kolačića" : "Cookie Policy"}</h1>
        <p className="legal-update-date">
          {isHR
            ? "Posljednje ažuriranje: Veljača 2026"
            : "Last updated: February 2026"}
        </p>

        {isHR ? (
          <>
            <h2>1. Što su kolačići?</h2>
            <p>
              Kolačići su male tekstualne datoteke koje se pohranjuju na vaš
              uređaj prilikom posjete web stranici. Omogućuju pravilno
              funkcioniranje stranice te prikupljanje anonimnih statističkih
              podataka o korištenju.
            </p>

            <h2>2. Koje kolačiće koristimo</h2>

            <h3>2.1 Nužni kolačići</h3>
            <p>
              Ovi kolačići su neophodni za tehničko funkcioniranje web stranice
              i ne mogu se isključiti. Uključuju:
            </p>
            <ul>
              <li>kolačić za pamćenje jezične postavke (HR / EN)</li>
              <li>kolačić za spremanje vaše odluke o pristanku na analitičke kolačiće</li>
            </ul>
            <p>Ovi kolačići ne zahtijevaju privolu jer su tehnički nužni.</p>

            <h3>2.2 Analitički kolačići (Google Analytics 4)</h3>
            <p>
              Uz vašu izričitu privolu koristimo <strong>Google Analytics 4</strong>{" "}
              za prikupljanje anonimnih statističkih podataka o korištenju web
              stranice, kao što su:
            </p>
            <ul>
              <li>broj posjetitelja</li>
              <li>trajanje posjete</li>
              <li>najposjećenije stranice</li>
              <li>vrsta uređaja i preglednika</li>
            </ul>
            <p>
              IP adresa se anonimizira prije pohrane, sukladno postavkama
              Google Analytics 4 sustava.
            </p>
            <p>
              Podaci se koriste isključivo u statističke svrhe radi poboljšanja
              web stranice i ne koriste se za oglašavanje ili remarketing.
            </p>
            <p>
              Google može obrađivati podatke na poslužiteljima izvan Europske
              unije, uz primjenu odgovarajućih zaštitnih mjera sukladno GDPR-u.
            </p>
            <p>
              Više informacija o načinu obrade podataka od strane Googlea
              dostupno je na:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
            </p>

            <h2>3. Trajanje kolačića</h2>
            <p>
              Nužni kolačići pohranjuju se na razdoblje potrebno za
              funkcioniranje stranice.
            </p>
            <p>
              Analitički kolačići zadržavaju se najdulje do 14 mjeseci,
              sukladno standardnim postavkama Google Analyticsa, osim ako ih
              korisnik prethodno ne izbriše putem postavki preglednika.
            </p>

            <h2>4. Pravna osnova obrade</h2>
            <p>
              Analitički kolačići postavljaju se isključivo na temelju vaše
              privole, koju možete dati ili odbiti putem obavijesti o
              kolačićima.
            </p>
            <p>Privolu možete u svakom trenutku povući.</p>

            <h2>5. Upravljanje kolačićima</h2>
            <p>
              Svoj odabir možete promijeniti putem obavijesti o kolačićima
              dostupne na web stranici.
            </p>
            <p>
              Kolačićima možete upravljati i putem postavki svog internetskog
              preglednika:
            </p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/hr/kb/kolacici"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/hr-hr/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/hr-hr/windows/brisanje-kolačića-i-upravljanje-njima-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p>
              Blokiranje analitičkih kolačića neće utjecati na osnovno
              funkcioniranje web stranice.
            </p>

            <h2>6. Kontakt</h2>
            <p>
              Za dodatne informacije o korištenju kolačića možete nam se
              obratiti na:{" "}
              <a href="mailto:gioiareformer@gmail.com">gioiareformer@gmail.com</a>
            </p>
            <p>
              Za više informacija o obradi osobnih podataka pogledajte našu{" "}
              <a href="/hr/politika-privatnosti">Politiku politika-privatnostii</a>.
            </p>
          </>
        ) : (
          <>
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that a website stores on your device
              when you visit it. They are used to ensure the website functions
              correctly and to help us understand how it is used.
            </p>

            <h2>2. Cookies We Use</h2>

            <h3>2.1 Necessary Cookies</h3>
            <p>
              These cookies are essential for the basic functioning of the
              website and cannot be disabled. They include a cookie to remember
              your language preference (Croatian / English) and a cookie to
              record your consent decision regarding analytics cookies.
            </p>

            <h3>2.2 Analytics Cookies — Google Analytics 4</h3>
            <p>
              We use <strong>Google Analytics 4</strong> for anonymous
              statistical analysis of visits (e.g. number of visitors, most
              visited pages, session duration). These cookies are loaded only
              after your explicit consent via the cookie notice.
            </p>
            <p>
              IP anonymisation is enabled — your IP address is not stored in
              full. Google Analytics does not use this data for personal
              targeting or advertising.
            </p>
            <p>
              More about Google Analytics' privacy policy:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
            </p>

            <h2>3. What We Do Not Use</h2>
            <p>This website does <strong>not use</strong>:</p>
            <ul>
              <li>Meta Pixel (Facebook / Instagram tracking)</li>
              <li>Google Ads remarketing</li>
              <li>Cookies for personalised advertising</li>
              <li>Newsletter systems or CRM tools</li>
            </ul>

            <h2>4. Managing Cookies</h2>
            <p>
              You can withdraw or change your consent at any time via the
              cookie notice displayed at the bottom of the page.
            </p>
            <p>
              You can also manage cookies directly in your browser settings:
            </p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p>
              Note: blocking analytics cookies will not affect the website's
              core functionality.
            </p>

            <h2>5. More Information</h2>
            <p>
              For more information about how we protect your personal data, see
              our <a href="/en/politika-privatnosti">Privacy Policy</a>.
              <br />
              For questions:{" "}
              <a href="mailto:gioiareformer@gmail.com">gioiareformer@gmail.com</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default CookiesPage;
