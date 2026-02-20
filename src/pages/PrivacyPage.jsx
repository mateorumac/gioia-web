import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import "../styles/LegalPages.css";

function PrivacyPage() {
  const { i18n } = useTranslation();
  const isHR = i18n.language === "hr";

  return (
    <div className="legal-page">
      <Helmet>
        <title>
          {isHR
            ? "Politika privatnosti | Gioia Reformer Pilates Studio"
            : "Privacy Policy | Gioia Reformer Pilates Studio"}
        </title>
        <meta
          name="description"
          content={
            isHR
              ? "Politika privatnosti Gioia Reformer Pilates Studija. Saznajte koje podatke prikupljamo, u koju svrhu i kako štitimo vašu privatnost."
              : "Privacy policy of Gioia Reformer Pilates Studio. Learn what data we collect, for what purpose, and how we protect your privacy."
          }
        />
      </Helmet>

      <div className="legal-container">
        <h1>{isHR ? "Politika privatnosti" : "Privacy Policy"}</h1>
        <p className="legal-update-date">
          {isHR
            ? "Posljednje ažuriranje: Veljača 2026"
            : "Last updated: February 2026"}
        </p>

        {isHR ? (
          <>
            <h2>1. Voditelj obrade podataka</h2>
            <p>
              Voditelj obrade osobnih podataka je:
              <br />
              <strong>GIOIA, obrt za obavljanje djelatnosti fitness centra, vl. Sanja Ileković Vuk</strong>
              <br />
              Ulica Verudella 8, 52100 Pula, Hrvatska
              <br />
              OIB: 63943975584 | MBS: 98984284
              <br />
              E-mail: <a href="mailto:info@gioia.hr">info@gioia.hr</a>
            </p>

            <h2>2. Koje podatke prikupljamo i na koji način</h2>
            <p>
              Osobne podatke prikupljamo isključivo putem forme za rezervaciju
              prvog termina treninga. Prikupljaju se sljedeći podaci:
            </p>
            <ul>
              <li>Ime i prezime</li>
              <li>E-mail adresa</li>
              <li>Broj mobitela</li>
              <li>Vrsta treninga</li>
              <li>Željeno vrijeme termina</li>
              <li>Iskustvo s pilatesom</li>
              <li>Dodatne napomene (neobavezno)</li>
            </ul>
            <p>
              Stranica ne koristi obrasce za kontakt, registraciju, prijavu
              korisnika ni bilo koji drugi sustav za prikupljanje podataka.
            </p>

            <h2>3. Svrha obrade podataka</h2>
            <p>Vaše podatke koristimo isključivo za:</p>
            <ul>
              <li>Organizaciju i potvrdu prvog termina treninga</li>
              <li>Kontaktiranje vezano uz rezervaciju</li>
              <li>Pripremu treninga prema vašem iskustvu i potrebama</li>
            </ul>
            <p>
              Podaci se <strong>ne koriste</strong> za marketing, newsletter,
              oglašavanje niti se dijele s trećim stranama.
            </p>

            <h2>4. Pohrana podataka</h2>
            <p>
              Podaci se ne pohranjuju u bazu podataka. Nakon slanja forme,
              podaci se dostavljaju isključivo na interni e-mail adresu studija
              i ne arhiviraju se sustavno. Ne postoji CRM sustav niti
              automatska obrada podataka.
            </p>

            <h2>5. Pravna osnova za obradu</h2>
            <p>
              Vaše podatke obrađujemo na temelju vašeg pristanka, koji
              izražavate dobrovoljnim ispunjavanjem i slanjem forme. Podatke
              koristimo samo u svrhu zbog koje su prikupljeni.
            </p>

            <h2>6. Maloljetnici</h2>
            <p>
              Maloljetne osobe mogu ispuniti formu bez dodatne potvrde
              roditelja ili skrbnika. Studio ne prikuplja posebne kategorije
              podataka vezane uz dob korisnika.
            </p>

            <h2>7. Analitika</h2>
            <p>
              Web stranica koristi <strong>Google Analytics 4</strong> radi
              statističke analize posjeta. Anonimizacija IP adrese je
              uključena. Google Analytics se učitava isključivo nakon vašeg
              pristanka putem obavijesti o kolačićima. Nisu implementirani
              Meta Pixel, Google Ads remarketing ni bilo koji drugi alat za
              praćenje korisnika u oglašavačke svrhe.
            </p>

            <h2>8. Hosting i sigurnost</h2>
            <p>
              Web stranica je hostana na platformi <strong>Cloudflare</strong>{" "}
              i koristi HTTPS (SSL enkripcija). Cloudflare djeluje kao pružatelj
              infrastrukture i može procesirati prometne podatke u skladu s
              vlastitom politikom privatnosti.
            </p>

            <h2>9. Vaša prava (GDPR)</h2>
            <p>
              Sukladno Uredbi (EU) 2016/679 (GDPR), imate sljedeća prava:
            </p>
            <ul>
              <li>Pravo pristupa – možete zatražiti uvid u podatke koje čuvamo o vama</li>
              <li>Pravo ispravka – možete zatražiti ispravak netočnih podataka</li>
              <li>Pravo brisanja – možete zatražiti brisanje svojih podataka</li>
              <li>Pravo na prigovor – možete se protiviti obradi vaših podataka</li>
              <li>Pravo na pritužbu – imate pravo podnijeti pritužbu nadzornom tijelu (AZOP, <a href="https://azop.hr" target="_blank" rel="noopener noreferrer">azop.hr</a>)</li>
            </ul>
            <p>
              Za ostvarivanje prava kontaktirajte nas na:{" "}
              <a href="mailto:info@gioia.hr">info@gioia.hr</a>
            </p>

            <h2>10. Kolačići</h2>
            <p>
              Više informacija o upotrebi kolačića na ovoj stranici potražite
              u našoj{" "}
              <a href="/hr/cookies">Politici kolačića</a>.
            </p>

            <h2>11. Izmjene politike</h2>
            <p>
              Zadržavamo pravo izmjene ove politike. Sve promjene bit će
              objavljene na ovoj stranici s ažuriranim datumom.
            </p>
          </>
        ) : (
          <>
            <h2>1. Data Controller</h2>
            <p>
              The data controller is:
              <br />
              <strong>GIOIA, obrt za obavljanje djelatnosti fitness centra, vl. Sanja Ileković Vuk</strong>
              <br />
              Ulica Verudella 8, 52100 Pula, Croatia
              <br />
              OIB: 63943975584 | MBS: 98984284
              <br />
              E-mail: <a href="mailto:info@gioia.hr">info@gioia.hr</a>
            </p>

            <h2>2. What Data We Collect and How</h2>
            <p>
              Personal data is collected exclusively through the first training
              session booking form. The following data is collected:
            </p>
            <ul>
              <li>First and last name</li>
              <li>E-mail address</li>
              <li>Mobile phone number</li>
              <li>Type of training</li>
              <li>Preferred session time</li>
              <li>Pilates experience</li>
              <li>Additional notes (optional)</li>
            </ul>
            <p>
              The website does not use contact forms, user registration,
              login systems, or any other data collection method.
            </p>

            <h2>3. Purpose of Processing</h2>
            <p>Your data is used exclusively to:</p>
            <ul>
              <li>Organise and confirm your first training session</li>
              <li>Contact you regarding your booking</li>
              <li>Prepare the session according to your experience and needs</li>
            </ul>
            <p>
              Your data is <strong>not used</strong> for marketing, newsletters,
              advertising, or shared with third parties.
            </p>

            <h2>4. Data Storage</h2>
            <p>
              Data is not stored in a database. Once the form is submitted,
              data is delivered only to the studio's internal e-mail inbox and
              is not systematically archived. There is no CRM system or
              automated data processing.
            </p>

            <h2>5. Legal Basis for Processing</h2>
            <p>
              We process your data on the basis of your consent, expressed by
              voluntarily completing and submitting the form. Data is used only
              for the purpose for which it was collected.
            </p>

            <h2>6. Minors</h2>
            <p>
              Minors may submit the booking form without additional parental
              or guardian verification. The studio does not collect special
              categories of data related to user age.
            </p>

            <h2>7. Analytics</h2>
            <p>
              The website uses <strong>Google Analytics 4</strong> for
              statistical analysis of visits. IP anonymisation is enabled.
              Google Analytics loads only after your consent via the cookie
              notice. No Meta Pixel, Google Ads remarketing, or any other
              user-tracking tools for advertising purposes are implemented.
            </p>

            <h2>8. Hosting and Security</h2>
            <p>
              The website is hosted on <strong>Cloudflare</strong> and uses
              HTTPS (SSL encryption). Cloudflare acts as an infrastructure
              provider and may process traffic data according to its own
              privacy policy.
            </p>

            <h2>9. Your Rights (GDPR)</h2>
            <p>
              Under Regulation (EU) 2016/679 (GDPR), you have the following rights:
            </p>
            <ul>
              <li>Right of access – you may request to see the data we hold about you</li>
              <li>Right of rectification – you may request correction of inaccurate data</li>
              <li>Right to erasure – you may request deletion of your data</li>
              <li>Right to object – you may object to the processing of your data</li>
              <li>Right to lodge a complaint – you may file a complaint with the supervisory authority (AZOP, <a href="https://azop.hr" target="_blank" rel="noopener noreferrer">azop.hr</a>)</li>
            </ul>
            <p>
              To exercise your rights, contact us at:{" "}
              <a href="mailto:info@gioia.hr">info@gioia.hr</a>
            </p>

            <h2>10. Cookies</h2>
            <p>
              For more information about how this website uses cookies, see our{" "}
              <a href="/en/cookies">Cookie Policy</a>.
            </p>

            <h2>11. Policy Changes</h2>
            <p>
              We reserve the right to update this policy. All changes will be
              published on this page with an updated date.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default PrivacyPage;
