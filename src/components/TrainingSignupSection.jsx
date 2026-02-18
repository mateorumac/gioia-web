import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/TrainingSignupSection.css";
import { fadeUp, staggerContainer, viewport } from "../animations/motionPresets";

import bgImage from "../assets/images/DSC_8285.webp";

/* ─────────────────────────────────────────────
   Custom accessible dropdown — scoped styles
───────────────────────────────────────────── */
function TssSelect({ label, id, name, placeholder, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const [focusedIdx, setFocusedIdx] = useState(0);
  const wrapRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = () => {
    setOpen((prev) => {
      if (!prev) {
        const idx = options.findIndex((o) => o.value === value);
        setFocusedIdx(idx >= 0 ? idx : 0);
      }
      return !prev;
    });
  };

  const select = (val) => {
    onChange(val);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
      return;
    }
    switch (e.key) {
      case "Escape":
        setOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        setFocusedIdx((i) => Math.min(i + 1, options.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIdx((i) => Math.max(i - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIdx >= 0) select(options[focusedIdx].value);
        break;
      default:
        break;
    }
  };

  const selectedLabel = options.find((o) => o.value === value)?.label;

  return (
    <div className="tss-field" ref={wrapRef}>
      <span className="tss-label" id={`${id}-label`}>
        {label}
      </span>
      <div
        className={`tss-select${open ? " tss-select--open" : ""}`}
        id={id}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-labelledby={`${id}-label`}
        tabIndex={0}
        onClick={toggle}
        onKeyDown={handleKeyDown}
      >
        <span
          className={`tss-select__value${!value ? " tss-select__value--empty" : ""}`}
        >
          {selectedLabel ?? placeholder}
        </span>
        <svg
          className="tss-select__chevron"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 1l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {open && (
        <ul className="tss-select__menu" role="listbox">
          {options.map((opt, idx) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              className={[
                "tss-select__option",
                idx === focusedIdx ? "tss-select__option--focused" : "",
                opt.value === value ? "tss-select__option--selected" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => select(opt.value)}
              onMouseEnter={() => setFocusedIdx(idx)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}

      {/* Hidden input carries value on form submit */}
      <input type="hidden" name={name} value={value} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main section
───────────────────────────────────────────── */
function TrainingSignupSection() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState(null);
  const toastTimerRef = useRef(null);

  const [type, setType] = useState("");
  const [time, setTime] = useState("");
  const [experience, setExperience] = useState("");

  // Parallax refs
  const sectionRef = useRef(null);
  const bgImgRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!sectionRef.current || !bgImgRef.current) { ticking = false; return; }
        const rect = sectionRef.current.getBoundingClientRect();
        const vh = window.innerHeight;
        if (rect.bottom > -vh && rect.top < vh * 2) {
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
          const shift = progress * 80;
          bgImgRef.current.style.transform = `scale(1.06) translateY(${shift}px)`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
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
    <section className="tss-section" id="booking" ref={sectionRef}>

      {/* ── Background — parallax untouched ── */}
      <div className="tss-bg">
        <div
          ref={bgImgRef}
          className="tss-bg__img"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="tss-bg__overlay" />
        <div className="tss-bg__vignette" />
      </div>

      {/* ── Floating card — animate in ── */}
      <motion.div
        className="tss-card"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.p className="tss-eyebrow" variants={fadeUp}>
          Rezerviraj svoje mjesto
        </motion.p>
        <motion.h2 className="tss-title" variants={fadeUp}>
          Prijavi se na trening
        </motion.h2>
        <motion.p className="tss-subtitle" variants={fadeUp}>
          Ograničen broj mjesta. Javljamo se unutar 24 sata.
        </motion.p>
        <div className="tss-divider" />

        <form className="tss-form" onSubmit={handleSubmit}>

          {/* Full width: name */}
          <div className="tss-field">
            <label className="tss-label" htmlFor="tss-name">
              Ime i prezime
            </label>
            <input
              className="tss-input"
              type="text"
              id="tss-name"
              name="name"
              placeholder="Tvoje ime i prezime"
            />
          </div>

          {/* 2-col row: email + phone */}
          <div className="tss-row">
            <div className="tss-field">
              <label className="tss-label" htmlFor="tss-email">
                E-mail
              </label>
              <input
                className="tss-input"
                type="email"
                id="tss-email"
                name="email"
                placeholder="tvoj@email.com"
              />
            </div>
            <div className="tss-field">
              <label className="tss-label" htmlFor="tss-phone">
                Mobitel
              </label>
              <input
                className="tss-input"
                type="tel"
                id="tss-phone"
                name="phone"
                placeholder="+385..."
              />
            </div>
          </div>

          {/* 2-col row: training type + preferred time */}
          <div className="tss-row">
            <TssSelect
              label="Vrsta treninga"
              id="tss-type"
              name="type"
              placeholder="Odaberi..."
              value={type}
              onChange={setType}
              options={[
                { value: "individual", label: "Individualni trening" },
                { value: "group", label: "Mala grupa" },
              ]}
            />
            <TssSelect
              label="Željeno vrijeme"
              id="tss-time"
              name="time"
              placeholder="Odaberi..."
              value={time}
              onChange={setTime}
              options={[
                { value: "morning", label: "Prijepodne" },
                { value: "afternoon", label: "Poslijepodne" },
                { value: "flexible", label: "Fleksibilno" },
              ]}
            />
          </div>

          {/* Full width: experience */}
          <TssSelect
            label="Iskustvo s pilatesom"
            id="tss-experience"
            name="experience"
            placeholder="Odaberi..."
            value={experience}
            onChange={setExperience}
            options={[
              { value: "beginner", label: "Početnica sam" },
              { value: "some", label: "Imam malo iskustva" },
              { value: "advanced", label: "Vježbam redovito" },
            ]}
          />

          {/* Full width: notes */}
          <div className="tss-field">
            <label className="tss-label" htmlFor="tss-message">
              Dodatne napomene
            </label>
            <textarea
              className="tss-input tss-input--textarea"
              id="tss-message"
              name="message"
              rows={2}
              placeholder="Ciljevi, eventualne ozljede, željeni dani..."
            />
          </div>

          <button type="submit" className="tss-submit">
            Pošalji upit za termin
          </button>
          <p className="tss-microcopy">Bez obveze. Bez članarine. Samo dogovor.</p>
        </form>
      </motion.div>

      {formStatus && (
        <div className={`tss-toast tss-toast--${formStatus.type}`}>
          {formStatus.message}
        </div>
      )}
    </section>
  );
}

export default TrainingSignupSection;
