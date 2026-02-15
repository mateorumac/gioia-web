import { useTranslation } from "react-i18next";
import "../styles/LegalPages.css";

function TermsPage() {
  const { t, i18n } = useTranslation();
  const isHR = i18n.language === "hr";

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>{isHR ? "Uvjeti korištenja" : "Terms of Service"}</h1>
        <p className="legal-update-date">
          {isHR
            ? "Posljednje ažuriranje: Siječanj 2026"
            : "Last updated: January 2026"}
        </p>

        {isHR ? (
          <>
            <h2>1. Prihvaćanje uvjeta</h2>
            <p>
              Pristupom i korištenjem usluga Gioia Reformer Pilates Studija,
              prihvaćate ove uvjete korištenja u potpunosti. Ako se ne slažete
              s bilo kojim dijelom uvjeta, molimo nemojte koristiti naše usluge.
            </p>

            <h2>2. Pružanje usluga</h2>
            <p>
              Gioia Studio nudi usluge reformer pilatesa, uključujući grupne i
              privatne treninge. Zadržavamo pravo izmjene rasporeda, otkazivanja
              ili prekida usluga u bilo kojem trenutku.
            </p>

            <h2>3. Rezervacije i otkazivanja</h2>
            <h3>3.1 Rezervacije</h3>
            <ul>
              <li>
                Rezervacije se vrše putem našeg sustava ili kontaktom s
                instruktorom
              </li>
              <li>
                Rezervacija je potvrđena tek nakon zaprimanja potvrde putem
                emaila ili poruke
              </li>
              <li>Klijenti su obvezni doći na vrijeme na zakazani termin</li>
            </ul>

            <h3>3.2 Otkazivanja</h3>
            <ul>
              <li>
                Otkazivanje treninga mora biti učinjeno najmanje 12 sati prije
                zakazanog termina
              </li>
              <li>
                Otkazivanje manje od 12 sati prije termina ili nepojavljivanje
                rezultira naplatom cijelog termina
              </li>
              <li>
                Kasna otkazivanja iz zdravstvenih ili nužnih razloga razmatraju
                se individualno
              </li>
            </ul>

            <h2>4. Plaćanje</h2>
            <ul>
              <li>
                Plaćanje se vrši unaprijed putem bankovnog transfera ili
                gotovine
              </li>
              <li>Cijene su navedene u eurima (EUR)</li>
              <li>Studio zadržava pravo promjene cijena uz prethodnu obavijest</li>
              <li>Paketi treninga vrijede 3 mjeseca od datuma kupnje</li>
            </ul>

            <h2>5. Zdravlje i sigurnost</h2>
            <ul>
              <li>
                Klijenti su obvezni obavijestiti instruktora o svim
                zdravstvenim stanjima, ozljedama ili ograničenjima
              </li>
              <li>
                Trudnice moraju dobiti odobrenje liječnika prije sudjelovanja u
                treninzima
              </li>
              <li>
                Studio ne preuzima odgovornost za ozljede nastale nepoštivanjem
                uputa instruktora
              </li>
              <li>
                U slučaju zdravstvenih problema tijekom treninga, odmah
                obavijestite instruktora
              </li>
            </ul>

            <h2>6. Ponašanje u studiju</h2>
            <ul>
              <li>Poštujte ostale klijente i instruktore</li>
              <li>
                Mobilni uređaji moraju biti na tihom načinu rada ili isključeni
              </li>
              <li>Nosite prikladnu odjeću i obuću za vježbanje</li>
              <li>
                Održavajte higijenu - koristite ručnik i donesite vlastitu bocu
                vode
              </li>
              <li>
                Fotografiranje i snimanje dozvoljeno je samo uz pristanak
                instruktora
              </li>
            </ul>

            <h2>7. Ograničenje odgovornosti</h2>
            <p>
              Gioia Studio ne preuzima odgovornost za:
            </p>
            <ul>
              <li>Gubitak ili oštećenje osobnih predmeta</li>
              <li>
                Ozljede nastale nepoštivanjem sigurnosnih uputa ili prekoračenjem
                vlastitih fizičkih mogućnosti
              </li>
              <li>
                Prekide u pružanju usluga zbog više sile, tehničkih problema ili
                nepredviđenih okolnosti
              </li>
            </ul>

            <h2>8. Intelektualno vlasništvo</h2>
            <p>
              Svi sadržaji na našoj web stranici (tekst, slike, logotipi,
              video) zaštićeni su autorskim pravima i vlasništvo su Gioia
              Studija. Zabranjeno je kopiranje bez pisane dozvole.
            </p>

            <h2>9. Privatnost</h2>
            <p>
              Korištenje vaših osobnih podataka regulirano je našom{" "}
              <a href="/hr/privacy-policy">Politikom privatnosti</a>.
            </p>

            <h2>10. Izmjene uvjeta</h2>
            <p>
              Zadržavamo pravo izmjene ovih uvjeta u bilo kojem trenutku.
              Izmjene stupaju na snagu objavom na ovoj stranici.
            </p>

            <h2>11. Kontakt</h2>
            <p>
              Za pitanja o uvjetima korištenja, kontaktirajte nas na:
              <br />
              Email: <a href="mailto:info@gioia.hr">info@gioia.hr</a>
              <br />
              Telefon: <a href="tel:+385953896809">095 389 6809</a>
            </p>
          </>
        ) : (
          <>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services of Gioia Reformer Pilates
              Studio, you accept these terms of service in full. If you
              disagree with any part of these terms, please do not use our
              services.
            </p>

            <h2>2. Service Provision</h2>
            <p>
              Gioia Studio offers reformer pilates services, including group and
              private training sessions. We reserve the right to modify
              schedules, cancel, or discontinue services at any time.
            </p>

            <h2>3. Bookings and Cancellations</h2>
            <h3>3.1 Bookings</h3>
            <ul>
              <li>
                Bookings are made through our system or by contacting an
                instructor
              </li>
              <li>
                A booking is confirmed only after receiving confirmation via
                email or message
              </li>
              <li>Clients must arrive on time for scheduled sessions</li>
            </ul>

            <h3>3.2 Cancellations</h3>
            <ul>
              <li>
                Session cancellations must be made at least 12 hours before the
                scheduled time
              </li>
              <li>
                Cancellations less than 12 hours before or no-shows result in
                full session charge
              </li>
              <li>
                Late cancellations for health or emergency reasons are
                considered individually
              </li>
            </ul>

            <h2>4. Payment</h2>
            <ul>
              <li>Payment is made in advance via bank transfer or cash</li>
              <li>Prices are listed in euros (EUR)</li>
              <li>Studio reserves the right to change prices with prior notice</li>
              <li>Training packages are valid for 3 months from purchase date</li>
            </ul>

            <h2>5. Health and Safety</h2>
            <ul>
              <li>
                Clients must inform the instructor of all health conditions,
                injuries, or limitations
              </li>
              <li>
                Pregnant women must obtain doctor's approval before
                participating in training
              </li>
              <li>
                Studio is not responsible for injuries resulting from not
                following instructor's guidance
              </li>
              <li>
                In case of health problems during training, immediately notify
                the instructor
              </li>
            </ul>

            <h2>6. Studio Conduct</h2>
            <ul>
              <li>Respect other clients and instructors</li>
              <li>Mobile devices must be on silent mode or turned off</li>
              <li>Wear appropriate workout clothing and footwear</li>
              <li>
                Maintain hygiene - use a towel and bring your own water bottle
              </li>
              <li>
                Photography and recording allowed only with instructor consent
              </li>
            </ul>

            <h2>7. Limitation of Liability</h2>
            <p>
              Gioia Studio is not responsible for:
            </p>
            <ul>
              <li>Loss or damage to personal belongings</li>
              <li>
                Injuries resulting from not following safety instructions or
                exceeding physical capabilities
              </li>
              <li>
                Service interruptions due to force majeure, technical issues, or
                unforeseen circumstances
              </li>
            </ul>

            <h2>8. Intellectual Property</h2>
            <p>
              All content on our website (text, images, logos, videos) is
              protected by copyright and owned by Gioia Studio. Copying without
              written permission is prohibited.
            </p>

            <h2>9. Privacy</h2>
            <p>
              Use of your personal data is governed by our{" "}
              <a href="/en/privacy-policy">Privacy Policy</a>.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              take effect upon publication on this page.
            </p>

            <h2>11. Contact</h2>
            <p>
              For questions about terms of service, contact us at:
              <br />
              Email: <a href="mailto:info@gioia.hr">info@gioia.hr</a>
              <br />
              Phone: <a href="tel:+385953896809">095 389 6809</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default TermsPage;
