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
        <div className="classes-container">
          <h3 className="for-who-title">Za koga je reformer pilates?</h3>
          <div className="for-who-cards">
            <div className="for-who-card">
              <div className="for-who-icon">01</div>
              <h4>Početnice</h4>
              <p>Siguran i kontroliran ulazak u svijet vježbanja uz stručno vodstvo</p>
            </div>
            <div className="for-who-card">
              <div className="for-who-icon">02</div>
              <h4>Sjedilački posao</h4>
              <p>Rješenje za napetost u leđima, vratu i ramenima</p>
            </div>
            <div className="for-who-card">
              <div className="for-who-icon">03</div>
              <h4>Iskusne vježbačice</h4>
              <p>Produbljivanje kontrole, snage i svijesti o tijelu</p>
            </div>
            <div className="for-who-card">
              <div className="for-who-icon">04</div>
              <h4>Tražiš balans</h4>
              <p>Miran, ali intenzivan trening koji povezuje tijelo i um</p>
            </div>
          </div>
        </div>
      </div>

      <div className="classes-container">
        <div className="class-types-editorial">
          <h3 className="section-subtitle">Vrste treninga</h3>

          <article className="class-card-editorial">
            <div className="class-card-image-wrapper">
              <img
                src={individualTrainingImage}
                alt="Strength Reformer trening"
                className="class-card-image"
                loading="lazy"
              />
            </div>
            <div className="class-card-content">
              <div className="class-card-header-editorial">
                <span className="class-icon-editorial">①</span>
                <h4>Strength Reformer</h4>
              </div>
              <p className="class-card-intensity">srednji do jači intenzitet</p>
              <p className="class-card-desc">
                Ovo je sat koji je, rekli bi, naš signature. U početku smo imale samo ovu vrstu treninga, ali smo s vremenom shvatile da je potrebna i prilagodba klijentima. U satu kombiniramo vježbe snage i tradicionalne, bazične, reformer vježbe. Sat je dosta intenzivan, međutim svi klijenti ga savladaju bez ikakvih problema. S reformerom kombiniramo i dodatne rekvizite kao što su slobodni utezi, utezi za zglobove, pilates lopta i obruč, trake za gluteus i štap. Cilj je jačanje mišića s fokusom na trup, kako bi se poboljšala stabilnost centra tijela. Rezultat je jače tijelo, bolje i pravilnije držanje i lakši i pravilniji pokreti.
              </p>
            </div>
          </article>

          <article className="class-card-editorial reverse">
            <div className="class-card-content">
              <div className="class-card-header-editorial">
                <span className="class-icon-editorial">②</span>
                <h4>Stretch Reformer</h4>
              </div>
              <p className="class-card-intensity">umjeren intenzitet</p>
              <p className="class-card-desc">
                Ovo je nježan stretch reformer sat koji je prikladan za početnike, osobe koje se prvi put susreću s reformerom, kao i za one koje nisu dugo vježbale ili imaju nekih blagih odstupanja u području kralježnice. To je opušteniji sat s naglaskom na istezanja. Fokus je na tradicionalni reformer pilates po učenjima Josepha Pilatesa. Sat se fokusira na dubinsko jačanje mišića, potporu i osnažvanje kralježnice te poboljšanje ukupnog poravnanja tijela na smiren i svjestan način.
              </p>
            </div>
            <div className="class-card-image-wrapper">
              <img
                src={groupTrainingImage}
                alt="Stretch Reformer trening"
                className="class-card-image"
                loading="lazy"
              />
            </div>
          </article>

          <article className="class-card-editorial">
            <div className="class-card-image-wrapper">
              <img
                src={bookingSidebar1}
                alt="Cardio Reformer trening"
                className="class-card-image"
                loading="lazy"
              />
            </div>
            <div className="class-card-content">
              <div className="class-card-header-editorial">
                <span className="class-icon-editorial">③</span>
                <h4>Cardio reformer</h4>
              </div>
              <p className="class-card-intensity">jači intenzitet</p>
              <p className="class-card-desc">
                Dinamičan i brz reformer sat namijenjen iskusnijim polaznicima. Uz jumping board (daska za skakanje) koji izgleda kao mali trampolin na reformeru, imate mogućnost isprobati trening visokog intenziteta s fokusom na donji dio tijela na zabavan i dinamičan način. Ovu vrstu treninga preporučujemo ipak malo iskusnijim klijentima koji već neko vrijeme vježbaju na reformeru ili su u već dobroj kondicijskoj formi.
              </p>
            </div>
          </article>

          <div className="class-types-footer">
            <p>
              Svi naši treninzi traju 55 minuta, u kojima imamo dio posvećen zagrijavanju i istezanju tijela i glavni dio treninga s vježbama. U našim vježbama često koristimo i razne rekvizite poput bučica, traka za gluteus i ručnih utega. Tijekom sata fokus je na cijelom tijelu, iako reformer sam po sebi izuzetno jača mišiće trupa. Za vježbanje je potrebno imati protuklizne čarape, ručnik i vodu i spremni ste za trening.
            </p>
          </div>
        </div>

        <div className="pricing-editorial">
          <h3 className="section-subtitle">Cjenik</h3>
          <p className="pricing-note">
            Ovisno o vrsti treninga i dinamici dolazaka, nudimo različite pakete
            i članarine. Rado ćemo pomoći pri odabiru opcije koja ti najviše
            odgovara.
          </p>

          <div className="pricing-table">
            <div className="pricing-column">
              <h4>Individualni trening</h4>
              <div className="pricing-item">
                <span className="pricing-label">Pojedinačni termin</span>
                <span className="pricing-value">xx €</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-label">Paket 5 termina</span>
                <span className="pricing-value">xx €</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-label">Paket 10 termina</span>
                <span className="pricing-value">xx €</span>
              </div>
            </div>

            <div className="pricing-column">
              <h4>Mala grupa</h4>
              <div className="pricing-item">
                <span className="pricing-label">Pojedinačni termin</span>
                <span className="pricing-value">xx €</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-label">Paket 8 termina</span>
                <span className="pricing-value">xx €</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-label">
                  Mjesečna članarina (2x tjedno)
                </span>
                <span className="pricing-value">xx €</span>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-editorial">
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
