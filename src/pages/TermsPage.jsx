import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import "../styles/LegalPages.css";

function TermsPage() {
  const { i18n } = useTranslation();
  const isHR = i18n.language === "hr";

  return (
    <div className="legal-page">
      <Helmet>
        <title>
          {isHR
            ? "Uvjeti korištenja | Gioia Reformer Pilates Studio"
            : "Terms of Use | Gioia Reformer Pilates Studio"}
        </title>
        <meta
          name="description"
          content={
            isHR
              ? "Uvjeti korištenja web stranice i usluga Gioia Reformer Pilates Studija u Puli. Pravila rezervacije, otkazivanja i ponašanja u studiju."
              : "Terms of use for Gioia Reformer Pilates Studio website and services in Pula. Booking, cancellation and studio conduct rules."
          }
        />
      </Helmet>

      <div className="legal-container">
        <h1>{isHR ? "Uvjeti korištenja" : "Terms of Use"}</h1>
        <p className="legal-update-date">
          {isHR
            ? "Posljednje ažuriranje: Veljača 2026"
            : "Last updated: February 2026"}
        </p>

        {isHR ? (
          <>
            <h2>1. Opće informacije</h2>
            <p>
              Ovi uvjeti korištenja odnose se na web stranicu i usluge:
              <br />
              <strong>GIOIA, obrt za obavljanje djelatnosti fitness centra, vl. Sanja Ileković Vuk</strong>
              <br />
              Ulica Verudella 8, 52100 Pula, Hrvatska
              <br />
              OIB: 63943975584 | MBS: 98984284
              <br />
              E-mail: <a href="mailto:gioiareformer@gmail.com">gioiareformer@gmail.com</a>
            </p>
            <p>
              Korištenjem web stranice prihvaćate ove uvjete. Ako se s njima ne
              slažete, molimo vas da ne koristite stranicu.
            </p>

            <h2>2. Priroda rezervacije prvog termina</h2>
            <p>
              Forma za rezervaciju prvog termina isključivo je informativnog i
              organizacijskog karaktera. Ispunjavanje forme ne predstavlja online
              kupnju niti plaćanje usluge. Služi kako bismo se mogli pripremiti
              za vaš dolazak i kontaktirati vas radi potvrde termina.
            </p>
            <p>
              Rezervacija se smatra potvrđenom tek nakon što vas studio kontaktira
              i potvrdi termin putem e-maila ili poruke.
            </p>

            <h2>3. Otkazivanje termina</h2>
            <p>
              Termin možete otkazati najkasnije <strong>2 sata prije početka</strong>.
              Otkazivanje u kraćem roku smatra se iskorištenim terminom zbog
              ograničenog broja mjesta u grupi.
            </p>
            <p>
              Otkazivanje je moguće putem e-maila na{" "}
              <a href="mailto:gioiareformer@gmail.com">gioiareformer@gmail.com</a> ili izravnim
              kontaktom s instruktoricom.
            </p>

            <h2>4. Zdravlje i sigurnost</h2>
            <p>
              Molimo vas da nas unaprijed obavijestite o svim zdravstvenim
              stanjima, ozljedama ili ograničenjima koja bi mogla utjecati
              na trening.
            </p>
            <p>
              Trudnice se trebaju prethodno savjetovati s liječnikom prije
              sudjelovanja u treninzima.
            </p>
            <p>
              U slučaju zdravstvenih tegoba tijekom treninga, odmah
              obavijestite instruktoricu.
            </p>

            <h2>5. Maloljetnici</h2>
            <p>
              Maloljetne osobe mogu sudjelovati u treninzima isključivo uz
              suglasnost roditelja ili zakonskog skrbnika.
            </p>

            <h2>6. Ponašanje u studiju</h2>
            <ul>
              <li>Budite na vrijeme jer kašnjenje može poremetiti trening ostalih polaznica</li>
              <li>Nosite prikladnu odjeću i obuću za vježbanje</li>
              <li>Dovedite vlastitu bocu vode; koristite ručnik</li>
              <li>Mobilni uređaj stavite na tihi mod</li>
              <li>
                Fotografiranje ili snimanje u studiju moguće je isključivo uz
                pristanak instruktorice
              </li>
            </ul>
            <p>
              Studio zadržava pravo odbiti pružanje usluge u slučaju
              neprimjerenog ponašanja ili kršenja ovih uvjeta.
            </p>

            <h2>7. Odgovornost</h2>
            <p>GIOIA, obrt za obavljanje djelatnosti fitness centra, ne preuzima odgovornost za:</p>
            <ul>
              <li>Gubitak ili oštećenje osobnih predmeta u studiju</li>
              <li>
                Ozljede nastale zanemarivanjem sigurnosnih uputa ili vlastitih
                fizičkih ograničenja
              </li>
              <li>
                Prekide u pružanju usluga uzrokovane višom silom ili
                okolnostima izvan kontrole studija
              </li>
            </ul>
            <p>Sudjelovanje u treninzima odvija se na vlastitu odgovornost polaznika.</p>

            <h2>8. Intelektualno vlasništvo</h2>
            <p>
              Svi sadržaji na web stranici (tekstovi, fotografije, logotipi i
              grafički elementi) vlasništvo su Gioia Studija i zaštićeni su
              autorskim pravom. Nije dozvoljeno preuzimanje ili reproduciranje
              bez pisane dozvole.
            </p>

            <h2>9. Privatnost</h2>
            <p>
              Obrada osobnih podataka regulirana je našom{" "}
              <a href="/hr/politika-privatnosti">Politikom politika-privatnostii</a>.
            </p>

            <h2>10. Mjerodavno pravo i nadležnost</h2>
            <p>
              Na ove uvjete primjenjuje se pravo Republike Hrvatske. Za
              eventualne sporove nadležan je stvarno nadležni sud u Republici
              Hrvatskoj.
            </p>

            <h2>11. Izmjene uvjeta</h2>
            <p>
              Zadržavamo pravo izmjene ovih uvjeta. Promjene stupaju na snagu
              objavom na ovoj stranici.
            </p>

            <h2>12. Kontakt</h2>
            <p>
              Za sva pitanja vezana uz uvjete korištenja:
              <br />
              E-mail: <a href="mailto:gioiareformer@gmail.com">gioiareformer@gmail.com</a>
              <br />
              Adresa: Ulica Verudella 8, 52100 Pula, Hrvatska
            </p>
          </>
        ) : (
          <>
            <h2>1. General Information</h2>
            <p>
              These terms of use apply to the website and services of:
              <br />
              <strong>GIOIA, obrt za obavljanje djelatnosti fitness centra, vl. Sanja Ileković Vuk</strong>
              <br />
              Ulica Verudella 8, 52100 Pula, Croatia
              <br />
              OIB: 63943975584 | MBS: 98984284
              <br />
              E-mail: <a href="mailto:gioiareformer@gmail.com">gioiareformer@gmail.com</a>
            </p>
            <p>
              By using this website you accept these terms. If you disagree,
              please do not use the website.
            </p>

            <h2>2. Nature of the First Session Booking</h2>
            <p>
              The first session booking form is purely informational and
              organisational in nature. Submitting the form does not constitute
              an online purchase or payment. It is used so we can prepare for
              your visit and contact you to confirm the session.
            </p>
            <p>
              A booking is considered confirmed only after the studio contacts
              you and confirms the session via e-mail or message.
            </p>

            <h2>3. Cancellation Policy</h2>
            <p>
              Sessions may be cancelled up to <strong>2 hours before the start time</strong>.
              Cancellations made after this deadline are considered used sessions
              due to limited group capacity.
            </p>
            <p>
              Cancellations can be made via e-mail at{" "}
              <a href="mailto:gioiareformer@gmail.com">gioiareformer@gmail.com</a> or by contacting
              the instructor directly.
            </p>

            <h2>4. Health and Safety</h2>
            <ul>
              <li>
                Please inform us in advance of any health conditions, injuries,
                or limitations that may affect your training
              </li>
              <li>Pregnant women should consult a doctor before participating</li>
              <li>
                The studio is not responsible for injuries resulting from
                disregarding the instructor's guidance or exceeding your
                physical limits
              </li>
              <li>
                If you experience any health issues during training, notify
                the instructor immediately
              </li>
            </ul>

            <h2>5. Minors</h2>
            <p>
              Minors may participate in training sessions only with the consent
              of a parent or legal guardian.
            </p>

            <h2>6. Studio Conduct</h2>
            <ul>
              <li>Please arrive on time, as late arrivals may disrupt other participants</li>
              <li>Wear appropriate workout clothing and footwear</li>
              <li>Bring your own water bottle; use a towel</li>
              <li>Set your mobile device to silent mode</li>
              <li>
                Photography or recording in the studio is allowed only with
                the instructor's consent
              </li>
            </ul>
            <p>
              The studio reserves the right to refuse service in the event of
              inappropriate behaviour or violation of these terms.
            </p>

            <h2>7. Liability</h2>
            <p>Gioia Studio is not responsible for:</p>
            <ul>
              <li>Loss or damage to personal belongings in the studio</li>
              <li>
                Injuries resulting from disregarding safety instructions or
                personal physical limitations
              </li>
              <li>
                Service interruptions caused by force majeure or circumstances
                beyond the studio's control
              </li>
            </ul>

            <h2>8. Intellectual Property</h2>
            <p>
              All content on this website (texts, photographs, logos, and
              graphic elements) is the property of Gioia Studio and is
              protected by copyright. Reproduction without written permission
              is not permitted.
            </p>

            <h2>9. Privacy</h2>
            <p>
              The processing of personal data is governed by our{" "}
              <a href="/en/politika-privatnosti">Privacy Policy</a>.
            </p>

            <h2>10. Applicable Law and Jurisdiction</h2>
            <p>
              These terms are governed by the law of the Republic of Croatia.
              Any disputes shall be subject to the jurisdiction of the
              competent courts of the Republic of Croatia.
            </p>

            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms. Changes take effect
              upon publication on this page.
            </p>

            <h2>12. Contact</h2>
            <p>
              For questions regarding these terms:
              <br />
              E-mail: <a href="mailto:gioiareformer@gmail.com">gioiareformer@gmail.com</a>
              <br />
              Address: Ulica Verudella 8, 52100 Pula, Croatia
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default TermsPage;
