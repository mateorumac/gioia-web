import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/ClassesSection.css";

import individualTrainingImage from "../assets/images/DSC_8240.webp";
import groupTrainingImage from "../assets/images/IMG_1588.webp";
import bookingSidebar1 from "../assets/images/DSC_1394.webp";
import bookingSidebar2 from "../assets/images/DSC_8159.webp";
import bookingSidebar3 from "../assets/images/IMG_1704.webp";

function ClassesSection() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState(null);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const showToast = (status) => {
    setFormStatus(status);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setFormStatus(null), 3500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast({
      type: "info",
      message: t(
        "booking.infoMessage",
        "Za sada kontaktirajte nas direktno na info@gioia.hr ili 095 389 6809"
      ),
    });
  };

  return (
    <section className="classes-section" id="classes">
      <div className="classes-for-who-section">
        <div className="for-who-grain" />
        <div className="for-who-container">
          <div className="for-who-header">
            <p className="for-who-eyebrow">Kome je namijenjen</p>
            <h3 className="for-who-title">
              {t("classes.forWho", "Reformer pilates prilagođava se vama")}
            </h3>
          </div>

          <div className="for-who-columns">
            <div className="for-who-column">
              <h4 className="for-who-column__title">Početnice</h4>
              <p className="for-who-column__text">
                Siguran i kontroliran ulazak u svijet vježbanja uz stručno vodstvo
              </p>
            </div>
            <div className="for-who-column">
              <h4 className="for-who-column__title">Sjedilački posao</h4>
              <p className="for-who-column__text">
                Rješenje za napetost u leđima, vratu i ramenima
              </p>
            </div>
            <div className="for-who-column">
              <h4 className="for-who-column__title">Iskusne vježbačice</h4>
              <p className="for-who-column__text">
                Produbljivanje kontrole, snage i svijesti o tijelu
              </p>
            </div>
            <div className="for-who-column">
              <h4 className="for-who-column__title">Tražiš balans</h4>
              <p className="for-who-column__text">
                Miran, ali intenzivan trening koji povezuje tijelo i um
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="training-types-section" id="treninzi">
        <div className="training-types-container">
          <div className="training-intro">
            <p className="training-intro__eyebrow">Trening u Gioia studiju</p>
            <h3 className="training-intro__title">
              {t("classes.trainingTitle", "Tri koncepta. Jedan cilj. Snažno i svjesno tijelo.")}
            </h3>
            <p className="training-intro__text">
              Svi naši treninzi traju 55 minuta, u kojima imamo dio posvećen
              zagrijavanju i istezanju tijela i glavni dio treninga s vježbama. U
              našim vježbama često koristimo i razne rekvizite poput bučica, traka
              za gluteus i ručnih utega. Tijekom sata fokus je na cijelom tijelu,
              iako reformer sam po sebi izuzetno jača mišiće trupa. Za vježbanje je
              potrebno imati protuklizne čarape, ručnik i vodu i spremni ste za
              trening.
            </p>
          </div>
          <div className="training-intro__separator" />
        </div>

        {/* Block 1 — Strength Reformer: image left, text right */}
        <article className="training-block">
          <div className="training-block__image">
            <img
              src={individualTrainingImage}
              alt="Strength Reformer trening"
              loading="lazy"
            />
          </div>
          <div className="training-block__content">
            <span className="training-block__num">01</span>
            <h4 className="training-block__name">Strength Reformer</h4>
            <p className="training-block__intensity">srednji do jači intenzitet</p>
            <p className="training-block__desc">
              Ovo je sat koji je, rekli bi, naš signature. U početku smo imale
              samo ovu vrstu treninga, ali smo s vremenom shvatile da je potrebna
              i prilagodba klijentima. U satu kombiniramo vježbe snage i
              tradicionalne, bazične, reformer vježbe. Sat je dosta intenzivan,
              međutim svi klijenti ga savladaju bez ikakvih problema. S reformerom
              kombiniramo i dodatne rekvizite kao što su slobodni utezi, utezi za
              zglobove, pilates lopta i obruč, trake za gluteus i štap. Cilj je
              jačanje mišića s fokusom na trup, kako bi se poboljšala stabilnost
              centra tijela. Rezultat je jače tijelo, bolje i pravilnije držanje i
              lakši i pravilniji pokreti.
            </p>
          </div>
        </article>

        {/* Block 2 — Stretch Reformer: text left, image right */}
        <article className="training-block training-block--reverse">
          <div className="training-block__image">
            <img
              src={groupTrainingImage}
              alt="Stretch Reformer trening"
              loading="lazy"
            />
          </div>
          <div className="training-block__content">
            <span className="training-block__num">02</span>
            <h4 className="training-block__name">Stretch Reformer</h4>
            <p className="training-block__intensity">umjeren intenzitet</p>
            <p className="training-block__desc">
              Ovo je nježan stretch reformer sat koji je prikladan za početnike,
              osobe koje se prvi put susreću s reformerom, kao i za one koje nisu
              dugo vježbale ili imaju nekih blagih odstupanja u području
              kralježnice. To je opušteniji sat s naglaskom na istezanja. Fokus je
              na tradicionalni reformer pilates po učenjima Josepha Pilatesa. Sat
              se fokusira na dubinsko jačanje mišića, potporu i osnažvanje
              kralježnice te poboljšanje ukupnog poravnanja tijela na smiren i
              svjestan način.
            </p>
          </div>
        </article>

        {/* Block 3 — Cardio Reformer: image left, text right */}
        <article className="training-block">
          <div className="training-block__image">
            <img
              src={bookingSidebar1}
              alt="Cardio Reformer trening"
              loading="lazy"
            />
          </div>
          <div className="training-block__content">
            <span className="training-block__num">03</span>
            <h4 className="training-block__name">Cardio Reformer</h4>
            <p className="training-block__intensity">jači intenzitet</p>
            <p className="training-block__desc">
              Dinamičan i brz reformer sat namijenjen iskusnijim polaznicima. Uz
              jumping board (daska za skakanje) koji izgleda kao mali trampolin na
              reformeru, imate mogućnost isprobati trening visokog intenziteta s
              fokusom na donji dio tijela na zabavan i dinamičan način. Ovu vrstu
              treninga preporučujemo ipak malo iskusnijim klijentima koji već neko
              vrijeme vježbaju na reformeru ili su u već dobroj kondicijskoj formi.
            </p>
          </div>
        </article>
      </div>

      <div className="classes-container">

        <div className="pricing-editorial">
          <p className="pricing-eyebrow">Cjenik</p>
          <h3 className="pricing-title">Investicija u sebe</h3>
          <p className="pricing-note">
            Ovisno o vrsti treninga i dinamici dolazaka, nudimo različite pakete
            i članarine. Rado ćemo pomoći pri odabiru opcije koja ti najviše
            odgovara.
          </p>

          <div className="pricing-table">
            <div className="pricing-column">
              <h4 className="pricing-column__title">Individualni trening</h4>
              <p className="pricing-column__sub">Personalizirani pristup, potpuni fokus na tebe</p>
              <div className="pricing-items">
                <div className="pricing-item">
                  <span className="pricing-label">Pojedinačni termin</span>
                  <span className="pricing-value">xx<span className="pricing-currency"> €</span></span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">Paket 5 termina</span>
                  <span className="pricing-value">xx<span className="pricing-currency"> €</span></span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">Paket 10 termina</span>
                  <span className="pricing-value">xx<span className="pricing-currency"> €</span></span>
                </div>
              </div>
            </div>

            <div className="pricing-column">
              <h4 className="pricing-column__title">Mala grupa</h4>
              <p className="pricing-column__sub">Do 6 polaznica, energija grupe uz osobni pristup</p>
              <div className="pricing-items">
                <div className="pricing-item">
                  <span className="pricing-label">Pojedinačni termin</span>
                  <span className="pricing-value">xx<span className="pricing-currency"> €</span></span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">Paket 8 termina</span>
                  <span className="pricing-value">xx<span className="pricing-currency"> €</span></span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">Mjesečna članarina (2x tjedno)</span>
                  <span className="pricing-value">xx<span className="pricing-currency"> €</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-editorial" id="booking">
          <div className="booking-form-wrapper">
            <h3 className="section-subtitle l">Želiš rezervirati svoje mjesto?</h3>
            <p className="booking-text">
              Ispuni kratki obrazac, a mi ćemo ti se javiti s prijedlogom termina
              i potvrdom rezervacije. Ovo je neobvezujuća prijava – služi da
              pronađemo termin koji ti najbolje odgovara.
            </p>

            <form className="booking-form-editorial" onSubmit={handleSubmit}>
              <div className="booking-field-editorial">
                <label htmlFor="name">Ime i prezime</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tvoje ime i prezime"
                />
              </div>

              <div className="booking-field-editorial">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tvoj@email.com"
                />
              </div>

              <div className="booking-field-editorial">
                <label htmlFor="phone">Broj mobitela</label>
                <input type="tel" id="phone" name="phone" placeholder="+385..." />
              </div>

              <div className="booking-field-editorial">
                <label htmlFor="type">Vrsta treninga</label>
                <select id="type" name="type" defaultValue="">
                  <option value="">Odaberi...</option>
                  <option value="individual">Individualni trening</option>
                  <option value="group">Mala grupa</option>
                </select>
              </div>

              <div className="booking-field-editorial">
                <label htmlFor="time">Vrijeme koje ti više odgovara</label>
                <select id="time" name="time" defaultValue="">
                  <option value="">Odaberi...</option>
                  <option value="morning">Prijepodne</option>
                  <option value="afternoon">Poslijepodne</option>
                  <option value="flexible">Fleksibilno / dogovor</option>
                </select>
              </div>

              <div className="booking-field-editorial">
                <label htmlFor="experience">Iskustvo s pilatesom</label>
                <select id="experience" name="experience" defaultValue="">
                  <option value="">Odaberi...</option>
                  <option value="beginner">Početnica sam</option>
                  <option value="some">Imam malo iskustva</option>
                  <option value="advanced">Vježbam redovito</option>
                </select>
              </div>

              <div className="booking-field-editorial">
                <label htmlFor="message">Dodatne napomene</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Npr. ciljevi, eventualne ozljede, željeni dani u tjednu..."
                />
              </div>

              <button type="submit" className="booking-submit-editorial">
                Pošalji upit za termin
              </button>
            </form>
          </div>

          <div className="booking-images-sidebar">
            <img
              src={bookingSidebar1}
              alt="Pilates rekviziti"
              className="booking-sidebar-image"
              loading="lazy"
            />
            <img
              src={bookingSidebar2}
              alt="Detalj iz studija"
              className="booking-sidebar-image"
              loading="lazy"
            />
            <img
              src={bookingSidebar3}
              alt="Trening u akciji"
              className="booking-sidebar-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {formStatus && (
        <div className={`booking-toast booking-toast-${formStatus.type}`}>
          {formStatus.message}
        </div>
      )}
    </section>
  );
}

export default ClassesSection;
