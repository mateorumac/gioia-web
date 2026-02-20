import { useTranslation } from "react-i18next";
import "../styles/LegalPages.css";

function GDPRPage() {
  const { t, i18n } = useTranslation();
  const isHR = i18n.language === "hr";

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>{isHR ? "GDPR informacije" : "GDPR Information"}</h1>
        <p className="legal-update-date">
          {isHR
            ? "Posljednje ažuriranje: Siječanj 2026"
            : "Last updated: January 2026"}
        </p>

        {isHR ? (
          <>
            <h2>1. Uvod u GDPR</h2>
            <p>
              Opća uredba o zaštiti podataka (GDPR - General Data Protection
              Regulation) je zakon Europske unije koji štiti privatnost i
              osobne podatke građana EU. Gioia Reformer Pilates Studio u
              potpunosti poštuje i primjenjuje odredbe GDPR-a.
            </p>

            <h2>2. Voditelj obrade podataka</h2>
            <p>
              <strong>Naziv:</strong> Gioia Reformer Pilates Studio
              <br />
              <strong>Adresa:</strong> Verudela 8, 52100 Pula, Hrvatska
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:gioiareformer@gmail.com">gioiareformer@gmail.com</a>
              <br />
              <strong>Telefon:</strong>{" "}
              <a href="tel:+385953896809">095 389 6809</a>
            </p>

            <h2>3. Vaša prava prema GDPR-u</h2>
            <p>
              Prema GDPR-u, kao ispitanik imate sljedeća prava u vezi svojih
              osobnih podataka:
            </p>

            <h3>3.1 Pravo na pristup</h3>
            <p>
              Imate pravo zatražiti potvrdu obrađujemo li vaše osobne podatke i
              dobiti pristup tim podacima. Također možete zatražiti kopiju
              svojih osobnih podataka koje obrađujemo.
            </p>

            <h3>3.2 Pravo na ispravak</h3>
            <p>
              Imate pravo zatražiti ispravak netočnih osobnih podataka te
              dopunu nepotpunih podataka.
            </p>

            <h3>3.3 Pravo na brisanje ("pravo na zaborav")</h3>
            <p>
              Možete zatražiti brisanje svojih osobnih podataka u sljedećim
              slučajevima:
            </p>
            <ul>
              <li>Podaci više nisu potrebni za svrhu za koju su prikupljeni</li>
              <li>Povučete pristanak na obradu</li>
              <li>Podaci su nezakonito obrađeni</li>
              <li>Podaci moraju biti izbrisani radi ispunjavanja zakonske obveze</li>
            </ul>

            <h3>3.4 Pravo na ograničenje obrade</h3>
            <p>
              U određenim okolnostima možete zatražiti privremeno ograničenje
              obrade svojih osobnih podataka.
            </p>

            <h3>3.5 Pravo na prenosivost podataka</h3>
            <p>
              Imate pravo primiti svoje osobne podatke u strukturiranom,
              uobičajeno korištenom i strojno čitljivom formatu te pravo
              prenijeti te podatke drugom voditelju obrade.
            </p>

            <h3>3.6 Pravo na prigovor</h3>
            <p>
              Možete prigovoriti obradi svojih osobnih podataka u određenim
              okolnostima, osobito kada se obrada temelji na legitimnim
              interesima.
            </p>

            <h3>3.7 Pravo na povlačenje pristanka</h3>
            <p>
              Ako je obrada podataka temeljena na vašem pristanku, imate pravo
              u bilo kojem trenutku povući svoj pristanak. Povlačenje pristanka
              ne utječe na zakonitost obrade prije povlačenja.
            </p>

            <h2>4. Kako ostvariti svoja prava</h2>
            <p>
              Za ostvarivanje bilo kojeg od gore navedenih prava, možete nas
              kontaktirati na:
            </p>
            <ul>
              <li>
                Email: <a href="mailto:gioiareformer@gmail.com">gioiareformer@gmail.com</a>
              </li>
              <li>
                Telefon: <a href="tel:+385953896809">095 389 6809</a>
              </li>
              <li>Pismeno: Verudela 8, 52100 Pula, Hrvatska</li>
            </ul>
            <p>
              Odgovorit ćemo na vaš zahtjev u roku od 30 dana. Ako je zahtjev
              složen, rok može biti produžen do 60 dana, o čemu ćete biti
              obaviješteni.
            </p>

            <h2>5. Pravna osnova za obradu podataka</h2>
            <p>Vaše osobne podatke obrađujemo na temelju:</p>
            <ul>
              <li>
                <strong>Pristanak:</strong> Za slanje newslettera i marketinških
                komunikacija
              </li>
              <li>
                <strong>Izvršavanje ugovora:</strong> Za pružanje usluga
                pilatesa i upravljanje rezervacijama
              </li>
              <li>
                <strong>Legitimni interes:</strong> Za poboljšanje naših usluga
                i komunikaciju s klijentima
              </li>
              <li>
                <strong>Zakonska obveza:</strong> Za vođenje poslovne
                dokumentacije i ispunjavanje poreznih obveza
              </li>
            </ul>

            <h2>6. Razdoblje čuvanja podataka</h2>
            <p>
              Vaše osobne podatke čuvamo samo onoliko dugo koliko je potrebno
              za svrhu za koju su prikupljeni:
            </p>
            <ul>
              <li>Podaci o rezervacijama: 3 godine nakon posljednjeg treninga</li>
              <li>
                Podaci za newsletter: Do povlačenja pristanka ili 2 godine
                neaktivnosti
              </li>
              <li>
                Financijski dokumenti: U skladu sa zakonskim obvezama (do 11
                godina)
              </li>
            </ul>

            <h2>7. Sigurnosne mjere</h2>
            <p>
              Primjenjujemo odgovarajuće tehničke i organizacijske mjere za
              zaštitu vaših osobnih podataka, uključujući:
            </p>
            <ul>
              <li>Enkripciju podataka</li>
              <li>Kontrolu pristupa i autentifikaciju</li>
              <li>Redovite sigurnosne revizije</li>
              <li>Obuku osoblja o zaštiti podataka</li>
            </ul>

            <h2>8. Prijenos podataka izvan EU</h2>
            <p>
              Vaše osobne podatke obrađujemo isključivo unutar Europske unije.
              Ne prenosimo vaše podatke u treće zemlje izvan EU/EEA.
            </p>

            <h2>9. Pravo na pritužbu</h2>
            <p>
              Ako smatrate da obrada vaših osobnih podataka krši GDPR, imate
              pravo podnijeti pritužbu nadležnom nadzornom tijelu:
            </p>
            <p>
              <strong>Agencija za zaštitu osobnih podataka (AZOP)</strong>
              <br />
              Martićeva 14, 10000 Zagreb, Hrvatska
              <br />
              Telefon: +385 1 4609 000
              <br />
              Email: azop@azop.hr
              <br />
              Web:{" "}
              <a
                href="https://azop.hr"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.azop.hr
              </a>
            </p>

            <h2>10. Automatsko donošenje odluka i profiliranje</h2>
            <p>
              Ne koristimo automatsko donošenje odluka niti profiliranje koje
              bi imalo pravne ili slične značajne učinke na vas.
            </p>

            <h2>11. Ažuriranja ove politike</h2>
            <p>
              Možemo povremeno ažurirati ove GDPR informacije. Sve promjene bit
              će objavljene na ovoj stranici s datumom zadnjeg ažuriranja.
            </p>

            <h2>12. Dodatne informacije</h2>
            <p>
              Za detaljnije informacije o tome kako obrađujemo vaše osobne
              podatke, pogledajte našu{" "}
              <a href="/hr/privacy-policy">Politiku privatnosti</a>.
            </p>
          </>
        ) : (
          <>
            <h2>1. Introduction to GDPR</h2>
            <p>
              The General Data Protection Regulation (GDPR) is a European Union
              law that protects the privacy and personal data of EU citizens.
              Gioia Reformer Pilates Studio fully respects and applies the
              provisions of GDPR.
            </p>

            <h2>2. Data Controller</h2>
            <p>
              <strong>Name:</strong> Gioia Reformer Pilates Studio
              <br />
              <strong>Address:</strong> Verudela 8, 52100 Pula, Croatia
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:gioiareformer@gmail.com">gioiareformer@gmail.com</a>
              <br />
              <strong>Phone:</strong>{" "}
              <a href="tel:+385953896809">095 389 6809</a>
            </p>

            <h2>3. Your Rights Under GDPR</h2>
            <p>
              Under GDPR, as a data subject, you have the following rights
              regarding your personal data:
            </p>

            <h3>3.1 Right of Access</h3>
            <p>
              You have the right to request confirmation of whether we process
              your personal data and obtain access to that data. You can also
              request a copy of your personal data that we process.
            </p>

            <h3>3.2 Right to Rectification</h3>
            <p>
              You have the right to request correction of inaccurate personal
              data and completion of incomplete data.
            </p>

            <h3>3.3 Right to Erasure ("Right to be Forgotten")</h3>
            <p>
              You can request deletion of your personal data in the following
              cases:
            </p>
            <ul>
              <li>Data is no longer needed for the purpose it was collected</li>
              <li>You withdraw consent to processing</li>
              <li>Data has been unlawfully processed</li>
              <li>Data must be erased to comply with legal obligations</li>
            </ul>

            <h3>3.4 Right to Restriction of Processing</h3>
            <p>
              In certain circumstances, you can request temporary restriction of
              processing your personal data.
            </p>

            <h3>3.5 Right to Data Portability</h3>
            <p>
              You have the right to receive your personal data in a structured,
              commonly used, and machine-readable format and the right to
              transmit that data to another controller.
            </p>

            <h3>3.6 Right to Object</h3>
            <p>
              You can object to the processing of your personal data in certain
              circumstances, especially when processing is based on legitimate
              interests.
            </p>

            <h3>3.7 Right to Withdraw Consent</h3>
            <p>
              If data processing is based on your consent, you have the right to
              withdraw your consent at any time. Withdrawal does not affect the
              lawfulness of processing before withdrawal.
            </p>

            <h2>4. How to Exercise Your Rights</h2>
            <p>
              To exercise any of the above rights, you can contact us at:
            </p>
            <ul>
              <li>
                Email: <a href="mailto:gioiareformer@gmail.com">gioiareformer@gmail.com</a>
              </li>
              <li>
                Phone: <a href="tel:+385953896809">095 389 6809</a>
              </li>
              <li>In writing: Verudela 8, 52100 Pula, Croatia</li>
            </ul>
            <p>
              We will respond to your request within 30 days. If the request is
              complex, the deadline may be extended to 60 days, which you will
              be notified about.
            </p>

            <h2>5. Legal Basis for Data Processing</h2>
            <p>We process your personal data based on:</p>
            <ul>
              <li>
                <strong>Consent:</strong> For sending newsletters and marketing
                communications
              </li>
              <li>
                <strong>Contract performance:</strong> For providing pilates
                services and managing bookings
              </li>
              <li>
                <strong>Legitimate interest:</strong> For improving our services
                and communicating with clients
              </li>
              <li>
                <strong>Legal obligation:</strong> For maintaining business
                records and fulfilling tax obligations
              </li>
            </ul>

            <h2>6. Data Retention Period</h2>
            <p>
              We retain your personal data only as long as necessary for the
              purpose it was collected:
            </p>
            <ul>
              <li>Booking data: 3 years after last training session</li>
              <li>
                Newsletter data: Until consent withdrawal or 2 years of
                inactivity
              </li>
              <li>
                Financial documents: According to legal obligations (up to 11
                years)
              </li>
            </ul>

            <h2>7. Security Measures</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data, including:
            </p>
            <ul>
              <li>Data encryption</li>
              <li>Access control and authentication</li>
              <li>Regular security audits</li>
              <li>Staff training on data protection</li>
            </ul>

            <h2>8. Data Transfer Outside EU</h2>
            <p>
              We process your personal data exclusively within the European
              Union. We do not transfer your data to third countries outside
              EU/EEA.
            </p>

            <h2>9. Right to Complaint</h2>
            <p>
              If you believe that processing of your personal data violates
              GDPR, you have the right to lodge a complaint with the competent
              supervisory authority:
            </p>
            <p>
              <strong>
                Personal Data Protection Agency (Agencija za zaštitu osobnih
                podataka - AZOP)
              </strong>
              <br />
              Martićeva 14, 10000 Zagreb, Croatia
              <br />
              Phone: +385 1 4609 000
              <br />
              Email: azop@azop.hr
              <br />
              Web:{" "}
              <a
                href="https://azop.hr"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.azop.hr
              </a>
            </p>

            <h2>10. Automated Decision-Making and Profiling</h2>
            <p>
              We do not use automated decision-making or profiling that would
              have legal or similarly significant effects on you.
            </p>

            <h2>11. Updates to This Policy</h2>
            <p>
              We may periodically update this GDPR information. All changes will
              be published on this page with the date of last update.
            </p>

            <h2>12. Additional Information</h2>
            <p>
              For more detailed information on how we process your personal
              data, see our{" "}
              <a href="/en/privacy-policy">Privacy Policy</a>.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default GDPRPage;
