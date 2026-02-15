import { useTranslation } from "react-i18next";
import "../styles/LegalPages.css";

function CookiesPage() {
  const { t, i18n } = useTranslation();
  const isHR = i18n.language === "hr";

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>{isHR ? "Politika kolačića" : "Cookie Policy"}</h1>
        <p className="legal-update-date">
          {isHR
            ? "Posljednje ažuriranje: Siječanj 2026"
            : "Last updated: January 2026"}
        </p>

        {isHR ? (
          <>
            <h2>1. Što su kolačići?</h2>
            <p>
              Kolačići su male tekstualne datoteke koje web stranica pohranjuje
              na vaš uređaj (računalo, tablet, mobitel) kada je posjetite.
              Kolačići omogućuju web stranici da "zapamti" vaše radnje i
              postavke kroz određeno razdoblje.
            </p>

            <h2>2. Kako koristimo kolačiće</h2>
            <p>
              Naša web stranica koristi kolačiće kako bi poboljšala vaše
              korisničko iskustvo. Kolačići nam pomažu da:
            </p>
            <ul>
              <li>Zapamtimo vaše jezične postavke (Hrvatski/English)</li>
              <li>Razumijemo kako koristite našu web stranicu</li>
              <li>Poboljšamo funkcionalnost i performanse stranice</li>
              <li>Pružimo personalizirano iskustvo</li>
            </ul>

            <h2>3. Vrste kolačića koje koristimo</h2>

            <h3>3.1 Nužni kolačići</h3>
            <p>
              Ovi kolačići su neophodni za rad web stranice i ne mogu se
              isključiti. Obično se postavljaju samo kao odgovor na vaše radnje
              kao što su:
            </p>
            <ul>
              <li>Postavljanje jezičnih preferencija</li>
              <li>Navigacija kroz stranicu</li>
              <li>Pristup sigurnim područjima</li>
            </ul>

            <h3>3.2 Funkcionalni kolačići</h3>
            <p>
              Ovi kolačići omogućuju web stranici da pruži poboljšanu
              funkcionalnost i personalizaciju. Mogu se postaviti od strane nas
              ili trećih strana čije smo usluge dodali na našu stranicu.
            </p>

            <h3>3.3 Analitički kolačići</h3>
            <p>
              Ovi kolačići nam omogućuju da prebrojimo posjete i izvore
              prometa kako bismo mogli mjeriti i poboljšati performanse naše
              stranice. Pomažu nam da saznamo koje su stranice najpopularnije,
              a koje najmanje.
            </p>

            <h2>4. Kolačići trećih strana</h2>
            <p>
              Naša web stranica može koristiti kolačiće trećih strana za
              analitiku i društvene medije:
            </p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> Za praćenje i analizu
                korištenja web stranice
              </li>
              <li>
                <strong>Instagram widget:</strong> Za prikaz naših objava s
                Instagrama
              </li>
            </ul>

            <h2>5. Kako upravljati kolačićima</h2>
            <p>
              Možete kontrolirati i/ili brisati kolačiće kako želite. Detalje
              potražite na{" "}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                aboutcookies.org
              </a>
              .
            </p>

            <h3>5.1 Postavke preglednika</h3>
            <p>
              Većina preglednika automatski prihvaća kolačiće, ali možete
              promijeniti postavke svog preglednika kako biste odbili kolačiće
              ili bili obaviješteni kada se kolačić šalje. Upute za
              najpopularnije preglednike:
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

            <h3>5.2 Posljedice blokiranja kolačića</h3>
            <p>
              Blokiranjem kolačića možete ograničiti funkcionalnost naše web
              stranice. Neke značajke možda neće ispravno raditi ili uopće neće
              biti dostupne.
            </p>

            <h2>6. Promjene politike kolačića</h2>
            <p>
              Možemo s vremena na vrijeme ažurirati ovu politiku kolačića.
              Preporučujemo da povremeno pregledate ovu stranicu kako biste
              bili informirani o tome kako koristimo kolačiće.
            </p>

            <h2>7. Dodatne informacije</h2>
            <p>
              Za više informacija o tome kako štitimo vašu privatnost,
              pogledajte našu{" "}
              <a href="/hr/privacy-policy">Politiku privatnosti</a>.
            </p>

            <h2>8. Kontakt</h2>
            <p>
              Ako imate pitanja o našoj politici kolačića, kontaktirajte nas:
              <br />
              Email: <a href="mailto:info@gioia.hr">info@gioia.hr</a>
              <br />
              Telefon: <a href="tel:+385953896809">095 389 6809</a>
            </p>
          </>
        ) : (
          <>
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that a website stores on your device
              (computer, tablet, phone) when you visit it. Cookies enable the
              website to "remember" your actions and preferences over a period
              of time.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              Our website uses cookies to improve your user experience. Cookies
              help us to:
            </p>
            <ul>
              <li>Remember your language settings (Croatian/English)</li>
              <li>Understand how you use our website</li>
              <li>Improve site functionality and performance</li>
              <li>Provide a personalized experience</li>
            </ul>

            <h2>3. Types of Cookies We Use</h2>

            <h3>3.1 Necessary Cookies</h3>
            <p>
              These cookies are essential for the website to function and cannot
              be disabled. They are usually set only in response to your actions
              such as:
            </p>
            <ul>
              <li>Setting language preferences</li>
              <li>Navigating through the site</li>
              <li>Accessing secure areas</li>
            </ul>

            <h3>3.2 Functional Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality
              and personalization. They may be set by us or by third-party
              providers whose services we have added to our site.
            </p>

            <h3>3.3 Analytics Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we
              can measure and improve site performance. They help us know which
              pages are most and least popular.
            </p>

            <h2>4. Third-Party Cookies</h2>
            <p>
              Our website may use third-party cookies for analytics and social
              media:
            </p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> For tracking and analyzing
                website usage
              </li>
              <li>
                <strong>Instagram widget:</strong> For displaying our Instagram
                posts
              </li>
            </ul>

            <h2>5. How to Manage Cookies</h2>
            <p>
              You can control and/or delete cookies as you wish. For details,
              visit{" "}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                aboutcookies.org
              </a>
              .
            </p>

            <h3>5.1 Browser Settings</h3>
            <p>
              Most browsers automatically accept cookies, but you can change
              your browser settings to decline cookies or be notified when a
              cookie is being sent. Instructions for popular browsers:
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

            <h3>5.2 Consequences of Blocking Cookies</h3>
            <p>
              By blocking cookies, you may limit the functionality of our
              website. Some features may not work properly or may not be
              available at all.
            </p>

            <h2>6. Changes to Cookie Policy</h2>
            <p>
              We may update this cookie policy from time to time. We recommend
              that you periodically review this page to stay informed about how
              we use cookies.
            </p>

            <h2>7. Additional Information</h2>
            <p>
              For more information about how we protect your privacy, see our{" "}
              <a href="/en/privacy-policy">Privacy Policy</a>.
            </p>

            <h2>8. Contact</h2>
            <p>
              If you have questions about our cookie policy, contact us:
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

export default CookiesPage;
