import { useTranslation } from "react-i18next";
import "../styles/LegalPages.css";

function PrivacyPage() {
  const { t, i18n } = useTranslation();
  const isHR = i18n.language === "hr";

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>{isHR ? "Politika privatnosti" : "Privacy Policy"}</h1>
        <p className="legal-update-date">
          {isHR
            ? "Posljednje ažuriranje: Siječanj 2026"
            : "Last updated: January 2026"}
        </p>

        {isHR ? (
          <>
            <h2>1. Uvod</h2>
            <p>
              Gioia Reformer Pilates Studio ("mi", "naš", "studio") poštuje vašu
              privatnost i obvezuje se zaštititi vaše osobne podatke. Ova
              politika privatnosti objašnjava kako prikupljamo, koristimo i
              štitimo vaše informacije kada koristite našu web stranicu i
              usluge.
            </p>

            <h2>2. Podaci koje prikupljamo</h2>
            <p>Možemo prikupljati sljedeće vrste podataka:</p>
            <ul>
              <li>
                <strong>Identifikacijski podaci:</strong> ime, prezime, email
                adresa, telefonski broj
              </li>
              <li>
                <strong>Podaci o treninzima:</strong> rezervacije termina,
                povijest treninga, preferencije
              </li>
              <li>
                <strong>Tehnički podaci:</strong> IP adresa, tip preglednika,
                uređaj, kolačići
              </li>
              <li>
                <strong>Komunikacijski podaci:</strong> vaše poruke, upiti i
                povratne informacije
              </li>
            </ul>

            <h2>3. Kako koristimo vaše podatke</h2>
            <p>Vaše osobne podatke koristimo za:</p>
            <ul>
              <li>Pružanje i upravljanje uslugama pilatesa</li>
              <li>Rezervaciju i potvrdu termina treninga</li>
              <li>Komunikaciju s vama o terminima i obavijestima</li>
              <li>Poboljšanje kvalitete naših usluga</li>
              <li>
                Slanje newslettera i marketinških poruka (samo uz vaš pristanak)
              </li>
              <li>Ispunjavanje zakonskih obveza</li>
            </ul>

            <h2>4. Pravna osnova za obradu</h2>
            <p>Vaše podatke obrađujemo na temelju:</p>
            <ul>
              <li>Vašeg pristanka</li>
              <li>Izvršavanja ugovora o pružanju usluga</li>
              <li>Legitimnih interesa poslovanja</li>
              <li>Zakonskih obveza</li>
            </ul>

            <h2>5. Dijeljenje podataka</h2>
            <p>
              Vaše osobne podatke nećemo prodavati trećim stranama. Možemo
              podijeliti podatke samo s:
            </p>
            <ul>
              <li>Pružateljima usluga koji podržavaju naše poslovanje</li>
              <li>
                Zakonskim tijelima kada je to zakonom propisano ili potrebno
              </li>
            </ul>

            <h2>6. Sigurnost podataka</h2>
            <p>
              Primjenjujemo prikladne tehničke i organizacijske mjere kako
              bismo zaštitili vaše osobne podatke od neovlaštenog pristupa,
              gubitka ili zlouporabe.
            </p>

            <h2>7. Vaša prava</h2>
            <p>Imate pravo:</p>
            <ul>
              <li>Pristupiti svojim osobnim podacima</li>
              <li>Zatražiti ispravak netočnih podataka</li>
              <li>Zatražiti brisanje podataka</li>
              <li>Ograničiti obradu podataka</li>
              <li>Prenosivost podataka</li>
              <li>Uložiti prigovor na obradu</li>
              <li>Povući pristanak u bilo kojem trenutku</li>
            </ul>

            <h2>8. Kolačići</h2>
            <p>
              Naša web stranica koristi kolačiće kako bi poboljšala vaše
              iskustvo. Više informacija potražite u našoj{" "}
              <a href="/hr/cookies">Politici kolačića</a>.
            </p>

            <h2>9. Kontakt</h2>
            <p>
              Za pitanja vezana uz privatnost, kontaktirajte nas na:
              <br />
              Email: <a href="mailto:info@gioia.hr">info@gioia.hr</a>
              <br />
              Telefon: <a href="tel:+385953896809">095 389 6809</a>
              <br />
              Adresa: Verudela 8, 52100 Pula, Hrvatska
            </p>

            <h2>10. Promjene politike</h2>
            <p>
              Zadržavamo pravo izmjene ove politike privatnosti. Sve promjene
              bit će objavljene na ovoj stranici s ažuriranim datumom.
            </p>
          </>
        ) : (
          <>
            <h2>1. Introduction</h2>
            <p>
              Gioia Reformer Pilates Studio ("we", "our", "studio") respects
              your privacy and is committed to protecting your personal data.
              This privacy policy explains how we collect, use, and protect your
              information when you use our website and services.
            </p>

            <h2>2. Data We Collect</h2>
            <p>We may collect the following types of data:</p>
            <ul>
              <li>
                <strong>Identification data:</strong> name, surname, email
                address, phone number
              </li>
              <li>
                <strong>Training data:</strong> session bookings, training
                history, preferences
              </li>
              <li>
                <strong>Technical data:</strong> IP address, browser type,
                device, cookies
              </li>
              <li>
                <strong>Communication data:</strong> your messages, inquiries,
                and feedback
              </li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Provide and manage pilates services</li>
              <li>Book and confirm training sessions</li>
              <li>Communicate with you about appointments and notifications</li>
              <li>Improve the quality of our services</li>
              <li>
                Send newsletters and marketing messages (only with your consent)
              </li>
              <li>Fulfill legal obligations</li>
            </ul>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process your data based on:</p>
            <ul>
              <li>Your consent</li>
              <li>Performance of a contract for service provision</li>
              <li>Legitimate business interests</li>
              <li>Legal obligations</li>
            </ul>

            <h2>5. Data Sharing</h2>
            <p>
              We will not sell your personal data to third parties. We may share
              data only with:
            </p>
            <ul>
              <li>Service providers who support our business</li>
              <li>Legal authorities when required by law or necessary</li>
            </ul>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data from unauthorized access, loss, or
              misuse.
            </p>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of data</li>
              <li>Restrict data processing</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2>8. Cookies</h2>
            <p>
              Our website uses cookies to improve your experience. For more
              information, see our <a href="/en/cookies">Cookie Policy</a>.
            </p>

            <h2>9. Contact</h2>
            <p>
              For privacy-related questions, contact us at:
              <br />
              Email: <a href="mailto:info@gioia.hr">info@gioia.hr</a>
              <br />
              Phone: <a href="tel:+385953896809">095 389 6809</a>
              <br />
              Address: Verudela 8, 52100 Pula, Croatia
            </p>

            <h2>10. Policy Changes</h2>
            <p>
              We reserve the right to modify this privacy policy. All changes
              will be published on this page with an updated date.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default PrivacyPage;
